# INVEST/PATH — Investment & Trading Curriculum 2026

Một trang học tập duy nhất, được xây từ chính thư viện sách trong repo này: **155 file → 125 đầu sách → 12 cuốn core → một lộ trình 12 tuần**.

Trang trả lời ba câu hỏi:

1. **Đọc gì, theo thứ tự nào, trong bao lâu** — khi bạn không có thời gian đọc hết 125 cuốn.
2. **Bối cảnh kinh tế tháng 10/2026 đang nói gì** — để sách không bị áp dụng một cách máy móc.
3. **Làm gì sau khi đọc** — template thesis, trade plan, risk policy, backtest protocol, calculator và journal.

> Đây là tài liệu học tập, không phải khuyến nghị đầu tư. Dữ liệu macro được chốt ngày **20.10.2026**; tự kiểm chứng trước khi ra quyết định.
>
> **Repo deploy chỉ chứa trang tĩnh (~300 KB).** Thư viện 155 file sách nằm local, không được commit — xem [Deploy lên GitHub Pages](#deploy-lên-github-pages).

---

## Chạy trang

Không cần build, không cần dependency.

```bash
# Cách 1: mở trực tiếp
open index.html          # macOS
xdg-open index.html      # Linux

# Cách 2: serve (khuyến nghị — link PDF/EPUB hoạt động ổn định hơn)
python3 -m http.server 8090 --bind 127.0.0.1
# mở http://127.0.0.1:8090
```

> Link sách chỉ hoạt động khi chạy từ thư mục gốc (bản local). `_site/` là artifact deploy, không kèm sách.
>
> Deploy cần Node 18+ (chỉ dùng built-in modules, không cần `npm install`).

Trang dùng `localStorage` để lưu tiến độ (task, sách đã đọc, tuần đã hoàn thành) trên trình duyệt của bạn. Không có dữ liệu nào được gửi đi đâu.

---

## Deploy lên GitHub Pages

Trang được thiết kế để deploy **chỉ phần giao diện (~300 KB)**. Thư viện sách 3.5 GB không được đưa lên GitHub Pages: vừa vượt giới hạn published site 1 GB, vừa không phù hợp về bản quyền.

### Cách nhanh

1. Tạo repo mới trên GitHub (public là cách đơn giản nhất; Pages cho repo private cần gói trả phí). Để repo trống — không thêm README/.gitignore trên web — để push lần đầu không xung đột.
2. Trong thư mục này:

   ```bash
   git init
   git add .
   git commit -m "Investment curriculum page"
   git branch -M main
   git remote add origin https://github.com/<user>/<repo>.git
   git push -u origin main
   ```

   `.gitignore` đã loại `some-investment-books/` và `_site/`, nên chỉ ~300 KB được push.

3. GitHub → **Settings → Pages → Build and deployment → Source: GitHub Actions**.
4. Vào tab **Actions**, chọn workflow `Deploy to GitHub Pages` và chạy (hoặc push thêm một commit).
5. URL: `https://<user>.github.io/<repo>/`.

Workflow `.github/workflows/deploy.yml` chạy `scripts/build-site.mjs`, tạo `_site/` chỉ gồm `index.html` + `assets/`, rồi upload lên Pages. Không có server, không có database.

### Hai chế độ build

| Mode | Lệnh | Sách | Dùng cho |
|---|---|---|---|
| `pages` (mặc định) | `node scripts/build-site.mjs` | Không copy; UI hiện `LOCAL ONLY` + banner | GitHub Pages |
| `full` | `BOOKS_MODE=full node scripts/build-site.mjs` | Copy 3.5 GB vào `_site/` | Self-host private, không dùng GitHub Pages |

Ở mode `pages`, lộ trình, macro, playbook, calculator, glossary, quiz và progress vẫn hoạt động đầy đủ; chỉ link PDF/EPUB bị vô hiệu hoá.

```bash
# Preview đúng bản sẽ deploy (không có sách)
python3 -m http.server 8091 --directory _site
# mở http://127.0.0.1:8091
```

### Cập nhật hàng ngày

- Sửa `assets/js/data-macro.js` khi có số liệu mới → commit → push; workflow tự deploy lại.
- Nếu thêm sách local: chạy `node scripts/build-catalog.mjs` để cập nhật catalog, nhưng **không commit thư mục sách**.
- Tiến độ lưu trong `localStorage` **theo trình duyệt/thiết bị**. Điện thoại và laptop sẽ có tiến độ riêng; nếu cần sync, phải thêm backend hoặc export/import JSON.

### Nếu đã lỡ push sách

GitHub Pages sẽ không nhận artifact > 1 GB và repo sẽ rất nặng. Cách sạch nhất là tạo repo mới chỉ với các file site ở root (trừ `some-investment-books/`), thay vì cố xoá lịch sử repo sách.

---

## Nội dung

| Phần | Nội dung |
|---|---|
| **Tổng quan** | Vấn đề của thư viện, 4 nguyên tắc học, diagnostic 3 câu chọn track Investor / Trader / Hybrid |
| **Lộ trình 8 phase** | P0 market mechanics → P1 investing foundations → P2 portfolio → P3 price action → P4 risk & system → P5 macro → P6 psychology → P7 specialization. Mỗi phase có mục tiêu, concept chips, sách, 3 task, deliverable, checkpoint và cảnh báo |
| **Thư viện chọn lọc** | 60 cuốn có tier + lý do + key takeaway + link mở file (bản local); 20 cuốn trong danh sách skip kèm lý do; catalog 125 đầu sách tìm kiếm được |
| **Kinh tế 10/2026** | 13 metric có nguồn, 6 lực lượng, regime map, 4 kịch bản với trigger, góc nhìn Việt Nam, 14 nguồn tham chiếu |
| **Playbook** | Investment thesis, trade plan, risk policy, weekly review, backtest protocol 7 bước |
| **Công cụ** | Position sizing, expectancy, compounding (real vs nominal), drawdown recovery, Kelly |
| **Thuật ngữ** | 109 terms, giữ nguyên tiếng Anh, giải thích tiếng Việt, lọc theo nhóm |
| **Lịch 12 tuần** | 12 tuần × 5–6h/tuần, mỗi tuần một deliverable; có nhịp độ thay thế 20 tuần |
| **Kiểm tra** | 12 câu hỏi tình huống, chấm điểm và giải thích |

### Vì sao 12 cuốn core?

Vì 12/60 ≈ 20%, và 12 cuốn đó trải đủ các trục: định giá (Graham, Fisher), allocation (Malkiel, Bogle), price action (Grimes), risk (Tharp, Elder, Douglas, Aronson), macro (Laidi) và tâm lý (Schwager, Lefèvre). Phần còn lại là support/reference để tra cứu khi cần — hoặc skip.

Danh sách skip cũng quan trọng như danh sách đọc: binary options, financial astrology, harmonic trading, các bản trùng lặp và sách marketing.

---

## Chính sách ngôn ngữ

- **Giữ nguyên thuật ngữ tiếng Anh chuyên ngành**: `margin of safety`, `intrinsic value`, `expectancy`, `R-multiple`, `drawdown`, `position sizing`, `CAPE`, `duration`, `credit spread`, `reflexivity`…
- **Giải thích bằng tiếng Việt** khi cần, nhưng không dịch máy móc. Ví dụ: "Margin of safety là khoảng đệm giữa price và intrinsic value" — không dịch thành "biên độ an toàn" rồi bỏ mất khái niệm gốc.
- Tên sách, tên tác giả, tên chỉ báo, tên trường phái được giữ nguyên.

---

## Cập nhật dữ liệu macro

Mọi con số nằm trong `assets/js/data-macro.js`.

1. Sửa `asOf` và `MACRO.ticker` (các giá trị hiển thị ở hero).
2. Sửa `MACRO.metrics`: mỗi metric có `label`, `value`, `tone` (`gold` / `red` / `green` / rỗng), `note`, `source {label, url}`.
3. Sửa `MACRO.forces`, `MACRO.scenarios`, `MACRO.vnMetrics`, `MACRO.sources`.
4. Cập nhật dòng "Dữ liệu chốt" trong `data-macro.js` và footer `index.html` nếu cần.

Giữ nguyên nguyên tắc: **mỗi con số phải có nguồn và ngày**. Không thêm dự báo không có trigger.

---

## Thêm hoặc sửa sách

Sách curated nằm trong `assets/js/data-core.js`:

```js
{
  id: "my-book",
  match: "Distinctive part of the title", // dùng để tìm file trong catalog
  title: "Book Title",
  author: "Author",
  year: "2024",
  tier: "core",           // core | support | reference
  phase: 3,               // 0–7
  track: "trade",         // invest | trade | macro
  hours: "6–8h",
  why: "Vì sao nên đọc, trong 2–3 câu.",
  key: "Một bài học cốt lõi, không phải quote dài."
}
```

Sau đó thêm `id` vào mảng `books` của phase tương ứng trong `PHASES`. Nếu sách không có trong repo, để `match` không khớp — card vẫn hiển thị nhưng không có link file.

**Regenerate catalog** sau khi thêm/xoá file sách:

```bash
node scripts/build-catalog.mjs
```

Script gộp edition/format trùng nhau (ưu tiên PDF, sau đó năm mới nhất) và ghi lại `assets/js/data-library.js`. Curated books dùng `match` theo substring nên không bị ảnh hưởng.

---

## Cấu trúc

```
.
├── index.html                  # toàn bộ section, không framework
├── assets/
│   ├── css/style.css           # design system, responsive, print
│   └── js/
│       ├── site-config.js      # booksEnabled: local true / Pages false
│       ├── data-library.js     # 125 đầu sách (generated)
│       ├── data-core.js        # phases, curated books, skip, weeks, quiz
│       ├── data-macro.js       # snapshot 20.10.2026 + sources
│       ├── data-glossary.js    # 109 terms
│       ├── data-playbook.js    # template + backtest protocol
│       └── app.js              # render, filter, progress, calculators, quiz
├── .github/workflows/deploy.yml # GitHub Pages CI
├── .gitignore                  # loại sách 3.5GB và _site/
├── .nojekyll                   # GitHub Pages: không chạy Jekyll
├── scripts/
│   ├── build-catalog.mjs       # regenerate data-library.js
│   └── build-site.mjs          # tạo _site/ để deploy
├── some-investment-books/      # local only — đã gitignore
└── README.md
```

Trang gốc không cần build, không CDN, không tracking. Chỉ khi deploy mới chạy `scripts/build-site.mjs` để tạo artifact tĩnh.

---

## Ghi chú thiết kế

- **Dark research terminal**: nền than, gold accent, serif cho tiêu đề, mono cho số liệu — cảm giác một research note hơn là một landing page.
- **Một trang, nhiều lớp**: sidebar + scrollspy, filter, search, progress ring, print stylesheet.
- **Progress**: 96 mục = 24 task + 60 sách + 12 tuần. Hoàn thành task của một phase = phase đó hoàn thành.
- **Mobile**: sidebar chuyển thành drawer, top bar hiển thị tiến độ, không có horizontal overflow ở 390–1440px.
- **Không phụ thuộc mạng**: font hệ thống, không ảnh ngoài, không analytics.

---

## Giới hạn và trung thực

- Macro là **snapshot**, không phải live data. Giá và lãi suất thay đổi từng ngày.
- Một số nhận định là **góc nhìn biên tập**, không phải sự thật khách quan. Chúng được gắn với trigger để bạn có thể phản biện.
- Các con số quá khứ trong sách (backtest, return, case study) không đảm bảo cho tương lai.
- Sách trong `some-investment-books/` thuộc bản quyền của tác giả/nhà xuất bản; repo này chỉ lưu trữ và liên kết cục bộ cho mục đích học tập.
- Bản GitHub Pages **không kèm sách**; link PDF/EPUB chỉ hoạt động ở bản local. Progress không sync giữa các thiết bị.

Nếu chỉ có 10 phút: đọc **Tổng quan → Kinh tế 10/2026 → Lịch 12 tuần**, rồi bắt đầu Phase 0.
