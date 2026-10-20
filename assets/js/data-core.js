/* ==========================================================================
   CORE CURRICULUM DATA
   Language policy: English technical terms are kept verbatim; explanations
   are in Vietnamese. Book notes are original summaries, not quotations.
   ========================================================================== */

const META = {
  version: "1.0",
  asOf: "20.10.2026",
  totalFiles: 155,
  uniqueBooks: 125,
  curated: 60,
  core: 12,
  support: 44,
  reference: 4,
  skip: 20
};

/* --------------------------------------------------------------------------
   PHASES
   Each phase has 3 checkable tasks. Completing all three = phase complete.
   -------------------------------------------------------------------------- */
const PHASES = [
  {
    id: "phase-0",
    n: 0,
    code: "P0",
    title: "Orientation & Market Mechanics",
    sub: "Biết mình đang chơi trò gì trước khi đặt lệnh đầu tiên",
    track: ["invest", "trade"],
    weeks: "3–5 ngày",
    hours: "4–6h",
    goal: "Hiểu cấu trúc thị trường, chi phí giao dịch, order types và settlement. Thiết lập broker, nguồn dữ liệu, journal trước khi học bất kỳ chiến lược nào.",
    concepts: ["asset classes", "order book", "bid-ask spread", "slippage", "market/limit/stop", "T+2", "margin", "leverage", "ETF", "NAV", "liquidity"],
    books: ["trading-for-dummies", "fundamental-analysis-dummies", "sensible-guide-forex"],
    tasks: [
      "Viết một trang Market Map: bạn giao dịch asset class nào, trên sàn nào, giờ nào, ai là counterparty.",
      "Lập bảng chi phí thực: commission, spread, slippage, thuế, phí margin, phí dữ liệu.",
      "Mở journal (Notion/Excel/giấy) với 5 cột: thesis, entry, stop, size, review."
    ],
    deliverable: "Market Map 1 trang + fee schedule + journal template.",
    checkpoint: "Khi bạn bấm “Mua 100 cổ phiếu”, chuyện gì xảy ra từ lúc khớp lệnh đến lúc tiền và chứng khoán về tài khoản? Ai chịu rủi ro trong khoảng thời gian đó?",
    warning: "Đừng bắt đầu bằng chỉ báo. Bắt đầu bằng chi phí và cấu trúc — đó là hai thứ luôn lấy tiền của bạn, kể cả khi bạn đúng."
  },
  {
    id: "phase-1",
    n: 1,
    code: "P1",
    title: "Investing Foundations",
    sub: "Định giá doanh nghiệp, không đoán giá cổ phiếu",
    track: ["invest", "trade"],
    weeks: "3 tuần",
    hours: "12–15h",
    goal: "Xây nền tảng value investing: hiểu business, moat, ROIC, owner earnings, intrinsic value và margin of safety. Đây là phase không được phép bỏ qua, kể cả khi bạn chỉ muốn trading.",
    concepts: ["business model", "moat", "ROIC", "owner earnings", "FCF", "discount rate", "intrinsic value", "margin of safety", "Mr. Market", "circle of competence", "earnings quality"],
    books: ["intelligent-investor", "common-stocks", "one-up", "warren-buffett-way", "university-berkshire", "five-rules"],
    tasks: [
      "Đọc Graham ch.8 và ch.20 trước, sau đó ch.12–15; ghi lại 10 câu hỏi kiểm tra một doanh nghiệp.",
      "Viết company memo 1 trang cho một doanh nghiệp bạn hiểu: business, moat, 3 số liệu, valuation, 3 rủi ro, điều kiện để sai.",
      "Lập “circle of competence” list: 3 ngành bạn thực sự hiểu và 3 ngành bạn chỉ tưởng là hiểu."
    ],
    deliverable: "1 company memo + 10 câu hỏi kiểm tra + circle-of-competence list.",
    checkpoint: "Tính owner earnings và ROIC cho một công ty. Giải thích vì sao P/E thấp chưa chắc rẻ, và P/E cao chưa chắc đắt.",
    warning: "The Intelligent Investor không cần đọc hết ngay. Đọc ch.8 (Mr. Market) và ch.20 (margin of safety) trước — hai chương đó chứa 80% giá trị thực dụng."
  },
  {
    id: "phase-2",
    n: 2,
    code: "P2",
    title: "Portfolio Construction & Asset Allocation",
    sub: "Biến stock picking thành một portfolio sống sót qua mọi regime",
    track: ["invest"],
    weeks: "2 tuần",
    hours: "8–10h",
    goal: "Hiểu allocation, diversification, costs, factor premiums và valuation theo chu kỳ. Viết được Investment Policy Statement (IPS) — bản hợp đồng với chính mình.",
    concepts: ["asset allocation", "diversification", "correlation", "rebalancing", "expense ratio", "tracking error", "factor premium", "CAPE", "sequence risk", "base currency", "IPS"],
    books: ["random-walk", "little-book-common-sense", "dual-momentum", "little-book-beats", "irrational-exuberance", "trading-etfs"],
    tasks: [
      "Viết IPS 1 trang: mục tiêu, horizon, target allocation, rebalancing bands, max drawdown chấp nhận, quy tắc góp vốn.",
      "Tính expense ratio và tax drag của portfolio hiện tại; so sánh với một phương án index chi phí thấp.",
      "Chạy một phép thử: portfolio của bạn giảm 30% thì kế hoạch hành động là gì? Viết trước, không quyết định trong hoảng loạn."
    ],
    deliverable: "IPS 1 trang + target allocation + rebalancing rules.",
    checkpoint: "Vì sao 100% cổ phiếu Mỹ không phải là “diversified”? CAPE cao cho bạn biết điều gì — và không cho bạn biết điều gì?",
    warning: "CAPE là công cụ dự báo lợi suất dài hạn, không phải công cụ timing. Nó có thể ở trên 30 trong nhiều năm."
  },
  {
    id: "phase-3",
    n: 3,
    code: "P3",
    title: "Price Action & Technical Analysis",
    sub: "Đọc cấu trúc thị trường, không sưu tầm patterns",
    track: ["trade"],
    weeks: "4 tuần",
    hours: "16–20h",
    goal: "Đọc được market structure, trend/range, support/resistance, volume và tìm entry/stop/invalidation cho một setup. Không cần biết 50 mẫu nến; cần biết 3 setup và điều kiện vô hiệu.",
    concepts: ["market structure", "HH/HL", "support/resistance", "trend vs range", "breakout", "pullback", "failed breakout", "volume confirmation", "ATR", "multi-timeframe", "invalidation"],
    books: ["grimes", "nison", "coulling", "brooks", "pring", "bulkowski"],
    tasks: [
      "Chọn 3 setup duy nhất; viết định nghĩa entry, stop, target, invalidation cho từng setup.",
      "Annotate 50 chart: mỗi chart ghi 3 dòng — structure, volume, điều gì sẽ khiến setup sai.",
      "Backtest thủ công 30 lệnh trên một thị trường, ghi R-multiple cho từng lệnh."
    ],
    deliverable: "50 annotated charts + 1 setup spec + 30-trade manual log.",
    checkpoint: "Nhìn một chart lạ trong 60 giây: bạn xác định được trend/range, mức invalidation và tỷ lệ R:R dự kiến không?",
    warning: "Đừng đọc Al Brooks từ trang đầu đến trang cuối. Sách dày hơn 500 trang và rất chi tiết; dùng nó như reference sau khi đã có framework từ Grimes."
  },
  {
    id: "phase-4",
    n: 4,
    code: "P4",
    title: "Risk, Position Sizing & System Design",
    sub: "Một hệ thống có expectancy dương và sống sót qua drawdown",
    track: ["trade", "invest"],
    weeks: "3 tuần",
    hours: "12–15h",
    goal: "Hiểu toán học của risk: expectancy, R-multiple, position sizing, drawdown, risk of ruin. Thiết kế được một hệ thống có thể backtest và kiểm chứng, thay vì một tập hợp cảm xúc.",
    concepts: ["expectancy", "R-multiple", "win rate", "payoff ratio", "position sizing", "fixed fractional", "Kelly", "max drawdown", "risk of ruin", "Monte Carlo", "overfitting", "walk-forward"],
    books: ["trade-your-way", "new-trading-for-living", "trading-in-the-zone", "aronson", "building-reliable", "chan"],
    tasks: [
      "Viết trading system spec 1 trang: universe, setup, entry, stop, target, sizing, max positions, exit rules.",
      "Backtest 200 trade (hoặc 100 nếu dữ liệu hạn chế); chia in-sample/out-of-sample; chạy Monte Carlo 1.000 đường equity.",
      "Viết risk policy: risk/trade, max daily loss, max monthly drawdown, correlation limit, quy tắc dừng giao dịch."
    ],
    deliverable: "System spec + 200-trade backtest + Monte Carlo + risk policy.",
    checkpoint: "Tính expectancy, breakeven win rate và position size cho một setup. Giải thích vì sao một backtest đẹp có thể chỉ là overfitting.",
    warning: "Nếu bạn không viết được invalidation trước khi vào lệnh, bạn không có hệ thống — bạn đang có một niềm tin."
  },
  {
    id: "phase-5",
    n: 5,
    code: "P5",
    title: "Macro & Intermarket",
    sub: "Hiểu regime đang chi phối mọi asset class",
    track: ["invest", "trade", "macro"],
    weeks: "2 tuần",
    hours: "8–10h",
    goal: "Nối rates, inflation, USD, commodities, credit và liquidity thành một bức tranh. Biết regime hiện tại và những trigger nào sẽ làm nó đổi.",
    concepts: ["growth/inflation", "yield curve", "real yield", "term premium", "USD", "credit spread", "liquidity", "reaction function", "carry trade", "reflexivity", "regime", "risk-on/off"],
    books: ["laidi", "when-genius-failed", "intermarket", "alchemy", "big-short", "extraordinary-delusions"],
    tasks: [
      "Lập regime dashboard 8 chỉ báo: growth, inflation, policy rate, 10Y, real yield, USD, credit spread, liquidity.",
      "Viết scenario map 3 kịch bản với trigger và phản ứng cho từng asset class.",
      "Chọn một sự kiện lịch sử (LTCM, 2008, 2020) và phân tích chuỗi nhân quả từ macro đến price."
    ],
    deliverable: "Regime dashboard + scenario map + 1 case study.",
    checkpoint: "Vì sao 10Y tăng có thể làm cổ phiếu định giá cao giảm dù earnings vẫn tốt? Việt Nam chịu ảnh hưởng qua những kênh nào?",
    warning: "Macro dễ trở thành một trò dự báo vô tận. Mục tiêu không phải đoán đúng, mà là biết mình đang cược vào regime nào và cái gì sẽ chứng minh mình sai."
  },
  {
    id: "phase-6",
    n: 6,
    code: "P6",
    title: "Psychology & Execution",
    sub: "Biến hiểu biết thành hành vi lặp lại được",
    track: ["invest", "trade"],
    weeks: "liên tục",
    hours: "30 phút/ngày",
    goal: "Xây quy trình ra quyết định chống lại thiên kiến: pre-mortem, checklist, journal, review định kỳ. Kỹ năng quan trọng nhất là chịu được drawdown mà không phá luật.",
    concepts: ["process vs outcome", "probabilistic mindset", "loss aversion", "confirmation bias", "recency bias", "anchoring", "overconfidence", "disposition effect", "FOMO", "journaling", "pre-mortem"],
    books: ["market-wizards", "new-market-wizards", "reminiscences", "fooled-by-randomness", "principles", "disciplined-trader"],
    tasks: [
      "Viết pre-mortem cho kế hoạch đầu tư hiện tại: giả định 12 tháng sau thất bại, liệt kê 5 nguyên nhân.",
      "Duy trì journal 30 ngày liên tục, mỗi ngày 3 dòng: quyết định, lý do, cảm xúc.",
      "Review tháng: tách quyết định đúng/sai khỏi kết quả tốt/xấu; tìm 1 lỗi lặp lại."
    ],
    deliverable: "Pre-mortem + 30-day journal + monthly review template.",
    checkpoint: "Bạn có thể nói “tôi sai” trước khi thị trường nói không? Quy trình nào bảo vệ bạn khỏi chính mình khi drawdown 20%?",
    warning: "Đọc về psychology không làm bạn kỷ luật hơn. Chỉ có journal và review mới làm được điều đó."
  },
  {
    id: "phase-7",
    n: 7,
    code: "P7",
    title: "Specialization",
    sub: "Chọn một edge, đào sâu, bỏ phần còn lại",
    track: ["invest", "trade"],
    weeks: "4+ tuần",
    hours: "tùy chọn",
    goal: "Sau khi có nền tảng, chọn một thị trường và một edge để chuyên sâu: Vietnam equities, global factor, forex, options, crypto hoặc quant. Không học song song quá hai thứ.",
    concepts: ["edge", "market selection", "instrument mechanics", "liquidity", "regulatory constraints", "data availability", "execution"],
    books: ["option-volatility", "option-spreads", "currency-trading-dummies", "day-trading-swing-currency", "forex-patterns", "cryptoassets", "how-to-make-money"],
    tasks: [
      "Chọn một specialization và viết lý do: bạn có edge gì, dữ liệu gì, chi phí gì, cạnh tranh là ai.",
      "Lập reading list chuyên sâu 5 cuốn từ catalog, chỉ đọc phần liên quan.",
      "Chạy 20 trade paper hoặc 1 nghiên cứu chuyên sâu trước khi tăng size."
    ],
    deliverable: "1-page specialization plan + 20-trade paper log.",
    checkpoint: "Nếu bạn không trả lời được “edge của tôi là gì và vì sao nó còn tồn tại?”, bạn chưa sẵn sàng tăng size.",
    warning: "Specialization không có nghĩa là bỏ risk management. Nó có nghĩa là thu hẹp universe, không phải nới lỏng luật."
  }
];

/* --------------------------------------------------------------------------
   CURATED BOOKS
   tier: core | support | reference
   phase: number (0–7), track: invest | trade | macro
   Match strings are resolved against FULL_INDEX at runtime.
   -------------------------------------------------------------------------- */
const CURATED = [
  {
    id: "intelligent-investor",
    match: "The Intelligent Investor",
    title: "The Intelligent Investor",
    author: "Benjamin Graham (commentary: Jason Zweig)",
    year: "2003",
    tier: "core",
    phase: 1,
    track: "invest",
    hours: "12–15h (chọn chương)",
    why: "Nền tảng của value investing: phân biệt investment và speculation, Mr. Market, margin of safety, và cách đọc earnings. Bản 2003 có commentary của Zweig giúp nối nguyên lý với thị trường hiện đại.",
    key: "Margin of safety là khoảng đệm giữa price và intrinsic value; nó bảo vệ bạn khỏi sai số ước lượng và những cú sốc không lường trước.",
    chapters: "Ưu tiên ch.8 (Mr. Market), ch.20 (margin of safety), ch.12–15 (earnings), ch.19 (margin of safety cho defensive investor)."
  },
  {
    id: "common-stocks",
    match: "Common Stocks and Uncommon Profits",
    title: "Common Stocks and Uncommon Profits",
    author: "Philip Fisher",
    year: "2003",
    tier: "core",
    phase: 1,
    track: "invest",
    hours: "8–10h",
    why: "Bổ sung cho Graham: chất lượng doanh nghiệp, tăng trưởng bền vững, và phương pháp “scuttlebutt” — nói chuyện với khách hàng, nhà cung cấp, đối thủ để kiểm chứng thesis.",
    key: "Mua doanh nghiệp tốt và giữ lâu, nhưng chỉ sau khi hiểu vì sao nó tốt và điều gì có thể làm nó xấu đi.",
    chapters: "15 điểm của Fisher là checklist thực dụng; đọc ch.1–5 và ch.8 trước."
  },
  {
    id: "one-up",
    match: "One Up On Wall Street",
    title: "One Up On Wall Street",
    author: "Peter Lynch",
    year: "2000",
    tier: "support",
    phase: 1,
    track: "invest",
    hours: "8–10h",
    why: "Cách tận dụng lợi thế quan sát đời thường, phân loại cổ phiếu (slow grower, stalwart, fast grower, cyclical, turnaround, asset play) và biết mình đang sở hữu cái gì.",
    key: "“Invest in what you know” chỉ đúng khi bạn kiểm chứng bằng số liệu; hiểu sản phẩm không đồng nghĩa hiểu cổ phiếu.",
    chapters: "Đọc ch.1–3, ch.10–15; bỏ qua phần tự truyện nếu thiếu thời gian."
  },
  {
    id: "warren-buffett-way",
    match: "The Warren Buffett Way",
    title: "The Warren Buffett Way",
    author: "Robert G. Hagstrom",
    year: "2005",
    tier: "support",
    phase: 1,
    track: "invest",
    hours: "5–6h",
    why: "Hệ thống hóa cách Buffett chọn doanh nghiệp: business tenets, management tenets, financial tenets, market tenets. Dễ đọc hơn Graham và có ví dụ cụ thể.",
    key: "Moat + ROIC + owner earnings + giá hợp lý, lặp lại trong nhiều thập kỷ.",
    chapters: "Đọc phần “four tenets”; dùng làm checklist khi viết company memo."
  },
  {
    id: "university-berkshire",
    match: "University of Berkshire Hathaway",
    title: "University of Berkshire Hathaway",
    author: "Daniel Pecaut & Corey Wrenn",
    year: "2017",
    tier: "support",
    phase: 1,
    track: "invest",
    hours: "6–8h",
    why: "Tổng hợp 30 năm họp cổ đông Berkshire: mental models, capital allocation, kỷ luật và những sai lầm. Cảm giác như được nghe Buffett/Munger nói chuyện trực tiếp.",
    key: "Đầu tư là một hệ thống ra quyết định, không phải một chuỗi dự đoán.",
    chapters: "Đọc theo chủ đề: capital allocation, moat, mistakes, macro; không cần đọc tuần tự."
  },
  {
    id: "five-rules",
    match: "The Five Rules for Successful Stock Investing",
    title: "The Five Rules for Successful Stock Investing",
    author: "Pat Dorsey",
    year: "2004",
    tier: "support",
    phase: 1,
    track: "invest",
    hours: "6–8h",
    why: "Cầu nối giữa lý thuyết moat và thực hành: cách phân tích lợi thế cạnh tranh, ROIC, free cash flow, và các red flag kế toán. Rất thực dụng cho người mới.",
    key: "Moat chỉ có giá trị nếu nó tạo ra ROIC cao hơn cost of capital một cách bền vững.",
    chapters: "Đọc ch.1–5 và phần “red flags”; dùng như reference khi đọc báo cáo tài chính."
  },
  {
    id: "random-walk",
    match: "A Random Walk Down Wall Street",
    title: "A Random Walk Down Wall Street",
    author: "Burton G. Malkiel",
    year: "2015",
    tier: "core",
    phase: 2,
    track: "invest",
    hours: "10–12h",
    why: "Lịch sử bong bóng, bằng chứng về efficient markets, và lập luận thực dụng cho index investing. Đọc để hiểu vì sao đa số active managers thua sau phí — kể cả khi bạn vẫn muốn active.",
    key: "Sau chi phí, rất ít người đánh bại được thị trường một cách bền vững; hãy bắt đầu từ giả thuyết khiêm tốn đó.",
    chapters: "Đọc ch.1–4 (lịch sử/bong bóng), ch.5–8 (EMH), ch.9–12 (thực hành)."
  },
  {
    id: "little-book-common-sense",
    match: "The Little Book of Common Sense Investing",
    title: "The Little Book of Common Sense Investing",
    author: "John C. Bogle",
    year: "2007",
    tier: "core",
    phase: 2,
    track: "invest",
    hours: "3–4h",
    why: "Lập luận ngắn gọn nhất cho chi phí thấp và index fund: “cost matters hypothesis”. Đọc trong một buổi tối và sẽ thay đổi cách bạn nhìn expense ratio mãi mãi.",
    key: "Bạn không thể kiểm soát return của thị trường, nhưng kiểm soát được chi phí — và chi phí là return chắc chắn nhất.",
    chapters: "Đọc toàn bộ; sách ngắn."
  },
  {
    id: "dual-momentum",
    match: "Dual Momentum Investing",
    title: "Dual Momentum Investing",
    author: "Gary Antonacci",
    year: "2015",
    tier: "support",
    phase: 2,
    track: "invest",
    hours: "5–6h",
    why: "Một hệ thống allocation rules-based dễ hiểu: absolute momentum (trend filter) + relative momentum (chọn thị trường mạnh nhất). Ví dụ tốt về cách chuyển ý tưởng thành quy tắc có thể backtest.",
    key: "Một quy tắc đơn giản, kỷ luật, có thể tốt hơn một danh mục phức tạp nhưng bị cảm xúc chi phối.",
    chapters: "Đọc phần phương pháp và các bảng backtest; kiểm tra kỹ survivorship bias."
  },
  {
    id: "little-book-beats",
    match: "The Little Book That Beats the Market",
    title: "The Little Book That Beats the Market",
    author: "Joel Greenblatt",
    year: "2006",
    tier: "support",
    phase: 2,
    track: "invest",
    hours: "3–4h",
    why: "Giới thiệu Magic Formula: mua doanh nghiệp tốt (ROIC cao) với giá rẻ (earnings yield cao). Một ví dụ trực quan về factor investing và kỷ luật tái cân bằng.",
    key: "Chất lượng và giá là hai trục riêng; đừng tối ưu một trục mà bỏ qua trục còn lại.",
    chapters: "Đọc toàn bộ; sau đó tự kiểm tra kết quả với chi phí giao dịch thực tế."
  },
  {
    id: "irrational-exuberance",
    match: "Irrational Exuberance",
    title: "Irrational Exuberance",
    author: "Robert J. Shiller",
    year: "2016",
    tier: "support",
    phase: 5,
    track: "macro",
    hours: "8–10h",
    why: "Phân tích bong bóng như một hiện tượng xã hội: narratives, feedback loops, CAPE. Đặc biệt liên quan khi CAPE của S&P 500 đang quanh 41 trong năm 2026.",
    key: "Định giá là một biến dự báo lợi suất dài hạn, không phải một tín hiệu thời điểm.",
    chapters: "Đọc ch.1–3 và phần CAPE; bỏ qua phần lịch sử bong bóng nếu đã quen."
  },
  {
    id: "trading-etfs",
    match: "Trading ETFs",
    title: "Trading ETFs",
    author: "Deron Wagner",
    year: "2012",
    tier: "support",
    phase: 2,
    track: "invest",
    hours: "3–4h",
    why: "Cách dùng ETF để diễn đạt view sector/country mà không cần chọn cổ phiếu; thanh khoản, spread, creation/redemption và các bẫy của leveraged/inverse ETF.",
    key: "ETF là công cụ, không phải asset class; hiểu cấu trúc và chi phí trước khi dùng.",
    chapters: "Đọc ch.1–4; tập trung vào phần liquidity và tracking error."
  },

  {
    id: "grimes",
    match: "The Art and Science of Technical Analysis",
    title: "The Art and Science of Technical Analysis",
    author: "Adam Grimes",
    year: "2012",
    tier: "core",
    phase: 3,
    track: "trade",
    hours: "12–15h",
    why: "Cuốn sách technical analysis hiện đại nhất trong thư viện: market structure, edge, statistical thinking, và cảnh báo về pattern mining. Đọc trước khi đọc bất kỳ cuốn pattern nào.",
    key: "Price action là một framework để đọc hành vi, không phải một bộ sưu tập mẫu hình để học thuộc.",
    chapters: "Đọc ch.1–6 và phần về edge/expectancy; dùng chart của bạn để kiểm chứng từng khái niệm."
  },
  {
    id: "nison",
    match: "Japanese Candlestick Charting Techniques",
    title: "Japanese Candlestick Charting Techniques",
    author: "Steve Nison",
    year: "2001",
    tier: "support",
    phase: 3,
    track: "trade",
    hours: "6–8h",
    why: "Ngữ pháp nến Nhật: body, wick, doji, engulfing, harami, và cách đọc chúng trong context của trend và support/resistance. Bản 2nd edition là bản nên đọc.",
    key: "Một cây nến không phải tín hiệu; nó chỉ có nghĩa khi đặt cạnh cấu trúc, volume và vị trí.",
    chapters: "Đọc ch.1–8; bỏ phần lịch sử và các mẫu quá hiếm."
  },
  {
    id: "coulling",
    match: "A Complete Guide To Volume Price Analysis",
    title: "A Complete Guide to Volume Price Analysis",
    author: "Anna Coulling",
    year: "2013",
    tier: "support",
    phase: 3,
    track: "trade",
    hours: "6–8h",
    why: "Volume as confirmation: effort vs result, absorption, selling climax, no-demand/no-supply. Giúp bạn phân biệt breakout thật và breakout rỗng.",
    key: "Volume không dự báo giá; nó cho biết ai đang tham gia và mức độ cam kết của move.",
    chapters: "Đọc ch.1–7; thực hành trên 20 chart có volume."
  },
  {
    id: "brooks",
    match: "Trading Price Action Trends",
    title: "Trading Price Action Trends",
    author: "Al Brooks",
    year: "2011",
    tier: "support",
    phase: 3,
    track: "trade",
    hours: "10–12h (chọn chương)",
    why: "Bar-by-bar reading, trend/range, pullback, breakout failure. Rất chi tiết và có thể quá tải; dùng như reference nâng cao sau khi đã có framework.",
    key: "Mọi nến đều là một cuộc đấu giữa buyer và seller; câu hỏi là ai đang kiểm soát và ai đang bị kẹt.",
    chapters: "Đọc phần trend, pullback, breakout failure; bỏ qua phần scalping nếu bạn không intraday."
  },
  {
    id: "pring",
    match: "Technical Analysis Explained",
    title: "Technical Analysis Explained",
    author: "Martin J. Pring",
    year: "2002",
    tier: "reference",
    phase: 3,
    track: "trade",
    hours: "tra cứu",
    why: "Bách khoa toàn thư về technical analysis: trend, momentum, breadth, intermarket. Dùng để tra cứu một khái niệm cụ thể, không đọc tuần tự.",
    key: "Technical analysis là một hệ thống bằng chứng; hãy hiểu giả định đằng sau từng indicator.",
    chapters: "Tra cứu theo chủ đề; đọc kỹ phần trend và momentum."
  },
  {
    id: "bulkowski",
    match: "Encyclopedia of Chart Patterns",
    title: "Encyclopedia of Chart Patterns",
    author: "Thomas N. Bulkowski",
    year: "2005",
    tier: "reference",
    phase: 3,
    track: "trade",
    hours: "tra cứu",
    why: "Thống kê hiệu suất của hàng trăm chart pattern, bao gồm cả thất bại. Giá trị lớn nhất là nó cho thấy đa số pattern có edge rất nhỏ và phụ thuộc context.",
    key: "Pattern nào cũng có xác suất; câu hỏi là expectancy sau phí và slippage.",
    chapters: "Tra cứu pattern bạn định dùng; đọc phần “statistics” trước khi tin."
  },
  {
    id: "visual-investor",
    match: "The Visual Investor",
    title: "The Visual Investor",
    author: "John J. Murphy",
    year: "2009",
    tier: "support",
    phase: 3,
    track: "trade",
    hours: "4–5h",
    why: "Cách đọc trend, support/resistance và intermarket relationships bằng mắt, ít công thức. Phù hợp để xây phản xạ thị giác trước khi đi sâu vào indicator.",
    key: "Giá và volume là dữ liệu gốc; indicator chỉ là dẫn xuất.",
    chapters: "Đọc ch.1–5; thực hành vẽ trendline trên 20 chart."
  },
  {
    id: "murphy-ta",
    match: "Technical Analysis of the Financial Markets",
    title: "Technical Analysis of the Financial Markets",
    author: "John J. Murphy",
    year: "1999",
    tier: "reference",
    phase: 3,
    track: "trade",
    hours: "tra cứu",
    why: "Giáo trình chuẩn về TA cổ điển: Dow theory, trend, chart patterns, indicators, intermarket. Dùng làm reference khi cần định nghĩa gốc.",
    key: "Nền tảng lý thuyết vững giúp bạn nhận ra khi nào một “indicator mới” chỉ là rebranding.",
    chapters: "Tra cứu theo chủ đề; đọc kỹ Dow theory và trend."
  },
  {
    id: "volman",
    match: "Understanding Price Action",
    title: "Understanding Price Action",
    author: "Bob Volman",
    year: "2014",
    tier: "support",
    phase: 3,
    track: "trade",
    hours: "8–10h",
    why: "Price action trên khung 5 phút, tập trung vào cấu trúc và entry timing. Hữu ích cho intraday/swing ngắn hạn, nhưng cần điều chỉnh khi áp dụng khung lớn hơn.",
    key: "Entry tốt là entry có invalidation rõ ràng, không phải entry có xác suất thắng cao nhất.",
    chapters: "Đọc phần setup và management; backtest 50 trade trên khung bạn dùng."
  },
  {
    id: "naked-forex",
    match: "Naked Forex",
    title: "Naked Forex",
    author: "Alex Nekritin & Walter Peters",
    year: "2012",
    tier: "support",
    phase: 3,
    track: "trade",
    hours: "5–6h",
    why: "Trading không indicator, dựa trên price action và vùng giá. Ý tưởng cốt lõi tốt (bớt phụ thuộc indicator), nhưng đừng biến nó thành tôn giáo.",
    key: "Bớt indicator giúp bạn nhìn thấy cấu trúc; nhưng risk management vẫn là thứ quyết định.",
    chapters: "Đọc phần support/resistance và entry; bỏ qua phần quảng bá."
  },

  {
    id: "trade-your-way",
    match: "Trade Your Way to Financial Freedom",
    title: "Trade Your Way to Financial Freedom",
    author: "Van K. Tharp",
    year: "2006",
    tier: "core",
    phase: 4,
    track: "trade",
    hours: "10–12h",
    why: "Cuốn sách gốc về expectancy, R-multiple và position sizing. Đọc xong bạn sẽ hiểu vì sao win rate 70% vẫn có thể thua và win rate 40% vẫn có thể thắng.",
    key: "Bạn không giao dịch thị trường; bạn giao dịch hệ thống niềm tin và cách phân bổ risk của mình.",
    chapters: "Đọc phần expectancy, position sizing, và “the money management” — đây là trọng tâm."
  },
  {
    id: "new-trading-for-living",
    match: "The New Trading for a Living - Psychology",
    title: "The New Trading for a Living",
    author: "Alexander Elder",
    year: "2014",
    tier: "core",
    phase: 4,
    track: "trade",
    hours: "10–12h",
    why: "Tổng hợp psychology, risk control và trading tactics. Hai quy tắc 2% và 6% là thứ đáng mang theo cả đời, dù bạn giao dịch thị trường nào.",
    key: "Mục tiêu đầu tiên là sống sót; lợi nhuận là phần thưởng của việc sống sót đủ lâu.",
    chapters: "Đọc ch.1–10 (psychology/risk); phần tactics đọc chọn lọc."
  },
  {
    id: "trading-in-the-zone",
    match: "Trading in the Zone",
    title: "Trading in the Zone",
    author: "Mark Douglas",
    year: "2000",
    tier: "core",
    phase: 6,
    track: "trade",
    hours: "6–8h",
    why: "Năm “sự thật” về thị trường và cách xây tư duy xác suất. Đọc cùng lúc với journaling, không đọc thay cho journaling.",
    key: "Bất cứ điều gì cũng có thể xảy ra; edge chỉ là xác suất cao hơn, không phải sự chắc chắn.",
    chapters: "Đọc toàn bộ; sau mỗi chương ghi một ví dụ từ chính lệnh gần nhất của bạn."
  },
  {
    id: "aronson",
    match: "Evidence-Based Technical Analysis",
    title: "Evidence-Based Technical Analysis",
    author: "David R. Aronson",
    year: "2007",
    tier: "core",
    phase: 4,
    track: "trade",
    hours: "10–12h",
    why: "Áp dụng scientific method và statistical inference vào tín hiệu trading. Giải thích data mining bias, multiple testing và vì sao phần lớn “pattern” chỉ là noise.",
    key: "Đừng hỏi “nó có hoạt động trong quá khứ không?”; hỏi “kết quả này có khả năng xảy ra do ngẫu nhiên không?”.",
    chapters: "Đọc ch.1–6; phần thống kê có thể đọc chậm và làm lại ví dụ."
  },
  {
    id: "building-reliable",
    match: "Building Reliable Trading Systems",
    title: "Building Reliable Trading Systems",
    author: "Keith Fitschen",
    year: "2013",
    tier: "support",
    phase: 4,
    track: "trade",
    hours: "6–8h",
    why: "Quy trình xây hệ thống có thể tồn tại qua backtest: entry, exit, position sizing, robustness. Thực dụng và ít lý thuyết suông.",
    key: "Một hệ thống tốt là hệ thống vẫn hoạt động khi tham số thay đổi một chút — robustness quan trọng hơn tối ưu.",
    chapters: "Đọc ch.1–7; dùng checklist robustness khi backtest."
  },
  {
    id: "chan",
    match: "Algorithmic Trading",
    title: "Algorithmic Trading",
    author: "Ernest P. Chan",
    year: "2013",
    tier: "support",
    phase: 4,
    track: "trade",
    hours: "8–10h",
    why: "Các chiến lược mean reversion, momentum, pair trading kèm code và thảo luận về transaction cost. Cầu nối giữa ý tưởng và implementation.",
    key: "Một backtest không có transaction cost và slippage là một câu chuyện cổ tích.",
    chapters: "Đọc ch.1–6; chạy lại một ví dụ bằng dữ liệu của bạn."
  },
  {
    id: "trend-following-bible",
    match: "The Trend Following Bible",
    title: "The Trend Following Bible",
    author: "Andrew Abraham",
    year: "2012",
    tier: "support",
    phase: 4,
    track: "trade",
    hours: "5–6h",
    why: "Cách trend following kiếm tiền từ drawdown, position sizing và diversification across markets. Nhắc bạn rằng edge của trend following nằm ở việc chịu được chuỗi thua.",
    key: "Trend following không phải dự đoán xu hướng; nó là quản lý risk để tồn tại đến khi xu hướng đến.",
    chapters: "Đọc phần system design và case study."
  },
  {
    id: "way-of-turtle",
    match: "Way of the Turtle",
    title: "Way of the Turtle",
    author: "Curtis Faith",
    year: "2007",
    tier: "support",
    phase: 4,
    track: "trade",
    hours: "5–6h",
    why: "Câu chuyện thí nghiệm Turtle: một bộ quy tắc đơn giản, kỷ luật, có thể tạo ra kết quả tốt — và vì sao đa số người được dạy vẫn thất bại.",
    key: "Edge có thể được dạy; kỷ luật thì không. Sự khác biệt nằm ở người thực thi.",
    chapters: "Đọc toàn bộ; so sánh với system spec của bạn."
  },
  {
    id: "complete-turtle",
    match: "The Complete Turtle Trader",
    title: "The Complete Turtle Trader",
    author: "Michael W. Covel",
    year: "2007",
    tier: "support",
    phase: 4,
    track: "trade",
    hours: "5–6h",
    why: "Góc nhìn lịch sử và phỏng vấn về Turtle experiment; bổ sung cho Way of the Turtle bằng bối cảnh và các góc nhìn khác nhau.",
    key: "Quy tắc đơn giản + kỷ luật + risk management là một combo khó bị đánh bại về dài hạn.",
    chapters: "Đọc phần phỏng vấn và bài học."
  },
  {
    id: "encyclopedia-trading-strategies",
    match: "The Encyclopedia of Trading Strategies",
    title: "The Encyclopedia of Trading Strategies",
    author: "Jeffrey Owen Katz & Donna L. McCormick",
    year: "2000",
    tier: "reference",
    phase: 4,
    track: "trade",
    hours: "tra cứu",
    why: "Tổng hợp nhiều nhóm chiến lược và kết quả test. Hữu ích để tra cứu ý tưởng, nhưng dữ liệu cũ — đừng dùng kết quả làm bằng chứng cho hiện tại.",
    key: "Mọi chiến lược đều có điều kiện thị trường; không có “one size fits all”.",
    chapters: "Tra cứu theo nhóm chiến lược."
  },
  {
    id: "come-into-my-trading-room",
    match: "Come Into My Trading Room - A Complete Guide",
    title: "Come Into My Trading Room",
    author: "Alexander Elder",
    year: "2002",
    tier: "support",
    phase: 4,
    track: "trade",
    hours: "8–10h",
    why: "Bản trước của The New Trading for a Living; vẫn giá trị về 3M (Mind, Method, Money) và cách tổ chức trading business. Nếu đã đọc bản 2014, chỉ cần skim.",
    key: "Trading là một business: có vốn, chi phí, quy trình, và kế toán.",
    chapters: "Đọc phần 3M và record keeping; bỏ phần trùng lặp."
  },
  {
    id: "mastering-the-trade",
    match: "Mastering the Trade",
    title: "Mastering the Trade",
    author: "John F. Carter",
    year: "2012",
    tier: "support",
    phase: 4,
    track: "trade",
    hours: "8–10h",
    why: "Các setup intraday/swing thực dụng (opening range, pivots, squeeze) và cách quản lý lệnh. Dùng bản 2012; bản 2006 đã cũ.",
    key: "Setup chỉ là một nửa; execution và trade management là nửa còn lại.",
    chapters: "Đọc phần setup và trade management; bỏ qua phần công cụ độc quyền."
  },
  {
    id: "long-term-secrets",
    match: "Long-Term Secrets to Short-Term Trading",
    title: "Long-Term Secrets to Short-Term Trading",
    author: "Larry Williams",
    year: "1999",
    tier: "support",
    phase: 4,
    track: "trade",
    hours: "5–6h",
    why: "Kinh nghiệm của một trader kỳ cựu về timing, seasonality và risk. Nhiều ví dụ cũ, nhưng các bài học về kỷ luật và position sizing vẫn còn giá trị.",
    key: "Thị trường thay đổi, nhưng toán học của risk và hành vi con người thì không.",
    chapters: "Đọc phần risk và timing; kiểm chứng lại mọi số liệu."
  },
  {
    id: "how-to-day-trade",
    match: "How to Day Trade for a Living",
    title: "How to Day Trade for a Living",
    author: "Andrew Aziz",
    year: "3rd ed.",
    tier: "support",
    phase: 4,
    track: "trade",
    hours: "4–5h",
    why: "Giới thiệu thực tế về day trading: công cụ, cộng đồng, chi phí, và những giới hạn. Hữu ích để hiểu nghề này khắc nghiệt thế nào trước khi thử.",
    key: "Day trading là một công việc toàn thời gian với chi phí cao; đừng bắt đầu bằng tiền thật.",
    chapters: "Đọc ch.1–5; sau đó tự hỏi bạn có lợi thế gì so với người làm full-time."
  },

  {
    id: "laidi",
    match: "Currency Trading and Intermarket Analysis",
    title: "Currency Trading and Intermarket Analysis",
    author: "Ashraf Laidi",
    year: "2008",
    tier: "core",
    phase: 5,
    track: "macro",
    hours: "8–10h",
    why: "Cách đọc USD, rates, commodities, carry và risk appetite như một hệ thống liên kết. Nền tảng tốt cho macro trading và cho việc hiểu dòng vốn toàn cầu.",
    key: "Tiền tệ là giá tương đối của các chính sách vĩ mô; muốn trade FX phải đọc rates và risk appetite.",
    chapters: "Đọc ch.1–8; tập trung vào yield differentials và intermarket relationships."
  },
  {
    id: "when-genius-failed",
    match: "When Genius Failed",
    title: "When Genius Failed",
    author: "Roger Lowenstein",
    year: "2001",
    tier: "support",
    phase: 5,
    track: "macro",
    hours: "6–8h",
    why: "Câu chuyện LTCM: leverage, model risk, correlation và sự mong manh của “arbitrage chắc chắn”. Một trong những bài học risk quan trọng nhất trong thư viện.",
    key: "Leverage biến một lỗi nhỏ thành một lỗi chí mạng; model không bao giờ bao phủ hết các trạng thái của thế giới.",
    chapters: "Đọc toàn bộ; ghi lại 5 điểm fail có thể lặp lại."
  },
  {
    id: "intermarket",
    match: "Intermarket Trading Strategies",
    title: "Intermarket Trading Strategies",
    author: "Markos Katsanos",
    year: "2009",
    tier: "support",
    phase: 5,
    track: "macro",
    hours: "6–8h",
    why: "Các mối quan hệ giữa bond, equity, commodity, USD và cách dùng chúng trong hệ thống giao dịch. Có công thức và ví dụ cụ thể.",
    key: "Không có asset class nào cô lập; cú sốc ở một thị trường sẽ lan qua correlation và liquidity.",
    chapters: "Đọc ch.1–5; kiểm tra lại correlation trong regime hiện tại."
  },
  {
    id: "alchemy",
    match: "The Alchemy of Finance",
    title: "The Alchemy of Finance",
    author: "George Soros",
    year: "1994",
    tier: "support",
    phase: 5,
    track: "macro",
    hours: "8–10h (khó)",
    why: "Reflexivity: giá không chỉ phản ánh fundamentals mà còn thay đổi chúng. Cuốn sách khó, nhưng là chìa khóa để hiểu bong bóng và boom-bust.",
    key: "Thị trường không phải một hệ thống cân bằng; nó là một vòng phản hồi giữa niềm tin và thực tại.",
    chapters: "Đọc phần theory và case study; bỏ qua phần nhật ký giao dịch nếu quá chi tiết."
  },
  {
    id: "big-short",
    match: "The Big Short",
    title: "The Big Short",
    author: "Michael Lewis",
    year: "2011",
    tier: "support",
    phase: 5,
    track: "macro",
    hours: "5–6h",
    why: "Giải thích khủng hoảng 2008 qua những người nhìn thấy trước: CDO, CDS, leverage, và sự tự lừa dối của hệ thống. Đọc như một case study về incentive và tail risk.",
    key: "Khi incentive bị lệch, cả một ngành có thể tin vào một câu chuyện sai — và vẫn kiếm tiền cho đến khi không còn.",
    chapters: "Đọc toàn bộ; ghi lại các dấu hiệu bong bóng có thể quan sát."
  },
  {
    id: "extraordinary-delusions",
    match: "Extraordinary Popular Delusions",
    title: "Extraordinary Popular Delusions and the Madness of Crowds",
    author: "Charles Mackay",
    year: "2001",
    tier: "support",
    phase: 5,
    track: "macro",
    hours: "6–8h (chọn chương)",
    why: "Lịch sử cổ điển về tulip, South Sea, và tâm lý đám đông. Không phải sách đầu tư, nhưng là vaccine chống lại “this time is different”.",
    key: "Con người không thay đổi; chỉ có công cụ và tốc độ lan truyền câu chuyện thay đổi.",
    chapters: "Đọc chương tulip và South Sea; bỏ phần còn lại nếu thiếu thời gian."
  },
  {
    id: "cryptoassets",
    match: "Cryptoassets",
    title: "Cryptoassets",
    author: "Chris Burniske & Jack Tatar",
    year: "2017",
    tier: "support",
    phase: 7,
    track: "macro",
    hours: "6–8h",
    why: "Framework định giá crypto như một asset class: network value, velocity, adoption. Đã cũ nhưng vẫn là một trong những cuốn nghiêm túc nhất trong thư viện về crypto.",
    key: "Crypto là một asset class mới với risk và cấu trúc riêng; đừng áp công thức cổ phiếu một cách máy móc.",
    chapters: "Đọc ch.1–6; cập nhật dữ liệu vì sách viết trước chu kỳ 2021–2026."
  },

  {
    id: "market-wizards",
    match: "Market Wizards - Interviews",
    title: "Market Wizards",
    author: "Jack D. Schwager",
    year: "2012",
    tier: "core",
    phase: 6,
    track: "trade",
    hours: "8–10h",
    why: "Phỏng vấn các trader huyền thoại: cách họ nghĩ về risk, drawdown, edge và sự thích nghi. Giá trị lớn nhất là nhận ra không có một công thức chung.",
    key: "Không có một cách đúng; có cách phù hợp với tính cách và risk tolerance của bạn.",
    chapters: "Đọc 5–6 phỏng vấn; ghi lại điểm chung về risk."
  },
  {
    id: "new-market-wizards",
    match: "The New Market Wizards",
    title: "The New Market Wizards",
    author: "Jack D. Schwager",
    year: "1992",
    tier: "support",
    phase: 6,
    track: "trade",
    hours: "8–10h",
    why: "Tiếp nối Market Wizards với các trader và nhà đầu tư khác nhau; nhấn mạnh quy trình, kỷ luật và việc chấp nhận uncertainty.",
    key: "Người giỏi không tránh được sai lầm; họ quản lý sai lầm tốt hơn.",
    chapters: "Đọc 4–5 phỏng vấn; so sánh với Market Wizards."
  },
  {
    id: "reminiscences",
    match: "Reminiscences of a Stock Operator",
    title: "Reminiscences of a Stock Operator",
    author: "Edwin Lefèvre",
    year: "2008",
    tier: "core",
    phase: 6,
    track: "trade",
    hours: "6–8h",
    why: "Tiểu thuyết hóa cuộc đời Jesse Livermore: tape reading, position sizing, sitting, và cái giá của việc phá luật. Cổ điển vì nó nói về con người, không phải công cụ.",
    key: "Kiếm tiền lớn không nằm ở việc nghĩ đúng, mà ở việc ngồi yên khi thesis còn đúng.",
    chapters: "Đọc toàn bộ; ghi lại 10 câu về tâm lý."
  },
  {
    id: "fooled-by-randomness",
    match: "Fooled by Randomness",
    title: "Fooled by Randomness",
    author: "Nassim Nicholas Taleb",
    year: "2005",
    tier: "support",
    phase: 6,
    track: "trade",
    hours: "8–10h",
    why: "Phân biệt luck và skill, survivorship bias, tail risk. Đọc để không nhầm một chuỗi thắng may mắn với một edge thật.",
    key: "Đánh giá quá trình, không chỉ kết quả; một quyết định tốt có thể thua và một quyết định tệ có thể thắng.",
    chapters: "Đọc ch.1–10; phần còn lại chọn lọc."
  },
  {
    id: "principles",
    match: "Principles - Life and Work",
    title: "Principles: Life and Work",
    author: "Ray Dalio",
    year: "2017",
    tier: "support",
    phase: 6,
    track: "invest",
    hours: "8–10h",
    why: "Hệ thống ra quyết định dựa trên nguyên tắc, radical transparency và review lỗi. Phần đầu tư cụ thể ít hơn phần quản trị, nhưng hữu ích để xây process.",
    key: "Viết nguyên tắc ra trước khi bị cảm xúc chi phối; sau đó đánh giá quyết định so với nguyên tắc.",
    chapters: "Đọc phần Life Principles và Work Principles; chọn 5 nguyên tắc áp dụng cho đầu tư."
  },
  {
    id: "disciplined-trader",
    match: "The Disciplined Trader",
    title: "The Disciplined Trader",
    author: "Mark Douglas",
    year: "1990",
    tier: "support",
    phase: 6,
    track: "trade",
    hours: "6–8h",
    why: "Bản gốc về tâm lý trading của Mark Douglas: nỗi sợ, cái tôi, và cách xây kỷ luật. Ngôn ngữ cũ nhưng vẫn chính xác.",
    key: "Thị trường không làm bạn đau; niềm tin của bạn về thị trường mới làm bạn đau.",
    chapters: "Đọc ch.1–8; kết hợp với journaling."
  },
  {
    id: "jesse-livermore",
    match: "Jesse Livermore",
    title: "Jesse Livermore: World's Greatest Stock Trader",
    author: "Richard Smitten",
    year: "2001",
    tier: "support",
    phase: 6,
    track: "trade",
    hours: "5–6h",
    why: "Tiểu sử Livermore với các bài học về position sizing, timing và sự sụp đổ. Bổ sung cho Reminiscences bằng góc nhìn lịch sử.",
    key: "Thiên tài mà không có risk management vẫn có thể mất tất cả.",
    chapters: "Đọc các chương về 1907, 1929 và giai đoạn suy sụp."
  },
  {
    id: "millionaire-traders",
    match: "Millionaire Traders",
    title: "Millionaire Traders",
    author: "Kathy Lien & Boris Schlossberg",
    year: "2007",
    tier: "support",
    phase: 6,
    track: "trade",
    hours: "4–5h",
    why: "Phỏng vấn các trader bán lẻ thành công, tập trung vào hành trình, thất bại và cách họ xây hệ thống. Nhẹ hơn Market Wizards nhưng gần gũi.",
    key: "Đa số người thành công đều trải qua giai đoạn thua nặng trước khi có hệ thống.",
    chapters: "Đọc 4–5 câu chuyện; tìm điểm chung về risk."
  },

  {
    id: "trading-for-dummies",
    match: "Trading For Dummies",
    title: "Trading For Dummies",
    author: "Michael Griffis & Lita Epstein",
    year: "2009",
    tier: "support",
    phase: 0,
    track: "trade",
    hours: "3–4h (tra cứu)",
    why: "Giải thích order types, margin, short selling, cấu trúc thị trường bằng ngôn ngữ đơn giản. Không phải sách chiến lược; dùng để lấp lỗ hổng cơ học.",
    key: "Hiểu cơ chế trước khi học chiến lược; chi phí và settlement là một phần của edge.",
    chapters: "Đọc phần order types, margin, risk; bỏ phần “làm giàu nhanh”."
  },
  {
    id: "fundamental-analysis-dummies",
    match: "Fundamental Analysis For Dummies",
    title: "Fundamental Analysis For Dummies",
    author: "Matt Krantz",
    year: "2009",
    tier: "support",
    phase: 0,
    track: "invest",
    hours: "4–5h",
    why: "Cầu nối nhẹ nhàng để đọc báo cáo tài chính: income statement, balance sheet, cash flow, ratios. Dùng như từ điển nhập môn trước khi đọc Graham/Fisher.",
    key: "Ba báo cáo tài chính là một hệ thống; đừng đọc riêng lẻ từng con số.",
    chapters: "Đọc ch.1–9; thực hành trên một báo cáo tài chính thật."
  },
  {
    id: "sensible-guide-forex",
    match: "The Sensible Guide to Forex",
    title: "The Sensible Guide to Forex",
    author: "Cliff Wachtel",
    year: "2012",
    tier: "support",
    phase: 0,
    track: "trade",
    hours: "5–6h",
    why: "Giải thích cơ chế forex, pip, lot, leverage, carry và những rủi ro thường bị bán lẻ bỏ qua. Một cuốn tỉnh táo giữa nhiều sách forex hứa hẹn.",
    key: "Forex là thị trường của thanh khoản và vĩ mô; leverage cao là con dao hai lưỡi.",
    chapters: "Đọc ch.1–7; đặc biệt phần leverage và risk."
  },
  {
    id: "option-volatility",
    match: "Option Volatility & Pricing",
    title: "Option Volatility & Pricing",
    author: "Sheldon Natenberg",
    year: "1994",
    tier: "support",
    phase: 7,
    track: "trade",
    hours: "15–20h",
    why: "Kinh thánh về options: pricing, Greeks, volatility, spreads. Chỉ đọc nếu bạn thực sự muốn dùng options; không cần cho investor cổ phiếu.",
    key: "Options là công cụ định giá volatility; hiểu volatility trước khi mua bán premium.",
    chapters: "Đọc ch.1–12; phần chiến lược nâng cao đọc chọn lọc."
  },
  {
    id: "option-spreads",
    match: "Option Spread Strategies",
    title: "Option Spread Strategies",
    author: "Anthony J. Saliba",
    year: "2009",
    tier: "support",
    phase: 7,
    track: "trade",
    hours: "8–10h",
    why: "Các spread strategy cụ thể cho thị trường tăng, giảm, đi ngang; cách chọn strike và quản lý risk. Đọc sau Natenberg.",
    key: "Spread là cách mua bán volatility và thời gian, không chỉ hướng giá.",
    chapters: "Đọc phần vertical và iron condor; backtest trước khi dùng."
  },
  {
    id: "currency-trading-dummies",
    match: "Currency Trading For Dummies",
    title: "Currency Trading For Dummies",
    author: "Brian Dolan",
    year: "2011",
    tier: "support",
    phase: 7,
    track: "trade",
    hours: "4–5h",
    why: "Nhập môn forex thực dụng: cặp tiền, phiên, leverage, phân tích cơ bản và kỹ thuật. Dùng để làm quen, sau đó chuyển sang sách chuyên sâu.",
    key: "Forex là một thị trường 24/5; kỷ luật thời gian và risk quan trọng hơn tín hiệu.",
    chapters: "Đọc ch.1–10; bỏ phần dự báo cụ thể."
  },
  {
    id: "day-trading-swing-currency",
    match: "Day Trading and Swing Trading the Currency Market",
    title: "Day Trading and Swing Trading the Currency Market",
    author: "Kathy Lien",
    year: "2008",
    tier: "support",
    phase: 7,
    track: "trade",
    hours: "6–8h",
    why: "Các setup theo phiên, tin tức và dòng vốn; phân tích cơ bản gắn với intraday FX. Hữu ích nếu bạn chọn forex làm specialization.",
    key: "FX intraday bị chi phối bởi thanh khoản theo phiên và phản ứng với dữ liệu, không chỉ bởi chart.",
    chapters: "Đọc ch.1–8; tập trung vào session dynamics."
  },
  {
    id: "forex-patterns",
    match: "Forex Patterns and Probabilities",
    title: "Forex Patterns and Probabilities",
    author: "Ed Ponsi",
    year: "2007",
    tier: "support",
    phase: 7,
    track: "trade",
    hours: "5–6h",
    why: "Các pattern và setup phổ biến trong FX, kèm xác suất và quản lý lệnh. Thực dụng, nhưng cần kiểm chứng lại trên dữ liệu hiện tại.",
    key: "Pattern chỉ là một phần; điều kiện thị trường và risk quyết định kết quả.",
    chapters: "Đọc ch.1–7; backtest 50 trade."
  },
  {
    id: "how-to-make-money",
    match: "How to Make Money in Stocks",
    title: "How to Make Money in Stocks",
    author: "William J. O'Neil",
    year: "2009",
    tier: "support",
    phase: 7,
    track: "invest",
    hours: "8–10h",
    why: "CAN SLIM: earnings growth, relative strength, institutional sponsorship, market direction. Một hệ thống growth + momentum hoàn chỉnh, đối lập với value thuần túy.",
    key: "Cổ phiếu thắng lớn thường có earnings acceleration và relative strength trước khi breakout.",
    chapters: "Đọc ch.1–8; dùng như một góc nhìn bổ sung, không phải chân lý."
  }
];

/* --------------------------------------------------------------------------
   SKIP LIST — books not worth the time, with reasons
   -------------------------------------------------------------------------- */
const SKIP = [
  {
    title: "Trading Binary Options: Strategies and Tactics (2016)",
    year: "2016",
    phase: "—",
    reason: "Binary options có cấu trúc payoff bất đối xứng và negative expectancy sau phí; nhiều thị trường đã hạn chế hoặc cấm bán lẻ. Không thuộc giáo trình đầu tư nghiêm túc.",
    verdict: "Bỏ"
  },
  {
    title: "Top Binary Options Trading Strategies (n.d.)",
    year: "—",
    phase: "—",
    reason: "Cùng nhóm binary options; nội dung marketing, không có edge có thể kiểm chứng.",
    verdict: "Bỏ"
  },
  {
    title: "Timing Solutions for Swing Traders (2012)",
    year: "2012",
    phase: "—",
    reason: "Kết hợp technical analysis với financial astrology. Không có cơ sở khoa học; dễ tạo niềm tin sai vào dự báo.",
    verdict: "Bỏ"
  },
  {
    title: "Harmonic Trading, Vol. 1 & 2 (2010)",
    year: "2010",
    phase: "—",
    reason: "Hệ thống pattern hình học phức tạp, thiếu bằng chứng thống kê độc lập. Nếu đã có nền tảng và muốn nghiên cứu, hãy backtest trước.",
    verdict: "Trì hoãn"
  },
  {
    title: "17 Proven Currency Trading Strategies (2013)",
    year: "2013",
    phase: "—",
    reason: "Đánh giá thấp, nội dung hời hợt; không có hệ thống risk hoàn chỉnh. Không đáng dành thời gian so với Laidi hay Lien.",
    verdict: "Bỏ"
  },
  {
    title: "How to Make a Living Trading Foreign Exchange (2010)",
    year: "2010",
    phase: "—",
    reason: "Tiêu đề “guaranteed income for life” là red flag. Không có chiến lược nào đảm bảo thu nhập; nội dung mang tính marketing.",
    verdict: "Bỏ"
  },
  {
    title: "Forex Trading Basics & Secrets Vol. 3.0 (n.d.)",
    year: "—",
    phase: "—",
    reason: "Không rõ nguồn gốc, không có tác giả/nhà xuất bản uy tín; khó kiểm chứng phương pháp.",
    verdict: "Bỏ"
  },
  {
    title: "Forex Trading Secrets (2010)",
    year: "2010",
    phase: "—",
    reason: "Nội dung chung chung, trùng lặp với các sách forex khác; không có đóng góp riêng.",
    verdict: "Bỏ"
  },
  {
    title: "The Master Swing Trader / Toolkit (2001/2010)",
    year: "2001",
    phase: "—",
    reason: "Phương pháp discretionary đã cũ, nhiều pattern và quy tắc không còn phù hợp với thanh khoản/thị trường hiện tại.",
    verdict: "Bỏ"
  },
  {
    title: "Trade Like a Pro: 15 High-Profit Trading Strategies (2009)",
    year: "2009",
    phase: "—",
    reason: "Tập hợp chiến lược không có kiểm chứng thống kê; tiêu đề hứa hẹn quá mức.",
    verdict: "Bỏ"
  },
  {
    title: "The Market Guys' Five Points for Trading Success (2007)",
    year: "2007",
    phase: "—",
    reason: "Nội dung nhập môn chung, không có gì vượt trội so với các sách core; có thể bỏ qua nếu đã đọc Elder/Tharp.",
    verdict: "Bỏ"
  },
  {
    title: "Candlestick Charting For Dummies (2008)",
    year: "2008",
    phase: "—",
    reason: "Trùng lặp với Nison nhưng nông hơn. Nếu cần nhập môn nhanh, đọc Nison ch.1–8 là đủ.",
    verdict: "Bỏ"
  },
  {
    title: "Candlestick and Pivot Point Trading Triggers (2006)",
    year: "2006",
    phase: "—",
    reason: "Kết hợp pivot point và nến nhưng thiếu framework risk; phần lớn nội dung đã lỗi thời.",
    verdict: "Bỏ"
  },
  {
    title: "A Complete Guide to Technical Trading Tactics (2004)",
    year: "2004",
    phase: "—",
    reason: "Sách cũ, nhiều kỹ thuật không còn edge; dùng thời gian cho Grimes/Brooks tốt hơn.",
    verdict: "Bỏ"
  },
  {
    title: "Day Trading For Dummies (2014)",
    year: "2014",
    phase: "—",
    reason: "Chỉ hữu ích nếu bạn thực sự muốn day trading; nội dung nhập môn, không thay thế được system design.",
    verdict: "Bỏ qua"
  },
  {
    title: "The New New Thing (2014)",
    year: "2014",
    phase: "—",
    reason: "Lịch sử Silicon Valley, không phải sách đầu tư. Đọc giải trí thì được, không tính vào giáo trình.",
    verdict: "Không liên quan"
  },
  {
    title: "The Blind Side (2007)",
    year: "2007",
    phase: "—",
    reason: "Sách thể thao; không liên quan đến investment/trading.",
    verdict: "Không liên quan"
  },
  {
    title: "The Broker (2005)",
    year: "2005",
    phase: "—",
    reason: "Tiểu thuyết của John Grisham; không phải tài liệu đầu tư.",
    verdict: "Không liên quan"
  },
  {
    title: "Technical Analysis of Stock Trends Explained (2013)",
    year: "2013",
    phase: "—",
    reason: "Bản tóm tắt/derivative của Edwards & Magee; đọc bản gốc hoặc Pring sẽ tốt hơn.",
    verdict: "Bỏ"
  },
  {
    title: "New Frontiers in Technical Analysis (2011)",
    year: "2011",
    phase: "—",
    reason: "Tập hợp bài viết không đồng nhất; một số ý tưởng đã cũ. Dùng như reference, không phải core.",
    verdict: "Tra cứu"
  }
];

/* --------------------------------------------------------------------------
   12-WEEK PLAN
   -------------------------------------------------------------------------- */
const WEEKS = [
  { w: 1, phase: "P0", focus: "Market mechanics + thiết lập journal, broker, data", hours: "5h", deliverable: "Market Map + fee schedule + journal" },
  { w: 2, phase: "P1", focus: "Graham ch.8/20 + Fisher: Mr. Market, margin of safety, quality", hours: "6h", deliverable: "10 câu hỏi kiểm tra doanh nghiệp" },
  { w: 3, phase: "P1", focus: "Lynch + Buffett Way + Five Rules: phân loại và định giá", hours: "6h", deliverable: "Company memo 1 trang" },
  { w: 4, phase: "P2", focus: "Random Walk + Bogle + Dual Momentum: allocation và chi phí", hours: "5h", deliverable: "IPS 1 trang + target allocation" },
  { w: 5, phase: "P3", focus: "Market structure + nến Nhật + volume", hours: "6h", deliverable: "20 annotated charts" },
  { w: 6, phase: "P3", focus: "Breakout, pullback, failed breakout; chọn 3 setup", hours: "6h", deliverable: "Setup spec + 15 annotated charts" },
  { w: 7, phase: "P3", focus: "Backtest thủ công 30 trade; tính R-multiple", hours: "6h", deliverable: "30-trade log + review" },
  { w: 8, phase: "P4", focus: "Expectancy, R-multiple, position sizing, drawdown", hours: "6h", deliverable: "Risk policy + position size calculator" },
  { w: 9, phase: "P4", focus: "System design + backtest 200 trade + Monte Carlo", hours: "6h", deliverable: "System spec + backtest report" },
  { w: 10, phase: "P6", focus: "Psychology, journaling, pre-mortem; bắt đầu paper trading", hours: "5h", deliverable: "Pre-mortem + 7-day journal" },
  { w: 11, phase: "P5", focus: "Rates, inflation, USD, credit; regime dashboard", hours: "6h", deliverable: "Regime dashboard + scenario map" },
  { w: 12, phase: "ALL", focus: "Review toàn bộ, làm quiz, viết kế hoạch 90 ngày", hours: "4h", deliverable: "90-day plan + gap analysis" }
];

/* --------------------------------------------------------------------------
   QUIZ
   -------------------------------------------------------------------------- */
const QUIZ = [
  {
    q: "Margin of safety trong value investing có nghĩa là gì?",
    options: [
      "Mua cổ phiếu có P/E thấp hơn trung bình ngành",
      "Mua với giá thấp hơn intrinsic value một khoảng đủ lớn để chịu được sai số",
      "Luôn giữ ít nhất 50% tiền mặt",
      "Đặt stop-loss dưới mức hỗ trợ gần nhất"
    ],
    answer: 1,
    explain: "Margin of safety là khoảng đệm giữa price và intrinsic value — không phải một con số P/E cố định, và không phải stop-loss. Nó bảo vệ bạn khỏi việc ước lượng intrinsic value sai."
  },
  {
    q: "Một hệ thống có win rate 40%, avg win = 2R, avg loss = 1R. Expectancy mỗi trade là bao nhiêu?",
    options: ["+0.2R", "+0.4R", "−0.2R", "+0.8R"],
    answer: 0,
    explain: "Expectancy = 0.4 × 2R − 0.6 × 1R = 0.8R − 0.6R = +0.2R. Win rate 40% vẫn có lợi nhuận nếu payoff đủ lớn. Breakeven win rate = 1/(1+2) = 33.3%."
  },
  {
    q: "Account 100 triệu, risk 1% mỗi trade, entry 50,000, stop 45,000. Bạn mua bao nhiêu đơn vị (chưa tính lot)?",
    options: ["20 đơn vị", "200 đơn vị", "2,000 đơn vị", "20,000 đơn vị"],
    answer: 1,
    explain: "Risk budget = 1% × 100,000,000 = 1,000,000. Risk/đơn vị = 50,000 − 45,000 = 5,000. Số đơn vị = 1,000,000 / 5,000 = 200. Position value = 200 × 50,000 = 10,000,000 (10% tài khoản)."
  },
  {
    q: "CAPE (Shiller P/E) ở mức 41 cho bạn biết điều gì?",
    options: [
      "Thị trường sẽ giảm trong 12 tháng tới",
      "Định giá cao so với EPS bình quân 10 năm; là công cụ dự báo lợi suất dài hạn, không phải timing",
      "Lợi nhuận doanh nghiệp đang bị thổi phồng",
      "Fed sẽ tăng lãi suất trong kỳ họp tới"
    ],
    answer: 1,
    explain: "CAPE cao nói rằng định giá đắt so với earnings dài hạn và lợi suất kỳ vọng 10 năm tới có thể thấp. Nó không dự báo thời điểm điều chỉnh; CAPE có thể ở trên 30 trong nhiều năm."
  },
  {
    q: "10Y Treasury yield tăng từ 4.5% lên 5.0%. Tác động trực tiếp lên một cổ phiếu tăng trưởng có phần lớn dòng tiền ở năm thứ 10 là gì?",
    options: [
      "Không ảnh hưởng vì earnings không đổi",
      "Discount rate tăng, giá trị hiện tại của dòng tiền xa giảm, multiple có thể bị nén",
      "Cổ phiếu tăng vì lãi suất cao là dấu hiệu kinh tế mạnh",
      "Chỉ ảnh hưởng đến trái phiếu, không ảnh hưởng cổ phiếu"
    ],
    answer: 1,
    explain: "Giá trị cổ phiếu là PV của dòng tiền tương lai. Khi discount rate tăng, dòng tiền ở xa bị chiết khấu mạnh hơn; cổ phiếu tăng trưởng dài hạn nhạy cảm nhất. Earnings có thể vẫn tốt nhưng multiple giảm."
  },
  {
    q: "Bạn backtest 10 năm, thử 50 bộ tham số, chọn bộ có Sharpe cao nhất và chỉ báo cáo in-sample. Rủi ro chính là gì?",
    options: [
      "Sample quá nhỏ nên không đủ trade",
      "Overfitting và data snooping: kết quả đẹp có thể chỉ là khớp noise",
      "Chi phí giao dịch quá thấp",
      "Dữ liệu quá mới nên không đại diện"
    ],
    answer: 1,
    explain: "Thử nhiều giả thuyết rồi chọn kết quả tốt nhất làm tăng xác suất tìm được pattern ngẫu nhiên. Cần out-of-sample, walk-forward, kiểm tra độ nhạy tham số và Monte Carlo trước khi tin."
  },
  {
    q: "Kelly criterion cho ra f* = 25%. Cách áp dụng hợp lý nhất trong thực tế?",
    options: [
      "Dùng đúng 25% mỗi trade để tối đa hoá tăng trưởng",
      "Dùng half-Kelly hoặc thấp hơn, và vẫn giới hạn bởi risk rule 0.5–1%",
      "Bỏ qua Kelly vì công thức luôn sai",
      "Tăng lên 50% nếu win rate cao"
    ],
    answer: 1,
    explain: "Full Kelly tối đa hoá tăng trưởng kỳ vọng nhưng drawdown rất lớn và cực kỳ nhạy với sai số ước lượng W, R. Thực tế dùng quarter/half-Kelly, đồng thời bị chặn bởi risk rule tuyệt đối."
  },
  {
    q: "Mr. Market trong The Intelligent Investor là ẩn dụ cho điều gì?",
    options: [
      "Một nhà môi giới luôn đưa ra giá đúng",
      "Một đối tác cảm xúc, mỗi ngày chào một mức giá; bạn có quyền từ chối hoặc tận dụng",
      "Một chỉ báo kỹ thuật đo tâm lý đám đông",
      "Một quỹ đầu tư thụ động"
    ],
    answer: 1,
    explain: "Mr. Market là đối tác có cảm xúc thất thường. Giá của ông ta là lời đề nghị, không phải mệnh lệnh. Nhà đầu tư có thể bỏ qua hoặc mua/bán khi giá lệch xa giá trị."
  },
  {
    q: "Yield curve inversion thường được hiểu là gì?",
    options: [
      "Dấu hiệu suy thoái sẽ xảy ra ngay trong quý tới",
      "Tín hiệu suy thoái có độ trễ, không phải lệnh bán tức thời",
      "Lãi suất ngắn hạn thấp hơn dài hạn, báo hiệu lạm phát tăng",
      "Ngân hàng trung ương đang mua trái phiếu dài hạn"
    ],
    answer: 1,
    explain: "Inversion (short rate > long rate) đã là tín hiệu suy thoái trong quá khứ, nhưng độ trễ có thể 6–24 tháng và không phải lần nào cũng đúng. Nó là thông tin về kỳ vọng, không phải timing tool."
  },
  {
    q: "Việt Nam: CPI bình quân 9 tháng 4.52%, lãi suất điều hành 4.5%, tăng trưởng GDP 9.01%. Điều này hàm ý gì?",
    options: [
      "Real policy rate gần 0 hoặc âm; dư địa nới lỏng bị giới hạn bởi lạm phát và tỷ giá",
      "Ngân hàng Nhà nước nên tăng lãi suất ngay lập tức",
      "Lạm phát thấp nên có thể giảm lãi suất mạnh",
      "Tăng trưởng cao chứng tỏ không có áp lực lạm phát"
    ],
    answer: 0,
    explain: "Với CPI ~4.5% và policy rate 4.5%, real rate gần 0/âm. Muốn hỗ trợ tăng trưởng hai con số, NHNN phải cân bằng với lạm phát, tín dụng nóng và áp lực VND — dư địa nới lỏng không còn nhiều."
  },
  {
    q: "Vàng và Bitcoin khác nhau chủ yếu ở điểm nào trong bối cảnh 2026?",
    options: [
      "Cả hai đều là inflation hedge giống hệt nhau",
      "Vàng nghiêng về hedge sovereign/debasement; BTC là high-beta liquidity, nhạy risk appetite và ETF flows",
      "BTC ổn định hơn vàng vì có blockchain",
      "Vàng chỉ dành cho NHTW, BTC chỉ dành cho bán lẻ"
    ],
    answer: 1,
    explain: "Hai tài sản có driver khác nhau. Vàng hưởng lợi từ nhu cầu trú ẩn/debasement và mua ròng của NHTW; BTC nhạy với thanh khoản, risk-on/off và dòng ETF. Dùng cùng một luận điểm cho cả hai là sai."
  },
  {
    q: "“Process over outcome” trong trading có nghĩa là gì?",
    options: [
      "Chỉ cần tuân thủ quy trình là chắc chắn có lãi",
      "Đánh giá quyết định dựa trên việc có tuân thủ quy trình và quản lý risk hay không, không chỉ nhìn kết quả một lệnh",
      "Bỏ qua kết quả hoàn toàn",
      "Luôn giữ lệnh đến khi có lãi"
    ],
    answer: 1,
    explain: "Một lệnh thắng có thể là quyết định tồi (may mắn) và một lệnh thua có thể là quyết định tốt (đúng quy trình). Đánh giá theo process giúp bạn cải thiện hệ thống thay vì học sai bài từ variance."
  }
];
