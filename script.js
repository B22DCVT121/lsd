const quizData = [
    {
      question: "Cuối thế kỷ 19 đầu thế kỷ XX, nguy cơ nào do các nước đế quốc gây ra chi phối trực tiếp đến lịch sử của nhiều nước Châu Á, Châu Phi, trong đó có Việt Nam?",
      options: ["Sự phát triển vượt bậc của nền kinh tế", "Sự hình thành các tổ chức độc quyền", "Tăng cường xâm lược thuộc địa", "Chuẩn bị chiến tranh để chia lại thị trường thế giới"],
      answer: "Tăng cường xâm lược thuộc địa",
    },
    {
      question: "Năm 1922, Nguyễn Phan Long, Bùi Quang Chiêu đã thành lập tổ chức chính trị nào để tập hợp quần chúng đấu tranh?",
      options: ["Việt Nam Quốc dân Đảng", "Đảng Thanh niên", "Đảng Lập pháp", "Đảng Lập hiến"],
      answer: "Đảng Lập hiến",
    },
    {
      question: "Thời gian thực dân Pháp tiến hành khai thác thuộc địa lần thứ nhất ở Việt Nam khi nào?",
      options: ["1858-1884", "1884-1896", "1896-1913", "1914-1918"],
      answer: "1896-1913",
    },
    {
      question: "Trong đợt khai thác thuộc địa lần thứ nhất của thực dân Pháp ở nước ta có giai cấp mới nào được hình thành?",
      options: ["Giai cấp tư sản", "Giai cấp tư sản và công nhân", "Giai cấp công nhân", "Giai cấp tiểu tư sản"],
      answer: "Giai cấp công nhân",
    },
    {
      question: "Trước Chiến tranh thế giới thứ nhất, ở Việt Nam có những giai cấp, tầng lớp nào?",
      options: ["Địa chủ phong kiến và nông dân", "Địa chủ phong kiến, nông dân, tư sản, tiểu tư sản và công nhân", "Địa chủ phong kiến, nông dân và công nhân", "Địa chủ phong kiến, nông dân và tiểu tư sản"],
      answer: "Địa chủ phong kiến, nông dân, tư sản, tiểu tư sản và công nhân",
    },
    {
      question: "Dưới chế độ thực dân phong kiến, giai cấp nông dân Việt Nam có yêu cầu bức thiết nhất là gì?",
      options: ["Độc lập dân tộc", "Ruộng đất", "Quyền bình đẳng nam nữ", "Được giảm tô, giảm tức"],
      answer: "Ruộng đất",
    },
    {
      question: "Chọn phương án đúng nhất: Mâu thuẫn cơ bản và chủ yếu ở Việt Nam đầu thế kỷ XX là mâu thuẫn nào?",
      options: [
        "Mâu thuẫn giữa giai cấp nông dân với giai cấp địa chủ phong kiến",
        "Mâu thuẫn giữa giai cấp công nhân với giai cấp tư sản",
        "Mâu thuẫn giữa công nhân và nông dân với đế quốc và phong kiến",
        "Mâu thuẫn giữa toàn thể dân tộc Việt Nam với đế quốc xâm lược và tay sai của chúng",
      ],
      answer: "Mâu thuẫn giữa toàn thể dân tộc Việt Nam với đế quốc xâm lược và tay sai của chúng",
    },
    {
      question: "Đặc điểm nổi bật ra đời của giai cấp công nhân Việt Nam như thế nào?",
      options: [
        "Ra đời trước giai cấp tư sản, trong cuộc khai thác thuộc địa lần thứ nhất của thực dân Pháp",
        "Phần lớn xuất thân từ nông dân",
        "Chịu sự áp bức và bóc lột của đế quốc, phong kiến và tư sản",
        "Cả a, b và c",
      ],
      answer: "Cả a, b và c",
    },
    {
      question: "Chọn đáp án đúng nhất: Những giai cấp bị trị ở Việt Nam dưới chế độ thuộc địa của đế quốc Pháp là?",
      options: [
        "Công nhân và nông dân",
        "Công nhân, nông dân, tiểu tư sản",
        "Công nhân, nông dân, tiểu tư sản, tư sản dân tộc",
        "Công nhân, nông dân, tiểu tư sản, tư sản dân tộc, địa chủ vừa và nhỏ",
      ],
      answer: "Công nhân, nông dân, tiểu tư sản, tư sản dân tộc, địa chủ vừa và nhỏ",
    },
    {
      question: "Khi nào phong trào công nhân Việt Nam hoàn toàn trở thành một phong trào tự giác?",
      options: [
        "Năm 1920 (tổ chức Công hội ở Sài Gòn được thành lập)",
        "Năm 1925 (cuộc bãi công Ba Son)",
        "Năm 1929 (sự ra đời ba tổ chức cộng sản)",
        "Năm 1930 (Đảng Cộng sản Việt Nam ra đời)",
      ],
      answer: "Năm 1930 (Đảng Cộng sản Việt Nam ra đời)",
    },
    {
      question: "Nguyễn Ái Quốc lựa chọn con đường giải phóng dân tộc theo khuynh hướng chính trị vô sản vào thời gian nào?",
      options: ["1917", "1918", "1919", "1920"],
      answer: "1920",
    },
    {
      question: "Hội Việt Nam Cách mạng Thanh niên đã làm gì để truyền bá mạnh mẽ chủ nghĩa Mác-Lênin vào Việt Nam?",
      options: [
        "Bí mật đưa tác phẩm Đường cách mệnh của Nguyễn Ái Quốc về nước",
        "Đưa báo Thanh niên về nước",
        "Thực hiện chủ trương 'vô sản hóa'",
        "Đưa lý luận giải phóng dân tộc của Nguyễn Ái Quốc về nước",
      ],
      answer: "Thực hiện chủ trương 'vô sản hóa'",
    },
    {
      question: "Báo Đời sống Công nhân là của tổ chức nào?",
      options: [
        "Đảng Xã hội Pháp",
        "Đảng Cộng sản Pháp",
        "Tổng Liên đoàn Lao động Pháp",
        "Hội Liên hiệp thuộc địa",
      ],
      answer: "Tổng Liên đoàn Lao động Pháp",
    },
    {
      question: "Hội Liên hiệp thuộc địa được thành lập vào năm nào?",
      options: ["1920", "1921", "1923", "1924"],
      answer: "1921",
    },
    {
      question: "Nguyễn Ái Quốc đã đọc Sơ thảo lần thứ nhất Luận cương về vấn đề dân tộc và vấn đề thuộc địa khi nào? Ở đâu?",
      options: [
        "7/1920 - Liên Xô",
        "7/1920 - Pháp",
        "7/1920 - Quảng Châu (Trung Quốc)",
        "8/1920 - Trung Quốc",
      ],
      answer: "7/1920 - Pháp",
    },
    {
      question: "Sự kiện gắn với hoạt động của Nguyễn Ái Quốc ở Liên Xô đó là?",
      options: [
        "Bỏ phiếu tán thành Quốc tế thứ III",
        "Dự đại hội lần thứ 5 của Quốc tế Cộng sản",
        "Dự đại hội lần thứ 7 của Quốc tế Cộng sản",
        "Viết tác phẩm Bản án chế độ thực dân Pháp",
      ],
      answer: "Dự đại hội lần thứ 5 của Quốc tế Cộng sản",
    },
    {
      "question": "Việt Nam Quang Phục hội chuyển hướng về hoạt động trong nước Việt Nam từ khi...",
      "options": [
        "Chiến tranh thế giới thứ nhất bùng nổ",
        "Chiến tranh thế giới bước vào giai đoạn quyết liệt",
        "Việt Nam bị ảnh hưởng nặng nề của chiến tranh thế giới thứ nhất",
        "Chiến tranh thế giới thứ nhất kết thúc"
      ],
      "answer": "Chiến tranh thế giới bước vào giai đoạn quyết liệt"
    },
    {
      "question": "Sự kiện nào được Nguyễn Ái Quốc đánh giá 'như chim én nhỏ báo hiệu mùa Xuân'?",
      "options": [
        "Cách mạng tháng Mười Nga bùng nổ và thắng lợi",
        "Sự thành lập Đảng Cộng sản Pháp",
        "Vụ mưu sát tên toàn quyền Méclanh của Phạm Hồng Thái",
        "Sự thành lập Hội Việt Nam cách mạng Thanh niên"
      ],
      "answer": "Vụ mưu sát tên toàn quyền Méclanh của Phạm Hồng Thái"
    },
    {
      "question": "Phong trào đòi trả tự do cho cụ Phan Bội Châu diễn ra sôi nổi năm nào?",
      "options": [
        "1924",
        "1925",
        "1926",
        "1927"
      ],
      "answer": "1925"
    },
    {
      "question": "Nguyễn Ái Quốc từ Liên Xô về Quảng Châu (Trung Quốc) vào thời gian nào?",
      "options": [
        "12/1924",
        "12/1925",
        "11/1924",
        "10/1924"
      ],
      "answer": "12/1924"
    },
    {
      "question": "Hội Việt Nam Cách mạng Thanh niên thực hiện chủ trương 'vô sản hóa' khi nào?",
      "options": [
        "Cuối năm 1926 đầu năm 1927",
        "Cuối năm 1927 đầu năm 1928",
        "Cuối năm 1928 đầu năm 1929",
        "Cuối năm 1929 đầu năm 1930"
      ],
      "answer": "Cuối năm 1928 đầu năm 1929"
    },
    {
      "question": "Tên chính thức của tổ chức này được đặt tại Đại hội lần thứ nhất ở Quảng Châu (tháng 5-1929) là gì?",
      "options": [
        "Việt Nam Thanh niên cách mạng đồng chí Hội",
        "Hội Việt Nam cách mạng đồng minh",
        "Hội Việt Nam độc lập đồng minh",
        "Hội Việt Nam Cách mạng Thanh niên"
      ],
      "answer": "Hội Việt Nam Cách mạng Thanh niên"
    },
    {
      "question": "Việt Nam Quốc dân Đảng được thành lập vào thời gian nào?",
      "options": [
        "12/1927",
        "11/1926",
        "8/1925",
        "7/1925"
      ],
      "answer": "12/1927"
    },
    {
      "question": "Ai là người đã tham gia sáng lập Việt Nam Quốc dân Đảng 1927?",
      "options": [
        "Tôn Quang Phiệt",
        "Trần Huy Liệu",
        "Phạm Tuấn Tài",
        "Phan Bội Châu"
      ],
      "answer": "Phan Bội Châu"
    },
    {
      "question": "Khởi nghĩa Yên Bái nổ ra vào thời gian nào?",
      "options": [
        "9-2-1930",
        "9-3-1930",
        "3-2-1930",
        "9-3-1931"
      ],
      "answer": "9-2-1930"
    },
    {
      "question": "Tổ chức cộng sản nào ra đời đầu tiên ở Việt Nam?",
      "options": [
        "Hội Việt Nam cách mạng Thanh Niên",
        "Đông Dương cộng sản Đảng",
        "An Nam cộng sản Đảng",
        "Đông Dương cộng sản liên đoàn"
      ],
      "answer": "Đông Dương cộng sản Đảng"
    },
    {
      "question": "Đảng Cộng sản Việt Nam được thành lập vào thời gian nào?",
      "options": [
        "3/2/1930",
        "1/5/1930",
        "10/3/1930",
        "1/3/1930"
      ],
      "answer": "3/2/1930"
    },
    {
      "question": "Vị lãnh đạo nào được bầu làm Tổng bí thư đầu tiên của Đảng Cộng sản Việt Nam?",
      "options": [
        "Trần Phú",
        "Nguyễn Ái Quốc",
        "Lê Duẩn",
        "Trường Chinh"
      ],
      "answer": "Trần Phú"
    },
    {
      "question": "Sự kiện lịch sử nào đánh dấu mốc quan trọng trong cuộc cách mạng tháng Tám năm 1945?",
      "options": [
        "Khởi nghĩa của nhân dân Hà Nội",
        "Mặt trận Việt Minh thành lập",
        "Quân Nhật đầu hàng Đồng Minh",
        "Cách mạng tháng Tám thành công"
      ],
      "answer": "Cách mạng tháng Tám thành công"
    },
    {
      "question": "Quốc hội nước Việt Nam Dân chủ Cộng hòa được thành lập vào năm nào?",
      "options": [
        "1945",
        "1946",
        "1947",
        "1949"
      ],
      "answer": "1946"
    },
    {
      "question": "Ai là người lãnh đạo đầu tiên của nước Việt Nam Dân chủ Cộng hòa?",
      "options": [
        "Trường Chinh",
        "Phạm Văn Đồng",
        "Hồ Chí Minh",
        "Lê Duẩn"
      ],
      "answer": "Hồ Chí Minh"
    },
    {
      "question": "Khi nào quân đội Việt Nam chính thức tiến hành kháng chiến chống Pháp?",
      "options": [
        "1945",
        "1946",
        "1947",
        "1948"
      ],
      "answer": "1946"
    },
    {
      "question": "Chiến thắng nào đã khiến quân đội Pháp phải rút khỏi miền Bắc Việt Nam?",
      "options": [
        "Chiến thắng Điện Biên Phủ",
        "Chiến thắng Cổ Loa",
        "Chiến thắng Quảng Trị",
        "Chiến thắng Trận Phan Rang"
      ],
      "answer": "Chiến thắng Điện Biên Phủ"
    },
    {
      "question": "Thành lập chính phủ Cộng hòa xã hội chủ nghĩa Việt Nam được công nhận chính thức vào năm nào?",
      "options": [
        "1945",
        "1946",
        "1947",
        "1949"
      ],
      "answer": "1945"
    },
    {
      "question": "Tổ chức chính trị nào lãnh đạo cuộc kháng chiến chống Mỹ, cứu nước?",
      "options": [
        "Đảng Cộng sản Việt Nam",
        "Đảng Lao động Việt Nam",
        "Mặt trận Tổ quốc Việt Nam",
        "Đoàn Thanh niên Cộng sản Hồ Chí Minh"
      ],
      "answer": "Đảng Cộng sản Việt Nam"
    },
    {
      "question": "Chi bộ cộng sản đầu tiên ở Việt Nam được thành lập khi nào?",
      "options": [
        "Cuối tháng 3/1929",
        "Đầu tháng 3/1929",
        "4/1929",
        "5/1929"
      ],
      "answer": "Cuối tháng 3/1929"
    },
    {
      "question": "Chi bộ cộng sản đầu tiên gồm mấy đảng viên? Ai làm bí thư chi bộ?",
      "options": [
        "5 đảng viên - Bí thư Trịnh Đình Cửu",
        "6 đảng viên - Bí thư Ngô Gia Tự",
        "7 đảng viên - Bí thư Trịnh Đình Cửu",
        "7 đảng viên - Bí thư Trần Văn Cung"
      ],
      "answer": "7 đảng viên - Bí thư Trần Văn Cung"
    },
    {
      "question": "Đông Dương Cộng sản Đảng và An Nam Cộng sản Đảng được ra đời từ tổ chức tiền thân nào?",
      "options": [
        "Tân Việt cách mạng Đảng",
        "Hội Việt Nam cách mạng Thanh niên",
        "Việt Nam cách mạng đồng chí Hội",
        "Cả A, B và C"
      ],
      "answer": "Hội Việt Nam cách mạng Thanh niên"
    },
    {
      "question": "Đông Dương cộng sản liên đoàn hợp nhất vào Đảng Cộng sản Việt Nam khi nào?",
      "options": [
        "22/2/1930",
        "24/2/1930",
        "24/2/1931",
        "20/2/1931"
      ],
      "answer": "24/2/1930"
    },
    {
      "question": "Quan hệ giữa Tân Việt cách mạng Đảng và Hội Việt Nam Cách mạng Thanh niên là...",
      "options": [
        "Tân Việt cử người sang dự các lớp huấn luyện của Thanh niên",
        "Tân Việt vận động hợp nhất với Thanh niên",
        "Hội Việt Nam Cách mạng Thanh niên vận động hợp nhất với Tân Việt",
        "Tân Việt cử người sang dự các lớp huấn luyện của Thanh niên và vận động hợp nhất với Thanh niên"
      ],
      "answer": "Tân Việt cử người sang dự các lớp huấn luyện của Thanh niên và vận động hợp nhất với Thanh niên"
    },
    {
      "question": "Các cuộc khởi nghĩa trong phong trào Cần Vương ở Việt Nam cuối thế kỷ XIX, cuộc khởi nghĩa diễn ra lâu nhất là...",
      "options": [
        "khởi nghĩa Hùng Lĩnh",
        "khởi nghĩa Ba Đình",
        "khởi nghĩa Bãi Sậy",
        "khởi nghĩa Hương Khê"
      ],
      "answer": "khởi nghĩa Hương Khê"
    },
    {
      "question": "Thành phần lãnh đạo phong trào yêu nước chống Pháp ở Việt Nam đầu thế kỷ XX là...",
      "options": [
        "Văn thân sĩ phu phong kiến yêu nước ",
        "Tầng lớp Nho học trẻ đang trên con đường tư sản hóa",
        "Các sĩ phu yêu nước theo khuynh hướng phong kiến",
        "Những nhà yêu nước đã thức tỉnh với thời cuộc"
      ],
      "answer": "Tầng lớp Nho học trẻ đang trên con đường tư sản hóa"
    },
    {
      "question": "Ở Việt Nam, giai cấp có trước khi thực dân Pháp tiến hành khai thác thuộc địa là...",
      "options": [
        "giai cấp nông dân, địa chủ phong kiến",
        "giai cấp nông dân, địa chủ phong kiến, thợ thủ công",
        "giai cấp nông dân, địa chủ phong kiến, tư sản dân tộc",
        "giai cấp nông dân, địa chủ phong kiến, công nhân"
      ],
      "answer": "giai cấp nông dân, địa chủ phong kiến"
    },
    {
      "question": "Tổ chức Đông Dương Cộng sản Đảng được thành lập vào thời gian nào?",
      "options": [
        "6/1927",
        "6/1928",
        "6/1929",
        "5/1929"
      ],
      "answer": "6/1929"
    },
    {
      "question": "Tổ chức An Nam Cộng sản Đảng được thành lập vào thời gian nào?",
      "options": [
        "6/1927",
        "6/1928",
        "8/1929",
        "7/1929"
      ],
      "answer": "8/1929"
    },
    {
      "question": "Tổ chức Đông Dương Cộng sản liên Đoàn được thành lập vào thời gian nào?",
      "options": [
        "7/1927",
        "1/1930",
        "2/1930",
        "3/1930"
      ],
      "answer": "1/1930"
    },
    {
      "question": "Thời gian ra bản Tuyên đạt nêu rõ việc thành lập Đông Dương Cộng sản Liên đoàn?",
      "options": [
        "7/1929",
        "9/1929",
        "10/1929",
        "1/1930"
      ],
      "answer": "9/1929"
    },
    {
      "question": "Ban Thường vụ Trung ương Đảng ra Quyết nghị chấp nhận Đông Dương cộng sản liên đoàn là một bộ phận của Đảng Cộng sản Việt Nam vào thời gian nào?",
      "options": [
        "22-2-1930",
        "20-2-1930",
        "24-2-1930",
        "22-3-1930"
      ],
      "answer": "24-2-1930"
    },
    {
      "question": "Do đâu Nguyễn Ái Quốc đã triệu tập và chủ trì Hội nghị thành lập Đảng đầu năm 1930?",
      "options": [
        "Được sự uy nhiệm của Quốc tế Cộng sản",
        "Nhận được chỉ thị của Quốc tế Cộng sản",
        "Sự chủ động của Nguyễn Ái Quốc",
        "Các tổ chức cộng sản trong nước đề nghị"
      ],
      "answer": "Sự chủ động của Nguyễn Ái Quốc"
    },
    {
      "question": "Đại biểu các tổ chức cộng sản nào đã tham dự Hội nghị thành lập Đảng đầu năm 1930?",
      "options": [
        "Đông Dương cộng sản Đảng, An Nam cộng sản Đảng và Đông Dương cộng sản liên đoàn",
        "Đông Dương cộng sản Đảng và An Nam cộng sản Đảng",
        "An Nam cộng sản Đảng và Đông Dương cộng sản liên đoàn",
        "Đông Dương cộng sản Đảng và Đông Dương cộng sản liên đoàn"
      ],
      "answer": "Đông Dương cộng sản Đảng và An Nam cộng sản Đảng"
    },
    {
      "question": "Phong trào do Việt Nam Quốc dân Đảng khởi xướng thuộc khuynh hướng nào trong các khuynh hướng sau?",
      "options": [
        "Phong trào yêu nước theo khuynh hướng Cần Vương",
        "Phong trào yêu nước theo khuynh hướng phong kiến",
        "Phong trào yêu nước theo khuynh hướng dân chủ tư sản",
        "Phong trào yêu nước theo khuynh hướng vô sản"
      ],
      "answer": "Phong trào yêu nước theo khuynh hướng dân chủ tư sản"
    },
    {
      "question": "Hội nghị Hợp nhất thành lập Đảng CSVN (3/2/1930) thông qua các văn kiện nào sau đây?",
      "options": [
        "Chánh cương vắn tắt",
        "Sách lược văn tắt",
        "Điều lệ vắn tắt và Chương trình vắn tắt",
        "Cả A, B và C"
      ],
      "answer": "Cả A, B và C"
    },
    {
      "question": "Nội dung nào sau đây nằm trong Cương lĩnh đầu tiên của Đảng?",
      "options": [
        "Đánh đổ đế quốc chủ nghĩa Pháp và bọn phong kiến, làm cho nước Nam hoàn toàn độc lập.",
        "Tư sản dân quyền cách mạng là thời kỳ dự bị để làm xã hội cách mạng.",
        "Chi có giải phóng giai cấp vô sản thì mới giải phóng được dân tộc.",
        "Đảng có vững cách mạng mới thành công"
      ],
      "answer": "Tư sản dân quyền cách mạng là thời kỳ dự bị để làm xã hội cách mạng."
    },
    {
      "question": "Cương lĩnh đầu tiên của Đảng đã xác định mục tiêu chiến lược của cách mạng Việt Nam là gì?",
      "options": [
        "Làm tư sản dân quyền cách mạng và thổ địa cách mạng để đi tới xã hội cộng sản.",
        "Xây dựng một nước Việt Nam dân giầu, nước mạnh xã hội công bằng, dân chủ và văn minh.",
        "Cách mạng tư sản dân quyền - phản đế và điền địa - lập chính quyền của công nông bằng hình thức Xô viết, để dự bị điều kiện đi tới cách mạng xã hội chủ nghĩa.",
        "Cả A và B."
      ],
      "answer": "Làm tư sản dân quyền cách mạng và thổ địa cách mạng để đi tới xã hội cộng sản."
    },
    {
      "question": "Sau Hội nghị thành lập Đảng, Ban chấp hành Trung ương lâm thời của Đảng được thành lập do ai đứng đầu?",
      "options": [
        "Hà Huy Tập",
        "Trần Phú",
        "Lê Hồng Phong",
        "Trịnh Đình Cửu"
      ],
      "answer": "Trần Phú"
    },
    {
      "question": "Vào thời điểm nào Nguyễn Ái Quốc gửi Quốc tế Cộng sản bản Báo cáo về việc thành lập Đảng Cộng sản Việt Nam?",
      "options": [
        "Ngày 8-2-1930",
        "Ngày 10-2-1920",
        "Ngày 18-2-1930",
        "Ngày 28-2-1930"
      ],
      "answer": "Ngày 18-2-1930"
    },
    {
      "question": "Văn kiện nào của Đảng đặt nhiệm vụ chống đế quốc lên hàng đầu?",
      "options": [
        "Chính cương vắn tắt, Sách lược vắn tắt.",
        "Luận cương chính trị tháng 10-1930 (Dự án cương lĩnh đề thảo luận trong Đảng)",
        "Thư của Trung ương gửi cho các cấp đảng bộ (12-1930)",
        "Nghị quyết Đại hội lần thứ nhất của Đảng (3-1935)"
      ],
      "answer": "Chính cương vắn tắt, Sách lược vắn tắt."
    },
    {
      "question": "Trong các điểm sau, chỉ rõ điểm khác nhau giữa Cương lĩnh chính trị đầu tiên của Đảng và Luận cương chính trị tháng 10-1930 là:",
      "options": [
        "Phương hướng chiên lược của cách mạng.",
        "Chủ trương tập hợp lực lượng cách mạng",
        "Vai trò lãnh đạo cách mạng.",
        "Phương pháp cách mạng."
      ],
      "answer": "Chủ trương tập hợp lực lượng cách mạng"
    },
    {
      "question": "Văn kiện nào của Đảng nhấn mạnh 'vấn đề thổ địa là cái cốt của cách mạng tư sản dân quyền'?",
      "options": [
        "Chính cương vắn tắt, Sách lược vắn tắt.",
        "Chi thị thành lập Hội phản để đồng minh (18-11-1930).",
        "Luận cương chính trị tháng 10-1930",
        "Chung quanh vấn đề chính sách mới của Đảng (10-1936)."
      ],
      "answer": "Luận cương chính trị tháng 10-1930"
    },
    {
      "question": "Lần đầu tiên nhân dân Việt Nam kỷ niệm ngày Quốc tế lao động vào năm nào?",
      "options": [
        "1930",
        "1931",
        "1936",
        "1938"
      ],
      "answer": "1930"
    },
    {
      "question": "Tư tưởng của Việt Nam Quốc dân Đảng chịu ảnh hưởng của tư tưởng nào ở Trung Quốc?",
      "options": [
        "Chủ nghĩa dân tộc",
        "Chủ nghĩa Tam Dân của Tôn Trung Sơn",
        "Chủ nghĩa Mác-Lênin",
        "Chủ nghĩa dân sinh"
      ],
      "answer": "Chủ nghĩa Tam Dân của Tôn Trung Sơn"
    },
    {
      "question": "Tháng 12 năm 1920, Nguyễn Ái Quốc bỏ phiều tán thành quốc tế cộng sản và tham gia sáng lập Đảng cộng sản Pháp điều đó khẳng định...",
      "options": [
          "Nguyễn Ái Quốc đã đến với Cách mạng tháng 10 Nga năm 1917",
          "Nguyễn Ái Quốc đã trở thành người của Đảng Cộng Sản",
          "Nguyễn Ái Quốc đọc Sơ thảo luận cương của Lênin về vấn đề dân tộc và thuộc địa",
          "Nguyễn Ái Quốc quyết tâm đi theo con đường cách mạng vô sản"
      ],
      "answer": "Nguyễn Ái Quốc quyết tâm đi theo con đường cách mạng vô sản"
  },
  {
      "question": "Dưới chế độ thống trị của thực dân Pháp và phong kiến, nông dân Việt Nam có yêu cầu bức thiết nhất về...",
      "options": [
          "Độc lập dân tộc",
          "Ruộng đất",
          "Quyền làm việc ngày 8 giờ",
          "Tự do hội họp, đi lại"
      ],
      "answer": "Độc lập dân tộc"
  },
  {
      "question": "Bản hiệp ước ngày mùng 6 tháng 6 năm 1884 mà Pháp ký với triều Nguyễn Việt Nam gồm 19 khoản, căn bản dựa trên...",
      "options": [
          "Hòa ước Nhâm Tuất ngày mùng 5 tháng 6 năm 1882",
          "Hiệp ước Giáp Tuất 15 tháng 3 năm 1874",
          "Hiệp ước Hác-măng ngày 25 tháng 8 năm 1883",
          "Không dựa trên hiệp ước nào cả"
      ],
      "answer": "Hiệp ước Hác-măng ngày 25 tháng 8 năm 1883"
  },
  {
      "question": "Để đẩy mạnh việc đánh chiếm toàn bộ Việt Nam bằng mọi giá sau khi được tăng viện, Pháp đem quân đánh thẳng vào đâu...?",
      "options": [
          "Cửa biển Hải Phòng",
          "Cửa biển Thuận An",
          "Thành Hà Nội",
          "Kinh thành Huế"
      ],
      "answer": "Cửa biển Thuận An"
  },
  {
      "question": "Sau khi bình định xong Việt Nam, thực dân Pháp thực hiện chính sách cai trị theo kiểu thực dân cũ ở Việt Nam biểu hiện...",
      "options": [
          "Mọi quyền hành nắm trong tay người Pháp",
          "Dựng chính quyền bù nhìn tay sai vua quan Nam Triều để điều hành",
          "Mọi quyền hành nằm trong tay vua quan Nam Triều",
          "Lợi dụng bọn địa chủ phong kiến để thực hiện âm mưu xâm lược"
      ],
      "answer": "A. Mọi quyền hành nắm trong tay người Pháp"
  },
  {
      "question": "Tư tưởng cốt lõi của Cương lĩnh chính trị đầu tiên của Đảng cộng sản Việt Nam do Nguyễn Ái Quốc soạn thảo là...",
      "options": [
          "Độc lập dân tộc và ruộng đất dân cày",
          "Giương cao ngọn cờ giải phóng dân tộc độc lập",
          "Tự do là tư tưởng cốt lõi của cương lĩnh",
          "Đánh đế quốc và đánh phong kiến là cốt lõi của cương lĩnh"
      ],
      "answer": "Tự do là tư tưởng cốt lõi của cương lĩnh"
  },
  {
      "question": "Nguyễn Ái Quốc ví chủ nghĩa đế quốc như con đĩa có hai vòi điều đó được thể hiện trong...",
      "options": [
          "Bản án chế độ thực dân Pháp",
          "Đường Kách mệnh",
          "Báo Thanh niên",
          "Người Cùng Khô"
      ],
      "answer": "Bản án chế độ thực dân Pháp"
  },
  {
      "question": "Sáng ngày mùng 1 tháng 9 năm 1858, Thực dân Pháp gửi tối hậu thư đòi triều đình Huế phải trả lời trong 2 giờ, chưa hết hạn Pháp đã...",
      "options": [
          "Nã đạn lên bờ rồi đổ bộ chiếm bán đảo Sơn Trà Đà Nẵng",
          "Đánh thắng vào triều đình nhà Nguyễn ở Huế",
          "Cho quân bao vây Đà Nẵng",
          "Tập trung lực lượng đánh vào Huế"
      ],
      "answer": "Nã đạn lên bờ rồi đổ bộ chiếm bán đảo Sơn Trà Đà Nẵng"
  },
  {
    "question": "Tổ chức Việt Nam Quốc dân Đảng đề ra tôn chỉ và mục đích gì để hành động...",
    "options": [
        "Đánh đuổi Đế Quốc Pháp giành độc lập cho dân tộc",
        "Đánh đuổi đế quốc, xóa bỏ ngôi vua, thiết lập dân quyền",
        "Đánh đồ bọn phong kiến tồn tại lâu đời trên đất nước Việt Nam",
        "Không thành công cũng thành nhân"
    ],
    "answer": "Đánh đuổi đế quốc, xóa bỏ ngôi vua, thiết lập dân quyền"
  },
  {
    "question": "Năm 1919, để đòi quyền lợi cho mình, giai cấp tư sản Việt Nam khởi xướng phong trào...",
    "options": [
        "Chống độc quyền cảng Sài Gòn",
        "Chống độc quyền xuất khẩu lúa gạo ở Nam Kỳ ",
        "Phong trào Chấn Hưng Nội hóa, bài trừ ngoại hóa",
        "Thành lập Đảng Lập Hiến để tập hợp lực lượng quần chúng"
    ],
    "answer": "Phong trào Chấn Hưng Nội hóa, bài trừ ngoại hóa"
  },
  {
    "question": "Một trong những đặc điểm cơ bản nhất của giai cấp công nhân Việt Nam...",
    "options": [
        "Bị ba tầng áp bức bóc lột của đế quốc, phong kiến, tư sản dẫn tộc",
        "Có quan hệ tự nhiên gắn bó với giai cấp nông dân",
        "Kế thừa truyền thống yêu nước anh hùng và bất khuất của dân tộc",
        "Vừa ra đời đã tiếp thu ảnh hưởng của Cách mạng tháng 10 Nga"
    ],
    "answer": "Bị ba tầng áp bức bóc lột của đế quốc, phong kiến, tư sản dẫn tộc"
  },
  {
    "question": "Tổ chức hoạt động của phong trào yêu nước chống Pháp đầu thế kỷ XX ở Việt Nam là...",
    "options": [
        "Biến đấu tranh giai cấp thành tổ chức chính trị sơ khai",
        "Tổ chức đấu tranh theo lề lối phong kiến",
        "Tổ chức bạo động và đấu tranh vũ trang",
        "Tổ chức tập hợp quần chúng diễn thuyết"
    ],
    "answer": "Biến đấu tranh giai cấp thành tổ chức chính trị sơ khai"
  },
  {
    "question": "Trong cuộc khai thác thuộc địa của thực dân Pháp ở Việt Nam, nền kinh tế Việt Nam về cơ bản là nền kinh tế...",
    "options": [
        "Nền kinh tế sản xuất nhỏ lạc hậu và phụ thuộc",
        "Đan xen giữa nông nghiệp và công nghiệp",
        "Nền kinh tế nông nghiệp phát triển theo hướng tư bản chủ nghĩa",
        "Có những yếu tố tích cực và tiêu cực đan xen"
    ],
    "answer": "Nền kinh tế sản xuất nhỏ lạc hậu và phụ thuộc"
  },
  {
    "question": "Một trong những thủ đoạn chính trị của thực dân Pháp nhằm nô dịch lâu dài nhân dân ta sau chiến tranh thế giới thứ nhất là...",
    "options": [
        "Lôi kéo mua chuộc người Việt Nam thuộc tầng lớp trên của xã hội",
        "Thâu tóm quyền lực vào tay người Pháp",
        "Thực hiện chính sách chia để trị",
        "Thực hiện chính sách ngu dân"
    ],
    "answer": "Thực hiện chính sách chia để trị"
  },
  {
    "question": "Nguyễn Ái Quốc lựa chọn con đường giải phóng dân tộc Việt Nam theo con đường cách mạng vô sản gắn với sự kiện lịch sử...",
    "options": [
        "Nghiên cứu học tập Cách mạng tháng 10 Nga năm 1917",
        "Tìm hiểu cuộc cách mạng tư sản Pháp năm 1789",
        "Bỏ phiếu tán thành Quốc tế Cộng sản tại Pháp năm 1922",
        "Đọc Sơ thảo luận cương Lênin năm 1920"
    ],
    "answer": "Đọc Sơ thảo luận cương Lênin năm 1920"
  },
  {
    "question": "Chính sách chia để trị của thực dân Pháp áp dụng ở Việt Nam, trong đó Nam Kỳ bị Pháp coi như...",
    "options": [
        "Vùng đất tự trị",
        "Vùng đất thuộc Pháp",
        "Vùng đất nửa bảo hộ",
        "Vùng đất bảo hộ"
    ],
    "answer": "Vùng đất nửa bảo hộ"
  },
  {
    question: "Chủ tịch Hồ Chí Minh ra Lời kêu gọi toàn quốc kháng chiến vào thời điểm nào?",
    options: [
      "Đêm ngày 18-9-1946",
      "Đêm ngày 19-12-1946",
      "Ngày 20-12-1946",
      "Ngày 2-9-1945"
    ],
    answer: "Đêm ngày 19-12-1946"
  },
  {
    question: "Quân đội Đồng minh nào dưới danh nghĩa giải giáp quân Nhật kéo vào Việt Nam từ vĩ tuyến 16 trở ra Bắc?",
    options: [
      "Pháp",
      "Anh",
      "Trung Hoa Dân Quốc",
      "Mĩ"
    ],
    answer: "Trung Hoa Dân Quốc"
  },
  {
    question: "Hội nghị Ban thường vụ Trung Đảng họp mở rộng quyết định phát động cuộc kháng chiến toàn quốc họp vào thời gian nào?",
    options: [
      "Ngày 18-12-1946",
      "Ngày 19-12-1946",
      "Ngày 20-12-1946",
      "Ngày 22-12-1946"
    ],
    answer: "Ngày 19-12-1946"
  },
  {
    question: "Quân đội Đồng minh nào dưới đây dưới danh nghĩa giải giáp quân Nhật kéo vào nước Việt Nam từ vĩ tuyến 16 trở vào Nam?",
    options: [
      "Pháp",
      "Anh",
      "Trung Hoa Dân Quốc",
      "Mĩ"
    ],
    answer: "Anh"
  },
  {
    question: "Cuộc tổng giao chiến lịch sử mở đầu của kháng chiến chống thực dân Pháp của quân và dân ta ở Hà Nội đã diễn ra trong...?",
    options: [
      "60 ngày đêm",
      "30 ngày đêm",
      "12 ngày đêm",
      "90 ngày đêm"
    ],
    answer: "60 ngày đêm"
  },
  {
    question: "Sau Cách mạng tháng Tám năm 1945, ngân sách nhà nước trống rỗng, kho bạc của nhà nước Việt Nam còn khoảng...",
    options: [
      "Hơn 3,1 triệu đồng",
      "Hơn 1,2 triệu đồng",
      "Hơn 2,1 triệu đồng",
      "Hơn 2,2 triệu đồng"
    ],
    answer: "Hơn 1,2 triệu đồng"
  },
  {
    question: "Những văn kiện nào dưới đây được coi như Cương lĩnh kháng chiến của Đảng ta?",
    options: [
      "Lời kêu gọi toàn quốc kháng chiến của Chủ tịch Hồ Chí Minh",
      "Chỉ thị toàn dân kháng chiến của Trung ương Đảng",
      "Tác phẩm 'Kháng chiến nhất định thắng lợi' của Tổng Bí thư Trường Chinh",
      "Cả A, B, C"
    ],
    answer: "Cả A, B, C"
  },
  {
    question: "Sau cách mạng tháng Tám năm 1945, khó khăn lớn nhất đưa nước Việt Nam vào tình thế 'ngàn cân treo sợi tóc' là gì?",
    options: [
      "Khó khăn về thù trong, giặc ngoài",
      "Hơn 90% dân số không biết chữ",
      "Ngân sách nhà nước trống rỗng, tài chính nước Việt Nam rối loạn",
      "Nạn đói, nạn dốt đe dọa nghiêm trọng đến nhân dân Việt Nam"
    ],
    answer: "Khó khăn về thù trong, giặc ngoài"
  },
  {
    question: "Nhiệm vụ hàng đầu của nhân dân ta trong quá trình kháng chiến chống thực dân Pháp:",
    options: [
      "Chống đế quốc giành độc lập dân tộc",
      "Xóa bỏ những tàn tích phong kiến đem lại ruộng đất cho nông dân",
      "Xây dựng chế độ dân chủ mới",
      "Cả ba phương án trên"
    ],
    answer: "Chống đế quốc giành độc lập dân tộc"
  },
  {
    question: "Sau Cách mạng tháng Tám năm 1945, tần dư văn hóa lạc hậu của chế độ thực dân, phong kiến để lại hết sức nặng nề...",
    options: [
      "hơn 60% dân số không biết chữ",
      "hơn 90% dân số không biết chữ",
      "hơn 70% dân số không biết chữ",
      "hơn 80% dân số không biết chữ"
    ],
    answer: "hơn 90% dân số không biết chữ"
  },
  {
    question: "Đầu năm 1948, TW Đảng đã đề ra cách thức thực hiện cách mạng ruộng đất theo đường lối riêng biệt của cách mạng Việt Nam, đó là:",
    options: [
      "Cải cách ruộng đất",
      "Cải cách từng bước để dần dần thu hẹp phạm vi bóc lột của địa chủ",
      "Sửa đổi chế độ ruộng đất trong phạm vi không có hại cho nông dân.",
      "Cả A, B và C"
    ],
    answer: "Cả A, B và C"
  },
  {
    question: "Cuộc tổng tuyển cử đầu tiên bầu Quốc hội nước Việt Nam Dân chủ Cộng hòa diễn ra vào thời gian nào?",
    options: [
      "Ngày 6/1/1945",
      "Ngày 6/1/1946",
      "Ngày 6/1/1947",
      "Ngày 6/1/1948"
    ],
    answer: "Ngày 6/1/1946"
  },
  {
    question: "Trong Hiệp định Sơ bộ ngày 6/3/1946, Chính phủ Pháp công nhận nước Việt Nam Dân chủ Cộng hòa là một quốc gia...",
    options: [
      "Tự do",
      "Độc lập",
      "Tự trị",
      "Độc lập và tự do"
    ],
    answer: "Tự do"
  },
  {
    question: "Theo hội nghị Pốtđam, quân Trung Hoa Dân Quốc vào Việt Nam để...",
    options: [
      "Giải giáp quân đội Nhật",
      "Giúp Việt Nam đuổi thực dân Pháp",
      "Giúp đỡ chính quyền cách mạng Việt Nam",
      "Giúp Việt Nam đuổi quân Anh gian nào?"
    ],
    answer: "Giải giáp quân đội Nhật"
  },
  {
    question: "Ban Thường vụ TU Đảng đã ra chỉ thị phát động phong trào thi đua ái quốc vào thời gian nào?",
    options: [
      "27/3/1946",
      "28/3/1946",
      "27/3/1948",
      "28/4/1949"
    ],
    answer: "27/3/1948"
  },
  {
    question: "Trong thời kỳ kháng chiến chống Pháp, khẩu hiệu 'Tích cực cầm cự và chuẩn bị tổng phản công' được nêu ra khi nào?",
    options: [
      "1948",
      "1949",
      "1950",
      "1951"
    ],
    answer: "1949"
  },
  {
    question: "Trong kháng chiến chống Pháp, Đảng đã chủ trương mở rộng khối đại đoàn kết dân tộc với việc...",
    options: [
      "Thống nhất Việt Minh và Liên Việt",
      "Thành lập Mặt trận Liên Việt",
      "Mở rộng Mặt trận Việt Minh",
      "Thành lập Mặt trận Việt Minh"
    ],
    answer: "Thống nhất Việt Minh và Liên Việt"
  },
  {
    question: "Đại hội thống nhất Mặt trận Việt Minh và Liên Việt được tổ chức vào thời gian nào?",
    options: [
      "3/1951",
      "2/1952",
      "3/1953",
      "1/1953"
    ],
    answer: "3/1951"
  },
  {
    question: "Trong tạm ước 14/9/1946, Việt Nam tiếp tục nhân nhượng cho Pháp một số quyền lợi về...",
    options: [
      "Kinh tế và văn hóa",
      "Kinh tế và chính trị",
      "Chính trị và quân sự",
      "Kinh tế và quân sự"
    ],
    answer: "Kinh tế và văn hóa"
  },
  {
    question: "Tháng 3-1951, Đại hội thống nhất Việt Minh và Liên Việt thành...",
    options: [
      "Mặt trận Việt Nam cách mạng thanh niên",
      "Mặt trận Việt Minh",
      "Mặt trận Tổ Quốc",
      "Mặt trận Liên hiệp quốc dân Việt Nam (Liên Việt)"
    ],
    answer: "Mặt trận Liên hiệp quốc dân Việt Nam (Liên Việt)"
  },
  {
    question: "Việt Nam kí với Pháp Hiệp định Sơ bộ ngày 6/3/1946 nhằm mục đích gì?",
    options: [
      "Chấm dứt chiến tranh, lập lại hòa bình ở Việt Nam",
      "Tạo điều kiện xây dựng đất nước sau cách mạng",
      "Phân hóa kẻ thù, tập trung đánh kẻ thù chủ yếu",
      "Hoàn hoãn với Pháp để đấu tranh quân sự với Trung Hoa Dân Quốc"
    ],
    answer: "Phân hóa kẻ thù, tập trung đánh kẻ thù chủ yếu"
  },
  {
    question: "Hiến pháp đầu tiên của nước Việt Nam Dân chủ Cộng hòa được Quốc hội thông qua vào thời gian nào?",
    options: [
      "9/1946",
      "10/1946",
      "11/1946",
      "12/1946"
    ],
    answer: "11/1946"
  },
  {
    question: "Việt Nam đã bắt đầu đặt quan hệ ngoại giao với Trung Quốc, Liên Xô và một số nước khác vào thời điểm nào?",
    options: [
      "Năm 1945",
      "Năm 1948",
      "Năm 1950",
      "Năm 1953"
    ],
    answer: "Năm 1950"
  },
  {
    question: "Nội dung nào không phản ánh đúng thuận lợi của Việt Nam sau Cách mạng tháng Tám 1945?",
    options: [
      "Nhân dân giành quyền làm chủ, phấn khởi, gắn bó với chế độ",
      "Có sự ủng hộ, giúp đỡ tích cực của lực lượng Đồng minh",
      "Phong trào giải phóng dân tộc dâng cao; hệ thống xã hội chủ nghĩa hình thành",
      "Có Đảng, đứng đầu là Chủ tịch Hồ Chí Minh sáng suốt lãnh đạo"
    ],
    answer: "Có sự ủng hộ, giúp đỡ tích cực của lực lượng Đồng minh"
  },
  {
    question: "Nhằm xây dựng và củng cố chính quyền cách mạng, tháng 5/1946 lực lượng vũ trang của Việt Nam được đổi tên thành...",
    options: [
      "Việt Nam giải phóng quân",
      "Quân đội nhân dân Việt Nam",
      "Vệ quốc đoàn",
      "Quân đội quốc gia Việt Nam"
    ],
    answer: "Quân đội nhân dân Việt Nam"
  },
  {
    question: "Để phá thế bao vây cô lập, phát triển lực lượng và giành thế chủ động, tháng 6-1950, lần đầu tiên TW Đảng đã chủ trương mở chiến dịch tiến công quy mô lớn. Đó là:",
    options: [
      "Chiến dịch Việt Bắc",
      "Chiến dịch Tây Bắc",
      "Chiến dịch Biên Giới",
      "Chiến dịch Thượng Lào"
    ],
    answer: "Chiến dịch Biên Giới"
  },
  {
    question: "Quân Trung Hoa Dân Quốc vào nước Việt Nam nhằm âm mưu gì?",
    options: [
      "Giúp Việt Nam đánh đuổi thực dân Pháp",
      "Lật đổ chính quyền cách mạng của Việt Nam",
      "Giúp đỡ chính quyền cách mạng nước Việt Nam",
      "Giúp Việt Nam đánh đuổi quân Anh"
    ],
    answer: "Lật đổ chính quyền cách mạng của Việt Nam"
  },
  {
    question: "Dương Tí đấu tranh với quân Trung Hoa Dân Quốc, phương án nào đúng?",
    options: [
      "Kiên quyết chống trả những hành động của quân Trung Hoa Dân Quốc",
      "Tạm thời hòa hoãn, tránh xung đột với quân Trung Hoa Dân Quốc",
      "Nhân nhượng toàn bộ các yêu sách của chúng",
      "Tạm hòa hoãn với Pháp ở Nam Bộ để đấu tranh quân sự với Trung Hoa Dân Quốc"
    ],
    answer: "Tạm thời hòa hoãn, tránh xung đột với quân Trung Hoa Dân Quốc"
  },
  {
    question: "Ngày 8/9/1945, Chủ tịch Hồ Chí Minh kí sắc lệnh thành lập Nha Bình dân học vụ, đây là cơ quan chuyên trách về việc gì?",
    options: [
      "Giải quyết giặc dốt",
      "Giải quyết giặc đói",
      "Chống giặc ngoại xâm",
      "Khó khăn về tài chính của Cộng hòa"
    ],
    answer: "Giải quyết giặc dốt"
  },
  {
    question: "Trong Hiệp định Sơ bộ ngày 6/3/1946, Chính phủ Pháp công nhận nước Việt Nam Dân chủ Cộng hòa là...",
    options: [
      "Một quốc gia tự do, nhưng vẫn thuộc khối liên hiệp Pháp",
      "Một quốc gia độc lập tự do, nhưng vẫn thuộc khối liên hiệp Pháp",
      "Một quốc gia tự trị, nằm trong liên bang Đông Dương thuộc Pháp",
      "Một quốc gia độc lập, nằm trong liên bang Đông Dương thuộc Pháp"
    ],
    answer: "Một quốc gia tự do, nhưng vẫn thuộc khối liên hiệp Pháp"
  },
  {
    question: "Ý nghĩa của chiến thắng Biên Giới Thu - Đông đối với cách mạng Việt Nam...",
    options: [
      "Giáng một đòn nặng nề vào ý chí xâm lược của địch, đập tan tuyến phòng thủ và giải phóng hoàn toàn khu vực biên giới, nối liền Việt Nam với thế giới",
      "Đánh dấu sự trưởng thành vượt bậc về trình độ chiến đấu của quân đội Việt Nam",
      "Quân ta đã giành được thế chủ động chiến lược trên chiến trường chính Bắc Bộ, tạo bước chuyển biến lớn của kháng chiến vào giai đoạn mới",
      "Cả A, B, C"
    ],
    answer: "Cả A, B, C"
  },
  {
    question: "Để khắc phục tình trạng khó khăn về tài chính sau Cách mạng tháng Tám năm 1945, Chính phủ nước Việt Nam Dân chủ Cộng hòa kêu gọi...",
    options: [
      "Cải cách ruộng đất và thực hành tiết kiệm",
      "Nhân dân cả nước thực hiện 'Ngày đồng tâm'",
      "Nhân dân thực hiện phong trào tăng gia sản xuất",
      "Xây dựng 'Quỹ độc lập', 'Tuần lễ vàng'"
    ],
    answer: "Xây dựng 'Quỹ độc lập', 'Tuần lễ vàng'"
  },
  {
    question: "Việc giải quyết thành công nạn đói, nạn dốt và khó khăn về tài chính sau Cách mạng tháng Tám năm 1945 ở Việt Nam có ý nghĩa gì?",
    options: [
      "Đánh dấu hoàn thành nhiệm vụ đánh đồ chế độ phong kiến",
      "Tạo cơ sở để các nước xã hội chủ nghĩa công nhận Việt Nam",
      "Tạo cơ sở thực lực để ký Hiệp định Sơ bộ với Pháp",
      "Góp phần tạo ra sức mạnh để bảo vệ chế độ mới"
    ],
    answer: "Góp phần tạo ra sức mạnh để bảo vệ chế độ mới"
  },
  {
    question: "Thời gian và địa điểm diễn ra Đại hội Đảng toàn quốc lần thứ hai là...",
    options: [
      "Tháng 3-1935, tại Ma Cao, Trung Quốc",
      "Tháng 2-1950, tại Tân Trào, Tuyên Quang",
      "Tháng 2-1951, tại Vinh Quang, Chiêm Hóa, Tuyên Quang",
      "Tháng 3-1951, tại Việt Bắc"
    ],
    answer: "Tháng 2-1951, tại Vinh Quang, Chiêm Hóa, Tuyên Quang"
  },
  {
    question: "Bằng việc kí Hiệp định Sơ bộ 6/3/1946 và Tạm ước 14/9/1946, Việt Nam đã đập Việt Nam âm mưu của....",
    options: [
      "Mĩ cầu kết với Trung Hoa Dân Quốc",
      "Pháp cầu kết với Trung Hoa Dân Quốc",
      "Trung Hoa Dân Quốc cầu kết với Anh",
      "Pháp cấu kết với Anh"
    ],
    answer: "Pháp cầu kết với Trung Hoa Dân Quốc"
  },
  {
    question: "Tại Đại hội đại biểu toàn quốc lần thứ hai, Đảng quyết định đổi tên thành...",
    options: [
      "Đảng Cộng sản Đông Dương",
      "Đảng Cộng sản Việt Nam",
      "Hội nghiên cứu Chủ nghĩa Mác",
      "Đảng Lao Động Việt Nam"
    ],
    answer: "Đảng Lao Động Việt Nam"
  },
  {
    question: "Sau cách mạng tháng Tám năm 1945, Chính phủ đã phát động phong trào gì để giải quyết khó khăn về tài chính?",
    options: [
      "Nhường cơm sẻ áo, Hũ gạo cứu đói.",
      "Tăng gia sản xuất! Tăng gia sản xuất ngay!",
      "Xây dựng Quỹ độc lập, Tuần lễ vàng.",
      "Tổ chức Ngày đồng tâm, Hũ gạo cứu đói."
    ],
    answer: "Xây dựng Quỹ độc lập, Tuần lễ vàng."
  },
  {
    question: "Đại hội Đảng toàn quốc lần thứ hai của Đảng Lao Động Việt Nam đã thông qua một văn kiện mang tính chất cương lĩnh. Đó là:",
    options: [
      "Cương lĩnh cách mạng Việt Nam",
      "Chính cương của Đảng Lao động Việt Nam",
      "Luận cương về cách mạng Việt Nam",
      "Cương lĩnh của Đảng Lao Động Việt Nam"
    ],
    answer: "Cương lĩnh của Đảng Lao Động Việt Nam"
  },
  {
    question: "Chọn phương án đúng nhất: Biện pháp của Đảng để đối phó với quân Trung Hoa Dân Quốc và bọn phản cách mạng ở miền Bắc là nhân nhượng cho chúng một số yêu sách về...",
    options: [
      "kinh tế, chính trị",
      "kinh tế, văn hóa",
      "chính trị, quân sự",
      "kinh tế, quân sự"
    ],
    answer: "kinh tế, chính trị"
  },
  {
    question: "Tác phẩm 'Kháng chiến nhất định thắng lợi' được phát hành khi nào?",
    options: [
      "6/1946",
      "7/1946",
      "7/1947",
      "9/1947"
    ],
    answer: "9/1947"
  },
  {
    question: "Sau Cách mạng tháng Tám năm 1945, Đảng và nhân dân đã thực hiện biện pháp mang tính chất hàng đầu và lâu dài để giải quyết căn bản nạn đói là...",
    options: [
      "Quyên góp, điều hòa thóc gạo giữa các địa phương trong cả nước",
      "Nghiêm trị những người đầu cơ, tích trữ gạo",
      "Kêu gọi 'tăng gia sản xuất! tăng gia sản xuất ngay! tăng gia sản xuất nữa!'",
      "Phát động phong trào 'nhường cơm sẻ áo', 'hũ gạo cứu đói'..."
    ],
    answer: "Kêu gọi 'tăng gia sản xuất! tăng gia sản xuất ngay! tăng gia sản xuất nữa!'"
  },
  {
    question: "Tác giả tác phẩm 'Kháng chiến nhất định thắng lợi' là của ai?",
    options: [
      "Hồ Chí Minh",
      "Le Duan",
      "Trường Chinh",
      "Phạm Văn Đồng"
    ],
    answer: "Trường Chinh"
  },
  {
    question: "Đâu là nơi được coi là căn cứ địa cách mạng của cả nước trong kháng chiến chống Pháp?",
    options: [
      "Tây Bắc",
      "Việt Bắc",
      "Hà Nội",
      "Điện Biên Phủ"
    ],
    answer: "Việt Bắc"
  },
  {
    question: "Chiến thắng nào đã căn bản đánh bại âm mưu đánh nhanh, thẳng nhanh của thực dân Pháp?",
    options: [
      "Việt Bắc",
      "Trung Du",
      "Biên Giới",
      "Hà Nam Ninh"
    ],
    answer: "Việt Bắc"
  },
  {
    question: "Khi bắt đầu tiến hành xâm lược Việt Nam, thực dân Pháp đã thực hiện chiến lược:",
    options: [
      "Dùng người Việt đánh người Việt",
      "Lấy chiến tranh nuôi chiến tranh",
      "Đánh nhanh thắng nhanh",
      "Cả A và B"
    ],
    answer: "Đánh nhanh thắng nhanh"
  },
  {
    question: "Ngày 15-10-1947, để đối phó với cuộc tấn công của thực dân Pháp lên căn cứ địa Việt Bắc, Ban thường vụ Trung ương Đảng đã đề ra...",
    options: [
      "Chi thị kháng chiến, kiến quốc",
      "Chi thị 'Phá tan cuộc tấn công mùa Đông của giặc Pháp'",
      "Chủ trương tiến công quân Pháp ở vùng sau lưng chúng",
      "Lời kêu gọi đánh tan cuộc tấn công lên Việt Bắc của thực dân Pháp"
    ],
    answer: "Chi thị 'Phá tan cuộc tấn công mùa Đông của giặc Pháp'"
  },
  {
    question: "Bài học kinh nghiệm từ việc kí kết Hiệp định Sơ bộ (6-3-1946) được Đảng Cộng sản Đông Dương vận dụng như thế nào trong chính sách đối ngoại hiện nay?",
    options: [
      "Sự ủng hộ của các tổ chức quốc tế",
      "Giải quyết tranh chấp bằng quân sự",
      "Nhượng nhượng mọi yêu sách của đối phương",
      "Cứng rắn về nguyên tắc, mềm dẻo về sách lược"
    ],
    answer: "Cứng rắn về nguyên tắc, mềm dẻo về sách lược"
  },
  {
    question: "Ở Việt Nam, tín hiệu kháng chiến toàn quốc chống thực dân Pháp nổ ra đầu tiên ở...",
    options: [
      "Hà Nội",
      "Hải Phòng",
      "Nam Bộ",
      "Lạng Sơn"
    ],
    answer: "Hà Nội"
  },
  {
    question: "Để thúc đẩy cuộc kháng chiến tiến lên, theo sáng kiến của Chủ tịch Hồ Chí Minh, ngày 27-3-1948, Ban Thường vụ TW Đảng ra chỉ thị...",
    options: [
      "Chống lại âm mưu thâm độc dùng người Việt đánh người Việt",
      "Phát động phong trào thi đua ái quốc",
      "Tiến hành chiến tranh du kích trên cả nước",
      "Tất cả các phương án trên"
    ],
    answer: "Phát động phong trào thi đua ái quốc"
  },
  {
    question: "Cuộc chiến đấu chống Pháp ở đô thị của quân và dân Hà Nội diễn ra trong bao nhiêu ngày đêm?",
    options: [
      "40 ngày đêm",
      "50 ngày đêm",
      "60 ngày đêm",
      "70 ngày đêm"
    ],
    answer: "60 ngày đêm"
  },
  {
    question: "Chiến dịch nào còn có tên là chiến dịch Hoàng Hoa Thám?",
    options: [
      "Trung Du",
      "Đường 18",
      "Hà Nam Ninh",
      "Biên giới"
    ],
    answer: "Đường 18"
  },
  {
    question: "Sau Cách mạng tháng Tám đến 1954, kẻ thù chính của nhân dân Việt Nam là...",
    options: [
      "Pháp",
      "Anh",
      "Mĩ",
      "Nhật Bản"
    ],
    answer: "Pháp"
  },
  {
    question: "Căn cứ địa cách mạng của Việt Nam trong cuộc kháng chiến chống Pháp xâm lược lần thứ hai là...",
    options: [
      "Hà Nội",
      "Đông Khê",
      "Việt Bắc",
      "Điện Biên Phủ"
    ],
    answer: "Việt Bắc"
  },
  {
    question: "Hội nghị văn hóa toàn quốc lần thứ hai diễn ra khi nào?",
    options: [
      "6/1948",
      "7/1948",
      "7/1949",
      "8/1949"
    ],
    answer: "7/1948"
  },
  {
    question: "Ý nào sau đây là nguyên tắc quan trọng nhất của Đảng Cộng sản Đông Dương trong chính sách đối ngoại giai đoạn 1945-1946?",
    options: [
      "Tránh một lúc phải đối đầu với nhiều kẻ thù",
      "Mềm dẻo về sách lược, cứng rắn về nguyên tắc",
      "Không chủ động khơi mào đối đầu quân sự với đối phương",
      "Tranh thủ thời gian hòa bình để xây dựng, củng cố lực lượng"
    ],
    answer: "Mềm dẻo về sách lược, cứng rắn về nguyên tắc"
  },
  {
    question: "Đại hội Văn hóa toàn quốc lần thứ hai xác định phương châm xây dựng nền văn hoa mới:",
    options: [
      "Dân tộc hóá",
      "Đại chúng hóá",
      "Khoa học hóa",
      "Cả ba phương án trên"
    ],
    answer: "Cả ba phương án trên"
  },
  {
    question: "Chính phủ và Chủ tịch Hồ Chí Minh kêu gọi đồng bào thực hiện 'Tuần lễ vàng', 'Quỹ độc lập' nhằm mục đích gì?",
    options: [
      "Giải quyết khó khăn về tài chính",
      "Hỗ trợ giải quyết nạn đói",
      "Xây dựng chính quyền cách mạng",
      "Giải quyết nạn mù chữ"
    ],
    answer: "Giải quyết khó khăn về tài chính"
  },
  {
    question: "Tại sao Đảng lại lựa chọn giải pháp thương lượng với Pháp?",
    options: [
      "Chấm dứt cuộc kháng chiến ở Nam Bộ",
      "Buộc quân Tưởng phải rút ngay về nước, tránh được tình trạng cùng một lúc phải đối phó với nhiều kẻ thù",
      "Phối hợp với Pháp tấn công Tưởng",
      "Lực lượng của ta còn yếu"
    ],
    answer: "Buộc quân Tưởng phải rút ngay về nước, tránh được tình trạng cùng một lúc phải đối phó với nhiều kẻ thù"
  },
  {
    question: "Việc kí Hiệp định Sơ bộ ngày 6/3/1946 chứng tỏ...",
    options: [
      "Sự mềm dẻo của Việt Nam trong việc phân hóa kẻ thù",
      "Sự thỏa hiệp của Đảng và Chính phủ Việt Nam Dân chủ Cộng hòa",
      "Việt Nam không có khả năng đánh bại quân Pháp",
      "Sự non yếu trong lãnh đạo của Đảng Cộng sản Đông Dương"
    ],
    answer: "Sự mềm dẻo của Việt Nam trong việc phân hóa kẻ thù"
  },
  {
    question: "Văn kiện nào dưới đây KHÔNG được coi như Cương lĩnh kháng chiến của Đảng ta?",
    options: [
      "Lời kêu gọi toàn quốc kháng chiến của Chủ tịch Hồ Chí Minh",
      "Chi thị toàn dân kháng chiến của Trung ương Đảng",
      "Tác phẩm 'Kháng chiến nhất định thắng lợi' của Tổng Bí thư Trường Chinh",
      "Đường cách mệnh của Nguyễn Ái Quốc"
    ],
    answer: "Đường cách mệnh của Nguyễn Ái Quốc"
  },
  {
    question: "Trận đánh tiêu biểu nhất của Việt Nam trên đường số 4 trong chiến dịch Việt Bắc thu-đông năm 1947 là...",
    options: [
      "Thất Khê",
      "Đông Khê",
      "Đèo Bông Lau",
      "Đoan Hùng"
    ],
    answer: "Đèo Bông Lau"
  },
  {
    question: "Để chuẩn bị tấn công lên Việt Bắc lần thứ hai, Pháp - Mĩ thực hiện kế hoạch nào?",
    options: [
      "Kế hoạch Rove",
      "Kế hoạch Đờ Lát đơ Tátxinhi",
      "Kế hoạch Nava",
      "Kế hoạch 'đánh nhanh thắng nhanh'"
    ],
    answer: "Kế hoạch Rove"
  },
  {
    question: "Cụm cứ điểm nào được Việt Nam chọn làm nơi mở đầu cho chiến dịch Biên giới thu - đông năm 1950?",
    options: [
      "Cao Bằng",
      "Thất Khê",
      "Đông Khê",
      "Đình Lập"
    ],
    answer: "Đông Khê"
  },
  {
    question: "Nhiệm vụ hàng đầu của nhân dân ta trong quá trình kháng chiến chống thực dân Pháp:",
    options: [
      "Chống đế quốc giành độc lập dân tộc",
      "Xoá bỏ những tàn tích phong kiến đem lại ruộng đất cho nông dân",
      "Xây dựng chế độ dân chủ mới",
      "Xây dựng chính quyền mới"
    ],
    answer: "Chống đế quốc giành độc lập dân tộc"
  },
  {
    question: "Chọn phương án đúng nhất: Phương châm chiến lược của cuộc kháng chiến chống Pháp là:",
    options: [
      "Toàn dân",
      "Toàn diện",
      "Lâu dài và dựa vào sức mình là chính",
      "Toàn dân, toàn diện, lâu dài và dựa vào sức mình là chính"
    ],
    answer: "Toàn dân, toàn diện, lâu dài và dựa vào sức mình là chính"
  },
  {
    question: "Khi bắt đầu tiến hành xâm lược Việt Nam, thực dân Pháp đã thực hiện chiến lược:",
    options: [
      "Dùng người Việt đánh người Việt",
      "Lấy chiến tranh nuôi chiến tranh",
      "Đánh nhanh, thắng nhanh",
      "Dùng người Việt đánh người Việt, lấy chiến tranh nuôi chiến tranh"
    ],
    answer: "Đánh nhanh, thắng nhanh"
  },
  {
    question: "Ngày 15-10-1947, để đối phó với cuộc tấn công của thực dân Pháp lên căn cứ địa Việt Bắc, Ban Thường vụ Trung ương Đảng đã đề ra:",
    options: [
      "Chi thị kháng chiến, kiến quốc",
      "Chi thị 'Phá tan cuộc tấn công mùa Đông của giặc Pháp'",
      "Chủ trương tiến công quân Pháp ở vùng sau lưng chúng",
      "Lời kêu gọi đánh tan cuộc tấn công lên Việt Bắc của thực dân Pháp"
    ],
    answer: "Chi thị 'Phá tan cuộc tấn công mùa Đông của giặc Pháp'"
  },
  {
    question: "Đầu năm 1948, TW Đảng đã đề ra cách thức thực hiện cách mạng ruộng đất theo đường lối riêng biệt của cách mạng Việt Nam, đó là:",
    options: [
      "Cải cách ruộng đất",
      "Cải cách từng bước để dần dần thu hẹp phạm vi bóc lột của địa chủ",
      "Sửa đổi chế độ ruộng đất trong phạm vi không có hại cho nông dân",
      "Cải cách ruộng đất, sửa đổi chế độ ruộng đất trong phạm vi không có hại cho nông dân"
    ],
    answer: "Cải cách từng bước để dần dần thu hẹp phạm vi bóc lột của địa chủ"
  },
  {
    question: "Sự kiện mở đầu cho sự hòa hoãn giữa Việt Nam và Pháp...",
    options: [
      "Pháp ngừng bắn ở miền Nam",
      "Việt Nam với Pháp nhân nhượng quyền lợi ở miền Bắc",
      "Ký kết hiệp định Sơ bộ 6-3-1946 giữa Việt Nam với Pháp",
      "Pháp và Tưởng ký hiệp ước Trùng Khánh trao đổi quyền lợi cho nhau"
    ],
    answer: "Ký kết hiệp định Sơ bộ 6-3-1946 giữa Việt Nam với Pháp"
  },
  {
    question: "Sau khi ký bản Hiệp định Sơ bộ, ngày 9-3-1946, Ban thường vụ Trung ương Đảng đã ra...",
    options: [
      "Chỉ thị kháng chiến kiến quốc",
      "Chi thị Hòa để tiến",
      "Chi thị Toàn quốc kháng chiến",
      "Cả A, B, C"
    ],
    answer: "Chi thị Hòa để tiến"
  },
  {
    question: "Sau bản Hiệp định sơ bộ, ngày 14-9 Chủ tịch Hồ Chí Minh đã thay mặt Chính phủ ký bản Tạm ước với Chính phủ Pháp với nội dung:",
    options: [
      "Pháp thừa nhận các quyền dân tộc cơ bản của nước Việt Nam",
      "Chấm dứt chiến tranh ở Việt Nam",
      "Đình chỉ xung đột ở miền Nam và sẽ tiếp tục đàm phán vào 1-1947",
      "Cả A, B và C"
    ],
    answer: "Cả A, B và C"
  },
  {
    question: "Cuối năm 1946, thực dân Pháp đã bội ước, liên tục tăng cường khiêu khích và lấn chiếm thêm một số địa điểm như:",
    options: [
      "Thành phố Hải Phòng, thị xã Lạng Sơn",
      "Đà Nẵng, Sài Gòn",
      "Hải Phòng, Hải Dương, Lào Cai, Yên Bái",
      "Thành phố Hải Phòng, thị xã Lạng Sơn, Đà Nẵng, Hà Nội"
    ],
    answer: "Thành phố Hải Phòng, thị xã Lạng Sơn, Đà Nẵng, Hà Nội"
  },
  {
    question: "Hiệp ước Hoa - Pháp được ký kết ở đâu?",
    options: [
      "Paris",
      "Trùng Khánh",
      "Hương Cảng",
      "Ma Cao"
    ],
    answer: "Trùng Khánh"
  },
  {
    question: "Đại hội Đại biểu toàn quốc lần thứ hai của Đảng họp tại đâu?",
    options: [
      "Bà Điểm - Hóc Môn - Gia Định",
      "Cao Bằng",
      "Tuyên Quang",
      "Bắc Ninh"
    ],
    answer: "Tuyên Quang"
  },
  {
    question: "Tác phẩm 'Kháng chiến nhất định thắng lợi' do ai soạn thảo?",
    options: [
      "Trường Chinh",
      "Võ Nguyên Giáp",
      "Hồ Chí Minh",
      "Trần Phú"
    ],
    answer: "Trường Chinh"
  },
  {
    question: "Nước đầu tiên công nhận và đặt quan hệ ngoại giao với Chính phủ Việt Nam Dân chủ Cộng hòa là...",
    options: [
      "Liên Xô",
      "Cuba",
      "Trung Quốc",
      "Lào"
    ],
    answer: "Trung Quốc"
  },
  {
    question: "Tài liệu nào dưới đây lần đầu tiên khẳng định sự nhân nhượng của nhân dân Việt Nam đối với thực dân Pháp xâm lược đã đến giới hạn cuối cùng?",
    options: [
      "'Kháng chiến nhất định thắng lợi' của Tổng Bí thư Trường Chinh", 
      "'Tuyên ngôn Độc lập' của nước Việt Nam Dân chủ Cộng hòa", 
      "'Toàn dân kháng chiến' của BTV Trung ương Đảng Cộng sản Đông Dương", 
      "'Lời kêu gọi toàn quốc kháng chiến' của Chủ tịch Hồ Chí Minh"
    ],
    answer: "'Lời kêu gọi toàn quốc kháng chiến' của Chủ tịch Hồ Chí Minh"
  },
  {
    question: "Đường lối kháng chiến chống thực dân Pháp của Đảng KHÔNG được thể hiện trong văn kiện nào?",
    options: [
      "Chỉ thị Toàn dân kháng chiến", 
      "Tác phẩm Kháng chiến nhất định thắng lợi", 
      "Lời kêu gọi toàn quốc kháng chiến", 
      "Tác phẩm 'Vấn đề dân cày'"
    ],
    answer: "Tác phẩm 'Vấn đề dân cày'"
  },
  {
    question: "'Chúng ta thà hi sinh tất cả, chứ nhất định không chịu mất nước, nhất định không chịu làm nô lệ...' là đoạn trích trong văn kiện nào?",
    options: [
      "Chỉ thị Toàn dân kháng chiến của Ban Thường vụ Trung ương Đảng", 
      "Lời kêu gọi toàn quốc kháng chiến của Chủ tịch Hồ Chí Minh", 
      "Tác phẩm Kháng chiến nhất định thắng lợi của Tổng Bí thư Trường Chinh", 
      "Chỉ thị sửa soạn khởi nghĩa của Tổng bộ Việt Minh"
    ],
    answer: "Lời kêu gọi toàn quốc kháng chiến của Chủ tịch Hồ Chí Minh"
  },
  {
    question: "Chính cương Đảng Lao động Việt Nam tháng 2-1951 đã nêu ra các tính chất của xã hội Việt Nam:",
    options: [
      "Dân chủ nhân dân, một phần thuộc địa và nửa phong kiến", 
      "Dân chủ và dân tộc", 
      "Thuộc địa nửa phong kiến", 
      "Dân tộc và dân chủ mới"
    ],
    answer: "Dân chủ nhân dân, một phần thuộc địa và nửa phong kiến"
  },
  {
    question: "Hai đối tượng của cách mạng Việt Nam được nêu ra tại Chính cương Đảng Lao động Việt Nam:",
    options: [
      "Đối tượng chính là chủ nghĩa đế quốc xâm lược, cụ thể là thực dân Pháp", 
      "Đối tượng phụ là phong kiến, cụ thể là phong kiến phản động", 
      "Thực dân Pháp và phong kiến phản động", 
      "Đế quốc và phong kiến Việt Nam"
    ],
    answer: "Thực dân Pháp và phong kiến phản động"
  },
  {
    question: "Con đường đi lên chủ nghĩa xã hội được nêu ra tại Chính cương Đảng Lao động Việt Nam trải qua mấy giai đoạn?",
    options: [
      "2", 
      "3", 
      "4", 
      "5"
    ],
    answer: "3"
  },
  {
    question: "Lực lượng tạo nên động lực cho cách mạng Việt Nam được nêu ra trong Chính cương Đảng Lao động Việt Nam:",
    options: [
      "Công nhân, nông dân, tiểu tư sản, tư sản dân tộc, địa chủ yêu nước (nhân dân)", 
      "Công nhân, nông dân, lao động trí thức", 
      "Công nhân, trí thức, tư sản dân tộc", 
      "Nhân dân, địa chủ, tư sản dân tộc"
    ],
    answer: "Công nhân, nông dân, tiểu tư sản, tư sản dân tộc, địa chủ yêu nước (nhân dân)"
  },
  {
    question: "Sau thất bại ở Việt Bắc thu - đông năm 1947, Pháp buộc phải chuyển từ 'đánh nhanh, thắng nhanh' sang...",
    options: [
      "'đánh thần tốc'", 
      "'chắc thắng mới đánh'", 
      "'đánh lâu dài'", 
      "'vừa đánh vừa đàm phán'"
    ],
    answer: "'đánh lâu dài'"
  },
  {
    question: "Chọn phương án đúng nhất: Đường lối kháng chiến chống thực dân Pháp của Đảng Cộng sản Đông Dương (1945-1954) là:",
    options: [
      "toàn diện, tự lực cánh sinh và tranh thủ sự ủng hộ quốc tế", 
      "trường kỳ, tự lực cánh sinh và tranh thủ sự ủng hộ quốc tế", 
      "toàn dân, tự lực cánh sinh và tranh thủ sự ủng hộ quốc tế", 
      "toàn dân, toàn diện, trường kỳ, tự lực cánh sinh và tranh thủ sự ủng hộ quốc tế"
    ],
    answer: "toàn dân, toàn diện, trường kỳ, tự lực cánh sinh và tranh thủ sự ủng hộ quốc tế"
  },
  {
    question: "Thắng lợi của quân dân Việt Nam trong cuộc chiến đáu chống thực dân Pháp ở các đô thị phía Bắc vĩ tuyến 16 (từ 12/1946 đên 2/1947) đã ...",
    options: [
      "làm thất bại ý chí xâm lược của thực dân Pháp", 
      "làm phá sản kế hoạch 'đánh nhanh thắng nhanh' của thực dân Pháp", 
      "mở ra bước phát triển lớn trong cuộc kháng chiến chống thực dân Pháp", 
      "làm thất bại bước đầu kế hoạch 'đánh nhanh thắng nhanh' của Pháp"
    ],
    answer: "làm thất bại bước đầu kế hoạch 'đánh nhanh thắng nhanh' của Pháp"
  },{
    question: "Âm mưu của Pháp trong cuộc tấn công quy mô lên Việt Bắc năm 1947 là gì?",
    options: [
      "Mở rộng vùng chiếm đóng", 
      "Nhanh chóng kết thúc chiến tranh", 
      "Giành lại thế chủ động trên chiến trường", 
      "Buộc Việt Nam ngồi vào bàn đàm phán Pa-ri"
    ],
    answer: "Nhanh chóng kết thúc chiến tranh"
  },
  {
    question: "Điều lệ mới của Đảng Lao Động đã xác định Đảng đại diện cho quyền lợi của...",
    options: [
      "Giai cấp công nhân Việt Nam", 
      "Nhân dân Việt Nam", 
      "Dân tộc Việt Nam", 
      "Giai cấp công nhân và nhân dân lao động Việt Nam"
    ],
    answer: "Giai cấp công nhân và nhân dân lao động Việt Nam"
  },
  {
    question: "Chủ trương của Đảng Cộng sản Đông Dương khi Pháp tấn công lên Việt Bắc năm 1947 là...",
    options: [
      "Tiêu diệt sinh lực địch", 
      "Mở rộng căn cứ địa Việt Bắc", 
      "Chiến tranh du kích, nhằm tiêu diệt sinh lực địch", 
      "Phải phá tan cuộc tấn công mùa đông của Pháp"
    ],
    answer: "Phải phá tan cuộc tấn công mùa đông của Pháp"
  },
  {
    question: "Nền tảng tư tưởng và kim chỉ nam được Đảng ta xác định tại Đại hội I là:",
    options: [
      "Chủ nghĩa Mác - Lênin", 
      "Tư tưởng Hồ Chí Minh", 
      "Truyền thống dân tộc", 
      "Phật giáo"
    ],
    answer: "Chủ nghĩa Mác - Lênin"
  },
  {
    question: "Đại hội Đảng toàn quốc lần thứ hai đã bầu ai làm Tổng Bí thư Đảng Lao Động Việt Nam?",
    options: [
      "Hồ Chí Minh", 
      "Trần Phú", 
      "Trường Chinh", 
      "Lê Duẩn"
    ],
    answer: "Trường Chinh"
  },
  {
    question: "Hiệp định phòng thủ chung Đông Dương ngày 23/12/1950 được kí kết bởi những nước nào?",
    options: [
      "Anh và Nhật", 
      "Mĩ và Nhật", 
      "Mĩ và Pháp", 
      "Anh và Pháp"
    ],
    answer: "Mĩ và Pháp"
  },
  {
    question: "Trong tiến trình hình thành và phát triển từ năm 1930-1951, Đảng Cộng sản Việt Nam đã đề ra bao nhiêu Cương lĩnh chính trị và vào thời điểm nào?",
    options: [
      "Cương lĩnh năm 1930", 
      "2 cương lĩnh vào năm 1930 và 1945", 
      "3 cương lĩnh vào năm 1930, 1945, 1951", 
      "3 cương lĩnh vào năm 1930, 1951 (năm 1930 ra đời 2 cương lĩnh)"
    ],
    answer: "3 cương lĩnh vào năm 1930, 1951 (năm 1930 ra đời 2 cương lĩnh)"
  },
  {
    question: "Đại hội II của Đảng Cộng sản Đông Dương đã lấy tờ báo nào làm cơ quan ngôn luận của Trung ương Đảng?",
    options: [
      "Báo Tuổi trẻ", 
      "Báo Nhân dân", 
      "Báo Thanh niên", 
      "Báo An ninh"
    ],
    answer: "Báo Nhân dân"
  },
  {
    question: "Nền tảng tư tưởng và kim chỉ nam được Đảng ta xác định tại Đại hội II là:",
    options: [
      "Chủ nghĩa Mác - Lênin", 
      "Tư tưởng Hồ Chí Minh", 
      "Truyền thống dân tộc", 
      "Phật giáo"
    ],
    answer: "Truyền thống dân tộc"
  },
  {
    question: "Đại hội nào của Đảng đã quyết định tách 3 Đảng bộ Đảng Cộng sản ở 3 nước Việt Nam, Lào và Campuchia?",
    options: [
      "Đại hội I",
      "Đại hội II",
      "Đại hội III",
      "Đại hội IV"
    ],
    answer: "Đại hội II"
  },
  {
    question: "Đến 7/1954, Đảng và Chính phủ Việt Nam Dân chủ cộng hòa đã tiến hành được bao nhiêu đợt giảm tô và cải cách ruộng đất?",
    options: [
      "4 đợt giảm tô và 1 đợt cải cách ruộng đất",
      "5 đợt giảm tô và 1 đợt cải cách ruộng đất",
      "6 đợt giảm tô và 1 đợt cải cách ruộng đất",
      "7 đợt giảm tô và 1 đợt cải cách ruộng đất"
    ],
    answer: "5 đợt giảm tô và 1 đợt cải cách ruộng đất"
  },
  {
    question: "Khối liên minh nhân dân 3 nước Việt Nam - Lào và Campuchia được thành lập khi nào?",
    options: [
      "2/1951",
      "3/1951",
      "4/1951",
      "5/1951"
    ],
    answer: "3/1951"
  },
  {
    question: "Đại hội Đảng nào sau đây được coi là 'Đại hội kháng chiến thắng lợi'?",
    options: [
      "Đại hội lần thứ VI của Đảng (1986)",
      "Đại hội Quốc dân ở Tân Trào (1945)",
      "Đại hội lần thứ II của Đảng (1951)",
      "Đại hội Đại biểu lần thứ III của Đảng (1960)"
    ],
    answer: "Đại hội lần thứ II của Đảng (1951)"
  },
  {
    question: "Từ những năm 1950 trở đi, để quốc Mỹ đã can thiệp ngày càng sâu vào cuộc chiến tranh ở Đông Dương. Theo đó đến năm 1954, viện trợ của Mỹ cho Pháp đã tăng bao nhiêu % trong ngân sách chiến tranh ở Đông Dương?",
    options: [
      "50%",
      "60%",
      "73%",
      "80%"
    ],
    answer: "80%"
  },
  {
    question: "Lá cờ 'Quyết chiến, quyết thắng' trong chiến dịch Điện Biên Phủ được trao cho đơn vị nào?",
    options: [
      "Đại đoàn 308",
      "Đại đoàn 312",
      "Đại đoàn 316",
      "Đại đoàn 320"
    ],
    answer: "Đại đoàn 312"
  },
  {
    question: "Ngay sau khi quyết định chọn chiến dịch Điện Biên Phủ là trận quyết chiến, chiến lược, ban đầu TW Đảng đã xác định phương châm:",
    options: [
      "Đánh chắc, tiến chắc",
      "Đánh nhanh, thắng nhanh",
      "Chắc thắng mới đánh, không chắc thắng không đánh",
      "Đánh lâu dài"
    ],
    answer: "Đánh nhanh, thắng nhanh"
  },
  {
    question: "Ai đã được cử làm Tư lệnh kiêm Bí thư Đảng uỷ chiến dịch Điện Biên Phủ?",
    options: [
      "Hoàng Văn Thái",
      "Văn Tiến Dũng",
      "Phạm Văn Đồng",
      "Võ Nguyên Giáp"
    ],
    answer: "Võ Nguyên Giáp"
  },
  {
    question: "Trên cơ sở theo dõi tình hình địch ở Điện Biên Phủ, Đại tướng Võ Nguyên Giáp đã quyết định thay đổi để thực hiện phương châm:",
    options: [
      "Đánh nhanh, thắng nhanh",
      "Chắc thắng mới đánh, không chắc thắng không đánh",
      "Đánh chắc, tiến chắc",
      "Cơ động, chủ động, linh hoạt"
    ],
    answer: "Đánh chắc, tiến chắc"
  },
  {
    question: "Cuộc kháng chiến chống thực dân Pháp kéo dài bao nhiêu năm?",
    options: [
      "7 năm",
      "8 năm",
      "9 năm",
      "10 năm"
    ],
    answer: "9 năm"
  },
  {
    question: "Nội dung nào không phải là ý nghĩa của chiến dịch lịch sử Điện Biên Phủ 1954?",
    options: [
      "Làm phá sản hoàn toàn kế hoạch Nava của thực dân Pháp",
      "Làm xoay chuyển cục diện chiến tranh ở Đông Dương",
      "Buộc thực dân Pháp phải chuyển sang 'đánh lâu dài' với Việt Nam"
    ],
    answer: "Buộc thực dân Pháp phải chuyển sang 'đánh lâu dài' với Việt Nam"
  },
  {
    question: "Nguyên nhân quyết định sự thắng lợi cuộc kháng chiến chống thực dân Pháp 1945-1954 của nhân dân Việt Nam là gì?",
    options: [
      "Sự liên minh chiến đấu của 3 nước Đông Dương",
      "Sự ủng hộ và giúp đỡ của các nước xã hội chủ nghĩa",
      "Truyền thống yêu nước, ý chí chống giặc bất khuất của nhân dân",
      "Sự lãnh đạo sáng suốt của Đảng, với đường lối đúng đắn sáng tạo"
    ],
    answer: "Sự lãnh đạo sáng suốt của Đảng, với đường lối đúng đắn sáng tạo"
  },
  {
    question: "Quân ta vào tiếp quản Thủ đô Hà Nội ngày nào?",
    options: [
      "10-10-1954",
      "10-10-1955",
      "10-10-1956",
      "1-10-1954"
    ],
    answer: "10-10-1954"
  },
  {
    question: "Nhân dân Nam bộ đứng lên kháng chiến chống thực dân Pháp xâm lược bảo vệ chính quyền cách mạng vào ngày nào?",
    options: [
      "23-9-1945",
      "23-11-1945",
      "19-12-1946",
      "10-12-1946"
    ],
    answer: "23-9-1945"
  },
  {
    question: "Đảng ta đã phát động phong trào gì để ủng hộ nhân lực cho Nam Bộ kháng chiến chống Pháp từ ngày 23-9-1945?",
    options: [
      "Vì miền Nam 'thành đồng Tổ quốc'",
      "Hướng về miền Nam ruột thịt",
      "Nam tiến",
      "Cả A, B, C"
    ],
    answer: "Nam tiến"
  },
  {
    question: "Hà Nội được xác định là thủ đô của nước Việt Nam dân chủ cộng hòa vào năm nào?",
    options: [
      "Năm 1945",
      "Năm 1946",
      "Năm 1954",
      "Năm 1930"
    ],
    answer: "Năm 1945"
  },
  {
    question: "Để gạt mũi nhọn tiến công của kẻ thủ, Đảng ta đã tuyên bố tự giải tán vào ngày tháng năm nào và lấy tên gọi là gì?",
    options: [
      "2.9.1945 - Đảng Cộng sản Đông Dương",
      "25-11-1945 - Hội nghiên cứu Chủ nghĩa Mác - Lênin",
      "3-2-1946 - Đảng Lao động Việt Nam",
      "11-11-1945 - Hội nghiên cứu Chủ nghĩa Mác ở Đông Dương"
    ],
    answer: "11-11-1945 - Hội nghiên cứu Chủ nghĩa Mác ở Đông Dương"
  },
  {
    question: "Quân viễn chính Pháp rút hết khỏi miền Bắc nước ta vào thời gian nào?",
    options: [
      "15/5/1954",
      "16/5/1955",
      "16/5/1956",
      "10/10/1954"
    ],
    answer: "16/5/1955"
  },
  {
    question: "Sự kiện nào đánh dấu miền Bắc Việt Nam được hoàn toàn giải phóng?",
    options: [
      "Ngày 21/7/1954, Hiệp định Giơnevơ được ký kết",
      "Ngày 10/10/1954, quân ta tiếp quản Hà Nội",
      "Ngày 1/1/1955, Trung ương Đảng và Chính phủ ra mắt nhân dân thủ đô",
      "Ngày 16/5/1955, quân Pháp rút khỏi đảo Cát Bà (Hải Phòng)"
    ],
    answer: "Ngày 16/5/1955, quân Pháp rút khỏi đảo Cát Bà (Hải Phòng)"
  },
  {
    question: "Nghị quyết về đường lối cách mạng miền Nam được thông qua tại Hội nghị, Đại hội nào sau đây?",
    options: [
      "Đại hội II",
      "Hội nghị TW 15 khóa II",
      "Đại hội III",
      "Hội nghị TW 15 khóa III"
    ],
    answer: "Hội nghị TW 15 khóa II"
  },
  {
    question: "Trong cuộc chiến đấu chống chiến lược 'Chiến tranh đặc biệt' (1961 - 1965) của quân dân miền Nam Việt Nam đã dấy lên phong trào...",
    options: [
      "'Thi đua Ấp Bắc, giết giặc lập công'",
      "'Tìm Mĩ mà đánh, lùng ngụy mà diệt'",
      "'Đánh cho Mĩ cút, đánh cho ngụy nhào'",
      "'Quyết chiến quyết thắng giặc Mỹ xâm lược'"
    ],
    answer: "'Thi đua Ấp Bắc, giết giặc lập công'"
  },
  {
    question: "Hội nghị nào của Đảng mở đường cho phong trào 'Đồng khởi' ở miền Nam năm 1960?",
    options: [
      "Hội nghị Trung ương 12 - Khóa II của Đảng (3-1957)",
      "Hội nghị Trung ương 13 - Khóa II của Đảng (12-1957)",
      "Hội nghị Trung ương 14 - Khóa II của Đảng (11-1958)",
      "Hội nghị Trung ương 15 - Khóa II của Đảng (1-1959)"
    ],
    answer: "Hội nghị Trung ương 15 - Khóa II của Đảng (1-1959)"
  },
  {
    question: "Phong trào 'Đồng Khởi' (1959 - 1960) nổ ra đầu tiên ở đâu?",
    options: [
      "Vĩnh Thạnh (Bình Định)",
      "Bác Ái (Ninh Thuận)",
      "Trà Bồng (Quảng Ngãi)",
      "Mỏ Cày (Bến Tre)"
    ],
    answer: "Mỏ Cày (Bến Tre)"
  },
  {
    question: "Đường lối cách mạng xã hội chủ nghĩa ở miền Bắc được thông qua tại Đại hội nào?",
    options: [
      "Đại hội II",
      "Đại hội III",
      "Đại hội IV",
      "Đại hội V"
    ],
    answer: "Đại hội III"
  },
  {
    question: "Âm mưu cơ bản của chiến lược 'Chiến tranh đặc biệt' là...",
    options: [
      "Dùng người Việt đánh người Việt",
      "Bình định miền Nam trong vòng 18 tháng",
      "Ngăn cản sự chi viện của nhân dân miền Bắc cho miền Nam",
      "Mở các đợt hành quân càn quét nhằm tiêu diệt lực lượng cách mạng"
    ],
    answer: "Dùng người Việt đánh người Việt"
  },
  {
    question: "Mặt trận dân tộc giải phóng miền Nam Việt Nam ra đời khi nào?",
    options: [
      "20/12/1960",
      "21/12/1960",
      "20/12/1961",
      "21/12/1961"
    ],
    answer: "20/12/1960"
  },
  {
    question: "Quân dân miền Bắc đập tan cuộc tập kích chiến lược bằng BS2 của đế quốc Mỹ trong bao nhiêu ngày đêm và từ ngày nào đến ngày nào?",
    options: [
      "A. 10 ngày đêm từ 15 đến 25 tháng 10 năm 1970",
      "B. 11 ngày đêm từ 16 đến 26 tháng 11 năm 1971",
      "C. 12 ngày đêm từ 17 đến 29 tháng 12 năm 1972",
      "D. 12 ngày đêm từ 18 đến 30 tháng 12 năm 1972"
    ],
    answer: "C. 12 ngày đêm từ 17 đến 29 tháng 12 năm 1972"
  },
  {
    question: "Chiến thắng nào dưới đây khẳng định quân dân miền Nam Việt Nam có khả năng đánh thắng chiến lược 'Chiến tranh đặc biệt' (1961 - 1965) của Mỹ?",
    options: [
      "A. An Lão (Bình Định)",
      "B. Ba Gia (Quảng Ngãi)",
      "C. Bình Giã (Bà Rịa)",
      "D. Áp Bắc (Mỹ Tho)"
    ],
    answer: "D. Áp Bắc (Mỹ Tho)"
  },
  {
    question: "Từ năm 1954 đến 1960, Mỹ thực hiện chiến lược chiến tranh gì ở miền Nam Việt Nam?",
    options: [
      "A. Chiến lược 'Chiến tranh đơn phương'.",
      "B. Chiến lược 'Chiến tranh đặc biệt'.",
      "C. Chiến lược 'Chiến tranh cục bộ'.",
      "D. Chiến lược 'Việt Nam hóa chiến tranh'."
    ],
    answer: "A. Chiến lược 'Chiến tranh đơn phương'."
  },
  {
    question: "Từ năm 1961 đến 1965, Mỹ thực hiện chiến lược chiến tranh gì ở miền Nam Việt Nam?",
    options: [
      "A. Chiến lược 'Chiến tranh đơn phương'",
      "B. Chiến lược 'Chiến tranh đặc biệt'",
      "C. Chiến lược 'Chiến tranh cục bộ'",
      "D. Chiến lược 'Việt Nam hóa chiến tranh'"
    ],
    answer: "B. Chiến lược 'Chiến tranh đặc biệt'"
  },
  {
    question: "Hiệp định Paris về chấm dứt chiến tranh lập lại hòa bình ở Việt Nam được ký khi nào?",
    options: [
      "A. 20/7/1954",
      "B. 22/12/1954",
      "C. 27/2/1973",
      "D. 27/1/1973"
    ],
    answer: "D. 27/1/1973"
  },
  {
    question: "Từ năm 1945 đến nay nhân dân ta đã tham gia bầu cử bao nhiêu khóa Quốc hội?",
    options: [
      "A. 9",
      "B. 10",
      "C. 11",
      "D. 12"
    ],
    answer: "D. 12"
  },
  {
    question: "Thắng lợi nào của quân dân miền Nam đóng vai trò quyết định trong việc đánh bại chiến lược 'Chiến tranh đơn phương' của Mỹ (1954 - 1960)?",
    options: [
      "A. Đồng khởi (Bến Tre)",
      "B. Áp Bắc (Mỹ Tho)",
      "C. Bình Giã (Bà Rịa)",
      "D. Ba Gia (Quảng Ngãi)"
    ],
    answer: "A. Đồng khởi (Bến Tre)"
  },
  {
    question: "Mỹ đã đưa quân viễn chinh Mỹ trực tiếp tham chiến ở Việt Nam khi nào?",
    options: [
      "A. 1963",
      "B. 1964",
      "C. 1965",
      "D. 1966"
    ],
    answer: "C. 1965"
  },
  {
    question: "Mỹ đã đưa Ngô Đình Diệm lên làm thủ tướng vào thời gian nào?",
    options: [
      "A. 5/7/1954",
      "B. 6/7/1954",
      "C. 7/7/1954",
      "D. 15/7/1955"
    ],
    answer: "C. 7/7/1954"
  },
  {
    question: "Mỹ - Diệm đã ra luật 10/59 vào thời gian nào?",
    options: [
      "A. 6/5/1959",
      "B. 10/5/1959",
      "C. 10/10/1959",
      "D. 5/10/1959"
    ],
    answer: "C. 10/10/1959"
  },
  {
    question: "Từ năm 1965 đến năm 1968, Mĩ thực hiện chiến lược chiến tranh nào ở miền Nam Việt Nam?",
    options: [
      "A. 'Việt Nam hóa chiến tranh'",
      "B. 'Đông Dương hóa chiến tranh'",
      "C. 'Chiến tranh cục bộ'",
      "D. 'Chiến tranh đặc biệt'"
    ],
    answer: "C. 'Chiến tranh cục bộ'"
  },
  {
    question: "Ai được cử làm Bí thư Trung ương cục miền Nam đầu tiên?",
    options: [
      "A. Phạm Hùng",
      "B. Nguyễn Văn Linh",
      "C. Phan Đăng Lưu",
      "D. Lê Duẩn"
    ],
    answer: "D. Lê Duẩn"
  },
  {
    question: "Trận đấu sức quyết liệt đầu tiên giữa quân và dân ta với quân viễn chinh Mỹ vào thời gian nào?",
    options: [
      "A. 3/1965",
      "B. 4/1965",
      "C. 5/1965",
      "D. 6/1966"
    ],
    answer: "B. 4/1965"
  },
  {
    question: "Chiến thắng nào của quân dân miền Nam chống chiến lược 'Chiến tranh cục bộ' của Mỹ có ý nghĩa mở ra cao trào 'Tìm Mĩ mà đánh, lùng ngụy mà diệt' trên khắp miền Nam?",
    options: [
      "A. Chiến thắng Áp Bắc (1/1963)",
      "B. Chiến thắng Vạn Tường (8/1965)",
      "C. Chiến thắng mùa khô lần thứ nhất (1965 - 1966)",
      "D. Chiến thắng mùa khô lần thứ hai (1966 - 1967)"
    ],
    answer: "B. Chiến thắng Vạn Tường (8/1965)"
  },
  {
    question: "Chiến thắng Vạn Tường (Quảng Ngãi) vào thời gian nào?",
    options: [
      "A. 5/1965",
      "B. 7/1965",
      "C. 18-8/1965",
      "D. 7/1966"
    ],
    answer: "C. 18-8/1965"
  },
  {
    question: "Thời kỳ Mỹ thực hiện chiến lược 'Chiến tranh đặc biệt' của Kennedy (1961 - 1964), chính quyền Sài Gòn bị Mỹ thay đổi mấy lần?",
    options: [
      "A. 8",
      "B. 10",
      "C. 11",
      "D. 12"
    ],
    answer: "B. 10"
  },
  {
    question: "Mỹ tiến hành chiến tranh phá hoại miền Bắc lần thứ nhất trong khoảng thời gian nào?",
    options: [
      "A. 1954 - 1960",
      "B. 1960 - 1965",
      "C. 1965 - 1968",
      "D. 1969 - 1973"
    ],
    answer: "C. 1965 - 1968"
  },
  {
    question: "Chiến thắng nào của nhân dân miền Nam Việt Nam trong đông - xuân 1964 - 1965 góp phần làm phá sản chiến lược 'Chiến tranh đặc biệt' của Mĩ?",
    options: [
      "A. Vạn Tường (Quảng Ngãi)",
      "B. Núi Thành (Quảng Nam)",
      "C. Bình Giã (Bà Rịa)",
      "D. Khe Sanh (Quảng Trị)"
    ],
    answer: "C. Bình Giã (Bà Rịa)"
  },
    {
      question: "Các thành phần kinh tế dựa trên chế độ công hữu ở Việt Nam là?",
      options: [
        "Kinh tế tư nhân và kinh tế có vốn đầu tư nước ngoài",
        "Kinh tế nhà nước và kinh tế tư nhân",
        "Kinh tế nhà nước và kinh tế tập thể",
        "Kinh tế tập thể và kinh tế tư nhân"
      ],
      answer: "Kinh tế nhà nước và kinh tế tập thể"
    },
    {
      question: "Kinh tế thị trường định hướng XHCN ở Việt Nam có đặc điểm gì?",
      options: [
        "Có nhiều hình thức sở hữu, nhiều thành phần kinh tế",
        "Có nhiều hình thức sở hữu, một thành phần kinh tế",
        "Có một hình thức sở hữu, nhiều thành phần kinh tế",
        "Có một hình thức sở hữu, một thành phần kinh tế",
      ],
      answer: "Có nhiều hình thức sở hữu, nhiều thành phần kinh tế"
    },
    {
      question: "Từ khi nào Đảng ta không dùng khái niệm 'Hệ thống chuyên chính vô sản'?",
      options: [
        "Từ Đại hội VI",
        "Từ Hội nghị Trung ương 6, khoá VI",
        "Từ Đại hội VII",
        "Từ Đại hội VIII"
      ],
      answer: "Từ Hội nghị Trung ương 6, khoá VI"
    },
    {
      question: "Việt Nam gia nhập Hội đồng Tương trợ kinh tế (khối SEV) vào năm nào?",
      options: [
        "Năm 1975",
        "Năm 1976",
        "Năm 1977",
        "Năm 1978",
      ],
      answer: "Năm 1978",
    },
    {
      question: "Việt Nam tiếp nhận ghế thành viên tại Liên Hợp Quốc vào năm nào?",
      options: [
        "Năm 1975",
        "Năm 1976",
        "Năm 1977",
        "Năm 1978",
      ],
      answer: "Năm 1977",
    },
    {
      question: "'Đề cương văn hoá Việt Nam' do đồng chí Trường Chinh soạn thảo được Ban Thường vụ Trung ương Đảng thông qua vào năm nào?",
      options: [
        "Năm 1941",
        "Năm 1943",
        "Năm 1944",
        "Năm 1945",
      ],
      answer: "Năm 1943",
    },
    {
      question: "Khái niệm 'hệ thống chính trị' lần đầu tiên được Đảng ta sử dụng khi nào?",
      options: [
        "Tại Đại hội VI",
        "Tại Hội nghị Trung ương 6, khoá VI",
        "Tại Đại hội VII",
        "Tại Đại hội VIII",
      ],
      answer: "Tại Hội nghị Trung ương 6, khoá VI",
    },
    {
      question: "Thành phần kinh tế tư nhân dựa trên chế độ sở hữu nào?",
      options: [
        "Công hữu",
        "Tư nhân",
        "Tập thể",
        "Hỗn hợp",
      ],
     answer: "Tư nhân",
    },
    {
      question: "Thành phần kinh tế giữ vai trò chủ đạo trong nền kinh tế thị trường định hướng XHCN ở Việt Nam là ...?",
      options: [
          "Kinh tế nhà nước",
          "Kinh tế tư nhân",
          "Kinh tế tập thể",
          "Kinh tế có vốn đầu tư nước ngoài"
      ],
      answer: "Kinh tế nhà nước"
  },
  {
      question: "Điểm nào dưới đây không phải là nguyên tắc của nền văn hóa mới đã được xác định trong \"Đề cương văn hóa Việt Nam\" do đồng chí Trường Chinh soạn thảo?",
      options: [
          "Dân tộc hóa",
          "Đại chúng hóa",
          "Khoa học hóa",
          "Văn hóa hóa"
      ],
      answer: "Văn hóa hóa"
  },
  {
      question: "Trong những đặc điểm chủ yếu của cơ chế quản lý kinh tế thời kỳ trước đổi mới, đặc điểm nào sau đây đã triệt tiêu các yếu tố của thị trường?",
      options: [
          "Nhà nước quản lý nền kinh tế chủ yếu bằng hệ thống chỉ tiêu pháp lệnh chi tiết áp đặt từ trên xuống dưới",
          "Các doanh nghiệp không có quyền tự chủ sản xuất kinh doanh. Giá cả do Nhà nước quy định",
          "Nhà nước quản lý kinh tế thông qua chế độ \"cấp phát\", \"giao nộp\" và cơ chế \"xin - cho\"",
          "Bộ máy quản lý cồng kềnh, phong cách cửa quyền, quan liêu"
      ],
      answer: "Nhà nước quản lý nền kinh tế chủ yếu bằng hệ thống chỉ tiêu pháp lệnh chi tiết áp đặt từ trên xuống dưới"
  },
  {
      question: "Trong các cơ sở hình thành hệ thống chuyên chính vô sản ở nước ta, \"Kết quả cải tạo xã hội chủ nghĩa đối với các thành phần kinh tế phi xã hội chủ nghĩa\" đã trực tiếp tạo ra cơ sở nào?",
      options: [
          "Cơ sở lý luận Mác - Lênin",
          "Đường lối chung của cách mạng Việt Nam",
          "Cơ sở kinh tế kế hoạch hóa tập trung quan liêu, bao cấp",
          "Cơ sở giai cấp xã hội: chỉ còn giai cấp công nhân, nông dân và tầng lớp trí thức"
      ],
      answer: "Cơ sở giai cấp xã hội: chỉ còn giai cấp công nhân, nông dân và tầng lớp trí thức"
  },
  {
      question: "Chủ tịch Hồ Chí Minh viết tài liệu \"Đời sống mới\" vào năm nào?",
      options: [
          "Năm 1945",
          "Năm 1946",
          "Năm 1947",
          "Năm 1948"
      ],
      answer: "Năm 1947"
  },
  {
      question: "Trong những đặc điểm chủ yếu của cơ chế quản lý kinh tế thời kỳ trước đổi mới, đặc điểm nào sau đây làm cho các chủ thể kinh tế không có tính độc lập trong thị trường?",
      options: [
          "Nhà nước quản lý nền kinh tế chủ yếu bằng hệ thống chỉ tiêu pháp lệnh chi tiết áp đặt từ trên xuống dưới",
          "Các doanh nghiệp không có quyền tự chủ sản xuất kinh doanh. Giá cả do Nhà nước quy định",
          "Nhà nước quản lý kinh tế thông qua chế độ \"cấp phát - giao nộp\" và cơ chế \"xin - cho\"",
          "Bộ máy quản lý cồng kềnh, phong cách cửa quyền, quan liêu"
      ],
      answer: "Các doanh nghiệp không có quyền tự chủ sản xuất kinh doanh. Giá cả do Nhà nước quy định"
  },
  {
      question: "Trong những đặc điểm chủ yếu của cơ chế quản lý kinh tế thời kỳ trước đổi mới, đặc điểm nào sau đây tạo ra tâm lý ý lại, thụ động, tiêu cực trong hoạt động kinh tế?",
      options: [
          "Nhà nước quản lý nền kinh tế chủ yếu bằng hệ thống chỉ tiêu pháp lệnh chi tiết áp đặt từ trên xuống dưới",
          "Các doanh nghiệp không có quyền tự chủ sản xuất kinh doanh. Giá cả do Nhà nước quy định",
          "Nhà nước quản lý kinh tế thông qua chế độ \"cấp phát - giao nộp\" và cơ chế \"xin - cho\"",
          "Bộ máy quản lý cồng kềnh, phong cách cửa quyền, quan liêu"
      ],
      answer: "Nhà nước quản lý kinh tế thông qua chế độ \"cấp phát - giao nộp\" và cơ chế \"xin - cho\""
  },
  {
    question: "Trong những đặc điểm chủ yếu của cơ chế quản lý kinh tế thời kỳ trước đổi mới, đặc điểm nào sau đây sinh ra nhiều yếu kém, khuyết điểm trong bộ máy quản lý?",
    options: [
      "Nhà nước quản lý nền kinh tế chủ yếu bằng hệ thống chỉ tiêu pháp lệnh chi tiết áp đặt từ trên xuống dưới",
      "Các doanh nghiệp không có quyền tự chủ sản xuất kinh doanh, giá cả do Nhà nước quy định",
      "Nhà nước quản lý kinh tế thông qua chế độ 'cấp phát - giao nộp' và cơ chế 'xin - cho'",
      "Bộ máy quản lý cồng kềnh, phong cách cửa quyền, quan liêu"
    ],
    answer: "Bộ máy quản lý cồng kềnh, phong cách cửa quyền, quan liêu"
  },
  {
    question: "Đường lối xây dựng và phát triển Văn hóa trong giai đoạn cách mạng xã hội chủ nghĩa được hình thành bắt đầu từ Đại hội nào của Đảng?",
    options: [
      "Đại hội III",
      "Đại hội IV",
      "Đại hội V",
      "Đại hội VI"
    ],
    answer: "Đại hội III"
  },
  {
    question: "Chủ trương hợp tác bình đẳng và cùng có lợi với tất cả các nước, không phân biệt chế độ chính trị - xã hội khác nhau trên cơ sở các nguyên tắc cùng tồn tại hòa bình là xuất phát trực tiếp từ cơ sở nào trong các cơ sở dưới đây?",
    options: [
      "Các nước, nhất là những nước đang phát triển đã đổi mới tư duy đối ngoại, thực hiện chính sách đa phương hóa, đa dạng hóa quan hệ quốc tế",
      "Toàn cầu hóa kinh tế là một xu thế khách quan, lôi cuốn ngày càng nhiều nước tham gia để tránh khỏi nguy cơ bị biệt lập, tụt hậu, kém phát triển",
      "Vấn đề giải tỏa tình trạng đối đầu, thù địch, phá thế bị bao vây, cấm vận, tạo môi trường quốc tế thuận lợi để tập trung xây dựng kinh tế là nhu cầu cấp bách đối với nước ta",
      "Nhu cầu chống tụt hậu về kinh tế, tranh thủ các nguồn lực bên ngoài đặt ra gay gắt với Việt Nam"
    ],
    answer: "Vấn đề giải tỏa tình trạng đối đầu, thù địch, phá thế bị bao vây, cấm vận, tạo môi trường quốc tế thuận lợi để tập trung xây dựng kinh tế là nhu cầu cấp bách đối với nước ta"
  },
  {
    question: "Nghị quyết Hội nghị Trung ương mấy khóa XI đã nêu ra 5 quan điểm cơ bản chỉ đạo quá trình phát triển văn hóa, con người Việt Nam đáp ứng yêu cầu phát triển bền vững đất nước?",
    options: [
      "Nghị quyết Hội nghị Trung ương 6 khóa XI",
      "Nghị quyết Hội nghị Trung ương 7 khóa XI",
      "Nghị quyết Hội nghị Trung ương 8 khóa XI",
      "Nghị quyết Hội nghị Trung ương 9 khóa XI"
    ],
    answer: "Nghị quyết Hội nghị Trung ương 9 khóa XI"
  },
  {
    question: "Trong các cơ sở hình thành hệ thống chuyên chính vô sản ở nước ta, các biểu hiện quan trọng của hệ thống chuyên chính vô sản đó là sự phân tính cơ sở nào?",
    options: [
      "Cơ sở lý luận Mác - Lênin",
      "Đường lối chung của cách mạng Việt Nam",
      "Cơ sở kinh tế kế hoạch hóa tập trung quan liêu, bao cấp",
      "Cơ sở giai cấp xã hội: chỉ còn giai cấp công nhân, nông dân và tầng lớp trí thức"
    ],
    answer: "Cơ sở kinh tế kế hoạch hóa tập trung quan liêu, bao cấp"
  },
  {
    question: "Cơ chế quản lý tập trung quan liêu, bao cấp thực hiện trong giai đoạn trước đổi mới đã gây ra những tác hại sau đây. Tác hại nào rất khó đẩy lùi và vẫn còn kéo dài đến nay?",
    options: [
      "Không tạo được động lực phát triển",
      "Không thúc đẩy sản xuất",
      "Làm giảm năng suất, chất lượng, hiệu quả",
      "Sinh ra nhiều hiện tượng tiêu cực trong xã hội"
    ],
    answer: "Làm giảm năng suất, chất lượng, hiệu quả"
  },
  {
    question: "Quan điểm nào trong các quan điểm sau đây nói về chức năng, vị trí, vai trò đặc biệt quan trọng của văn hóa đối với sự phát triển xã hội?",
    options: [
      "Văn hóa là nền tảng tinh thần của xã hội, là mục tiêu, động lực phát triển bền vững đất nước. Văn hóa phải được đặt ngang hàng với kinh tế, chính trị, xã hội",
      "Xây dựng nền văn hóa Việt Nam tiên tiến, đậm đà bản sắc dân tộc, thống nhất trong đa dạng của cộng đồng các dân tộc Việt Nam, với các đặc trưng dân tộc, nhân văn, dân chủ và khoa học",
      "Phát triển văn hóa vì sự hoàn thiện nhân cách con người và xây dựng con người để phát triển văn hóa. Trong xây dựng văn hóa, trọng tâm là chăm lo xây dựng con người có nhân cách, lối sống tốt đẹp, với các đặc tính cơ bản: yêu nước, nhân ái, nghĩa tình, trung thực, đoàn kết, cần cù, sáng tạo",
      "Xây dựng và phát triển văn hóa là sự nghiệp của toàn dân do Đảng lãnh đạo, Nhà nước quản lý, nhân dân là chủ thể sáng tạo, đội ngũ trí thức giữ vai trò quan trọng"
    ],
    answer: "Văn hóa là nền tảng tinh thần của xã hội, là mục tiêu, động lực phát triển bền vững đất nước. Văn hóa phải được đặt ngang hàng với kinh tế, chính trị, xã hội"
  },
  {
    question: "Chính sách đối ngoại rộng đa phương hóa, đa dạng hóa các quan hệ kinh tế của Đảng ta là trực tiếp xuất phát từ cơ sở nào trong các cơ sở dưới đây?",
    options: [
      "Các nước, nhất là những nước đang phát triển đã đổi mới tư duy đối ngoại, thực hiện chính sách đa phương hóa, đa dạng hóa quan hệ quốc tế",
      "Toàn cầu hóa kinh tế là một xu thế khách quan, lôi cuốn ngày càng nhiều nước tham gia để tránh khỏi nguy cơ bị biệt lập, tụt hậu, kém phát triển",
      "Vấn đề giải tỏa tình trạng đối đầu, thù địch, phá thế bị bao vây, cấm vận, tạo môi trường quốc tế thuận lợi để tập trung xây dựng kinh tế là nhu cầu cấp bách đối với nước ta",
      "Nhu cầu chống tụt hậu về kinh tế, tranh thủ các nguồn lực bên ngoài đặt ra gay gắt với Việt Nam"
    ],
    answer: "Các nước, nhất là những nước đang phát triển đã đổi mới tư duy đối ngoại, thực hiện chính sách đa phương hóa, đa dạng hóa quan hệ quốc tế"
  },
  {
    question: "Quan điểm nào trong các quan điểm sau đây nói về xây dựng con người Việt Nam?",
    options: [
      "Văn hóa là nền tảng tinh thần của xã hội, vừa là mục tiêu, vừa là động lực thúc đẩy sự phát triển kinh tế - xã hội và hội nhập quốc tế",
      "Xây dựng nền văn hóa Việt Nam tiên tiến, đậm đà bản sắc dân tộc, thống nhất trong đa dạng của cộng đồng các dân tộc Việt Nam, với các đặc trưng dân tộc, nhân văn, dân chủ và khoa học",
      "Phát triển văn hóa vì sự hoàn thiện nhân cách con người và xây dựng con người để phát triển văn hóa. Trong xây dựng văn hóa, trọng tâm là chăm lo xây dựng con người có nhân cách, lối sống tốt đẹp, với các đặc tính cơ bản: yêu nước, nhân ái, nghĩa tình, trung thực, đoàn kết, cần cù, sáng tạo",
      "Xây dựng và phát triển văn hóa là sự nghiệp của toàn dân do Đảng lãnh đạo, Nhà nước quản lý, nhân dân là chủ thể sáng tạo, đội ngũ trí thức giữ vai trò quan trọng"
    ],
    answer: "Phát triển văn hóa vì sự hoàn thiện nhân cách con người và xây dựng con người để phát triển văn hóa. Trong xây dựng văn hóa, trọng tâm là chăm lo xây dựng con người có nhân cách, lối sống tốt đẹp, với các đặc tính cơ bản: yêu nước, nhân ái, nghĩa tình, trung thực, đoàn kết, cần cù, sáng tạo"
  },
  {
    question: "Chủ trương chủ động và tích cực hội nhập kinh tế quốc tế là trực tiếp xuất phát từ cơ sở nào trong các cơ sở dưới đây?",
    options: [
      "Các nước, nhất là những nước đang phát triển đã đổi mới tư duy đối ngoại, thực hiện chính sách đa phương hóa, đa dạng hóa quan hệ quốc tế",
      "Toàn cầu hóa kinh tế là một xu thế khách quan, lôi cuốn ngày càng nhiều nước tham gia để tránh khỏi nguy cơ bị biệt lập, tụt hậu, kém phát triển",
      "Vấn đề giải tỏa tình trạng đối đầu, thù địch, phá thế bị bao vây, cấm vận, tạo môi trường quốc tế thuận lợi để tập trung xây dựng kinh tế là nhu cầu cấp bách đối với nước ta",
      "Nhu cầu chống tụt hậu về kinh tế, tranh thủ các nguồn lực bên ngoài đặt ra gay gắt với Việt Nam"
    ],
    answer: "Toàn cầu hóa kinh tế là một xu thế khách quan, lôi cuốn ngày càng nhiều nước tham gia để tránh khỏi nguy cơ bị biệt lập, tụt hậu, kém phát triển"
  },
  {
    "question": "Đại hội VI của Đảng đã đưa ra nhận thức mới về mối quan hệ giữa chính sách xã hội với phát triển kinh tế. Điểm nào dưới đây xác định mục đích của các hoạt động kinh tế?",
    "options": [
      "Trình độ phát triển kinh tế là điều kiện vật chất để thực hiện chính sách xã hội nhưng những miệu tiêu xã hội lại là mục đích của các hoạt động kinh tế",
      "Ngay trong khuôn khổ của hoạt động kinh tế, chính sách xã hội có ảnh hưởng trực tiếp đến năng suất lao động, chất lượng sản phẩm, khả năng thu hút và giữ chân người lao động",
      "Mục tiêu của chính sách xã hội thống nhất với mục tiêu phát triển kinh tế ở chỗ đều nhằm phát huy sức mạnh của nhân tố con người",
      "Phát triển kinh tế là cơ sở và tiền đề để thực hiện các chính sách xã hội, đồng thời thực hiện tốt các chính sách xã hội là động lực thúc đẩy phát triển kinh tế"
    ],
    "answer": "Trình độ phát triển kinh tế là điều kiện vật chất để thực hiện chính sách xã hội nhưng những miệu tiêu xã hội lại là mục đích của các hoạt động kinh tế"
  },
  {
    "question": "Đại hội VI của Đảng đã đưa ra nhận thức mới về mối quan hệ giữa chính sách xã hội với phát triển kinh tế. Điểm nào dưới đây xác định chính sách xã hội cần có mặt ngay trong khuôn khổ các hoạt động kinh tế?",
    "options": [
      "Trình độ phát triển kinh tế là điều kiện vật chất để thực hiện chính sách xã hội nhưng những mục tiêu xã hội lại là mục đích của các hoạt động kinh tế",
      "Ngay trong khuôn khổ của hoạt động kinh tế, chính sách xã hội có ảnh hưởng trực tiếp đến năng suất lao động, chất lượng sản phẩm, khả năng thu hút và giữ chân người lao động",
      "Mục tiêu của chính sách xã hội thống nhất với mục tiêu phát triển kinh tế ở chỗ đều nhằm phát huy sức mạnh của nhân tố con người",
      "Phát triển kinh tế là cơ sở và tiền đề để thực hiện các chính sách xã hội, đồng thời thực hiện tốt các chính sách xã hội là động lực thúc đẩy phát triển kinh tế"
    ],
    "answer": "Ngay trong khuôn khổ của hoạt động kinh tế, chính sách xã hội có ảnh hưởng trực tiếp đến năng suất lao động, chất lượng sản phẩm, khả năng thu hút và giữ chân người lao động"
  },
  {
    "question": "Trong các quan điểm xây dựng hệ thống chính trị trong thời kỳ đổi mới, quan điểm nào dưới đây bị viết sai?",
    "options": [
      "Kết hợp chặt chẽ ngay từ đầu đổi mới kinh tế với đổi mới chính trị, lấy đổi mới chính trị làm trọng tâm, đồng thời từng bước đổi mới kinh tế",
      "Đổi mới tổ chức và phương thức hoạt động của hệ thống chính trị, làm cho hệ thống chính trị hoạt động năng động hơn, có hiệu quả hơn, phù hợp với đường lối đổi mới toàn diện, đồng bộ đất nước",
      "Đổi mới hệ thống chính trị một cách toàn diện, đồng bộ, có kế thừa, có bước đi, hình thức và cách làm phù hợp",
      "Đổi mới mối quan hệ giữa các bộ phận cấu thành của hệ thống chính trị với nhau và với xã hội, tạo ra sự vận động cùng chiều của cả hệ thống để thúc đẩy xã hội phát triển"
    ],
    "answer": "Kết hợp chặt chẽ ngay từ đầu đổi mới kinh tế với đổi mới chính trị, lấy đổi mới chính trị làm trọng tâm, đồng thời từng bước đổi mới kinh tế"
  },
  {
    "question": "Cơ chế quản lý tập trung quan liêu, bao cấp thực hiện trong giai đoạn trước đổi mới đã gây ra những tác hại sau đây. Tác hại nào lớn nhất?",
    "options": [
      "Không tạo được động lực phát triển",
      "Không thúc đẩy sản xuất",
      "Làm giảm năng suất, chất lượng, hiệu quả",
      "Sinh ra nhiều hiện tượng tiêu cực trong xã hội"
    ],
    "answer": "Không tạo được động lực phát triển"
  },
  {
    "question": "Cơ chế quản lý tập trung quan liêu, bao cấp thực hiện trong giai đoạn trước đổi mới đã gây ra những tác hại sau đây. Tác hại nào đã bị viết nhầm?",
    "options": [
      "Không tạo được động lực phát triển",
      "Không thúc đẩy sản xuất",
      "Làm giảm năng suất, chất lượng, hiệu quả",
      "Gây ra nhiều hiện tượng tiêu cực trong xã hội"
    ],
    "answer": "Không thúc đẩy sản xuất"
  },
  {
    "question": "Trong các cơ sở hình thành hệ thống chuyên chính vô sản ở nước ta, 'Việc Đại hội IV của Đảng nhận định rằng, muốn đưa sự nghiệp cách mạng đến toàn thắng thì điều kiện quyết định trước tiên là phải thiết lập chuyên chính vô sản' đã tạo ra cơ sở nào cho hệ thống chuyên chính vô sản ở nước ta?",
    "options": [
      "Cơ sở lý luận Mác - Lênin",
      "Đường lối chung của cách mạng Việt Nam",
      "Cơ sở kinh tế",
      "Cơ sở xã hội"
    ],
    "answer": "Đường lối chung của cách mạng Việt Nam"
  },
  {
    "question": "Hội nghị nào của BCH Trung ương Đảng đề ra chủ trương hoàn thành thống nhất nước nhà về mặt nhà nước, đưa cả nước tiến lên chủ nghĩa xã hội?",
    "options": [
      "Hội nghị TW 24 Khóa III - 9-1975",
      "Hội nghị TƯ 24 Khóa III - 11-1975",
      "Hội nghị TƯ 24 Khóa III - 4-1976",
      "Hội nghị TƯ 24 Khóa III - 5-1976"
    ],
    "answer": "Hội nghị TW 24 Khóa III - 9-1975"
  },
  {
    "question": "Nội dung trọng tâm của đường lối đổi mới ở Việt Nam (từ tháng 12/1986) phù hợp với xu thế phát triển của thế giới là",
    "options": [
      "Mở rộng hợp tác, đối thoại, thỏa hiệp",
      "Thiết lập quan hệ đồng minh với các nước lớn",
      "Lấy phát triển kinh tế làm trọng điểm",
      "Tham gia mọi tổ chức khu vực và quốc tế"
    ],
    "answer": "Lấy phát triển kinh tế làm trọng điểm"
  },
  {
    "question": "Bộ Chính trị đã ra chỉ thị về việc lãnh đạo tổng tuyển cử trong cả nước vào ngày nào?",
    "options": [
      "30/12/1975",
      "2/1/1976",
      "3/1/1976",
      "30/1/1976"
    ],
    "answer": "3/1/1976"
  },
  {
    "question": "Hội nghị hiệp thương chính trị giữa đoàn đại biểu miền Bắc và đoàn đại biểu miền Nam đã họp ở đâu?",
    "options": [
      "Hà Nội",
      "Sài Gòn",
      "Huế",
      "Đà Nẵng"
    ],
    "answer": "Sài Gòn"
  },
  {
    "question": "Trong đường lối đổi mới (1986), Đảng ta chủ trương lấy đổi mới kinh tế là trọng tâm",
    "options": [
      "Hàng hóa trên thị trường khan hiếm.",
      "Nhu cầu giải quyết việc làm cho nhân dân.",
      "Đất nước đang khủng hoảng kinh tế trầm trọng.",
      "Đất nước đang thiếu lương thực trầm trọng."
    ],
    "answer": "Đất nước đang khủng hoảng kinh tế trầm trọng."
  },
  {
    "question": "Kỳ họp thứ nhất của Quốc hội nước Việt Nam thống nhất (Quốc hội khóa VI) được tổ chức trong thời gian nào?",
    "options": [
      "Từ 24/6 - 3/7/1976",
      "Từ 24/7 - 3/8/1976",
      "Từ 24/9 - 3/10/1976",
      "Từ 20/9 - 1/10/1976"
    ],
    "answer": "Từ 24/6 - 3/7/1976"
  },
  {
    "question": "Nhân tố hàng đầu đảm bảo thắng lợi của cách mạng Việt Nam từ năm 1930 đến nay là",
    "options": [
      "Sự lãnh đạo của Đảng Cộng sản Việt Nam.",
      "Kết hợp sức mạnh dân tộc và sức mạnh thời đại.",
      "Nắm vững ngọn cờ độc lập dân tộc và chủ nghĩa xã hội.",
      "Không ngừng củng cố tăng cường khối đại đoàn kết dân tộc."
    ],
    "answer": "Sự lãnh đạo của Đảng Cộng sản Việt Nam."
  },
  {
    "question": "Kế hoạch 5 năm lần thứ II (1976 - 1980) do Đại hội IV thông qua đã đề ra bao nhiêu mục tiêu được xem là cơ bản, vừa là cấp bách?",
    "options": [
      "2 mục tiêu",
      "3 mục tiêu",
      "4 mục tiêu",
      "5 mục tiêu"
    ],
    "answer": "2 mục tiêu"
  },
  {
    "question": "Nguyên nhân khách quan nào sau đây thúc đẩy Đảng và Nhà nước Việt Nam phải tiến hành đổi mới?",
    "options": [
      "Tình trạng khủng hoảng kinh tế - xã hội ở Việt Nam.",
      "Tác động của cách mạng khoa học - kỹ thuật.",
      "Đời sống nhân dân Việt Nam khó khăn.",
      "Tác động của cuộc khủng hoảng đầu mỏ."
    ],
    "answer": "Tác động của cách mạng khoa học - kỹ thuật."
  },
  {
    "question": "Đại hội IV của Đảng đã rút ra bao nhiêu bài học kinh nghiệm?",
    "options": [
      "3",
      "4",
      "5"
    ],
    "answer": "4"
  },
  {
    "question": "Một trong những mục tiêu của đường lối đổi mới ở Việt Nam được đề ra từ tháng 12/1986 là...",
    "options": [
      "Bước đầu khắc phục hậu quả chiến tranh.",
      "Hoàn thiện cơ chế quản lý đất nước.",
      "Đưa đất nước ra khỏi tình trạng khủng hoảng.",
      "Hoàn thành công cuộc cải cách ruộng đất."
    ],
    "answer": "Đưa đất nước ra khỏi tình trạng khủng hoảng."
  },
  {
    "question": "Ngày 14/7/1986, tại Hội nghị Ban Chấp hành TW đặc biệt ai được bầu làm Tổng Bí thư?",
    "options": [
      "Đỗ Mười",
      "Nguyễn Văn Linh",
      "Lê Khả Phiêu",
      "Trường Chinh"
    ],
    "answer": "Trường Chinh"
  },
  {
    "question": "Nguyên nhân khách quan nào sau đây thúc đẩy Đảng và Nhà nước Việt Nam phải tiến hành đổi mới?",
    "options": [
      "Tình trạng khủng hoảng kinh tế - xã hội ở Việt Nam.",
      "Sự khủng hoảng, trì trệ của Liên Xô và các nước Đông Âu.",
      "Đời sống nhân dân Việt Nam khó khăn.",
      "Tác động của cuộc khủng hoảng dầu mỏ."
    ],
    "answer": "Sự khủng hoảng, trì trệ của Liên Xô và các nước Đông Âu."
  },
  {
    "question": "Chủ trương đổi mới công tác kế hoạch hóa và cải tiến một cách cơ bản chính sách kinh tế để làm cho sản xuất 'bung ra' được nêu lên ở Hội nghị nào của Trung ương Đảng, khóa IV?",
    "options": [
      "Hội nghị lần thứ năm (12-1978)",
      "Hội nghị lần thứ sáu (8-1979)",
      "Hội nghị lần thứ bảy (3-1980)",
      "Hội nghị lần thứ bảy (9-1980)"
    ],
    "answer": "Hội nghị lần thứ sáu (8-1979)"
  },
  {
    "question": "Quan điểm đổi mới đất nước của Đảng Cộng sản Việt Nam (từ tháng 12/1986) không có nội dung nào dưới đây?",
    "options": [
      "Lấy đổi mới chính trị làm trọng tâm.",
      "Đi lên chủ nghĩa xã hội bằng những biện pháp phù hợp.",
      "Không thay đổi mục tiêu của chủ nghĩa xã hội.",
      "Đổi mới toàn diện và đồng bộ."
    ],
    "answer": "Lấy đổi mới chính trị làm trọng tâm."
  },
  {
    "question": "Chỉ thị 100 CT/TW của Ban Bí thư Trung ương Đảng về khoán sản phẩm đến nhóm và người lao động trong hợp tác xã được ban hành năm nào?",
    "options": [
      "1980",
      "1981",
      "1988",
      "1989"
    ],
    "answer": "1981"
  },
  {
    "question": "Những thành tựu Việt Nam đạt được trong việc thực hiện kế hoạch 5 năm 1986 - 1990 chứng tỏ điều gì?",
    "options": [
      "Đường lối đổi mới là đúng, bước đi của công cuộc đổi mới cơ bản là phù hợp.",
      "Việt Nam đã thoát khỏi tình trạng khủng hoảng kinh tế - xã hội.",
      "Việt Nam đã giải quyết được sự mất cân đối của nền kinh tế.",
      "Đường lối đổi mới về cơ bản là đúng đắn, cần phải có những bước đi phù hợp."
    ],
    "answer": "Đường lối đổi mới là đúng, bước đi của công cuộc đổi mới cơ bản là phù hợp."
  },
  {
    "question": "Chỉ thị 100 CT/TW của Ban Bí thư Trung ương Đảng (1-1981) đưa ra chủ trương nào sau đây?",
    "options": [
      "Phát huy quyền sản xuất kinh doanh của các xí nghiệp quốc doanh.",
      "Mở rộng hình thức trả lương khoán, lương sản phẩm.",
      "Khoán sản phẩm đến nhóm và người lao động trong hợp tác xã nông nghiệp.",
      "Cải tiến công tác phân phối lưu thông."
    ],
    "answer": "Khoán sản phẩm đến nhóm và người lao động trong hợp tác xã nông nghiệp."
  },
  {
    "question": "Tình hình thế giới và trong nước những năm 80 của thế kỷ XX đặt ra yêu cầu cấp bách nào đối với Việt Nam?",
    "options": [
      "Hoàn thành tập thể hóa nông nghiệp.",
      "Tập trung phát triển công nghiệp nặng.",
      "Hoàn thành công nghiệp hóa, hiện đại hóa.",
      "Tiến hành công cuộc đổi mới toàn diện."
    ],
    "answer": "Tiến hành công cuộc đổi mới toàn diện."
  },
  {
    "question": "Đại hội nào của Đảng đã chủ trương coi nông nghiệp là mặt trận hàng đầu?",
    "options": [
      "Đại hội III",
      "Đại hội IV",
      "Đại hội V",
      "Đại hội VI"
    ],
    "answer": "Đại hội V"
  },
  {
    "question": "Nội dung nào không thuộc đường lối đổi mới kinh tế của Đảng Cộng sản Việt Nam đề ra trong Đại hội Đảng toàn quốc lần thứ VI (1986)?",
    "options": [
      "Xóa bỏ cơ chế quản lý tập trung quan liêu bao cấp.",
      "Xây dựng nền kinh tế quốc dân với cơ cấu nhiều ngành nghề.",
      "Phát triển nền kinh tế với hai thành phần nhà nước và tập thể.",
      "Xây dựng nền kinh tế thị trường theo định hướng xã hội chủ nghĩa."
    ],
    "answer": "Xây dựng nền kinh tế quốc dân với cơ cấu nhiều ngành nghề."
  },
  {
    "question": "Hội nghị nào của Ban Chấp hành Trung ương Đảng khóa V đã quyết định phải dứt khoát xóa bỏ cơ chế tập trung quan liêu bao cấp, thực hiện hạch toán kinh doanh xã hội chủ nghĩa?",
    "options": [
      "Hội nghị lần thứ tám (6 - 1985)",
      "Hội nghị lần thứ chín (12 - 1985)",
      "Hội nghị lần thứ mười (5 - 1986)",
      "Hội nghị lần thứ năm"
    ],
    "answer": "Hội nghị lần thứ tám (6 - 1985)"
  },
  {
    "question": "Nội dung nào không phản ánh đúng những mục tiêu Đảng Cộng sản Việt Nam đề ra trong Kế hoạch 5 năm (1996 - 2000)?",
    "options": [
      "Cải thiện đời sống nhân dân",
      "Nâng cao tích lũy nội bộ nền kinh tế",
      "Đảm bảo quốc phòng, an ninh",
      "Đưa đất nước thoát khỏi tình trạng khủng hoảng"
    ],
    "answer": "Đưa đất nước thoát khỏi tình trạng khủng hoảng"
  },
  {
    "question": "Đại hội nào của Đảng được gọi là Đại hội 'Trí tuệ, đổi mới, dân chủ, kỷ cương và đoàn kết'?",
    "options": [
      "Đại hội lần thứ V",
      "Đại hội lần thứ VI",
      "Đại hội lần thứ VII",
      "Đại hội lần thứ VIII"
    ],
    "answer": "Đại hội lần thứ VII"
  },
  {
    "question": "Nền kinh tế hàng hóa nhiều thành phần, vận hành theo cơ chế thị trường có sự quản lý của nhà nước bước đầu hình thành sau khi thực hiện...",
    "options": [
      "Kế hoạch 5 năm (1991-1995)",
      "Kế hoạch 5 năm (1980-1985)",
      "Kế hoạch 5 năm (1986-1990)",
      "Kế hoạch 5 năm (1996-2000)"
    ],
    "answer": "Kế hoạch 5 năm (1986-1990)"
  },
  {
    "question": "'Nước ta đã ra khỏi khủng hoảng kinh tế - xã hội, nhưng một số mặt còn chưa vững chắc' là đánh giá tổng quát của Đại hội nào?",
    "options": [
      "Đại hội VI",
      "Đại hội VII",
      "Đại hội VIII",
      "Đại hội IX"
    ],
    "answer": "Đại hội VIII"
  },
  {
    "question": "Nội dung đổi mới về kinh tế ở Việt Nam (từ tháng 12/1986) và Chính sách kinh tế mới (NEP, 1921) ở nước Nga có điểm tương đồng là",
    "options": [
      "Ưu tiên phát triển công nghiệp nặng và giao thông vận tải.",
      "Xây dựng nền kinh tế nhiều thành phần có sự quản lý của nhà nước.",
      "Xây dựng kinh tế thị trường xã hội chủ nghĩa, kiểm soát bằng pháp luật.",
      "Thay chế độ trung thu lương thực thừa bằng thuê lương thực."
    ],
    "answer": "Xây dựng nền kinh tế nhiều thành phần có sự quản lý của nhà nước."
  },
  {
    "question": "Yếu tố quyết định Việt Nam phải tiến hành sự nghiệp đổi mới đất nước (từ năm 1986) là",
    "options": [
      "Các nước công nghiệp mới đạt nhiều thành tựu sau cải cách.",
      "Xu thế quốc tế hóa diễn ra ngày càng mạnh mẽ trên thế giới.",
      "Cuộc khủng hoảng kinh tế - xã hội ở Việt Nam diễn ra trầm trọng.",
      "Liên Xô và các nước Đông Âu tiến hành công cuộc cải tổ, cải cách."
    ],
    "answer": "Cuộc khủng hoảng kinh tế - xã hội ở Việt Nam diễn ra trầm trọng."
  },
  {
    question: "Việt Nam gia nhập ASEAN vào năm nào?",
    options: [
      "Năm 1993",
      "Năm 1994",
      "Năm 1995",
      "Năm 1996"
    ],
    answer: "Năm 1995"
  },
  {
    "question": "Việt Nam bắt đầu thực hiện các cam kết khi gia nhập Khu vực Mậu dịch tự do ASEAN (AFTA) vào năm nào?",
    "options": [
      "Năm 1995",
      "Năm 1996",
      "Năm 1997",
      "Năm 1998"
    ],
    "answer": "Năm 1996"
  },
  {
    "question": "Văn kiện Đại hội nào của Đảng bắt đầu sử dụng khái niệm kinh tế thị trường định hướng xã hội chủ nghĩa?",
    "options": [
      "Đại hội VI",
      "Đại hội VII",
      "Đại hội VIII",
      "Đại hội IX"
    ],
    "answer": "Đại hội IX"
  },
  {
    "question": "Đại hội IX của Đảng đã xác định nền kinh tế nước ta có mấy thành phần?",
    "options": [
      "Có 3 thành phần",
      "Có 4 thành phần",
      "Có 5 thành phần",
      "Có 6 thành phần"
    ],
    "answer": "Có 6 thành phần"
  },
  {
    "question": "Đại hội X của Đảng đã xác định nền kinh tế nước ta có mấy thành phần?",
    "options": [
      "Có 3 thành phần",
      "Có 4 thành phần",
      "Có 5 thành phần",
      "Có 6 thành phần"
    ],
    "answer": "Có 5 thành phần"
  },
  {
    "question": "Việt Nam bình thường hóa quan hệ với Hoa Kỳ vào năm nào?",
    "options": [
      "Năm 1992",
      "Năm 1993",
      "Năm 1994",
      "Năm 1995"
    ],
    "answer": "Năm 1995"
  },

    // Add more questions here
  ];
  
  // Render quiz questions and options
  const quizContainer = document.getElementById("quiz-container");
  quizData.forEach((item, index) => {
    const questionDiv = document.createElement("div");
    questionDiv.classList.add("question");
    questionDiv.innerText = `${index + 1}. ${item.question}`;
  
    const optionsDiv = document.createElement("div");
    optionsDiv.classList.add("options");
    item.options.forEach((option, i) => {
      const optionDiv = document.createElement("div");
      optionDiv.innerText = option;
      optionDiv.addEventListener("click", () => handleOptionClick(optionDiv, item.answer, option));
      optionsDiv.appendChild(optionDiv);
    });
  
    quizContainer.appendChild(questionDiv);
    quizContainer.appendChild(optionsDiv);
  });
  
  // Handle option click
  function handleOptionClick(optionDiv, correctAnswer, selectedAnswer) {
    // Mark answer as correct or incorrect
    if (selectedAnswer === correctAnswer) {
      optionDiv.classList.add("correct");
    } else {
      optionDiv.classList.add("wrong");
      // Optionally highlight correct answer
      Array.from(optionDiv.parentNode.children).forEach(div => {
        if (div.innerText === correctAnswer) {
          div.classList.add("correct");
        }
      });
    }
  }
  
  // Submit function to show result
  document.getElementById("submit-btn").addEventListener("click", () => {
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "Bạn đã hoàn thành bài thi!";
  });
  
