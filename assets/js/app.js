/* ==========================================================================
   INVEST/PATH — application logic
   Vanilla JS. No dependencies. Progress stored in localStorage.
   ========================================================================== */
(() => {
  "use strict";

  /* ----------------------------- utilities ----------------------------- */
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  const esc = (v) =>
    String(v).replace(/[&<>"']/g, (c) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }[c]));

  const norm = (s) =>
    String(s)
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/đ/g, "d")
      .replace(/Đ/g, "D")
      .toLowerCase()
      .trim();

  const fmt = (n, digits = 0) =>
    new Intl.NumberFormat("vi-VN", { maximumFractionDigits: digits }).format(
      Number.isFinite(n) ? n : 0
    );

  const money = (n) => `${fmt(Math.round(n), 0)} đ`;
  const pct = (n, digits = 1) => `${fmt(n, digits)}%`;
  const signedR = (n) => `${n >= 0 ? "+" : ""}${fmt(n, 2)}R`;

  const num = (id) => {
    const el = document.getElementById(id);
    if (!el) return 0;
    const v = parseFloat(String(el.value).replace(",", "."));
    return Number.isFinite(v) ? v : 0;
  };

  const SITE = window.SITE_CONFIG || {};
  const BOOKS_ENABLED = SITE.booksEnabled !== false;
  const BOOKS_BASE = SITE.booksBase || "some-investment-books/";
  const bookHref = (file) => (BOOKS_ENABLED ? `${BOOKS_BASE}${encodeURIComponent(file)}` : null);

  const TIER_ORDER = { core: 0, support: 1, reference: 2, skip: 3 };
  const TIER_LABEL = { core: "CORE", support: "SUPPORT", reference: "REFERENCE", skip: "SKIP" };
  const TIER_CLASS = { core: "tag-gold", support: "tag-blue", reference: "", skip: "tag-red" };

  /* ------------------------- resolve book files ------------------------- */
  function resolveBook(book) {
    const needle = norm(book.match);
    const candidates = FULL_INDEX.filter((x) => norm(x.t).includes(needle));
    if (!candidates.length) return null;
    candidates.sort((a, b) => {
      const fa = a.f === "pdf" ? 0 : 1;
      const fb = b.f === "pdf" ? 0 : 1;
      if (fa !== fb) return fa - fb;
      return (parseInt(b.y, 10) || 0) - (parseInt(a.y, 10) || 0);
    });
    return candidates[0];
  }

  const BOOK_BY_ID = new Map();
  CURATED.forEach((b) => {
    const found = resolveBook(b);
    BOOK_BY_ID.set(b.id, {
      ...b,
      file: found ? found.p : null,
      fileTitle: found ? found.t : null,
      fileFormat: found ? found.f : null
    });
  });

  const openLink = (book) => {
    if (!BOOKS_ENABLED) return `<span class="pb-open disabled" title="Thư viện sách chỉ có ở bản local">LOCAL</span>`;
    if (!book || !book.file) return `<span class="pb-open disabled">—</span>`;
    return `<a class="pb-open" href="${bookHref(book.file)}" target="_blank" rel="noopener">${book.fileFormat === "pdf" ? "PDF" : "EPUB"} ↗</a>`;
  };

  /* ------------------------------- state ------------------------------- */
  const STORE_KEY = "investpath.v1";
  let state = { read: {}, tasks: {}, weeks: {} };
  try {
    const raw = localStorage.getItem(STORE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      state = {
        read: parsed.read && typeof parsed.read === "object" ? parsed.read : {},
        tasks: parsed.tasks && typeof parsed.tasks === "object" ? parsed.tasks : {},
        weeks: parsed.weeks && typeof parsed.weeks === "object" ? parsed.weeks : {}
      };
    }
  } catch (_) {
    /* localStorage unavailable — progress simply won't persist */
  }

  function saveState() {
    try {
      localStorage.setItem(STORE_KEY, JSON.stringify(state));
    } catch (_) {}
  }

  /* ------------------------------ roadmap ------------------------------ */
  function renderPhase(p) {
    const books = p.books.map((id) => BOOK_BY_ID.get(id)).filter(Boolean);
    const done = p.tasks.filter((_, i) => !!state.tasks[`${p.id}:${i}`]).length;
    const tracks = p.track.join(" ");
    const trackLabel = p.track.map((t) => (t === "invest" ? "INVEST" : t === "trade" ? "TRADE" : "MACRO")).join(" · ");

    const bookRows = books
      .map((b) => {
        const author = b.author ? `<small>${esc(b.author)}</small>` : "";
        return `<div class="phase-book">
          <span class="pb-dot ${b.tier}"></span>
          <span class="pb-title">${esc(b.title)}${author}</span>
          <span class="pb-hours">${esc(b.hours)}</span>
          ${openLink(b)}
        </div>`;
      })
      .join("");

    const tasks = p.tasks
      .map((t, i) => {
        const key = `${p.id}:${i}`;
        return `<label class="task"><input type="checkbox" data-task="${key}" ${state.tasks[key] ? "checked" : ""}><span>${esc(t)}</span></label>`;
      })
      .join("");

    return `<article class="phase" id="${p.id}" data-track="${esc(tracks)}">
      <div class="phase-rail">
        <span class="phase-num">${String(p.n).padStart(2, "0")}</span>
        <span class="phase-line"></span>
      </div>
      <div class="phase-main">
        <div class="phase-top">
          <div class="phase-title">
            <h3>${esc(p.title)}</h3>
            <p class="phase-sub">${esc(p.sub)}</p>
            <div class="phase-chips">
              <span class="tag">${esc(p.weeks)}</span>
              <span class="tag">${esc(p.hours)}</span>
              <span class="tag tag-blue">${esc(trackLabel)}</span>
            </div>
          </div>
          <div class="phase-state">
            <span class="phase-progress" data-phase-progress="${p.id}">${done}/${p.tasks.length}</span>
            <span class="phase-bar"><i data-phase-bar="${p.id}" style="width:${(done / p.tasks.length) * 100}%"></i></span>
          </div>
        </div>
        <p class="phase-goal"><b>Mục tiêu.</b> ${esc(p.goal)}</p>
        <div class="concept-chips">${p.concepts.map((c) => `<span class="concept">${esc(c)}</span>`).join("")}</div>
        <div class="phase-books">${bookRows}</div>
        <div class="phase-tasks">${tasks}</div>
        <div class="phase-foot">
          <div class="deliverable"><b>DELIVERABLE</b>${esc(p.deliverable)}</div>
          <div class="checkpoint"><b>CHECKPOINT</b>${esc(p.checkpoint)}</div>
        </div>
        ${p.warning ? `<p class="phase-warning">⚠ ${esc(p.warning)}</p>` : ""}
      </div>
    </article>`;
  }

  function renderRoadmap() {
    $("#phaseList").innerHTML = PHASES.map(renderPhase).join("");
  }

  function updatePhaseProgress() {
    PHASES.forEach((p) => {
      const done = p.tasks.filter((_, i) => !!state.tasks[`${p.id}:${i}`]).length;
      const label = $(`[data-phase-progress="${p.id}"]`);
      const bar = $(`[data-phase-bar="${p.id}"]`);
      if (label) label.textContent = `${done}/${p.tasks.length}`;
      if (bar) bar.style.width = `${(done / p.tasks.length) * 100}%`;
      const card = document.getElementById(p.id);
      if (card) card.classList.toggle("phase-done", done === p.tasks.length);
    });
  }

  /* ------------------------------ library ------------------------------ */
  let libFilter = { q: "", tier: "all", track: "all" };

  function bookSearchText(b) {
    return norm([b.title, b.author, b.year, b.why, b.key, b.hours, "phase " + b.phase].join(" "));
  }

  function bookCard(b) {
    const read = !!state.read[b.id];
    const link = BOOKS_ENABLED && b.file
      ? `<a class="book-link" href="${bookHref(b.file)}" target="_blank" rel="noopener">MỞ ${b.fileFormat === "pdf" ? "PDF" : "EPUB"} ↗</a>`
      : `<span class="book-link disabled">${BOOKS_ENABLED ? "KHÔNG CÓ FILE" : "LOCAL ONLY"}</span>`;
    return `<article class="book-card ${read ? "is-read" : ""}" data-id="${esc(b.id)}" data-search="${esc(bookSearchText(b))}">
      <div class="book-top">
        <span class="tag ${TIER_CLASS[b.tier]}">${TIER_LABEL[b.tier]}</span>
        <span class="tag">P${b.phase}</span>
        <span class="tag">${b.track.toUpperCase()}</span>
      </div>
      <h3 class="book-title">${esc(b.title)}</h3>
      <div class="book-meta">${esc(b.author || "—")} · ${esc(b.year)} · ${esc(b.hours)}</div>
      <p class="book-why">${esc(b.why)}</p>
      <p class="book-key">→ ${esc(b.key)}</p>
      <div class="book-foot">
        <label class="read-toggle"><input type="checkbox" data-read="${esc(b.id)}" ${read ? "checked" : ""}> Đã đọc</label>
        ${link}
      </div>
    </article>`;
  }

  function skipCard(s) {
    return `<article class="book-card skip-card" data-search="${esc(norm([s.title, s.reason, s.verdict, s.year].join(" ")))}">
      <div class="book-top">
        <span class="tag tag-red">SKIP</span>
        <span class="tag">${esc(s.phase || "—")}</span>
        <span class="tag">${esc(s.verdict)}</span>
      </div>
      <h3 class="book-title">${esc(s.title)}</h3>
      <div class="book-meta">${esc(s.year)}</div>
      <p class="book-why">${esc(s.reason)}</p>
      <div class="book-foot"><span class="book-link disabled">KHÔNG ƯU TIÊN</span></div>
    </article>`;
  }

  function renderLibrary() {
    const q = norm(libFilter.q);
    let cards = [];

    if (libFilter.tier === "skip") {
      cards = SKIP.filter((s) => !q || norm([s.title, s.reason, s.verdict, s.year].join(" ")).includes(q)).map(skipCard);
    } else {
      cards = CURATED.filter((b) => {
        if (libFilter.tier !== "all" && b.tier !== libFilter.tier) return false;
        if (libFilter.track !== "all" && b.track !== libFilter.track) return false;
        if (q && !norm([b.title, b.author, b.why, b.key, b.hours].join(" ")).includes(q)) return false;
        return true;
      })
        .sort((a, b) => {
          const t = TIER_ORDER[a.tier] - TIER_ORDER[b.tier];
          if (t !== 0) return t;
          if (a.phase !== b.phase) return a.phase - b.phase;
          return a.title.localeCompare(b.title);
        })
        .map((b) => {
          const full = BOOK_BY_ID.get(b.id) || b;
          return bookCard(full);
        });
    }

    $("#bookGrid").innerHTML = cards.join("");
    $("#bookEmpty").hidden = cards.length > 0;
  }

  function renderLibStats() {
    const core = CURATED.filter((b) => b.tier === "core").length;
    const support = CURATED.filter((b) => b.tier === "support").length;
    const ref = CURATED.filter((b) => b.tier === "reference").length;
    $("#libStats").innerHTML = `
      <div><strong>${core}</strong><span>CORE</span></div>
      <div><strong>${support}</strong><span>SUPPORT</span></div>
      <div><strong>${ref}</strong><span>REFERENCE</span></div>
      <div><strong>${SKIP.length}</strong><span>SKIP</span></div>`;
  }

  function renderBooksNote() {
    const note = $("#deployNote");
    if (note) note.hidden = BOOKS_ENABLED;
  }

  function renderSkipGrid() {
    $("#skipGrid").innerHTML = SKIP.map(
      (s) => `<div class="skip-item">
        <span class="tag tag-red">${esc(s.verdict)}</span>
        <h4>${esc(s.title)}</h4>
        <p>${esc(s.reason)}</p>
      </div>`
    ).join("");
  }

  /* ------------------------------ catalog ------------------------------ */
  function renderCatalog() {
    $("#catalogBody").innerHTML = FULL_INDEX.map((b, i) => {
      const href = bookHref(b.p);
      const action = href
        ? `<a class="open-link" href="${href}" target="_blank" rel="noopener">MỞ ↗</a>`
        : `<span class="open-link disabled" title="Thư viện sách chỉ có ở bản local">LOCAL</span>`;
      return `<tr data-search="${esc(norm([b.t, b.y, b.f].join(" ")))}">
        <td class="num">${String(i + 1).padStart(3, "0")}</td>
        <td class="title-cell">${esc(b.t)}</td>
        <td class="num">${esc(b.y)}</td>
        <td><span class="fmt-badge">${esc(b.f)}</span></td>
        <td>${action}</td>
      </tr>`;
    }).join("");
    filterCatalog("");
  }

  function filterCatalog(q) {
    const needle = norm(q);
    let visible = 0;
    $$("#catalogBody tr").forEach((tr) => {
      const show = !needle || tr.dataset.search.includes(needle);
      tr.hidden = !show;
      if (show) visible++;
    });
    const count = $("#catalogCount");
    if (count) count.textContent = `${visible} / ${FULL_INDEX.length} đầu sách`;
  }

  /* ------------------------------- macro ------------------------------- */
  function renderMacro() {
    const t = MACRO.ticker;
    const tickMap = {
      tickFed: t.fed,
      tickCpi: t.cpi,
      tick10y: t.tenY,
      tickSp: t.sp,
      tickCape: t.cape,
      tickGold: t.gold,
      tickVn: t.vn
    };
    Object.entries(tickMap).forEach(([id, value]) => {
      const el = document.getElementById(id);
      if (el) el.textContent = value;
    });

    $("#macroMetrics").innerHTML = MACRO.metrics
      .map(
        (m) => `<div class="metric">
          <span class="m-label">${esc(m.label)}</span>
          <b class="m-value ${esc(m.tone || "")}">${esc(m.value)}</b>
          <span class="m-note">${esc(m.note)}</span>
          <span class="m-src"><a href="${esc(m.source.url)}" target="_blank" rel="noopener">${esc(m.source.label)} ↗</a></span>
        </div>`
      )
      .join("");

    $("#macroForces").innerHTML = MACRO.forces
      .map(
        (f) => `<article class="force">
          <div class="force-head"><span class="force-num">${esc(f.n)}</span><h4>${esc(f.title)}</h4></div>
          <p>${esc(f.body)}</p>
          <div class="watch"><b>WATCH</b><br>${esc(f.watch.replace(/^Theo dõi:\s*/i, ""))}</div>
        </article>`
      )
      .join("");

    $("#scenarioGrid").innerHTML = MACRO.scenarios
      .map(
        (s) => `<article class="scenario ${esc(s.kind)}">
          <span class="sc-kind">${esc(s.label)}</span>
          <h4>${esc(s.title)}</h4>
          <p>${esc(s.body)}</p>
          <div class="sc-trigger"><b>TRIGGER</b>${esc(s.trigger)}</div>
        </article>`
      )
      .join("");

    $("#vnMetrics").innerHTML = MACRO.vnMetrics
      .map(
        (m) => `<div class="vn-metric"><span>${esc(m.label)}</span><b>${esc(m.value)}</b><small>${esc(m.note)}</small></div>`
      )
      .join("");

    $("#sourcesList").innerHTML = MACRO.sources
      .map(
        (s) => `<li><a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.label)}</a><span class="src-date">${esc(s.date)}</span></li>`
      )
      .join("");
  }

  /* ------------------------------ playbook ----------------------------- */
  function playbookCopyText(p) {
    return [
      p.title.toUpperCase(),
      p.purpose,
      "",
      ...p.fields.map((f) => `[${f.label}]\n${f.text}`),
      "",
      "Kill criteria / review: ________________________________________"
    ].join("\n");
  }

  function renderPlaybook() {
    $("#playbookGrid").innerHTML = PLAYBOOK.map(
      (p) => `<article class="panel play-card">
        <div class="panel-head">
          <span class="kicker">${esc(p.kicker)}</span>
          <h3>${esc(p.title)}</h3>
          <p class="play-purpose">${esc(p.purpose)}</p>
        </div>
        <ul class="play-fields">
          ${p.fields.map((f) => `<li><b>${esc(f.label)}</b><span>${esc(f.text)}</span></li>`).join("")}
        </ul>
        <div class="play-example"><b>${esc(p.exampleTitle)}</b>${esc(p.example)}</div>
        <div class="play-foot"><button class="btn btn-ghost btn-sm" type="button" data-copy="${esc(p.id)}">${esc(p.copyLabel)}</button></div>
      </article>`
    ).join("");

    $("#backtestSteps").innerHTML = BACKTEST_STEPS.map(
      (s) => `<li><strong>${esc(s.title)}</strong><p>${esc(s.body)}</p></li>`
    ).join("");
  }

  /* ------------------------------ glossary ----------------------------- */
  let glossFilter = { q: "", cat: "all" };

  function renderGlossaryCats() {
    const cats = ["all", ...Array.from(new Set(GLOSSARY.map((g) => g.cat)))];
    $("#glossaryCats").innerHTML = cats
      .map((c) => `<button class="chip ${c === "all" ? "active" : ""}" data-cat="${esc(c)}">${c === "all" ? "Tất cả" : esc(c)}</button>`)
      .join("");
  }

  function renderGlossary() {
    const q = norm(glossFilter.q);
    const list = GLOSSARY.filter((g) => {
      if (glossFilter.cat !== "all" && g.cat !== glossFilter.cat) return false;
      if (q && !norm(`${g.t} ${g.vi}`).includes(q)) return false;
      return true;
    });
    $("#glossaryGrid").innerHTML = list
      .map(
        (g) => `<div class="term-card">
          <div class="term-en">${esc(g.t)}<span class="term-cat">${esc(g.cat)}</span></div>
          <p class="term-vi">${esc(g.vi)}</p>
        </div>`
      )
      .join("");
    $("#glossaryEmpty").hidden = list.length > 0;
    $("#glossaryCount").textContent = `${list.length} / ${GLOSSARY.length} thuật ngữ`;
  }

  /* -------------------------------- plan ------------------------------- */
  function renderPlan() {
    $("#planBody").innerHTML = WEEKS.map(
      (w) => `<tr data-week-row="${w.w}" class="${state.weeks[w.w] ? "is-done" : ""}">
        <td class="plan-check"><input type="checkbox" data-week="${w.w}" ${state.weeks[w.w] ? "checked" : ""} aria-label="Tuần ${w.w} hoàn thành"></td>
        <td class="plan-week">W${String(w.w).padStart(2, "0")}</td>
        <td class="plan-phase">${esc(w.phase)}</td>
        <td class="plan-focus">${esc(w.focus)}</td>
        <td class="plan-hours">${esc(w.hours)}</td>
        <td class="plan-deliverable">${esc(w.deliverable)}</td>
      </tr>`
    ).join("");

    const totalHours = WEEKS.reduce((sum, w) => sum + (parseFloat(w.hours) || 0), 0);
    $("#planSummary").innerHTML = `
      <div><strong>12</strong><span>TUẦN</span></div>
      <div><strong>~${totalHours}h</strong><span>TỔNG GIỜ</span></div>
      <div><strong>12</strong><span>DELIVERABLE</span></div>`;
  }

  /* -------------------------------- quiz ------------------------------- */
  function renderQuiz() {
    $("#quizForm").innerHTML = QUIZ.map(
      (q, i) => `<div class="quiz-q" data-q="${i}">
        <span class="q-num">Q${String(i + 1).padStart(2, "0")}</span>
        <h4>${esc(q.q)}</h4>
        <div class="q-options">
          ${q.options
            .map(
              (o, j) => `<label class="q-option"><input type="radio" name="quiz-${i}" value="${j}"><span>${esc(o)}</span></label>`
            )
            .join("")}
        </div>
        <div class="q-explain"><b>Giải thích.</b> ${esc(q.explain)}</div>
      </div>`
    ).join("");
    $("#quizScore").textContent = "Chưa chấm";
    $("#quizScore").className = "quiz-score";
  }

  function gradeQuiz() {
    let score = 0;
    QUIZ.forEach((q, i) => {
      const card = $(`.quiz-q[data-q="${i}"]`);
      if (!card) return;
      const options = $$(".q-option", card);
      const selected = $('input[type="radio"]:checked', card);
      const picked = selected ? parseInt(selected.value, 10) : -1;
      if (picked === q.answer) score++;
      options.forEach((opt, j) => {
        opt.classList.remove("correct", "wrong");
        if (j === q.answer) opt.classList.add("correct");
        if (j === picked && picked !== q.answer) opt.classList.add("wrong");
      });
      card.classList.add("graded");
    });
    const total = QUIZ.length;
    const pctScore = Math.round((score / total) * 100);
    const el = $("#quizScore");
    el.textContent = `${score}/${total} · ${pctScore}%`;
    el.className = "quiz-score " + (pctScore >= 75 ? "good" : "bad");
  }

  function resetQuiz() {
    $$('input[type="radio"]', $("#quizForm")).forEach((r) => (r.checked = false));
    $$(".quiz-q").forEach((c) => c.classList.remove("graded"));
    $$(".q-option").forEach((o) => o.classList.remove("correct", "wrong"));
    $("#quizScore").textContent = "Chưa chấm";
    $("#quizScore").className = "quiz-score";
  }

  /* ------------------------------ progress ----------------------------- */
  const TASK_KEYS = PHASES.flatMap((p) => p.tasks.map((_, i) => `${p.id}:${i}`));

  function totalItems() {
    return TASK_KEYS.length + CURATED.length + WEEKS.length;
  }

  function doneItems() {
    const tasks = TASK_KEYS.filter((k) => state.tasks[k]).length;
    const books = CURATED.filter((b) => state.read[b.id]).length;
    const weeks = WEEKS.filter((w) => state.weeks[w.w]).length;
    return tasks + books + weeks;
  }

  function updateProgress() {
    const total = totalItems();
    const done = doneItems();
    const p = total ? Math.round((done / total) * 100) : 0;
    const C = 2 * Math.PI * 27;

    const ring = $("#ringProgress");
    if (ring) {
      ring.style.strokeDasharray = `${C}`;
      ring.style.strokeDashoffset = `${C * (1 - p / 100)}`;
    }
    $("#progressPct").textContent = `${p}%`;
    $("#progressCount").textContent = `${done}/${total} mục`;
    const mobile = $("#mobileProgress");
    if (mobile) mobile.textContent = `${p}%`;

    // next action
    let next = null;
    for (const phase of PHASES) {
      const idx = phase.tasks.findIndex((_, i) => !state.tasks[`${phase.id}:${i}`]);
      if (idx !== -1) {
        next = `${phase.code} · ${phase.tasks[idx]}`;
        break;
      }
    }
    if (!next) {
      const unread = CURATED.filter((b) => !state.read[b.id]).sort((a, b) => TIER_ORDER[a.tier] - TIER_ORDER[b.tier]);
      if (unread.length) next = `Đọc: ${unread[0].title}`;
    }
    if (!next) {
      const w = WEEKS.find((x) => !state.weeks[x.w]);
      if (w) next = `Tuần ${w.w} · ${w.deliverable}`;
    }
    const nextEl = $("#nextAction");
    if (nextEl) {
      nextEl.textContent = next ? `Tiếp theo: ${next}` : "Hoàn thành toàn bộ lộ trình. Chuyển sang thực chiến với size nhỏ.";
    }

    updatePhaseProgress();
  }

  /* ------------------------------ tools -------------------------------- */
  function calcSize() {
    const out = $("#psOut");
    if (!out) return;
    const account = num("psAccount");
    const riskPct = num("psRisk");
    const entry = num("psEntry");
    const stop = num("psStop");
    const lot = Math.max(1, Math.round(num("psLot") || 1));

    if (account <= 0 || entry <= 0 || stop <= 0 || entry === stop) {
      out.innerHTML = `<div class="tool-verdict bad">Nhập account, entry và stop hợp lệ (entry ≠ stop).</div>`;
      return;
    }

    const riskAmount = (account * riskPct) / 100;
    const perUnit = Math.abs(entry - stop);
    const rawUnits = riskAmount / perUnit;
    const units = Math.floor(rawUnits / lot) * lot;
    const positionValue = units * entry;
    const pctAccount = (positionValue / account) * 100;
    const lots = lot > 1 ? `${fmt(units / lot, 0)} lot` : "—";

    let verdict = "";
    let verdictClass = "ok";
    if (riskPct > 2) {
      verdict = "Risk trên 2% mỗi trade là quá cao cho hầu hết tài khoản. Giảm xuống 0.5–1%.";
      verdictClass = "bad";
    } else if (positionValue > account) {
      verdict = "Giá trị vị thế vượt 100% tài khoản — cần margin. Nếu dùng margin, phải có buffer và kịch bản margin call.";
      verdictClass = "bad";
    } else if (units <= 0) {
      verdict = "Risk budget quá nhỏ so với lot size. Lot size đang làm tròn xuống 0 đơn vị.";
      verdictClass = "bad";
    } else {
      verdict = `Nếu stop bị chạm, bạn mất ${money(riskAmount)} (${pct(riskPct, 2)} tài khoản). Vị thế chiếm ${pct(pctAccount, 1)} tài khoản.`;
    }

    out.innerHTML = `
      <div class="res"><span>Risk amount</span><b class="red">${money(riskAmount)}</b></div>
      <div class="res"><span>Units</span><b>${fmt(units, 0)}</b><small>${lots}</small></div>
      <div class="res"><span>Position value</span><b>${money(positionValue)}</b></div>
      <div class="res"><span>% account</span><b class="${pctAccount > 100 ? "red" : ""}">${pct(pctAccount, 1)}</b></div>
      <div class="res"><span>R / unit</span><b>${money(perUnit)}</b></div>
      <div class="tool-verdict ${verdictClass}">${verdict}</div>`;
  }

  function calcExpectancy() {
    const out = $("#exOut");
    if (!out) return;
    const w = num("exWin") / 100;
    const avgWin = num("exWinR");
    const avgLoss = num("exLossR");

    if (w < 0 || w > 1 || avgWin <= 0 || avgLoss <= 0) {
      out.innerHTML = `<div class="tool-verdict bad">Win rate phải từ 0–100%; avg win/loss phải > 0.</div>`;
      return;
    }

    const exp = w * avgWin - (1 - w) * avgLoss;
    const payoff = avgWin / avgLoss;
    const breakeven = (1 / (1 + payoff)) * 100;
    const grossWin = w * avgWin;
    const grossLoss = (1 - w) * avgLoss;
    const pf = grossLoss > 0 ? grossWin / grossLoss : Infinity;

    let verdict;
    let verdictClass;
    if (exp > 0.05) {
      verdict = `Với 100 lệnh, kỳ vọng ${signedR(exp * 100)}. Win rate hiện tại ${pct(w * 100, 1)} cao hơn breakeven ${pct(breakeven, 1)}.`;
      verdictClass = "ok";
    } else if (exp > -0.05) {
      verdict = `Expectancy gần 0. Sau phí và slippage, hệ thống này có thể âm. Cần tăng payoff hoặc win rate.`;
      verdictClass = "bad";
    } else {
      verdict = `Expectancy âm. Win rate cần trên ${pct(breakeven, 1)} (với payoff ${fmt(payoff, 2)}) hoặc payoff cần cao hơn để hoà vốn.`;
      verdictClass = "bad";
    }

    out.innerHTML = `
      <div class="res"><span>Expectancy</span><b class="${exp > 0 ? "green" : "red"}">${signedR(exp)}</b></div>
      <div class="res"><span>Breakeven WR</span><b>${pct(breakeven, 1)}</b></div>
      <div class="res"><span>Payoff</span><b>${fmt(payoff, 2)}</b></div>
      <div class="res"><span>Profit factor</span><b>${pf === Infinity ? "∞" : fmt(pf, 2)}</b></div>
      <div class="res"><span>Per 100 trades</span><b>${signedR(exp * 100)}</b></div>
      <div class="tool-verdict ${verdictClass}">${verdict}</div>`;
  }

  function calcCompounding() {
    const out = $("#coOut");
    if (!out) return;
    const initial = num("coInitial");
    const monthly = num("coMonthly");
    const rate = num("coRate") / 100;
    const years = Math.floor(num("coYears"));
    const infl = num("coInfl") / 100;

    if (initial < 0 || monthly < 0 || years <= 0 || years > 60 || rate <= -1) {
      out.innerHTML = `<div class="tool-verdict bad">Số năm phải từ 1–60; vốn và góp hàng tháng không âm.</div>`;
      return;
    }

    const monthlyRate = Math.pow(1 + rate, 1 / 12) - 1;
    let fv = initial;
    for (let i = 0; i < years * 12; i++) {
      fv = fv * (1 + monthlyRate) + monthly;
    }
    const invested = initial + monthly * 12 * years;
    const gain = fv - invested;
    const real = fv / Math.pow(1 + infl, years);
    const multiple = invested > 0 ? fv / invested : 0;

    out.innerHTML = `
      <div class="res"><span>Nominal FV</span><b>${money(fv)}</b></div>
      <div class="res"><span>Real FV</span><b class="green">${money(real)}</b></div>
      <div class="res"><span>Đã góp</span><b>${money(invested)}</b></div>
      <div class="res"><span>Lợi nhuận</span><b class="${gain >= 0 ? "green" : "red"}">${money(gain)}</b></div>
      <div class="res"><span>Multiple</span><b>${fmt(multiple, 2)}x</b></div>
      <div class="tool-verdict">Giả định return danh nghĩa ${pct(rate * 100, 1)}/năm, lạm phát ${pct(infl * 100, 1)}/năm. Real FV là sức mua tương đương hôm nay; nó thấp hơn đáng kể so với con số nominal.</div>`;
  }

  function calcDrawdown() {
    const out = $("#ddOut");
    if (!out) return;
    const loss = num("ddLoss");
    if (loss <= 0 || loss >= 100) {
      out.innerHTML = `<div class="tool-verdict bad">Nhập drawdown từ 1–99%.</div>`;
      return;
    }
    const remain = 100 - loss;
    const required = (loss / remain) * 100;
    const rows = [10, 20, 30, 40, 50, 60, 70, 80, 90]
      .map((l) => `<tr><td class="num">−${l}%</td><td class="num">+${fmt((l / (100 - l)) * 100, 1)}%</td></tr>`)
      .join("");

    out.innerHTML = `
      <div class="res"><span>Còn lại</span><b>${pct(remain, 0)}</b></div>
      <div class="res"><span>Cần lãi để hoà</span><b class="red">+${pct(required, 1)}</b></div>
      <div class="tool-verdict bad">Mất ${pct(loss, 0)} không cần lãi ${pct(loss, 0)} để hoà — mà cần ${pct(required, 1)}. Đây là lý do toán học của capital preservation.</div>
      <table class="dd-table"><thead><tr><th>Drawdown</th><th>Cần hồi</th></tr></thead><tbody>${rows}</tbody></table>`;
  }

  function calcKelly() {
    const out = $("#kellyOut");
    if (!out) return;
    const w = num("kellyWin") / 100;
    const R = num("kellyPayoff");
    if (w < 0 || w > 1 || R <= 0) {
      out.innerHTML = `<div class="res"><span>Lỗi</span><b class="red">—</b></div>`;
      return;
    }
    const f = w - (1 - w) / R;
    if (f <= 0) {
      out.innerHTML = `<div class="res"><span>Full Kelly</span><b class="red">0%</b><small>Không có edge</small></div>
        <div class="res"><span>Half Kelly</span><b>0%</b></div>
        <div class="res"><span>Quarter</span><b>0%</b></div>`;
      return;
    }
    const full = f * 100;
    out.innerHTML = `
      <div class="res"><span>Full Kelly</span><b class="${full > 25 ? "red" : ""}">${pct(full, 1)}</b><small>lý thuyết</small></div>
      <div class="res"><span>Half Kelly</span><b>${pct(full / 2, 1)}</b><small>thực tế hơn</small></div>
      <div class="res"><span>Quarter</span><b>${pct(full / 4, 1)}</b><small>thận trọng</small></div>`;
  }

  function initTools() {
    calcSize();
    calcExpectancy();
    calcCompounding();
    calcDrawdown();
    calcKelly();
  }

  /* ---------------------------- diagnostic ----------------------------- */
  function runDiagnostic(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const horizon = data.get("horizon");
    const drawdown = data.get("drawdown");
    const time = data.get("time");

    let invest = 0;
    let trade = 0;
    if (horizon === "long") invest += 2;
    if (horizon === "mid") { invest += 1; trade += 1; }
    if (horizon === "short") trade += 2;
    if (drawdown === "buy") invest += 2;
    if (drawdown === "hold") invest += 1;
    if (time === "low") invest += 1;
    if (time === "mid") { invest += 1; trade += 1; }
    if (time === "high") trade += 2;

    let title;
    let body;
    let path;
    if (invest >= trade + 2) {
      title = "Track: Investor / Core Portfolio";
      body = "Bạn có horizon dài và khả năng chịu drawdown. Hãy đi sâu vào định giá, allocation và macro; chỉ dùng technical analysis để quản lý entry/exit, không để nó thay thế thesis. Đừng dành quá nhiều thời gian cho intraday.";
      path = "P0 → P1 → P2 → P5 → P4 → P6";
    } else if (trade >= invest + 2) {
      title = "Track: Trader / System Builder";
      body = "Bạn bị hấp dẫn bởi timing và có thời gian theo dõi. Nhưng đừng bỏ qua P1 và P4: một trader không hiểu risk và không có system spec sẽ thua nhanh hơn investor. Hãy chọn 1–2 thị trường, 3 setup, và bắt đầu bằng paper trading.";
      path = "P0 → P3 → P4 → P1 → P5 → P6";
    } else {
      title = "Track: Hybrid / Investor–Trader";
      body = "Bạn phù hợp với mô hình core–satellite: phần lớn vốn trong portfolio dài hạn, một phần nhỏ cho trading có hệ thống. Đây là track khó nhất vì dễ tự lừa mình rằng trading là investing. Tách hai sổ, hai risk budget, hai journal.";
      path = "P0 → P1 → P2 → P3 → P4 → P5 → P6";
    }

    if (time === "low") {
      body += " Với dưới 3 giờ/tuần, hãy kéo dài lộ trình thành 20 tuần và bỏ phần reference.";
    }

    const result = $("#diagResult");
    result.hidden = false;
    result.innerHTML = `<h4>${esc(title)}</h4><p>${esc(body)}</p><span class="diag-path">Lộ trình gợi ý: ${esc(path)}</span>`;
    result.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }

  /* ------------------------------ navigation --------------------------- */
  function initNavigation() {
    const sections = $$("main section[id]");
    const navLinks = $$(".nav-link");
    const toTop = $("#toTop");

    let ticking = false;
    function onScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY + 150;
        let current = sections.length ? sections[0].id : "";
        sections.forEach((s) => {
          if (s.offsetTop <= y) current = s.id;
        });
        navLinks.forEach((a) => a.classList.toggle("active", a.dataset.section === current));
        if (toTop) toTop.hidden = window.scrollY < 700;
        ticking = false;
      });
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    const openNav = () => {
      document.body.classList.add("nav-open");
      const btn = $("#sidebarOpen");
      if (btn) btn.setAttribute("aria-expanded", "true");
    };
    const closeNav = () => {
      document.body.classList.remove("nav-open");
      const btn = $("#sidebarOpen");
      if (btn) btn.setAttribute("aria-expanded", "false");
    };

    $("#sidebarOpen")?.addEventListener("click", openNav);
    $("#sidebarClose")?.addEventListener("click", closeNav);
    $("#scrim")?.addEventListener("click", closeNav);
    navLinks.forEach((a) => a.addEventListener("click", closeNav));
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeNav();
    });

    toTop?.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

    $("#printRoadmap")?.addEventListener("click", () => {
      $$("details").forEach((d) => (d.open = true));
      window.print();
    });
    window.addEventListener("beforeprint", () => $$("details").forEach((d) => (d.open = true)));
  }

  function initReveal() {
    const els = $$(".section-head, .panel, .phase");
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.06, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => {
      el.classList.add("reveal");
      io.observe(el);
    });
  }

  /* ------------------------------- events ------------------------------ */
  function bindEvents() {
    // progress checkboxes
    document.addEventListener("change", (e) => {
      const target = e.target;
      if (target.matches("[data-task]")) {
        state.tasks[target.dataset.task] = target.checked;
        saveState();
        updateProgress();
      } else if (target.matches("[data-read]")) {
        state.read[target.dataset.read] = target.checked;
        target.closest(".book-card")?.classList.toggle("is-read", target.checked);
        saveState();
        updateProgress();
      } else if (target.matches("[data-week]")) {
        const w = target.dataset.week;
        state.weeks[w] = target.checked;
        target.closest("tr")?.classList.toggle("is-done", target.checked);
        saveState();
        updateProgress();
      }
    });

    // reset
    $("#resetProgress")?.addEventListener("click", () => {
      if (!window.confirm("Reset toàn bộ tiến độ đã lưu trên trình duyệt này?")) return;
      state = { read: {}, tasks: {}, weeks: {} };
      saveState();
      $$("[data-task], [data-read], [data-week]").forEach((el) => {
        el.checked = false;
      });
      $$(".book-card.is-read").forEach((c) => c.classList.remove("is-read"));
      $$(".phase-done").forEach((c) => c.classList.remove("phase-done"));
      $$(".plan-table tr.is-done").forEach((r) => r.classList.remove("is-done"));
      updateProgress();
    });

    // roadmap track filter
    $("#trackFilter")?.addEventListener("click", (e) => {
      const btn = e.target.closest(".seg");
      if (!btn) return;
      $$("#trackFilter .seg").forEach((b) => b.classList.toggle("active", b === btn));
      const track = btn.dataset.track;
      $$(".phase").forEach((p) => {
        const tracks = (p.dataset.track || "").split(/\s+/);
        p.classList.toggle("is-hidden", track !== "all" && !tracks.includes(track));
      });
    });

    // library search + filters
    $("#bookSearch")?.addEventListener("input", (e) => {
      libFilter.q = e.target.value;
      renderLibrary();
    });
    $("#tierFilter")?.addEventListener("click", (e) => {
      const btn = e.target.closest(".chip");
      if (!btn) return;
      $$("#tierFilter .chip").forEach((c) => c.classList.toggle("active", c === btn));
      libFilter.tier = btn.dataset.tier;
      renderLibrary();
    });
    $("#trackFilterBooks")?.addEventListener("click", (e) => {
      const btn = e.target.closest(".chip");
      if (!btn) return;
      $$("#trackFilterBooks .chip").forEach((c) => c.classList.toggle("active", c === btn));
      libFilter.track = btn.dataset.track;
      renderLibrary();
    });

    // catalog
    $("#catalogSearch")?.addEventListener("input", (e) => filterCatalog(e.target.value));

    // glossary
    $("#glossarySearch")?.addEventListener("input", (e) => {
      glossFilter.q = e.target.value;
      renderGlossary();
    });
    $("#glossaryCats")?.addEventListener("click", (e) => {
      const btn = e.target.closest(".chip");
      if (!btn) return;
      $$("#glossaryCats .chip").forEach((c) => c.classList.toggle("active", c === btn));
      glossFilter.cat = btn.dataset.cat;
      renderGlossary();
    });

    // tools
    document.addEventListener("input", (e) => {
      if (e.target.closest(".tool-card")) {
        calcSize();
        calcExpectancy();
        calcCompounding();
        calcDrawdown();
      }
      if (e.target.closest(".kelly-panel")) calcKelly();
    });

    // quiz
    $("#quizSubmit")?.addEventListener("click", gradeQuiz);
    $("#quizReset")?.addEventListener("click", resetQuiz);

    // playbook copy
    document.addEventListener("click", async (e) => {
      const btn = e.target.closest("[data-copy]");
      if (!btn) return;
      const p = PLAYBOOK.find((x) => x.id === btn.dataset.copy);
      if (!p) return;
      const text = playbookCopyText(p);
      try {
        await navigator.clipboard.writeText(text);
      } catch (_) {
        const ta = document.createElement("textarea");
        ta.value = text;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        ta.remove();
      }
      const original = btn.textContent;
      btn.textContent = "Đã copy ✓";
      setTimeout(() => (btn.textContent = original), 1600);
    });

    // diagnostic
    $("#diagForm")?.addEventListener("submit", runDiagnostic);
  }

  /* -------------------------------- init ------------------------------- */
  function init() {
    renderRoadmap();
    renderLibStats();
    renderLibrary();
    renderBooksNote();
    renderSkipGrid();
    renderCatalog();
    renderMacro();
    renderPlaybook();
    renderGlossaryCats();
    renderGlossary();
    renderPlan();
    renderQuiz();
    initTools();
    updateProgress();
    initNavigation();
    initReveal();
    bindEvents();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
