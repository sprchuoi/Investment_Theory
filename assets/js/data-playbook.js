/* ==========================================================================
   PLAYBOOKS — templates that turn reading into artifacts
   ========================================================================== */

const PLAYBOOK = [
  {
    id: "thesis",
    kicker: "TEMPLATE 01",
    title: "Investment thesis — 1 trang",
    purpose: "Dùng cho mọi khoản đầu tư dài hạn. Nếu không viết được trong một trang, bạn chưa hiểu đủ rõ để mua.",
    fields: [
      { label: "Business", text: "Doanh nghiệp bán gì, cho ai, khách hàng vì sao chọn nó? Viết bằng ngôn ngữ của người ngoài ngành." },
      { label: "Industry", text: "Cấu trúc ngành: số người chơi, barriers to entry, pricing power, chu kỳ. Ngành đang tốt lên hay xấu đi?" },
      { label: "Moat", text: "Lợi thế cạnh tranh cụ thể và bằng chứng: ROIC > cost of capital, market share, switching cost, brand, network effect." },
      { label: "Numbers", text: "Revenue growth, gross margin, ROIC, FCF, net debt, dilution 3–5 năm. So sánh với peer, không chỉ với quá khứ của chính nó." },
      { label: "Valuation", text: "Base / bull / bear intrinsic value, giả định chính, margin of safety. Ghi rõ điều gì làm base case sai." },
      { label: "Catalysts", text: "1–3 sự kiện có thể làm thị trường nhận ra giá trị trong 12–24 tháng. Catalyst không phải lý do để mua nếu valuation đã đắt." },
      { label: "Risks", text: "3 điều có thể làm thesis sai, xác suất tương đối và mức độ tác động. Ưu tiên rủi ro có thể quan sát được." },
      { label: "Kill criteria", text: "Điều kiện cụ thể để bán: mất moat, ROIC giảm dưới X, management mất integrity, thesis hết hiệu lực. Viết trước khi mua." },
      { label: "Position", text: "Entry zone, position size theo % portfolio, max allocation, thời gian nắm giữ tối thiểu." }
    ],
    exampleTitle: "Ví dụ giả định — ABC Corp",
    example: "ABC là doanh nghiệp bán lẻ đặc sản, ROIC 18%, FCF 120 tỷ, net cash. EV 1,500 tỷ; base intrinsic value 1,900 tỷ → margin of safety ~21%. Catalyst: mở 30 cửa hàng mới trong 18 tháng. Rủi ro: chi phí thuê tăng, đối thủ copy mô hình. Kill criteria: cùng-store sales âm 2 quý liên tiếp hoặc ROIC < 12%. Position: 5% portfolio, entry zone 1,450–1,550 tỷ EV.",
    copyLabel: "Copy template"
  },
  {
    id: "trade",
    kicker: "TEMPLATE 02",
    title: "Trade plan — trước khi bấm nút",
    purpose: "Mỗi lệnh phải có invalidation trước khi có entry. Nếu không viết được stop, bạn không có trade — bạn có một hy vọng.",
    fields: [
      { label: "Context", text: "Market structure: trend hay range? Regime hiện tại? Thanh khoản? Có tin tức/sự kiện lớn trong 24h không?" },
      { label: "Setup", text: "Tên setup và điều kiện kích hoạt. Chỉ dùng 3 setup đã định nghĩa; không thêm setup mới giữa phiên." },
      { label: "Entry", text: "Trigger cụ thể, order type (limit/stop), giá hoặc vùng giá. Ghi rõ điều kiện nào phải xảy ra trước." },
      { label: "Stop", text: "Giá stop và lý do cấu trúc (dưới swing low, dưới vùng supply, quá ATR). Không đặt stop theo số tiền bạn muốn mất." },
      { label: "Target", text: "Mục tiêu 1R/2R/3R, vùng chốt lời, trailing rule. Không chốt lời chỉ vì “thấy đủ”." },
      { label: "Size", text: "Risk % × account / |entry − stop|. Kiểm tra lot size, margin, slippage. Position value không vượt giới hạn portfolio." },
      { label: "Correlation", text: "Tổng risk nếu tất cả vị thế cùng stop. Không mở 3 lệnh cùng một theme nếu chúng tương quan > 0.7." },
      { label: "Review", text: "Sau khi đóng lệnh: setup có đúng định nghĩa không? Execution có theo plan không? Điều gì cần sửa trong quy trình?" }
    ],
    exampleTitle: "Ví dụ giả định — long ABC",
    example: "Context: uptrend, pullback về EMA20. Setup: pullback + bullish rejection. Entry 50,000; stop 47,500 (dưới swing low, 1 ATR); target 57,500 (3R). Account 100m, risk 1% = 1m → size = 1m / 2,500 = 400 units; position 20m (20%). Max loss 1m. Nếu giá đóng cửa dưới 47,500, thesis sai — thoát, không averaging down.",
    copyLabel: "Copy template"
  },
  {
    id: "risk",
    kicker: "TEMPLATE 03",
    title: "Risk policy — luật của bạn",
    purpose: "Viết trước khi có drawdown, không phải trong lúc drawdown. Đây là bộ luật mà bạn tự nguyện tuân thủ khi cảm xúc mạnh nhất.",
    fields: [
      { label: "Per trade", text: "0.5–1% equity. Với người mới: 0.25–0.5%. Không bao giờ vượt 2% cho bất kỳ lệnh nào." },
      { label: "Daily loss", text: "Dừng giao dịch khi lỗ trong ngày vượt 2R hoặc 2% equity. Không cố gỡ trong cùng ngày." },
      { label: "Monthly DD", text: "Giảm size 50% khi drawdown tháng vượt 6%; dừng hoàn toàn khi vượt 10% và review lại hệ thống." },
      { label: "Correlation", text: "Tổng risk của các vị thế tương quan cao không vượt 2R. Đa dạng hóa theo theme, không chỉ theo ticker." },
      { label: "Leverage", text: "Mặc định 1x. Nếu dùng margin, phải có buffer ít nhất 30% và kịch bản margin call đã viết trước." },
      { label: "Liquidity", text: "Position không vượt 1% average daily volume; tránh thị trường mở cửa/đóng cửa nếu size lớn." },
      { label: "Events", text: "Không mở vị thế mới trước CPI/FOMC/earnings nếu không có kế hoạch rõ; giảm size trước sự kiện nhị phân." },
      { label: "Review", text: "Sau 3 lệnh thua liên tiếp: giảm size 50%, xem lại journal, kiểm tra regime có đổi không. Không đổi hệ thống ngay lập tức." }
    ],
    exampleTitle: "Câu hỏi kiểm tra",
    example: "Nếu 5 vị thế của bạn cùng giảm 1R trong một ngày, bạn mất bao nhiêu %? Nếu câu trả lời > 5%, bạn đang tập trung risk chứ không đa dạng hóa. Nếu bạn không biết con số đó, bạn chưa có risk policy.",
    copyLabel: "Copy template"
  },
  {
    id: "review",
    kicker: "TEMPLATE 04",
    title: "Weekly review — 20 phút",
    purpose: "Review biến trải nghiệm thành dữ liệu. Không review, bạn chỉ lặp lại cùng một lỗi với cảm giác mới.",
    fields: [
      { label: "Decisions", text: "Liệt kê mọi quyết định mua/bán/không làm gì trong tuần. Ghi lý do tại thời điểm ra quyết định, không phải lý do hậu kiến." },
      { label: "Process", text: "Quyết định nào tuân thủ checklist? Quyết định nào phá luật? Đánh dấu từng cái, không tự tha thứ." },
      { label: "Evidence", text: "Dữ liệu nào xác nhận thesis? Dữ liệu nào phủ nhận? Có trigger nào trong scenario map xuất hiện không?" },
      { label: "Emotion", text: "Cảm xúc nào mạnh nhất tuần này (sợ, tham, tự tin, chán)? Nó ảnh hưởng đến quyết định nào?" },
      { label: "Stop doing", text: "Một hành vi cần dừng tuần tới. Cụ thể, quan sát được, không phải “bớt cảm xúc”." },
      { label: "Next experiment", text: "Một thay đổi nhỏ để kiểm chứng, kèm cách đo. Ví dụ: giảm size 50% trong 10 trade và so sánh execution quality." }
    ],
    exampleTitle: "Quy tắc vàng",
    example: "Đánh giá quyết định theo process, không theo P&L tuần. Một tuần lãi có thể che giấu một quy trình tồi; một tuần lỗ có thể là một quy trình tốt gặp variance. Ghi cả hai.",
    copyLabel: "Copy template"
  }
];

const BACKTEST_STEPS = [
  {
    title: "Hypothesis có lý do kinh tế",
    body: "Viết vì sao edge tồn tại: hành vi, cấu trúc thị trường, dòng tiền, thông tin. Nếu chỉ có “chart trông đẹp”, đó chưa phải giả thuyết."
  },
  {
    title: "Data hygiene",
    body: "Kiểm tra survivorship bias, look-ahead bias, corporate actions, missing data và thời điểm công bố dữ liệu. Dùng dữ liệu mà tại thời điểm đó bạn thực sự có."
  },
  {
    title: "Rules chính xác",
    body: "Entry, exit, stop, target, size, universe, thời gian giữ, điều kiện thị trường. Nếu hai người đọc spec mà ra hai kết quả khác nhau, spec chưa đủ rõ."
  },
  {
    title: "In-sample + sensitivity",
    body: "Test trên giai đoạn xây dựng. Sau đó thay đổi tham số ±20%: kết quả có còn dương? Nếu chỉ một bộ tham số tốt, đó là red flag."
  },
  {
    title: "Out-of-sample & walk-forward",
    body: "Test trên dữ liệu chưa dùng để tối ưu. Walk-forward mô phỏng việc tối ưu cuốn chiếu theo thời gian — sát thực tế hơn một lần test tĩnh."
  },
  {
    title: "Costs, slippage, capacity",
    body: "Trừ commission, spread, slippage, thuế, margin. Kiểm tra size có làm hỏng edge không. Một hệ thống tốt trên giấy có thể chết vì chi phí."
  },
  {
    title: "Monte Carlo + paper pilot",
    body: "Mô phỏng 1.000+ đường equity để xem drawdown distribution. Sau đó paper trade 20–30 lệnh, so sánh kết quả thực tế với giả định."
  }
];
