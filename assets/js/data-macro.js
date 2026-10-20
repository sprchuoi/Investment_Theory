/* ==========================================================================
   MACRO SNAPSHOT — as of 20.10.2026
   All values are sourced and dated. This is a study snapshot, not live data.
   ========================================================================== */

const MACRO = {
  asOf: "20.10.2026",
  title: "Nominal boom, real squeeze",
  ticker: {
    fed: "3.75–4.00%",
    cpi: "3.7%",
    tenY: "5.06%",
    sp: "7,690",
    cape: "~41",
    gold: "$4,169",
    vn: "1,691.97"
  },

  metrics: [
    {
      label: "Fed funds target",
      value: "3.75–4.00%",
      tone: "gold",
      note: "+25bp ngày 16/09/2026. Họp 27–28/10; thị trường định giá ~76% khả năng tăng thêm vào tháng 12.",
      source: { label: "Fed minutes", url: "https://www.federalreserve.gov/monetarypolicy/fomcminutes20260916.htm" }
    },
    {
      label: "US CPI y/y",
      value: "3.7%",
      tone: "red",
      note: "Tháng 9/2026, tăng từ 3.4%; năng lượng +5.2% m/m. PPI +6.3% y/y.",
      source: { label: "BLS", url: "https://www.bls.gov/news.release/cpi.nr0.htm" }
    },
    {
      label: "Core PCE y/y",
      value: "3.4%",
      tone: "red",
      note: "Tháng 8/2026. Fed chỉ kỳ vọng về 2% vào năm 2029; rủi ro lạm phát lệch lên.",
      source: { label: "Fed minutes", url: "https://www.federalreserve.gov/monetarypolicy/fomcminutes20260916.htm" }
    },
    {
      label: "US 10Y yield",
      value: "5.06%",
      tone: "red",
      note: "19/10/2026. Tăng ~35bp trong kỳ họp; term premium chịu áp lực từ nguồn cung nợ AI.",
      source: { label: "Trading Economics", url: "https://tradingeconomics.com/united-states/government-bond-yield" }
    },
    {
      label: "S&P 500",
      value: "7,690.73",
      tone: "green",
      note: "19/10/2026. Tăng nhờ earnings thực tế và kỳ vọng; P/E multiple đã giảm chứ không tăng.",
      source: { label: "Morningstar / Dow Jones", url: "https://www.morningstar.com/news/dow-jones/202610197062/sp-500-rises-041-to-769073-data-talk" }
    },
    {
      label: "Shiller CAPE",
      value: "~41",
      tone: "gold",
      note: "Trên 40 liên tục từ tháng 5/2026; chỉ tháng 12/1999 cao hơn (44). Không phải timing tool.",
      source: { label: "Motley Fool", url: "https://www.fool.com/investing/2026/10/19/a-cfp-r-s-take-on-the-scariest-chart-in-the-stock-market-right-now/" }
    },
    {
      label: "Gold spot",
      value: "$4,169/oz",
      tone: "gold",
      note: "20/10/2026. SJC 143.1 triệu/lượng; chênh lệch với vàng thế giới ~12 triệu/lượng.",
      source: { label: "Công Thương", url: "https://congthuong.vn/gia-vang-hom-nay-20-10-ap-sat-nguong-4-200-usd-477279.html" }
    },
    {
      label: "Bitcoin",
      value: "$82,620",
      tone: "green",
      note: "19/10/2026. ETF spot outflow 2 tuần liên tiếp (~$910m); Fear & Greed 50 (neutral).",
      source: { label: "Pintu / CoinMarketCap", url: "https://pintu.co.id/en/academy/post/crypto-market-analysis-today-october-19-2026-bitcoin-holds-above-80000-as-us-inflation-rises-to-3-7" }
    },
    {
      label: "Việt Nam GDP",
      value: "+9.01%",
      tone: "green",
      note: "9 tháng 2026; quý III +9.95%. Động lực: sản xuất, xuất khẩu, đầu tư công, tiêu dùng.",
      source: { label: "Vietnam.vn", url: "https://www.vietnam.vn/kinh-te-viet-nam-tang-truong-9-01-trong-9-thang-nam-2026" }
    },
    {
      label: "Việt Nam CPI",
      value: "4.52%",
      tone: "red",
      note: "Bình quân 9 tháng 2026; lạm phát cơ bản thấp hơn. Áp lực từ năng lượng và tỷ giá.",
      source: { label: "Báo cáo viên", url: "https://baocaovien.vn/tin-tuc/nguon-cung-hang-hoa-co-ban-duoc-thong-suot-cpi-binh-quan-9-thang-o-muc-4-52/428485.html" }
    },
    {
      label: "SBV refinancing",
      value: "4.5%",
      tone: "gold",
      note: "Giữ nguyên lãi suất điều hành. Lãi suất huy động có xu hướng tăng do tín dụng > huy động.",
      source: { label: "Nhà đầu tư / UOB", url: "https://nhadautu.vn/uob-nhnn-se-duy-tri-on-dinh-lai-suat-tai-cap-von-o-muc-45-d101754.html" }
    },
    {
      label: "USD/VND",
      value: "~26,050",
      tone: "red",
      note: "Thị trường tự do, 20/10/2026. Áp lực từ lãi suất USD cao và nhập khẩu năng lượng.",
      source: { label: "Công Thương", url: "https://congthuong.vn/gia-vang-hom-nay-20-10-ap-sat-nguong-4-200-usd-477279.html" }
    },
    {
      label: "VN-Index",
      value: "1,691.97",
      tone: "red",
      note: "20/10/2026. Test lại đáy 7/2026 (1,650–1,680); thanh khoản dưới trung bình 20 ngày; khối ngoại bán ròng.",
      source: { label: "Vietstock / PHS", url: "https://www.phs.vn/tin-tuc/vietstock-daily-21102026-no-luc-can-bang/6441005" }
    }
  ],

  lead: "Nền kinh tế Mỹ không suy yếu — nó đang tái tăng tốc trong một thế giới bị giới hạn bởi năng lượng, lao động kỹ năng cao và chi phí vốn. Vì vậy Fed tăng lãi suất không phải để chống suy thoái, mà để chống lạm phát dai dẳng. Với nhà đầu tư, đây là môi trường “earnings tốt nhưng multiple bị nén”: doanh thu và lợi nhuận vẫn tăng, nhưng discount rate tăng nhanh hơn. Kẻ thua cuộc là các tài sản dài hạn không có dòng tiền, và bất kỳ ai dùng leverage để mua chúng.",

  forces: [
    {
      n: "01",
      title: "Fed tăng lãi suất giữa một nền kinh tế mạnh",
      body: "Đây là điểm bất thường của chu kỳ này. Fed không nới lỏng để cứu nền kinh tế; họ thắt chặt để bảo vệ mục tiêu 2% khi GDP vẫn vững, thất nghiệp 4.1% và thị trường lao động gần full employment. Chính sách hiện tại chỉ “mildly restrictive”, và một số thành viên đã nâng ước lượng neutral rate.",
      watch: "Theo dõi: core PCE, payrolls, số người thất nghiệp dài hạn, xác suất tăng lãi suất tháng 12."
    },
    {
      n: "02",
      title: "Lạm phát quay lại là câu chuyện nguồn cung",
      body: "CPI 3.7% bị chi phối bởi năng lượng sau căng thẳng địa chính trị; PPI 6.3% cho thấy áp lực chi phí đầu vào vẫn lan. Thêm vào đó là tariff và chi phí liên quan đến AI buildout (điện, nguyên vật liệu, thiết bị). Core services vẫn sticky; rủi ro là lạm phát lan từ năng lượng sang lương và giá dịch vụ.",
      watch: "Theo dõi: giá dầu/diesel, PPI, core services ex-housing, kỳ vọng lạm phát 5y5y."
    },
    {
      n: "03",
      title: "AI capex đã trở thành câu chuyện tín dụng",
      body: "S&P 500 tăng chủ yếu nhờ earnings, không phải multiple — đó là điểm tích cực. Nhưng phần lớn capex được tài trợ bằng nợ: spread trái phiếu của hyperscaler đã mở rộng, khối lượng phát hành lớn, và private credit tham gia sâu hơn. Gartner cảnh báo lợi nhuận từ AI chưa đủ để biện minh cho quy mô neocloud build-out.",
      watch: "Theo dõi: capex guidance, depreciation, credit spread của hyperscaler/neocloud, giá điện, thời gian hoàn vốn của data center."
    },
    {
      n: "04",
      title: "Thanh khoản vẫn dồi dào, nhưng ngày càng đắt",
      body: "Dự trữ trong hệ thống ngân hàng vẫn ở mức ample; Fed đã tạm dừng reserve management purchases. Trong khi đó, đồng USD yếu đi, vàng lập vùng kỷ lục và BTC vẫn trên $80k — nhưng dòng ETF BTC đã âm hai tuần. Đây là dấu hiệu của một thị trường thanh khoản tốt nhưng khẩu vị rủi ro phân hóa, không phải “everything rally”.",
      watch: "Theo dõi: reserves, RMP, DXY, ETF flows, gold central-bank buying, HY spread."
    },
    {
      n: "05",
      title: "Định giá là một cược vào duration",
      body: "CAPE ~41 và 10Y 5.06% tạo ra một phương trình khó: earnings yield của equity không còn hấp dẫn hơn bond yield như giai đoạn 2010–2020. Điều này không có nghĩa là bán sạch cổ phiếu; nó có nghĩa là kỳ vọng lợi suất 10 năm tới thấp hơn, và phân bổ phải bù đắp bằng quality, cash flow hiện tại và đa dạng hóa địa lý.",
      watch: "Theo dõi: equity risk premium (1/CAPE − real 10Y), real yield, earnings revision breadth."
    },
    {
      n: "06",
      title: "Việt Nam: tăng trưởng nhanh, chính sách bị kẹp",
      body: "GDP 9 tháng +9.01% và quý III +9.95% là mức rất cao; mục tiêu 10%+ cho 2027 càng tạo áp lực tín dụng. Nhưng CPI bình quân 4.52%, lãi suất điều hành 4.5%, tín dụng tăng nhanh hơn huy động, VND quanh 26,050 và VN-Index đang test đáy tháng 7. Chính sách tiền tệ không còn nhiều dư địa nới lỏng nếu lạm phát và tỷ giá không cho phép.",
      watch: "Theo dõi: CPI tháng, tăng trưởng tín dụng, lãi suất huy động, USD/VND, khối ngoại, thanh khoản HOSE."
    }
  ],

  scenarios: [
    {
      kind: "bull",
      label: "Bull case",
      title: "Disinflation soft landing",
      body: "Dầu hạ, core services hạ nhiệt, Fed dừng tăng và có thể cắt vào 2027. Equity mở rộng ra ngoài mega-cap; bond rally; EM và Việt Nam hưởng lợi từ USD yếu và dòng vốn quay lại.",
      trigger: "CPI < 3%, 10Y < 4.5%, Brent < $70, core PCE < 2.8%"
    },
    {
      kind: "base",
      label: "Base case",
      title: "Sticky reflation, one more hike",
      body: "CPI dao động 3–4%, Fed tăng thêm một lần vào tháng 12, 10Y 5–5.5%. Earnings vẫn tốt nhưng multiple tiếp tục bị nén; thị trường đi ngang và phân hóa mạnh. Chất lượng, pricing power và dòng tiền hiện tại thắng.",
      trigger: "Core PCE > 3%, payrolls > 150k, 10Y > 5.25%, Dec hike odds > 70%"
    },
    {
      kind: "bear",
      label: "Bear case",
      title: "AI capex accident / credit event",
      body: "Một hyperscaler hoặc neocloud cắt capex hoặc vỡ nợ; spread mở rộng, private credit stress, equity de-rate 20–30%. Bond rally vì flight-to-quality; vàng tăng; crypto giảm mạnh hơn equity vì là high-beta liquidity.",
      trigger: "Capex guidance cut, HY spread > 500bp, neocloud default, AI debt issuance bị đảo chiều"
    },
    {
      kind: "tail",
      label: "Tail risk",
      title: "Hard landing / policy error",
      body: "Thị trường lao động nứt gãy, Fed tăng quá tay rồi phải cắt muộn. Bond rally mạnh; equity de-rate rồi hồi phục; rủi ro lớn nhất là suy thoái lợi nhuận đồng thời với lạm phát còn cao.",
      trigger: "Unemployment > 4.6%, claims > 300k, ISM < 45, credit spread blow-out"
    }
  ],

  vnMetrics: [
    { label: "GDP 9T 2026", value: "+9.01%", note: "Quý III +9.95%; mục tiêu 2027: 10%+" },
    { label: "CPI bình quân", value: "4.52%", note: "9 tháng; core thấp hơn headline" },
    { label: "Refinancing rate", value: "4.5%", note: "Giữ nguyên; real rate gần 0" },
    { label: "USD/VND", value: "26,050", note: "Thị trường tự do; áp lực tỷ giá" },
    { label: "SJC gold", value: "143.1tr", note: "đ/lượng; premium ~12tr so với thế giới" },
    { label: "VN-Index", value: "1,691.97", note: "Test đáy 7/2026: 1,650–1,680" }
  ],

  sources: [
    { label: "FOMC Minutes, 15–16/09/2026 — Fed tăng lên 3.75–4.00%", url: "https://www.federalreserve.gov/monetarypolicy/fomcminutes20260916.htm", date: "16.09.2026" },
    { label: "BLS — CPI tháng 9/2026", url: "https://www.bls.gov/news.release/cpi.nr0.htm", date: "14.10.2026" },
    { label: "Trading Economics — US 10Y yield", url: "https://tradingeconomics.com/united-states/government-bond-yield", date: "19.10.2026" },
    { label: "Morningstar / Dow Jones — S&P 500 tại 7,690.73", url: "https://www.morningstar.com/news/dow-jones/202610197062/sp-500-rises-041-to-769073-data-talk", date: "19.10.2026" },
    { label: "Motley Fool — CAPE quanh 41", url: "https://www.fool.com/investing/2026/10/19/a-cfp-r-s-take-on-the-scariest-chart-in-the-stock-market-right-now/", date: "19.10.2026" },
    { label: "CNBC — Gartner cảnh báo về AI neocloud build-out", url: "https://www.cnbc.com/2026/10/19/gartner-analyst-warns-about-ai-neccloud-build-out.html", date: "19.10.2026" },
    { label: "Pintu / CoinMarketCap — BTC và CPI tháng 9", url: "https://pintu.co.id/en/academy/post/crypto-market-analysis-today-october-19-2026-bitcoin-holds-above-80000-as-us-inflation-rises-to-3-7", date: "19.10.2026" },
    { label: "Công Thương — Giá vàng 20/10/2026", url: "https://congthuong.vn/gia-vang-hom-nay-20-10-ap-sat-nguong-4-200-usd-477279.html", date: "20.10.2026" },
    { label: "Vietnam.vn — GDP 9 tháng tăng 9.01%", url: "https://www.vietnam.vn/kinh-te-viet-nam-tang-truong-9-01-trong-9-thang-nam-2026", date: "10.2026" },
    { label: "Công Thương — GDP quý III tăng 9.95%", url: "https://congthuong.vn/gdp-quy-iii-dat-9-95-tang-toc-tu-noi-luc-475649.html", date: "08.10.2026" },
    { label: "Báo cáo viên — CPI bình quân 9 tháng 4.52%", url: "https://baocaovien.vn/tin-tuc/nguon-cung-hang-hoa-co-ban-duoc-thong-suot-cpi-binh-quan-9-thang-o-muc-4-52/428485.html", date: "10.2026" },
    { label: "Nhà đầu tư / UOB — SBV giữ lãi suất tái cấp vốn 4.5%", url: "https://nhadautu.vn/uob-nhnn-se-duy-tri-on-dinh-lai-suat-tai-cap-von-o-muc-45-d101754.html", date: "2026" },
    { label: "Công Thương — NHNN giữ nguyên lãi suất điều hành", url: "https://congthuong.vn/ngan-hang-nha-nuoc-tra-loi-ve-dieu-hanh-chinh-sach-lai-suat-450369.html", date: "04.2026" },
    { label: "Vietstock / PHS — VN-Index 1,691.97 ngày 20/10", url: "https://www.phs.vn/tin-tuc/vietstock-daily-21102026-no-luc-can-bang/6441005", date: "20.10.2026" }
  ],

  disclaimer: "Đây là tài liệu học tập và tổng hợp thông tin, không phải khuyến nghị đầu tư. Dữ liệu macro thay đổi hàng ngày; các con số được chốt tại thời điểm ghi trên. Tự kiểm chứng trước khi ra quyết định."
};
