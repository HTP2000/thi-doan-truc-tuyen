// Ngân hàng câu hỏi số 1: Luật Thanh niên năm 2020 (20 câu)
var luatThanhNienQuestions = [
  {
    q: "Câu 1: Theo Luật Thanh niên năm 2020, thanh niên là công dân Việt Nam từ đủ bao nhiêu tuổi đến bao nhiêu tuổi?",
    options: [
      { text: "Từ đủ 15 tuổi đến 28 tuổi", correct: false },
      { text: "Từ đủ 16 tuổi đến 30 tuổi", correct: true },
      { text: "Từ đủ 18 tuổi đến 30 tuổi", correct: false },
      { text: "Từ đủ 16 tuổi đến 35 tuổi", correct: false }
    ]
  },
  {
    q: "Câu 2: Luật Thanh niên số 57/2020/QH14 được Quốc hội nước CHXHCN Việt Nam khóa XIV thông qua vào ngày nào và có hiệu lực thi hành từ ngày nào?",
    options: [
      { text: "Thông qua ngày 16/6/2020; có hiệu lực từ ngày 01/01/2021", correct: true },
      { text: "Thông qua ngày 20/11/2020; có hiệu lực từ ngày 01/07/2021", correct: false },
      { text: "Thông qua ngày 16/6/2020; có hiệu lực từ ngày 01/06/2021", correct: false },
      { text: "Thông qua ngày 26/3/2020; có hiệu lực từ ngày 01/01/2021", correct: false }
    ]
  },
  {
    q: "Câu 3: Luật Thanh niên năm 2020 bao gồm bao nhiêu Chương và bao nhiêu Điều?",
    options: [
      { text: "6 Chương, 36 Điều", correct: false },
      { text: "7 Chương, 41 Điều", correct: true },
      { text: "8 Chương, 45 Điều", correct: false },
      { text: "7 Chương, 39 Điều", correct: false }
    ]
  },
  {
    q: "Câu 4: Theo Luật Thanh niên năm 2020, ngày nào hằng năm được quy định là Tháng Thanh niên?",
    options: [
      { text: "Tháng 1", correct: false },
      { text: "Tháng 3", correct: true },
      { text: "Tháng 5", correct: false },
      { text: "Tháng 10", correct: false }
    ]
  },
  {
    q: "Câu 5: Cơ quan nào có trách nhiệm chủ trì, phối hợp với các cơ quan, tổ chức liên quan để tổ chức thực hiện Tháng Thanh niên?",
    options: [
      { text: "Bộ Văn hóa, Thể thao và Du lịch", correct: false },
      { text: "Bộ Lao động - Thương binh và Xã hội", correct: false },
      { text: "Đoàn Thanh niên Cộng sản Hồ Chí Minh", correct: true },
      { text: "Bộ Tư pháp", correct: false }
    ]
  },
  {
    q: "Câu 6: Chương II của Luật Thanh niên năm 2020 quy định về nội dung gì?",
    options: [
      { text: "Những quy định chung", correct: false },
      { text: "Trách nhiệm của thanh niên", correct: true },
      { text: "Chính sách của Nhà nước đối với thanh niên", correct: false },
      { text: "Trách nhiệm của tổ chức thanh niên", correct: false }
    ]
  },
  {
    q: "Câu 7: Theo Luật Thanh niên 2020, trách nhiệm của thanh niên được quy định đối với những chủ thể nào sau đây?",
    options: [
      { text: "Đối với Tổ quốc; Nhà nước và xã hội; Gia đình; Bản thân", correct: true },
      { text: "Đối với Đảng; Nhà nước; Bạn bè; Xã hội", correct: false },
      { text: "Đối với Cộng đồng; Gia đình; Cơ quan; Bản thân", correct: false },
      { text: "Đối với Tổ quốc; Quân đội; Nhà trường; Xã hội", correct: false }
    ]
  },
  {
    q: "Câu 8: Đâu là một trong các hành vi bị nghiêm cấm được quy định tại Điều 8 Luật Thanh niên năm 2020?",
    options: [
      { text: "Tham gia các hoạt động thiện nguyện tự phát", correct: false },
      { text: "Phân biệt đối xử về giới tính, dân tộc, thành phần xã hội, tín ngưỡng, tôn giáo trong thực hiện quyền, nghĩa vụ của thanh niên", correct: true },
      { text: "Thành lập câu lạc bộ sở thích của thanh niên khi chưa có giấy phép", correct: false },
      { text: "Đi học tập hoặc làm việc tại nước ngoài", correct: false }
    ]
  },
  {
    q: "Câu 9: Theo Luật Thanh niên năm 2020, tổ chức nào sau đây giữ vai trò là hạt nhân chính trị của phong trào thanh niên Việt Nam?",
    options: [
      { text: "Hội Liên hiệp Thanh niên Việt Nam", correct: false },
      { text: "Hội Sinh viên Việt Nam", correct: false },
      { text: "Đoàn Thanh niên Cộng sản Hồ Chí Minh", correct: true },
      { text: "Ủy ban Quốc gia về thanh niên Việt Nam", correct: false }
    ]
  },
  {
    q: "Câu 10: Theo quy định của Luật Thanh niên 2020, Thủ tướng Chính phủ, Chủ tịch Ủy ban nhân dân các cấp có trách nhiệm gì đối với thanh niên?",
    options: [
      { text: "Tổ chức đối thoại với thanh niên ít nhất mỗi năm 01 lần", correct: true },
      { text: "Tổ chức đối thoại với thanh niên mỗi quý 01 lần", correct: false },
      { text: "Tổ chức đối thoại với thanh niên 2 năm 01 lần", correct: false },
      { text: "Gặp mặt đại biểu thanh niên tiêu biểu 5 năm 01 lần", correct: false }
    ]
  },
  {
    q: "Câu 11: Trong thời hạn bao nhiêu ngày kể từ ngày kết thúc hoạt động đối thoại, cơ quan nhà nước có thẩm quyền phải thông báo kết luận cuộc đối thoại đến thanh niên?",
    options: [
      { text: "05 ngày làm việc", correct: false },
      { text: "10 ngày làm việc", correct: true },
      { text: "15 ngày làm việc", correct: false },
      { text: "30 ngày", correct: false }
    ]
  },
  {
    q: "Câu 12: Luật Thanh niên 2020 quy định chính sách của Nhà nước đối với bao nhiêu nhóm thanh niên đặc thù (Chương III)?",
    options: [
      { text: "4 nhóm đối tượng", correct: false },
      { text: "5 nhóm đối tượng", correct: false },
      { text: "6 nhóm đối tượng", correct: true },
      { text: "7 nhóm đối tượng", correct: false }
    ]
  },
  {
    q: "Câu 13: Theo Điều 22 Luật Thanh niên 2020, thanh niên xung phong là gì?",
    options: [
      { text: "Lực lượng tham gia các hoạt động nhân đạo, từ thiện đột xuất", correct: false },
      { text: "Lực lượng xung kích của thanh niên tham gia thực hiện các nhiệm vụ phát triển kinh tế - xã hội, giải quyết việc khó, cấp bách, khắc phục hậu quả thiên tai, dịch bệnh và bảo vệ Tổ quốc", correct: true },
      { text: "Toàn bộ đoàn viên thanh niên công tác tại các cơ quan nhà nước", correct: false },
      { text: "Thanh niên đang trong độ tuổi thực hiện nghĩa vụ quân sự", correct: false }
    ]
  },
  {
    q: "Câu 14: Theo quy định tại Điều 24 Luật Thanh niên 2020, chính sách của Nhà nước đối với 'Thanh niên có tài năng' là gì?",
    options: [
      { text: "Cấp nhà ở miễn phí trọn đời cho toàn bộ thanh niên tốt nghiệp xuất sắc", correct: false },
      { text: "Nhà nước có chính sách phát hiện, đào tạo, bồi dưỡng, thu hút, trọng dụng và đãi ngộ xứng đáng đối với thanh niên có tài năng", correct: true },
      { text: "Miễn thực hiện toàn bộ các nghĩa vụ công dân", correct: false },
      { text: "Ưu tiên cấp visa xuất cảnh định cư tại nước ngoài", correct: false }
    ]
  },
  {
    q: "Câu 15: Nhóm đối tượng nào sau đây được dành riêng một điều luật (Điều 26) trong nhóm chính sách thanh niên đặc thù vì là lứa tuổi chuyển tiếp giữa trẻ em và người trưởng thành?",
    options: [
      { text: "Thanh niên từ đủ 16 tuổi đến dưới 18 tuổi", correct: true },
      { text: "Thanh niên từ đủ 18 tuổi đến 22 tuổi", correct: false },
      { text: "Thanh niên từ đủ 20 tuổi đến 25 tuổi", correct: false },
      { text: "Thanh niên dưới 16 tuổi", correct: false }
    ]
  },
  {
    q: "Câu 16: Theo Luật Thanh niên 2020, Ủy ban Quốc gia về thanh niên Việt Nam là tổ chức có chức năng gì?",
    options: [
      { text: "Là một bộ chuyên ngành thuộc Chính phủ quản lý công tác thanh niên", correct: false },
      { text: "Là tổ chức phối hợp liên ngành, có chức năng tư vấn giúp Thủ tướng Chính phủ về công tác thanh niên", correct: true },
      { text: "Là một doanh nghiệp trực thuộc Đoàn TNCS Hồ Chí Minh", correct: false },
      { text: "Là cơ quan tư pháp chuyên xét xử các vi phạm của thanh niên", correct: false }
    ]
  },
  {
    q: "Câu 17: Cơ quan nào chịu trách nhiệm trước Chính phủ thực hiện quản lý nhà nước về thanh niên trên phạm vi cả nước?",
    options: [
      { text: "Bộ Giáo dục và Đào tạo", correct: false },
      { text: "Bộ Lao động - Thương binh và Xã hội", correct: false },
      { text: "Bộ Nội vụ", correct: true },
      { text: "Bộ Tư pháp", correct: false }
    ]
  },
  {
    q: "Câu 18: Theo Điều 39 Luật Thanh niên 2020, gia đình có trách nhiệm như thế nào đối với thanh niên?",
    options: [
      { text: "Quản lý toàn bộ thu nhập và tiền lương của thanh niên cho đến khi kết hôn", correct: false },
      { text: "Tôn trọng, lắng nghe ý kiến của thanh niên; giáo dục, rèn luyện đạo đức, lối sống; định hướng nghề nghiệp, tạo điều kiện cho thanh niên phát triển", correct: true },
      { text: "Bắt buộc thanh niên phải lựa chọn ngành nghề theo ý muốn của cha mẹ", correct: false },
      { text: "Phải bảo lãnh tài chính cho thanh niên đến năm 30 tuổi", correct: false }
    ]
  },
  {
    q: "Câu 19: Theo Điều 16 Luật Thanh niên 2020, chính sách của Nhà nước về học tập và nghiên cứu khoa học đối với thanh niên bao gồm nội dung nào?",
    options: [
      { text: "Bảo đảm việc làm có thu nhập cao ngay sau khi tốt nghiệp", correct: false },
      { text: "Bảo đảm bình đẳng trong tiếp cận giáo dục; có chính sách tín dụng ưu đãi học sinh, sinh viên; khuyến khích tài trợ cho nghiên cứu khoa học của thanh niên", correct: true },
      { text: "Cấp học bổng toàn phần vô điều kiện cho 100% sinh viên", correct: false },
      { text: "Miễn học phí hoàn toàn ở tất cả các cấp học từ mầm non đến đại học", correct: false }
    ]
  },
  {
    q: "Câu 20: Nguyên tắc bảo đảm thực hiện quyền, nghĩa vụ của thanh niên và chính sách của Nhà nước đối với thanh niên được quy định như thế nào (Điều 5)?",
    options: [
      { text: "Quyền và nghĩa vụ của thanh niên được công nhận, tôn trọng, bảo vệ và bảo đảm theo quy định của Hiến pháp và pháp luật", correct: true },
      { text: "Ưu tiên quyền lợi tuyệt đối cho thanh niên so với các lứa tuổi khác", correct: false },
      { text: "Không áp dụng nghĩa vụ quân sự đối với thanh niên đang đi làm", correct: false },
      { text: "Chỉ bảo đảm quyền lợi cho thanh niên có quốc tịch kép", correct: false }
    ]
  }
];

// Ngân hàng câu hỏi số 2: Nghị quyết Đại hội Đoàn XIII (20 câu)
var nghiQuyetDoanQuestions = [
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
