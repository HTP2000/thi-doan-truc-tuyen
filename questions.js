var rawQuestions = [
  {
    q: "Câu 1: Đại hội đại biểu toàn quốc Đoàn TNCS Hồ Chí Minh lần thứ XIII (nhiệm kỳ 2026 - 2031) diễn ra tại đâu và vào thời gian nào?",
    options: [
      { text: "Từ ngày 15/6 đến 16/6/2026 tại TP. Hồ Chí Minh", correct: false },
      { text: "Từ ngày 24/6 đến 25/6/2026 tại Thủ đô Hà Nội", correct: true },
      { text: "Từ ngày 20/7 đến 22/7/2026 tại Đà Nẵng", correct: false },
      { text: "Từ ngày 14/12 đến 16/12/2026 tại Thủ đô Hà Nội", correct: false }
    ]
  },
  {
    q: "Câu 2: Khẩu hiệu hành động chính thức của Đại hội Đoàn toàn quốc lần thứ XIII (nhiệm kỳ 2026 - 2031) là gì?",
    options: [
      { text: "Khát vọng - Tiên phong - Đoàn kết - Bản lĩnh - Sáng tạo", correct: false },
      { text: "Bản lĩnh tự cường - Tiên phong sáng tạo - Khát vọng cống hiến - Làm chủ tương lai", correct: true },
      { text: "Tiên phong đổi mới - Vững bước hội nhập - Đoàn kết phát triển - Vì tương lai", correct: false },
      { text: "Thanh niên xung kích - Khát vọng cống hiến - Tiên phong kỷ nguyên số", correct: false }
    ]
  },
  {
    q: "Câu 3: Nghị quyết Đại hội Đoàn toàn quốc lần thứ XIII xác định bao nhiêu chỉ tiêu trọng tâm công tác Đoàn và phong trào thanh thiếu nhi giai đoạn 2026 - 2031?",
    options: [
      { text: "10 chỉ tiêu", correct: false },
      { text: "12 chỉ tiêu", correct: false },
      { text: "13 chỉ tiêu", correct: true },
      { text: "15 chỉ tiêu", correct: false }
    ]
  },
  {
    q: "Câu 4: Chỉ tiêu nhiệm kỳ 2026 - 2031 xác định có bao nhiêu lượt đoàn viên, thanh niên tham gia các hoạt động tình nguyện do tổ chức Đoàn, Hội tổ chức?",
    options: [
      { text: "50 triệu lượt", correct: false },
      { text: "70 triệu lượt", correct: false },
      { text: "80 triệu lượt", correct: false },
      { text: "100 triệu lượt", correct: true }
    ]
  },
  {
    q: "Câu 5: Về phát triển KHCN và chuyển đổi số, Đại hội XIII đề ra chỉ tiêu thực hiện bao nhiêu công trình thanh niên các cấp tham gia phát triển, ứng dụng KHCN, đổi mới sáng tạo và chuyển đổi số?",
    options: [
      { text: "50.000 công trình", correct: false },
      { text: "80.000 công trình", correct: false },
      { text: "100.000 công trình", correct: true },
      { text: "150.000 công trình", correct: false }
    ]
  },
  {
    q: "Câu 6: Theo Nghị quyết Đại hội XIII, chỉ tiêu hàng năm đối với cấp Đoàn xã, phường, đặc khu về bảo vệ môi trường là gì?",
    options: [
      { text: "Xóa ít nhất 01 điểm đen về ô nhiễm môi trường và duy trì bền vững kết quả", correct: true },
      { text: "Xây dựng ít nhất 02 vườn ươm cây thanh niên", correct: false },
      { text: "Thu gom 10 tấn rác thải nhựa tại các điểm dân cư", correct: false },
      { text: "Tổ chức 04 đợt ra quân Ngày Chủ nhật xanh", correct: false }
    ]
  },
  {
    q: "Câu 7: Chỉ tiêu công trình thanh niên hỗ trợ hạ tầng dân sinh tại khu vực biên giới, biển đảo được quy định như thế nào trong Nghị quyết Đại hội XIII?",
    options: [
      { text: "Hằng năm, 100% Đoàn cấp tỉnh triển khai tối thiểu 01 công trình thanh niên hỗ trợ xây dựng/nâng cấp hạ tầng dân sinh tại xã, phường, đặc khu biên giới, biển đảo", correct: true },
      { text: "Mỗi nhiệm kỳ, mỗi tỉnh đoàn thực hiện ít nhất 10 công trình tại hải đảo", correct: false },
      { text: "100% huyện biên giới có công trình nước sạch của thanh niên", correct: false },
      { text: "Toàn quốc xây dựng 500 nhà văn hóa thanh niên tại vùng biên giới", correct: false }
    ]
  },
  {
    q: "Câu 8: Theo Nghị quyết Đại hội XIII, tỷ lệ thanh thiếu nhi tham gia các hoạt động nâng cao năng lực số và sử dụng khoa học công nghệ do tổ chức Đoàn, Hội, Đội tổ chức đạt mức tối thiểu là bao nhiêu?",
    options: [
      { text: "Ít nhất 60%", correct: false },
      { text: "Ít nhất 70%", correct: false },
      { text: "Ít nhất 80%", correct: true },
      { text: "Ít nhất 90%", correct: false }
    ]
  },
  {
    q: "Câu 9: Đại hội XIII đặt chỉ tiêu hỗ trợ đầu ra (sản phẩm/dịch vụ) cho bao nhiêu dự án khởi nghiệp đổi mới sáng tạo của thanh niên?",
    options: [
      { text: "Ít nhất 500 dự án", correct: false },
      { text: "Ít nhất 750 dự án", correct: true },
      { text: "Ít nhất 1.000 dự án", correct: false },
      { text: "Ít nhất 2.000 dự án", correct: false }
    ]
  },
  {
    q: "Câu 10: Chỉ tiêu số lượng thanh thiếu nhi tham gia các chương trình bồi dưỡng, nâng cao năng lực sử dụng ngoại ngữ và hội nhập quốc tế trong nhiệm kỳ 2026 - 2031 là bao nhiêu?",
    options: [
      { text: "5 triệu thanh thiếu nhi", correct: false },
      { text: "8 triệu thanh thiếu nhi", correct: false },
      { text: "10 triệu thanh thiếu nhi", correct: true },
      { text: "12 triệu thanh thiếu nhi", correct: false }
    ]
  },
  {
    q: "Câu 11: Trong giai đoạn 2026 - 2031, toàn Đoàn phấn đấu hỗ trợ bao nhiêu thiếu nhi có hoàn cảnh khó khăn?",
    options: [
      { text: "2 triệu thiếu nhi", correct: false },
      { text: "3 triệu thiếu nhi", correct: false },
      { text: "4 triệu thiếu nhi", correct: true },
      { text: "5 triệu thiếu nhi", correct: false }
    ]
  },
  {
    q: "Câu 12: Về công tác quản lý tổ chức, Nghị quyết Đại hội XIII đề ra chỉ tiêu số hóa thông tin đoàn viên và cán bộ Đoàn như thế nào?",
    options: [
      { text: "Đạt 80% số hóa thông tin trên nền tảng mạng xã hội", correct: false },
      { text: "Hằng năm, 100% thông tin đoàn viên, cán bộ đoàn các cấp được số hóa trên Phần mềm Quản lý đoàn viên", correct: true },
      { text: "90% cơ sở đoàn triển khai sổ đoàn viên điện tử", correct: false },
      { text: "Hoàn thành số hóa 100% hồ sơ trước năm 2030", correct: false }
    ]
  },
  {
    q: "Câu 13: Theo Nghị quyết Đại hội XIII, chỉ tiêu tỷ lệ đoàn kết tập hợp thanh niên phấn đấu đạt mức bao nhiêu?",
    options: [
      { text: "Đạt 65%", correct: false },
      { text: "Đạt 70%", correct: false },
      { text: "Đạt 75%", correct: false },
      { text: "Đạt 80%", correct: true }
    ]
  },
  {
    q: "Câu 14: Nghị quyết Đại hội Đoàn toàn quốc lần thứ XIII đặt chỉ tiêu giới thiệu bao nhiêu đoàn viên ưu tú cho Đảng xem xét kết nạp?",
    options: [
      { text: "500.000 đoàn viên ưu tú", correct: false },
      { text: "800.000 đoàn viên ưu tú", correct: false },
      { text: "1.000.000 đoàn viên ưu tú", correct: true },
      { text: "1.200.000 đoàn viên ưu tú", correct: false }
    ]
  },
  {
    q: "Câu 15: Phong trào hành động cách mạng chủ đạo được triển khai trong nhiệm kỳ 2026 - 2031 theo Nghị quyết Đại hội XIII là phong trào nào?",
    options: [
      { text: "Phong trào 'Tuổi trẻ sáng tạo và khởi nghiệp'", correct: false },
      { text: "Phong trào 'Tuổi trẻ Việt Nam tiên phong trong kỷ nguyên mới'", correct: true },
      { text: "Phong trào 'Thanh niên tình nguyện vì cộng đồng'", correct: false },
      { text: "Phong trào 'Xung kích phát triển kinh tế - xã hội'", correct: false }
    ]
  },
  {
    q: "Câu 16: Phong trào 'Tuổi trẻ Việt Nam tiên phong trong kỷ nguyên mới' bao gồm bao nhiêu nội dung 'tiên phong'?",
    options: [
      { text: "3 tiên phong", correct: false },
      { text: "4 tiên phong", correct: false },
      { text: "5 tiên phong", correct: true },
      { text: "6 tiên phong", correct: false }
    ]
  },
  {
    q: "Câu 17: Nội dung nào dưới đây KHÔNG nằm trong 5 nội dung 'tiên phong' của Phong trào 'Tuổi trẻ Việt Nam tiên phong trong kỷ nguyên mới'?",
    options: [
      { text: "Tiên phong phát triển khoa học công nghệ, đổi mới sáng tạo và chuyển đổi số", correct: false },
      { text: "Tiên phong khởi nghiệp lập nghiệp, phát triển kinh tế đất nước", correct: false },
      { text: "Tiên phong tham gia xuất khẩu lao động tại các nước phát triển", correct: true },
      { text: "Tiên phong trong các hoạt động tình nguyện vì cộng đồng", correct: false }
    ]
  },
  {
    q: "Câu 18: Chương trình đồng hành, chăm lo cho thanh thiếu nhi được Đại hội XIII xác định có tên gọi chính thức là gì?",
    options: [
      { text: "Chương trình 'Đồng hành với thanh niên lập thân, lập nghiệp'", correct: false },
      { text: "Chương trình 'Phát triển toàn diện thanh niên Việt Nam'", correct: true },
      { text: "Chương trình 'Chăm lo thế hệ măng non đất nước'", correct: false },
      { text: "Chương trình 'Nâng bước thanh niên Việt Nam hội nhập'", correct: false }
    ]
  },
  {
    q: "Câu 19: Chương trình 'Phát triển toàn diện thanh niên Việt Nam' nhiệm kỳ 2026 - 2031 tập trung vào các mặt trọng tâm nào?",
    options: [
      { text: "Du học, việc làm công nghệ cao và bảo hiểm xã hội", correct: false },
      { text: "Học tập; rèn luyện, phát triển thể chất; nâng cao đời sống văn hóa tinh thần", correct: true },
      { text: "Quản lý tài chính cá nhân, đầu tư chứng khoán và kinh doanh bất động sản", correct: false },
      { text: "Kỹ năng giao tiếp, nghệ thuật sân khấu và nhiếp ảnh", correct: false }
    ]
  },
  {
    q: "Câu 20: Mô hình tổ chức nào của Đoàn được Nghị quyết Đại hội XIII đặc biệt nhấn mạnh củng cố, gắn liền với việc sắp xếp đơn vị hành chính và phát triển cơ sở?",
    options: [
      { text: "Đoàn cơ sở tại các trường quốc tế", correct: false },
      { text: "Đội ngũ cán bộ và tổ chức Đoàn tại cấp xã, phường, đặc khu", correct: true },
      { text: "Các chi đoàn doanh nghiệp có vốn đầu tư nước ngoài", correct: false },
      { text: "Các câu lạc bộ thanh niên du học sinh tự do", correct: false }
    ]
  }
];
