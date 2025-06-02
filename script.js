// Example quiz data
const quizData = [
      {
        question: "Chọn một câu trả lời đúng:",
        options: [
          "A. Công nghệ phần mềm không phải là một ngành khoa học.",
          "B. Nhà phân tích phần mềm có trách nhiệm thiết kế phần mềm, viết phần mềm và kiểm thử phần mềm.",
          "C. Lập trình viên là người viết và kiểm thử mã nguồn.",
          "D. Không câu trả lời nào."
        ],
        answer: "C. Lập trình viên là người viết và kiểm thử mã nguồn."
      },
      {
        question: "CASE là từ viết tắt của:",
        options: [
          "A. Cost Aided Software Engineering",
          "B. Computer Aided Software Engineering",
          "C. Control Aided Software Engineering",
          "D. Computer Analyzing Software Engineering"
        ],
        answer: "B. Computer Aided Software Engineering"
      },
      {
        question: "Ký hiệu * trong UML biểu diễn:",
        options: [
          "A. Các bước lặp lại mà không có cấu trúc vòng lặp",
          "B. Nó chỉ ra rằng các hoạt động được thực hiện nhiều lần",
          "C. Biểu diễn nhiều hoạt động cần cùng được thực hiện trong một vài trạng thái",
          "D. A và B"
        ],
        answer: "D. A và B"
      },
      {
        question: "<< include >> là quan hệ use case được gọi mỗi khi use case chính chạy.",
        options: [
          "A. Đúng",
          "B. Chỉ đúng trong trường hợp có nhiều tác nhân",
          "C. Đúng nếu use case là tổng quát",
          "D. Sai trong trường hợp cùng tác nhân",
          "E. Sai",
          "F. Sai nếu tính thời gian sử dụng use case"
        ],
        answer: "A. Đúng"
      },
      {
        question: "Phát biểu nào sau đây là đúng?",
        options: [
          "A. Trong một sơ đồ ca sử dụng, mỗi ca sử dụng phải có quan hệ trực tiếp với ít nhất một tác nhân.",
          "B. Ca sử dụng là các phương thức nhà phân tích sử dụng để đánh giá hệ thống.",
          "C. Ca sử dụng thể hiện hành vi của một đối tượng và kết quả với một đối tượng khác.",
          "D. Mỗi tác nhân trong một ca sử dụng có một use case duy nhất.",
          "E. Ca sử dụng là một tập các bước mà thực thể hoạt động trong hệ thống.",
          "F. Một use case có thể chứa chức năng của một use case khác."
        ],
        answer: "F. Một use case có thể chứa chức năng của một use case khác."
      },
      {
        question: "Phát biểu đúng về sơ đồ thành phần (Component Diagram)",
        options: [
          "A. Một thành phần không thể có nhiều hơn một giao diện",
          "B. Một thành phần trình bày vài loại đơn vị phần cứng",
          "C. Một thành phần có thể có nhiều hơn một giao diện",
          "D. Một thành phần biểu diễn cho một đơn vị vật lý của mã lệnh",
          "E. A, D",
          "F. C, D"
        ],
        answer: "F. C, D"
      },
      {
        question: "Tiêu chuẩn ISO-14598 đưa ra:",
        options: [
          "A. Đưa ra quy trình đánh giá tính an toàn cho sản phẩm phần mềm.",
          "B. Đưa ra quy trình đánh giá hiệu quả của phần mềm.",
          "C. Đưa ra quy trình đánh giá chất lượng cho sản phẩm phần mềm.",
          "D. Đưa ra quy trình đánh giá tính khả dụng cho sản phẩm phần mềm."
        ],
        answer: "C. Đưa ra quy trình đánh giá chất lượng cho sản phẩm phần mềm."
      },
      {
        question: "Các quy tắc được sử dụng để đảm bảo rằng một trò chơi sẽ chơi được bởi những người tham gia được mô tả trong tài liệu nào?",
        options: [
          "A. SRS (Software Requirements Specification)",
          "B. SDD (Software Design Document)",
          "C. Design Document",
          "D. User Manual"
        ],
        answer: "A. SRS (Software Requirements Specification)"
      },
      {
        question: "UML là:",
        options: [
          "A. Ngôn ngữ mô hình hóa hướng đối tượng trực quan",
          "B. Ngôn ngữ lập trình hướng đối tượng trực quan",
          "C. Ngôn ngữ truy vấn hướng đối tượng trực quan",
          "D. Tất cả đều sai"
        ],
        answer: "A. Ngôn ngữ mô hình hóa hướng đối tượng trực quan"
      },
      {
        question: "Hình chữ nhật có góc bo tròn là biểu tượng của:",
        options: [
          "A. Hoạt động (Activity)",
          "B. Hành động (Action)",
          "C. Lựa chọn (Decision)",
          "D. Tất cả các mục"
        ],
        answer: "B. Hành động (Action)"
      },
      {
        question: "Đâu là tập các hoạt động chính của công nghệ phần mềm?",
        options: [
          "A. Đặc tả phần mềm, phát triển phần mềm, kiểm định phần mềm, tiến hóa phần mềm",
          "B. Phát triển phần mềm, kiểm định phần mềm, đặc tả phần mềm, tiến hóa phần mềm",
          "C. Đặc tả phần mềm, kiểm định phần mềm, phát triển phần mềm, tiến hóa phần mềm",
          "D. Phân tích yêu cầu, thiết kế phần mềm, mã hóa, cài đặt"
        ],
        answer: "A. Đặc tả phần mềm, phát triển phần mềm, kiểm định phần mềm, tiến hóa phần mềm"
      },
      {
        question: "Ba giai đoạn tổng quát của công nghệ phần mềm?",
        options: [
          "A. Definition, development, support",
          "B. What, how, where",
          "C. Programming, debugging, maintenance",
          "D. Analysis, design, testing"
        ],
        answer: "A. Definition, development, support"
      },
      {
        question: "Đặc điểm của mô hình xoắn ốc?",
        options: [
          "A. Nhanh chóng xác định được yêu cầu",
          "B. Tách biệt giữa các pha, tiến hành tuần tự",
          "C. Có thể kiểm soát rủi ro ở từng mức tiến hóa",
          "D. Sử dụng bộ case trong quá trình phát triển"
        ],
        answer: "C. Có thể kiểm soát rủi ro ở từng mức tiến hóa"
      },

      {
        question: "Điều nào không đúng?",
        options: [
          "A. Công nghệ phần mềm thuộc ngành khoa học máy tính",
          "B. Công nghệ phần mềm là một phần của ngành kỹ thuật hệ thống (SystemEngineering)",
          "C. Khoa học máy tính thuộc ngành công nghệ phần mềm",
          "D. Công nghệ phần mềm có liên quan với việc phát triển và cung cấp các phần mềm hữu ích"
        ],
        answer: "C. Khoa học máy tính thuộc ngành công nghệ phần mềm"
      },
      {
        question: "Phương án nào sau đây là khai báo thuộc tính đúng qui tắc?",
        options: [
          "A. startingPoint = (1,2,3)",
          "B. # balance: double",
          "C. *pointer",
          "D. + function()"
        ],
        answer: "B. # balance: double"
      },
      {
        question: "Phát biểu nào sau đây là ít phù hợp nhất?",
        options: [
          "A. Các phần tử trong mô đun được ghép lại trong một dãy điều khiển",
          "B. Phần mềm có thể dễ dàng sửa chữa và nâng cấp được",
          "C. Phần mềm không được lãng phí các tài nguyên của hệ thống",
          "D. Phần mềm có giao diện người dùng thích hợp, có tư liệu hướng dẫn và các tiện ích trợ giúp đầy đủ"
        ],
        answer: "C. Phần mềm không được lãng phí các tài nguyên của hệ thống"
      },
       {
        question: 'Các khái niệm nào được thể hiện trong sơ đồ lớp sau:<br><img src="Cau-30.png" alt="Câu 30" width="400">',
        options: [
          "A. Thuộc tính public, ngoại lệ",
          "B. Đối tượng, phụ thuộc",
          "C. Tổng quát hoá, kết tập",
          "D. Phương thức public, lớp, tổng quát hóa"
        ],
        answer: "D. Phương thức public, lớp, tổng quát hóa"
      }, 
       {
        question: "Tác nhân ngoài là gì?",
        options: [
          "A. Một thực thể ngoài hệ thống",
          "B. Một hệ thống con",
          "C. Một người ngoài hệ thống",
          "D. Một tác vụ bên ngoài"
        ],
        answer: "A. Một thực thể ngoài hệ thống"
      },
      {
        question: "Biểu đồ hoạt động (Activity Diagram) bao gồm các thành phần nào sau đây:",
        options: [
          "A. Nút bắt đầu, nút kết thúc, hành động, điều kiện rẽ nhánh, đồng bộ hóa",
          "B. Nút bắt đầu, nút kết thúc, hành động, thanh đồng bộ",
          "C. Nút bắt đầu, nút kết thúc, hành động, điều kiện rẽ nhánh, đường chuyển tiếp",
          "D. Tất cả đều sai"
        ],
        answer: "A. Nút bắt đầu, nút kết thúc, hành động, điều kiện rẽ nhánh, đồng bộ hóa"
      },
      {
        question: "Biểu đồ nào thể hiện sự thay đổi trạng thái của một đối tượng trong hệ thống?",
        options: [
          "A. Biểu đồ hoạt động",
          "B. Biểu đồ lớp",
          "C. Biểu đồ trạng thái",
          "D. Biểu đồ thành phần"
        ],
        answer: "C. Biểu đồ trạng thái"
      },
      {
        question: "Ý nào sau đây không phải là yêu cầu phi chức năng?",
        options: [
          "A. Giao diện người dùng phải thân thiện.",
          "B. Phần mềm phải chạy trên hệ điều hành Windows và Linux.",
          "C. Phần mềm phải cho phép nhập dữ liệu nhân viên.",
          "D. Tốc độ xử lý của phần mềm phải nhanh."
        ],
        answer: "C. Phần mềm phải cho phép nhập dữ liệu nhân viên."
      },
      {
        question: "Các thể hiện trong biểu đồ tuần tự gồm?",
        options: [
          "A. Đối tượng, Đường thời gian, Thời gian hoạt động, Thông điệp",
          "B. Lớp, thuộc tính, tương tác",
          "C. Quan hệ, đối tượng, thông điệp",
          "D. A, B"
        ],
        answer: "A. Đối tượng, Đường thời gian, Thời gian hoạt động, Thông điệp"
      },
      {
        question: "Bước đầu tiên trong vòng đời phát triển của phần mềm:",
        options: [
          "A. Thiết kế hệ thống",
          "B. Kiểm thử hệ thống",
          "C. Phân tích yêu cầu đặc tả",
          "D. Triển khai"
        ],
        answer: "C. Phân tích yêu cầu đặc tả"
      },
      {
        question: "Những nội dung sau đây nội dung nào là yêu cầu chức năng của một phần mềm?",
        options: [
          "A. Hệ thống phân phối vé phải cho khách du lịch mua vé hàng tuần",
          "B. Hệ thống phân phối vé được viết bằng ngôn ngữ Java",
          "C. Hệ thống phân phối vé phải dễ sử dụng",
          "D. Giao diện của hệ thống phân phối vé phải có màu sắc đồng bộ"
        ],
        answer: "A. Hệ thống phân phối vé phải cho khách du lịch mua vé hàng tuần"
      },
      {
        question: "Mục nào không là một phần của kiến trúc phần mềm:",
        options: [
          "A. Chi tiết giải thuật",
          "B. Cơ sở dữ liệu",
          "C. Thiết kế dữ liệu",
          "D. Cấu trúc chương trình"
        ],
        answer: "A. Chi tiết giải thuật"
      },
      {
        question: "Tiêu chuẩn ISO để hướng dẫn thực hiện cho lĩnh vực phần mềm là:",
        options: [
          "A. ISO 9001",
          "B. ISO 9000-3",
          "C. ISO 9002",
          "D. Tất cả đều sai"
        ],
        answer: "B. ISO 9000-3"
      },
      {
        question: "Các hoạt động chính của quy trình hợp nhất (RUP) là:",
        options: [
          "A. Khởi tạo, Xây dựng, Chuyển giao",
          "B. Khởi tạo, Xây dựng, Tinh chế, Chuyển giao",
          "C. Khởi tạo, Tinh chế, Xây dựng, Chuyển giao",
          "D. Tinh chế, Khởi tạo, Xây dựng, Chuyển giao"
        ],
        answer: "C. Khởi tạo, Tinh chế, Xây dựng, Chuyển giao"
      },
      {
        question: "Ưu điểm của mô hình thác nước (waterfall model):",
        options: [
          "A. Dễ quản lý vì có các mốc thời gian rõ ràng",
          "B. Phù hợp với các dự án có yêu cầu không rõ ràng",
          "C. Có thể quay lại các bước trước để sửa lỗi",
          "D. Tất cả các mục trên"
        ],
        answer: "A. Dễ quản lý vì có các mốc thời gian rõ ràng"
      },
      {
        question: "Chọn phát biểu đúng:",
        options: [
          "A. Một use case có thể không có tác nhân (actor) nào liên quan",
          "B. Trong một hệ thống phần mềm, số lượng use case bằng số lượng chức năng",
          "C. Sơ đồ use case mô tả chức năng của hệ thống từ góc nhìn người dùng",
          "D. Một tác nhân (actor) phải là người"
        ],
        answer: "C. Sơ đồ use case mô tả chức năng của hệ thống từ góc nhìn người dùng"
      },
      {
        question: "Khi nào thì sử dụng quan hệ << extend >>?",
        options: [
          "A. Khi một use case này là một phần của use case khác",
          "B. Khi một use case có thể được mở rộng bởi một use case khác",
          "C. Khi một use case được thừa kế từ một use case khác",
          "D. Tất cả đều sai"
        ],
        answer: "B. Khi một use case có thể được mở rộng bởi một use case khác"
      },
      {
        question: "Mục nào không phải là một trong những cách thức đặc tả yêu cầu:",
        options: [
          "A. Văn bản phi hình thức (Informal text)",
          "B. Sơ đồ (Diagram)",
          "C. Mã giả (Pseudocode)",
          "D. Bảng (Table)"
        ],
        answer: "C. Mã giả (Pseudocode)"
      },
      {
        question: "Biểu đồ trạng thái được sử dụng khi:",
        options: [
          "A. Phân tích đối tượng dữ liệu",
          "B. Mô tả hành vi của hệ thống khi có sự kiện tác động",
          "C. Biểu diễn logic điều kiện phức tạp",
          "D. Xử lý các ứng dụng đa luồng"
        ],
        answer: "B. Mô tả hành vi của hệ thống khi có sự kiện tác động"
      },
      {
        question: "Phát biểu nào sau đây là phù hợp nhất?",
        options: [
          "A. Phần mềm được sử dụng nhiều nhất trong các công ty công nghệ.",
          "B. Phần mềm được phát triển theo một quy trình khoa học.",
          "C. Phần mềm phải có giao diện người sử dụng.",
          "D. Phần mềm phát triển theo một chu kì nhất định."
        ],
        answer: "B. Phần mềm được phát triển theo một quy trình khoa học."
      },
      {
        question: "Mô hình phát triển phần mềm dựa trên mẫu thử là...?",
        options: [
          "A. Một mô hình rất rủi ro, khó đưa ra được một sản phẩm tốt",
          "B. Phương pháp tốt nhất được sử dụng trong các dự án có nhiều thành viên",
          "C. Một phương pháp hữu ích khi khách hàng không thể xác định yêu cầu một cách rõ ràng",
          "D. Một phương pháp thích hợp được sử dụng khi các yêu cầu đã được xác định rõ ràng"
        ],
        answer: "C. Một phương pháp hữu ích khi khách hàng không thể xác định yêu cầu một cách rõ ràng"
      },
      {
        question: "Phát triển phần mềm soạn thảo văn bản, các ca sử dụng có thể là:",
        options: [
          "A. Nhập văn bản mới",
          "B. Tạo mục lục",
          "C. Sao chép đoạn văn bản",
          "D. Tất cả các ý trên"
        ],
        answer: "D. Tất cả các ý trên"
      },
      {
        question: "IEEE 830-1993 là một khuyến nghị tiêu chuẩn cho:",
        options: [
          "A. Software requirement specification",
          "B. Software design",
          "C. Testing",
          "D. Coding"
        ],
        answer: "A. Software requirement specification"
      },
      {
        question: "Phần mềm dự báo thời tiết thu thập các số liệu về nhiệt độ, độ ẩm, ... xử lý tính toán để cho ra các dự báo thời tiết là 1 ví dụ của loại phần mềm:",
        options: [
          "A. Phần mềm hệ thống (System software)",
          "B. Phần mềm trí tuệ nhân tạo (Artificial Intelligence Software)",
          "C. Phần mềm thời gian thực (Real time software)",
          "D. Phần mềm nghiệp vụ (Business software)"
        ],
        answer: "C. Phần mềm thời gian thực (Real time software)"
      },
      {
        question: "Một lớp con thừa kế từ lớp cha những gì?",
        options: [
          "A. Thuộc tính và phương thức private",
          "B. Thuộc tính và phương thức protected và public",
          "C. Chỉ có thuộc tính",
          "D. Chỉ có phương thức"
        ],
        answer: "B. Thuộc tính và phương thức protected và public"
      },
      {
        question: "Phát biểu nào sau đây là đúng về trừu tượng hóa dữ liệu?",
        options: [
          "A. Là quá trình che giấu thông tin chi tiết của dữ liệu",
          "B. Là quá trình hiển thị tất cả các thông tin của dữ liệu",
          "C. Là quá trình nhóm các dữ liệu có liên quan lại với nhau",
          "D. Tất cả đều sai"
        ],
        answer: "A. Là quá trình che giấu thông tin chi tiết của dữ liệu"
      },
      {
        question: "Trong sơ đồ lớp, ký hiệu hình thoi rỗng biểu diễn mối quan hệ:",
        options: [
          "A. Kế thừa (Inheritance)",
          "B. Kết tập (Aggregation)",
          "C. Hợp thành (Composition)",
          "D. Phụ thuộc (Dependency)"
        ],
        answer: "B. Kết tập (Aggregation)"
      },
      {
        question: "Sơ đồ nào được sử dụng để mô tả kiến trúc vật lý của hệ thống?",
        options: [
          "A. Sơ đồ lớp (Class Diagram)",
          "B. Sơ đồ thành phần (Component Diagram)",
          "C. Sơ đồ triển khai (Deployment Diagram)",
          "D. Sơ đồ đối tượng (Object Diagram)"
        ],
        answer: "C. Sơ đồ triển khai (Deployment Diagram)"
      },
      {
        question: "Giai đoạn nào trong quy trình phát triển phần mềm tập trung vào việc \"Làm thế nào để xây dựng hệ thống\"?",
        options: [
          "A. Phân tích yêu cầu",
          "B. Kiểm thử",
          "C. Thiết kế",
          "D. Viết Code"
        ],
        answer: "C. Thiết kế"
      },
      {
        question: "Loại khả thi nào không được xem xét trong phân tích khả thi:",
        options: [
          "A. Khả thi về kinh tế",
          "B. Khả thi về thực hiện",
          "C. Khả thi về kỹ thuật",
          "D. Khả thi về chất lượng"
        ],
        answer: "D. Khả thi về chất lượng"
      },
      {
        question: "Sơ đồ hoạt động được sử dụng trong những tình huống sau:",
        options: [
          "A. Biểu diễn các đối tượng cộng tác với nhau như thế nào",
          "B. Biểu diễn các hành vi của đối tượng qua thời gian sống của chúng",
          "C. Biểu diễn điều kiện logic phức tạp",
          "D. Tất cả đều sai"
        ],
        answer: "C. Biểu diễn điều kiện logic phức tạp"
      },
      {
        question: "Kỹ thuật nào sau đây là xây dựng phần mềm từ các thành phần đã được thiết kế trong lĩnh vực công nghệ khác nhau?",
        options: [
          "A. Extreme programming",
          "B. Evolutionary prototyping",
          "C. Component architecture",
          "D. Open-source development"
        ],
        answer: "C. Component architecture"
      },
      {
        question: "Mức độ một module kết nối với các module khác chỉ tới:",
        options: [
          "A. Tính móc nối (Coupling)",
          "B. Tính kết dính (Cohesion)",
          "C. Chỉ đến chi phí tích hợp",
          "D. Chỉ đến chi phí phát triển"
        ],
        answer: "A. Tính móc nối (Coupling)"
      },
      {
        question: "Biểu đồ dòng điều khiển:",
        options: [
          "A. Cần thiết để mô hình những hệ thống hướng sự kiện",
          "B. Được đòi hỏi cho tất cả hệ thống",
          "C. Được dùng trong biểu đồ dòng dữ liệu",
          "D. Hữu dụng trong mô hình hóa giao diện người dùng"
        ],
        answer: "A. Cần thiết để mô hình những hệ thống hướng sự kiện"
      },
      {
        question: "Có thể phân loại phần mềm theo cách nào?",
        options: [
          "A. Phạm vi sử dụng, miền ứng dụng",
          "B. Phần mềm đặt, phần mềm dựng chung",
          "C. Phần mềm hệ thống, phần mềm ứng dụng",
          "D. Phần mềm thời gian thực, phần mềm nhúng"
        ],
        answer: "C. Phần mềm hệ thống, phần mềm ứng dụng"
      },
      {
        question: "Để biểu diễn một quá trình phức tạp nên sử dụng sơ đồ nào?",
        options: [
          "A. Sơ đồ lớp phân tích",
          "B. Sơ đồ ca sử dụng",
          "C. Sơ đồ Venn",
          "D. Sơ đồ cấu trúc",
          "E. Sơ đồ hoạt động",
          "F. Tất cả các trường hợp trên"
        ],
        answer: "E. Sơ đồ hoạt động"
      },
         {
        question: "Để biểu diễn các quan hệ vật lý giữa phần mềm và các thành phần phần cứng trong một hệ thống sử dụng sơ đồ UML nào?",
        options: [
          "A. Sơ đồ tuần tự ",
          "B. Sơ đồ hoạt động ",
          "C. Sơ đồ khối",
          "D. Sơ đồ triển khai",
        ],
        answer: "D. Sơ đồ triển khai"
      },
      {
        question: "Trong UML, ký hiệu nào dùng để biểu diễn một lớp (class)?",
        options: [
          "A. Hình tròn",
          "B. Hình chữ nhật",
          "C. Hình elip",
          "D. Hình thoi"
        ],
        answer: "B. Hình chữ nhật"
      },
      {
        question: "Một yêu cầu phần mềm tốt phải có đặc điểm:",
        options: [
          "A. Không mơ hồ, có thể kiểm chứng, cần thiết",
          "B. Đầy đủ, nhất quán, có thể theo dõi",
          "C. Khả thi, dễ hiểu",
          "D. Tất cả các mục trên"
        ],
        answer: "D. Tất cả các mục trên"
      },
      {
        question: "Phát biểu nào sau đây đúng về tính đóng gói (encapsulation)?",
        options: [
          "A. Che giấu thông tin chi tiết cài đặt của một đối tượng",
          "B. Cho phép một đối tượng thừa kế các thuộc tính và phương thức từ đối tượng khác",
          "C. Cho phép một đối tượng có nhiều hình thái khác nhau",
          "D. Tất cả đều sai"
        ],
        answer: "A. Che giấu thông tin chi tiết cài đặt của một đối tượng"
      },
      {
        question: "Trong kỹ thuật phần mềm, từ viết tắt RUP là viết tắt của:",
        options: ["Rapid Unified Process", "Rational Unified Process", "Real-time Unified Process", "Reliable Unified Process"],
        answer: "Rational Unified Process"
      },
      {
        question: "Phát biểu nào sau đây là đúng về quan hệ Association trong sơ đồ lớp?",
        options: ["Biểu diễn mối quan hệ 'is-a'", "Biểu diễn mối quan hệ 'has-a' hoặc 'uses-a'", "Chỉ được sử dụng giữa các lớp giao diện (interface)", "Luôn là mối quan hệ hai chiều"],
        answer: "Biểu diễn mối quan hệ 'has-a' hoặc 'uses-a'"
      },
      {
        question: "Sơ đồ nào mô tả cấu trúc tĩnh của hệ thống bằng cách hiển thị các lớp, thuộc tính và mối quan hệ giữa chúng?",
        options: ["Sơ đồ máy tính", "Sơ đồ triển khai", "Sơ đồ đối tượng", "Sơ đồ khối"],
        answer: "Sơ đồ đối tượng"
      },
      {
        question: "Xem xét khả năng tài chính của tổ chức có cho phép thực hiện dự án... là nội dung của giai đoạn nào?",
        options: ["Đặc tả yêu cầu", "Phân tích yêu cầu", "Xác định yêu cầu", "Nghiên cứu khả thi"],
        answer: "Nghiên cứu khả thi"
      },
      {
        question: "Phương án nào sau đây không là lượng số (multiplicity) hợp lệ?",
        options: ["0..*", "1", "3..*", "i."],
        answer: "i."
      },
      {
        question: "Chọn 5 hoạt động chính, tổng quát trong quá trình xây dựng phần mềm?",
        options: ["Giao tiếp, lập kế hoạch, mô hình hóa, xây dựng, triển khai", "Phân tích, thiết kế, lập trình, gỡ lỗi, bảo trì", "Giao tiếp, quản lý rủi ro, ước lượng, sản xuất, kiểm tra lại", "Không có mục nào"],
        answer: "Giao tiếp, lập kế hoạch, mô hình hóa, xây dựng, triển khai"
      },
      {
        question: "Sự khác biệt chính giữa quan hệ kết tập (Aggregation) và hợp thành (Composition) là gì?",
        options: ["Trong Composition, các đối tượng thành phần có thể tồn tại độc lập với đối tượng chứa.", "Trong Aggregation, các đối tượng thành phần phụ thuộc hoàn toàn vào sự tồn tại của đối tượng chứa.", "Trong Composition, các đối tượng thành phần bị hủy khi đối tượng chứa bị hủy.", "Không có sự khác biệt đáng kể."],
        answer: "Trong Composition, các đối tượng thành phần bị hủy khi đối tượng chứa bị hủy."
      },
      {
        question: "Biểu đồ nào mô tả sự tương tác giữa các đối tượng theo thời gian?",
        options: ["Biểu đồ lớp (Class Diagram)", "Biểu đồ tuần tự (Sequence Diagram)", "Biểu đồ trạng thái (State Diagram)", "Biểu đồ hoạt động (Activity Diagram)"],
        answer: "Biểu đồ tuần tự (Sequence Diagram)"
      },
      {
        question: "Đâu không phải là một trong những nguyên tắc của Agile Manifesto?",
        options: ["Cá nhân và sự tương tác hơn là quy trình và công cụ", "Phần mềm chạy tốt hơn là tài liệu đầy đủ", "Hợp tác với khách hàng hơn là đàm phán hợp đồng", "Bám sát kế hoạch hơn là ứng phó với thay đổi"],
        answer: "Bám sát kế hoạch hơn là ứng phó với thay đổi"
      },
      {
        question: "Phát biểu nào sau đây đúng về biểu đồ tuần tự (Sequence Diagram)?",
        options: ["Biểu đồ tuần tự gồm các lớp và thông điệp", "Biểu đồ tuần tự là biểu đồ kiểu cấu trúc", "Biểu đồ tuần tự chỉ mô tả luồng dữ liệu trong hệ thống", "Biểu đồ tuần tự biểu diễn sự tương tác giữa các đối tượng"],
        answer: "Biểu đồ tuần tự biểu diễn sự tương tác giữa các đối tượng"
      },
      {
        question: "Mô hình phát triển phần mềm dựa trên mẫu thử (prototype) là:",
        options: ["Một phương pháp thích hợp được sử dụng khi các yêu cầu đã được xác định rõ ràng", "Phương pháp tốt nhất được sử dụng trong các dự án có nhiều thành viên", "Một phương pháp hữu ích khi khách hàng không thể xác định yêu cầu một cách rõ ràng", "Một mô hình rất rủi ro, khó đưa ra được một sản phẩm tốt"],
        answer: "Một phương pháp hữu ích khi khách hàng không thể xác định yêu cầu một cách rõ ràng"
      },
      {
        question: "Mục đích chính của việc kiểm thử phần mềm là gì?",
        options: ["Tìm ra tất cả các lỗi trong phần mềm", "Chứng minh rằng phần mềm không có lỗi", "Đảm bảo phần mềm đáp ứng yêu cầu người dùng", "Cải thiện chất lượng tài liệu phần mềm"],
        answer: "Đảm bảo phần mềm đáp ứng yêu cầu người dùng"
      },
      {
        question: "Phát biểu nào đúng về quan hệ << uses >> trong sơ đồ Use Case?",
        options: ["Tương tự như quan hệ << include >>", "Cho biết một use case này sử dụng chức năng của use case khác tại một điểm tùy chọn", "Luôn được thực hiện khi use case cơ sở được thực hiện", "Không có quan hệ này trong Use Case Diagram"],
        answer: "Không có quan hệ này trong Use Case Diagram"
      },
      {
        question: "Trong UML, một Actor (tác nhân) có thể là:",
        options: ["Chỉ người dùng cuối của hệ thống", "Một người, một hệ thống khác, hoặc một thiết bị phần cứng", "Chỉ một hệ thống phần mềm khác tương tác với hệ thống đang xây dựng", "Chỉ các thành phần bên trong của hệ thống"],
        answer: "Một người, một hệ thống khác, hoặc một thiết bị phần cứng"
      },
      {
        question: "Tính đa hình (Polymorphism) trong lập trình hướng đối tượng có nghĩa là:",
        options: ["Khả năng một đối tượng có nhiều thuộc tính", "Khả năng một phương thức có nhiều cách triển khai khác nhau", "Khả năng một lớp có nhiều lớp con", "Khả năng một đối tượng được tạo ra từ nhiều lớp"],
        answer: "Khả năng một phương thức có nhiều cách triển khai khác nhau"
      },
      {
        question: "Biểu đồ nào sau đây không thuộc nhóm biểu đồ hành vi (Behavioral Diagrams) trong UML?",
        options: ["Biểu đồ hoạt động (Activity Diagram)", "Biểu đồ trạng thái (State Machine Diagram)", "Biểu đồ gói (Package Diagram)", "Biểu đồ tương tác (Interaction Diagram)"],
        answer: "Biểu đồ gói (Package Diagram)"
      },
  {
    question: "Cấu trúc thông tin biểu diễn tổ chức nội của:",
    options: [
      "Những dữ liệu khác nhau và những mục điều khiển",
      "Các lớp và quan hệ giữa chúng",
      "Luồng điều khiển chương trình",
      "Các tương tác giữa hệ thống và người dùng"
    ],
    answer: "Những dữ liệu khác nhau và những mục điều khiển"
  },
  {
    question: "Sơ đồ luồng dữ liệu:",
    options: [
      "Đưa ra hình ảnh những chức năng biến đổi luồng dữ liệu",
      "Biểu diễn quan hệ giữa các lớp",
      "Thể hiện chuỗi trạng thái của đối tượng",
      "Trình bày giao diện người dùng"
    ],
    answer: "Đưa ra hình ảnh những chức năng biến đổi luồng dữ liệu"
  },
  {
    question: "Phát biểu nào là sai khi nói về bản chất của phần mềm?",
    options: [
      "Không thực sự là sản phẩm",
      "Không hao mòn theo thời gian",
      "Có thể tái sử dụng được",
      "Cần bảo trì định kỳ"
    ],
    answer: "Không thực sự là sản phẩm"
  },
  {
    question: "Các mối quan hệ trong sơ đồ ca sử dụng là:",
    options: [
      "Quan hệ tác nhân và trường hợp sử dụng",
      "Kết nối mạng máy chủ - khách",
      "Giao diện người dùng",
      "Luồng dữ liệu nội bộ"
    ],
    answer: "Quan hệ tác nhân và trường hợp sử dụng"
  },
  {
    question: "Khái quát hóa giữa tác nhân << extend >>, << include >>:",
    options: [
      "Khái quát hóa giữa trường hợp sử dụng",
      "<< include >> chỉ ra mối quan hệ giữa actor và use case",
      "Khái quát hóa giữa các lớp",
      "Không tồn tại trong UML"
    ],
    answer: "Khái quát hóa giữa trường hợp sử dụng"
  },
  {
    question: "Phát biểu nào sau đây là đúng?",
    options: [
      "Một use case có thể chứa chức năng của một use case khác",
      "Use case không thể tái sử dụng",
      "Mỗi actor chỉ có một use case",
      "Use case chỉ dùng trong sơ đồ lớp"
    ],
    answer: "Một use case có thể chứa chức năng của một use case khác"
  },
   {
    question: "Mục nào không là một mục đích cho việc xây dựng một mô hình phân tích?",
    options: [
      "Phát triển một giải pháp tóm tắt cho vấn đề",
      "Hiểu rõ yêu cầu của người dùng",
      "Giao tiếp giữa khách hàng và nhà phát triển",
      "Hỗ trợ kiểm thử phần mềm"
    ],
    answer: "Phát triển một giải pháp tóm tắt cho vấn đề"
  },
  {
    question: "Sơ đồ nào sau đây không cần thiết trong phân tích yêu cầu?",
    options: ["Activity Diagram", "Use Case Diagram", "Class Diagram", "Data Flow Diagram"],
    answer: "Class Diagram"
  },
  {
    question: "Các bước trong giai đoạn 'phát triển' của tiến trình phần mềm?",
    options: [
      "Thiết kế phần mềm, mã hóa, kiểm thử phần mềm",
      "Thu thập yêu cầu, kiểm thử, triển khai",
      "Phân tích, bảo trì, nâng cấp",
      "Lập kế hoạch, xác minh, đánh giá"
    ],
    answer: "Thiết kế phần mềm, mã hóa, kiểm thử phần mềm"
  },
  {
    question: "Mẫu nào sau đây phù hợp cho tên của một tác nhân?",
    options: ["Danh từ", "Động từ", "Câu mệnh lệnh", "Tính từ"],
    answer: "Danh từ"
  },
  {
    question: "Mục nào sau đây không bao gồm trong tài liệu SRS?",
    options: ["Hướng dẫn sử dụng", "Yêu cầu chức năng", "Yêu cầu phi chức năng", "Ràng buộc thiết kế"],
    answer: "Hướng dẫn sử dụng"
  },
  {
    question: "Các tính chất hướng đối tượng là:",
    options: ["Tính đóng gói, Tính thừa kế, Tính đa hình, Tính trừu tượng", "Tính ngẫu nhiên, Tính quyết định, Tính đồng bộ, Tính bất biến", "Tính mở rộng, Tính trừu tượng, Tính lồng nhau, Tính định nghĩa", "Tính mô phỏng, Tính bảo mật, Tính khả dụng, Tính tối ưu"],
    answer: "Tính đóng gói, Tính thừa kế, Tính đa hình, Tính trừu tượng"
  },
  {
    question: "Chọn phát biểu đúng với mô hình thác nước (Waterfall Model)?",
    options: [
      "Việc phát triển hệ thống sẽ được làm theo thứ tự tiến trình, không kết quả của công việc nào được gửi ngược lên tiền trình ở mức cao hơn",
      "Các bước có thể được thay đổi linh hoạt bất kỳ lúc nào",
      "Không cần tài liệu tại từng giai đoạn",
      "Thường dùng cho các hệ thống AI"
    ],
    answer: "Việc phát triển hệ thống sẽ được làm theo thứ tự tiến trình, không kết quả của công việc nào được gửi ngược lên tiền trình ở mức cao hơn"
  },
   {
    question: "Phần mềm quản lý nhân sự của một công ty là:",
    options: [
      "Phần mềm hệ thống",
      "Phần mềm nhúng",
      "Phần mềm nghiệp vụ (Business software)",
      "Phần mềm tiện ích"
    ],
    answer: "Phần mềm nghiệp vụ (Business software)"
  },
  {
    question: "Yếu tố nào trong công nghệ phần mềm \"cung cấp sự hỗ trợ tự động hay bán tự động cho các phương pháp\"?",
    options: ["Quy trình", "Mô hình", "Công cụ", "Phương pháp"],
    answer: "Công cụ"
  },
  {
    question: "Sơ đồ trình tự là một thể hiện rất tốt trong thiết kế phần mềm vì?",
    options: [
      "Những người không phải lập trình viên có thể đọc hiểu sơ đồ",
      "Tương tác dễ trong làm việc nhóm",
      "Sơ đồ cho phép thấy nhiều đối tượng một lúc",
      "Tất cả đều đúng"
    ],
    answer: "Tất cả đều đúng"
  },
  {
    question: "Phát biểu nào sau đây là phù hợp nhất?",
    options: [
      "Phần mềm được phát triển theo một quy trình khoa học",
      "Phần mềm nên viết càng nhanh càng tốt",
      "Phát triển phần mềm không cần tài liệu",
      "Không cần xác định yêu cầu người dùng ban đầu"
    ],
    answer: "Phần mềm được phát triển theo một quy trình khoa học"
  },
  {
    question: "Theo thống kê từ những thách thức đối với công nghệ phần mềm thì lỗi nhiều nhất là do:",
    options: ["Thiết kế không hợp lý", "Phân tích yêu cầu", "Lập trình sai", "Kiểm thử không đầy đủ"],
    answer: "Phân tích yêu cầu"
  },
  {
    question: "Dòng đời hoạt động (life-line) là:",
    options: [
      "Đường thẳng đứng dưới một đối tượng trong mô hình trình tự",
      "Chuỗi các bước thực hiện của một quy trình",
      "Đường biểu diễn mối liên hệ giữa các đối tượng",
      "Tên gọi khác của sơ đồ lớp"
    ],
    answer: "Đường thẳng đứng dưới một đối tượng trong mô hình trình tự"
  },
  {
    question: "Những tác nhân của hệ thống phần mềm ATM là:",
    options: [
      "Nhân viên ngân hàng, Khách hàng, Máy chủ, Hacker",
      "Nhà báo, Hệ thống bảo mật, Ngân hàng trung ương, Thẻ tín dụng",
      "Nhà báo trị ATM, Khách hàng cá nhân, Máy chủ trung tâm, Tên trộm",
      "Bảo vệ, Ngân hàng, Người lập trình, Thẻ từ"
    ],
    answer: "Nhà báo trị ATM, Khách hàng cá nhân, Máy chủ trung tâm, Tên trộm"
  },
  {
    question: "Trong biểu đồ luồng dữ liệu, một chức năng được biểu diễn bởi:",
    options: [
      "Một hình tròn hay một hình ô van",
      "Một hình vuông",
      "Một mũi tên",
      "Một hình thoi"
    ],
    answer: "Một hình tròn hay một hình ô van"
  },
  {
    question: "Biểu đồ hoạt động (Activity Diagram) không thể được sử dụng trong trường hợp:",
    options: [
      "Biểu diễn logic điều kiện phức tạp",
      "Biểu diễn thuật toán xử lý",
      "Biểu diễn luồng công việc",
      "Biểu diễn giao diện người dùng"
    ],
    answer: "Biểu diễn giao diện người dùng"
  },
  {
    question: "Đặc điểm của mô hình thác nước (waterfall):",
    options: [
      "Nhanh chóng xác định được yêu cầu",
      "Phương án nào sau đây là lý do chính để xây dựng các use case?",
      "Cho phép lập trình viên và khách hàng hiểu nhau",
      "Tập hợp yêu cầu, thiết kế nhanh, xây dựng bản mẫu, đánh giá của khách hàng, làm mịn yêu cầu, sản phẩm cuối cùng"
    ],
    answer: "Nhanh chóng xác định được yêu cầu"
  },
  {
    question: "Tạo nguyên mẫu tiến hóa thường thích được dùng hơn nguyên mẫu bỏ di là vì:",
    options: [
      "Cho phép tái sử dụng nguyên mẫu đầu",
      "Tốn ít thời gian hơn",
      "Không cần sự hỗ trợ từ khách hàng",
      "Đáp án khác",
    ],
    answer: "Cho phép tái sử dụng nguyên mẫu đầu"
  },
  {
    question: "Thủ tục phần mềm tập trung vào:",
    options: [
      "Xử lý chi tiết của mỗi module riêng biệt",
      "Kiểm thử phần mềm",
      "Tối ưu hóa hiệu năng hệ thống",
      "Thiết kế giao diện người dùng"
    ],
    answer: "Xử lý chi tiết của mỗi module riêng biệt"
  },
  {
    question: "Loại phần mềm gì là 1 tập hợp các chương trình để cung cấp dịch vụ cho các chương trình khác:",
    options: [
      "Phần mềm hệ thống (System software)",
      "Phần mềm ứng dụng",
      "Phần mềm tiện ích",
      "Phần mềm nghiệp vụ"
    ],
    answer: "Phần mềm hệ thống (System software)"
  },
  {
    question: "«extend» là quan hệ giữa hai ca sử dụng mà ca này kéo dài hơn ca kia",
    options: [
      "Đúng", "Sai", "Không rõ", "Tùy trường hợp"
    ],
    answer: "Sai"
  },
  {
    question: "Phần mềm quản lý sinh viên của 1 trường là:",
    options: [
      "Phần mềm nghiệp vụ (Business software)",
      "Phần mềm tiện ích",
      "Phần mềm hệ thống",
      "Phần mềm nhúng"
    ],
    answer: "Phần mềm nghiệp vụ (Business software)"
  },
  {
    question: "Một lớp con thừa kế từ lớp cha những gì?",
    options: [
      "Quan hệ IS-A, Thuộc tính, Phương thức",
      "Quan hệ IS-A, chỉ thuộc tính",
      "Quan hệ HAS-A, Phương thức",
      "Chỉ phương thức"
    ],
    answer: "Quan hệ IS-A, Thuộc tính, Phương thức"
  },
  {
    question: "Các đặc tính của mô hình tiến hóa:",
    options: [
      "Thường dùng prototype, Bản chất lặp, Dễ dàng điều tiết những biến đổi yêu cầu sản phẩm",
      "Lặp đi lặp lại, không cần khách hàng",
      "Chỉ phát triển một lần duy nhất",
      "Thiết kế tổng thể từ đầu đến cuối"
    ],
    answer: "Thường dùng prototype, Bản chất lặp, Dễ dàng điều tiết những biến đổi yêu cầu sản phẩm"
  },
  {
    question: "Chọn câu mô tả về tác nhân đúng nhất trong mô hình use case?",
    options: [
      "Tác nhân có thể là bất kỳ chủ thể nào bên ngoài đang được thiết kế mà tương tác với hệ thống",
      "Chỉ là người dùng cuối",
      "Chỉ là phần mềm khác",
      "Chỉ là thiết bị phần cứng"
    ],
    answer: "Tác nhân có thể là bất kỳ chủ thể nào bên ngoài đang được thiết kế mà tương tác với hệ thống"
  },
  {
    question: "Trong xác định yêu cầu, các yêu cầu được chia thành hai loại nào?",
    options: [
      "Yêu cầu chức năng, yêu cầu phi chức năng",
      "Yêu cầu chức năng, yêu cầu kỹ thuật",
      "Yêu cầu chức năng, yêu cầu hệ thống",
      "Yêu cầu kỹ thuật, yêu cầu tài chính"
    ],
    answer: "Yêu cầu chức năng, yêu cầu phi chức năng"
  },
  {
    question: "Chọn đặc điểm được sử dụng để đánh giá một bản thiết kế tốt?",
    options: [
      "Thể hiện tất cả các yêu cầu trong pha phân tích và cung cấp một mô tả hoàn thiện về phần mềm",
      "Thể hiện bằng biểu đồ Use Case",
      "Cho phép viết bằng ngôn ngữ tự nhiên",
      "Sử dụng thuật toán tối ưu"
    ],
    answer: "Thể hiện tất cả các yêu cầu trong pha phân tích và cung cấp một mô tả hoàn thiện về phần mềm"
  },
  {
    question: "Phát triển phần mềm dùng SCRUM có phẩm chất nào sau đây khác với các mô hình truyền thống?",
    options: [
      "Mức độ sáng tạo và linh hoạt cao",
      "Tuân theo một kế hoạch chi tiết cố định",
      "Không cần kiểm thử phần mềm",
      "Không đánh giá sản phẩm qua từng giai đoạn"
    ],
    answer: "Mức độ sáng tạo và linh hoạt cao"
  },
  {
    question: "Chọn câu mô tả về tác nhân đúng nhất trong mô hình use case?",
    options: [
      "Tác nhân bị giới hạn đối với người dùng tương tác với hệ thống đang được thiết kế",
      "Tác nhân bị giới hạn đối với các hệ thống mà tương tác với hệ thống đang được thiết kế",
      "Tác nhân cung cấp dữ liệu cho hệ thống",
      "Tác nhân có thể là bất kì thực thể nào bên ngoài đang được thiết kế mà tương tác với hệ thống"
    ],
    answer: "Tác nhân có thể là bất kì thực thể nào bên ngoài đang được thiết kế mà tương tác với hệ thống"
  },
  {
    question: "Phân loại theo phạm vi sử dụng, sản phẩm phần mềm có những loại nào?",
    options: [
      "Phần mềm đặt, phần mềm dùng chung",
      "Phần mềm hệ thống, phần mềm ứng dụng",
      "Phần mềm nguồn mở, phần mềm thương mại",
      "Phần mềm lõi, phần mềm mở rộng"
    ],
    answer: "Phần mềm đặt, phần mềm dùng chung"
  },
  {
    question: "Biểu đồ quan hệ thực thể thể hiện điều gì?",
    options: [
      "Đưa ra hình ảnh quan hệ giữa các đối tượng dữ liệu",
      "Mô tả hành vi người dùng",
      "Biểu diễn quy trình nghiệp vụ",
      "Mô tả chức năng hệ thống"
    ],
    answer: "Đưa ra hình ảnh quan hệ giữa các đối tượng dữ liệu"
  },
  {
    question: "Phát triển phần mềm soạn thảo văn bản, các ca sử dụng có thể là?",
    options: [
      "Nhập văn bản mới, Tạo mục lục, Sao chép đoạn văn bản",
      "Cài đặt phần mềm",
      "Chơi nhạc, xem phim",
      "Kết nối cơ sở dữ liệu"
    ],
    answer: "Nhập văn bản mới, Tạo mục lục, Sao chép đoạn văn bản"
  },
  {
    question: "Mô hình phát triển phần mềm xoắn ốc có đặc điểm gì?",
    options: [
      "Bao gồm việc đánh giá những rủi ro phần mềm trong mỗi vòng lặp",
      "Không lặp lại qua các giai đoạn",
      "Chỉ thích hợp cho phần mềm nhỏ",
      "Không cần xác định yêu cầu ban đầu"
    ],
    answer: "Bao gồm việc đánh giá những rủi ro phần mềm trong mỗi vòng lặp"
  },
  {
    question: "Kỹ sư phần mềm không cần?",
    options: [
      "Lập trình thành thạo bằng một ngôn ngữ lập trình",
      "Kiến thức về phân tích thiết kế hệ thống",
      "Kiến thức về cơ sở dữ liệu",
      "Kinh nghiệm quản lý dự án phần mềm"
    ],
    answer: "Lập trình thành thạo bằng một ngôn ngữ lập trình"
  },
  {
    question: "Tính khả thi của phần mềm dựa vào các yếu tố nào sau đây?",
    options: [
      "Công nghệ, tiến độ, thời gian và tài nguyên",
      "Độ khó của mã nguồn",
      "Số lượng người dùng",
      "Định dạng tệp tin sử dụng"
    ],
    answer: "Công nghệ, tiến độ, thời gian và tài nguyên"
  },
  {
    question: "Biểu đồ tuần tự biểu diễn điều gì?",
    options: [
      "Tương tác giữa các đối tượng",
      "Cấu trúc phân cấp hệ thống",
      "Giao diện phần mềm",
      "Luồng dữ liệu bên ngoài hệ thống"
    ],
    answer: "Tương tác giữa các đối tượng"
  },
  {
    question: "Sơ đồ trình tự là một thể hiện rất tốt trong thiết kế phần mềm vì?",
    options: [
      "Nó mô tả logic xử lý của hệ thống theo thời gian",
      "Nó thể hiện mối quan hệ thừa kế",
      "Nó chỉ rõ giao diện phần mềm",
      "Nó biểu diễn sơ đồ luồng dữ liệu"
    ],
    answer: "Nó mô tả logic xử lý của hệ thống theo thời gian"
  },
  {
    question: "Các thành phần chính của sơ đồ ca sử dụng là?",
    options: [
      "Tác nhân, Ca sử dụng, Các quan hệ, Giới hạn hệ thống",
      "Đối tượng, Lớp, Quan hệ, Thuộc tính",
      "Thực thể, Thuộc tính, Quan hệ",
      "Lớp, Thuộc tính, Phương thức"
    ],
    answer: "Tác nhân, Ca sử dụng, Các quan hệ, Giới hạn hệ thống"
  },
  {
    question: "Xem xét khả năng tài chính của tổ chức, kỹ thuật hiện tại có đủ để đảm bảo thực hiện giải pháp công nghệ dự định áp dụng… là nội dung của giai đoạn nào trong pha phân tích và đặc tả yêu cầu phần mềm?",
    options: [
      "Nghiên cứu khả thi",
      "Thiết kế hệ thống",
      "Mã hóa chương trình",
      "Kiểm thử phần mềm"
    ],
    answer: "Nghiên cứu khả thi"
  },
  {
    question: "Loại hình đặc tả nào được dùng phổ biến trong tài liệu SRS?",
    options: [
      "Đặc tả bằng sơ đồ",
      "Đặc tả bằng bảng thật – sai",
      "Đặc tả bằng mã giả",
      "Đặc tả bằng biểu đồ cây"
    ],
    answer: "Đặc tả bằng sơ đồ"
  },
  {
    question: "Tập hợp yêu cầu, thiết kế nhanh, xây dựng bản mẫu, đánh giá của khách hàng, làm mịn yêu cầu, sản phẩm cuối cùng. Đây là các pha của mô hình công nghệ phần mềm nào?",
    options: [
      "Mô hình làm bản mẫu",
      "Mô hình thác nước",
      "Mô hình xoắn ốc",
      "Mô hình phát triển nhanh"
    ],
    answer: "Mô hình làm bản mẫu"
  },
  {
    question: "Phương án nào sau đây là khai báo thuộc tính đúng quy tắc?",
    options: [
      "# balance: double",
      "int balance#",
      "balance#double",
      "balance double#"
    ],
    answer: "# balance: double"
  },
  {
    question: "Sơ đồ nào sau đây không phải là sơ đồ UML?",
    options: [
      "Relationship diagram",
      "Sơ đồ lớp",
      "Sơ đồ tuần tự",
      "Sơ đồ thành phần"
    ],
    answer: "Relationship diagram"
  },
  {
    question: "Sơ đồ UML nào không thể dùng để thể hiện hành vi của các tác nhân trong hệ thống phần mềm?",
    options: [
      "Sơ đồ lớp",
      "Sơ đồ hoạt động",
      "Sơ đồ trạng thái",
      "Sơ đồ tuần tự"
    ],
    answer: "Sơ đồ lớp"
  },
  {
    question: "Mô hình phát triển dựa vào thành phần:",
    options: [
      "Dựa vào những kỹ thuật hỗ trợ đối tượng",
      "Dựa vào ngôn ngữ máy",
      "Dựa vào hệ điều hành",
      "Dựa vào sơ đồ ERD"
    ],
    answer: "Dựa vào những kỹ thuật hỗ trợ đối tượng"
  },
  {
    question: "Trong ngữ cảnh của phân tích yêu cầu, hai loại phân tách vấn đề là:",
    options: [
      "Bottom-up and Top-down",
      "Horizontal and Vertical",
      "Subordinate and superordinate",
      "Đáp án khác"
    ],
    answer: "Horizontal and Vertical"
  },
  {
    question: "Câu hỏi không được kỹ sư phần mềm hiện nay quan tâm nữa:",
    options: [
      "Tại sao chi phí phần cứng máy tính quá cao?",
      "Tại sao phần mềm mất một thời gian dài để hoàn tất?",
      "Tại sao người ta tốn nhiều chi phí để phát triển một mẫu phần mềm?",
      "Tại sao những lỗi phần mềm không được loại bỏ trong sản phẩm trước khi xuất xưởng?"
    ],
    answer: "Tại sao chi phí phần cứng máy tính quá cao?"
  },
  {
    question: "Mô hình phát triển ứng dụng nhanh:",
    options: [
      "Một cách gọi khác của mô hình phát triển dựa vào thành phần",
      "Một cách hữu dụng khi khách hàng không xác định yêu cầu rõ ràng",
      "Sự ráp nối tốc độ cao của mô hình tuần tự tuyến tính",
      "Tất cả các mục",
    ],
    answer: "Một cách hữu dụng khi khách hàng không xác định yêu cầu rõ ràng"
  },
  {
    question: "Để xây dựng mô hình hệ thống, kỹ sư phải quan tâm tới một trong những nhân tố hạn chế sau:",
    options: [
      "Những giả định và những ràng buộc",
      "Ngân sách và phí tổn",
      "Những đối tượng và những hoạt động",
      "Lịch biểu và các mốc sự kiện"
    ],
    answer: "Những giả định và những ràng buộc"
  },
  {
    question: "Trong kỹ thuật tiến trình nghiệp vụ, ba kiến trúc khác nhau được kiểm tra:",
    options: [
      "Hạ tầng kỹ thuật, dữ liệu, ứng dụng",
      "Hạ tầng tài chính, tổ chức và truyền thông",
      "Cấu trúc dữ liệu, cầu cấu, hệ thống"
    ],
    answer: "Hạ tầng kỹ thuật, dữ liệu, ứng dụng"
  },
  {
    question: "Thành phần nào của kỹ thuật tiến trình nghiệp vụ là trách nhiệm của kỹ sư phần mềm:",
    options: [
      "Phân tích phạm vi nghiệp vụ",
      "Thiết kế hệ thống nghiệp vụ",
      "Kế hoạch sản phẩm",
      "Kế hoạch chiến lược thông tin"
    ],
    answer: "Thiết kế hệ thống nghiệp vụ"
  },
  {
    question: "Những thành phần kiến trúc trong kỹ thuật sản phẩm là:",
    options: [
      "Dữ liệu, phần cứng, phần mềm, con người",
      "Dữ liệu, tài liệu, phần cứng, phần mềm",
      "Dữ liệu, phần cứng, phần mềm, thủ tục",
      "Tài liệu, phần cứng, con người, thủ tục"
    ],
    answer: "Dữ liệu, phần cứng, phần mềm, con người"
  },
  {
    question: "Đặc tả hệ thống mô tả:",
    options: [
      "Chức năng và hành vi của hệ thống dựa vào máy tính",
      "Việc thi hành của mỗi thành phần hệ thống được chỉ rõ",
      "Chi tiết giải thuật và cấu trúc hệ thống",
      "Thời gian đòi hỏi cho việc giả lập hệ thống"
    ],
    answer: "Chức năng và hành vi của hệ thống dựa vào máy tính"
  },
  {
    question: "Sử dụng bảng lần vết giúp:",
    options: [
      "Debug chương trình dựa theo việc phát hiện lỗi thời gian thực",
      "Xác định việc biểu diễn những sự thi hành giải thuật",
      "Xác định, điều khiển và theo vết những thay đổi yêu cầu",
      "Không có mục nào"
    ],
    answer: "Xác định, điều khiển và theo vết những thay đổi yêu cầu"
  },
  {
    question: "Mẫu mô hình hệ thống chứa thành phần?",
    options: [
      "Input",
      "Output",
      "Giao diện người dùng",
      "Tất cả mục trên"
    ],
    answer: "Tất cả mục trên"
  },
  {
    question: "Tác vụ nào không được biểu diễn như là một phần của phân tích yêu cầu phần mềm?",
    options: [
      "Định giá và tổng hợp",
      "Mô hình hóa và thừa nhận vấn đề",
      "Lập kế hoạch và lịch biểu",
      "Đặc tả và xem xét"
    ],
    answer: "Lập kế hoạch và lịch biểu"
  },
  {
    question: "Đích của kỹ thuật đặc tả ứng dụng thuận tiện (FAST - facilitated application specification techniques) là nhờ người phát triển và khách hàng?",
    options: [
      "Xây dựng một nguyên mẫu nhanh chóng",
      "Học công việc lẫn nhau",
      "Làm việc với nhau để phát triển một tập những yêu cầu ban đầu",
      "Làm việc với nhau để phát triển những đặc tả phần mềm kỹ thuật"
    ],
    answer: "Làm việc với nhau để phát triển một tập những yêu cầu ban đầu"
  },
  {
    question: "Ai là người không thích hợp để tham dự vào nhóm FAST (facilitated application specification techniques):",
    options: [
      "Kỹ sư phần cứng và phần mềm",
      "Đại diện nhà sản xuất",
      "Đại diện thị trường",
      "Nhân viên tài chánh cao cấp"
    ],
    answer: "Nhân viên tài chánh cao cấp"
  },
  {
    question: "Những yêu cầu nào được quan tâm suốt QFD (quality function deployment):",
    options: [
      "Exciting requirements",
      "Expected requirement",
      "Normal requirements",
      "Technology requirements"
    ],
    answer: "Technology requirements"
  },
  {
    question: "Phân tích giá trị được dẫn ra như là một phần của QFD (quality function deployment) nhằm xác định:",
    options: [
      "Chi phí của hoạt động đảm bảo chất lượng của dự án",
      "Chỉ phí quan hệ của những yêu cầu qua việc triển khai chức năng, tác vụ và thông tin",
      "Độ ưu tiên quan hệ của những yêu cầu qua việc triển khai chức năng, tác vụ và thông tin",
      "Kích thước của bản ý kiến khách hàng"
    ],
    answer: "Độ ưu tiên quan hệ của những yêu cầu qua việc triển khai chức năng, tác vụ và thông tin"
  },
  {
    question: "Nội dung thông tin biểu diễn những đối tượng điều khiển và dữ liệu riêng biệt mà bao gồm những thông tin mà:",
    options: [
      "Cần thiết để trình bày tất cả output",
      "Được đòi hỏi cho việc xử lý lỗi",
      "Được đòi hỏi cho hoạt động tạo giao diện hệ thống",
      "Được biến đổi bởi phần mềm"
    ],
    answer: "Được biến đổi bởi phần mềm"
  },
  {
    question: "Dòng thông tin biểu diễn cách thức mà dữ liệu và điều khiển:",
    options: [
      "Quan hệ với một dữ liệu và điều khiển khác",
      "Biến đổi khi mỗi lần dịch chuyển qua hệ thống",
      "Sẽ được thực thi luồng khi chuyển qua hệ thống",
      "Không có mục nào"
    ],
    answer: "Biến đổi khi mỗi lần dịch chuyển qua hệ thống"
  },
    {
    question:'Kí hiệu sau đây được sử dụng trong sơ đồ UML nào?:<br><img src="Cau-44.png" alt="Câu 44" width="400">',
    options: [
      "A. Sơ đồ tuần tự",
      "B. Sơ đồ hoạt động",
      "C. Sơ đồ khối",
      "D. Sơ đồ lớp"
    ],
    answer: "B. Sơ đồ hoạt động"
  },
  {
    question: "Loại mô hình nào được tạo ra trong phân tích yêu cầu phần mềm:",
    options: [
      "Chức năng và hành vi",
      "Giải thuật và cấu trúc dữ liệu",
      "Kiến trúc và cấu trúc",
      "Tính tin cậy và tính sử dụng"
    ],
    answer: "Chức năng và hành vi"
  },
  {
    question: "Khung nhìn (view) nào được quan tâm đầu tiên trong phân tích yêu cầu phần mềm:",
    options: [
      "actor view",
      "data view",
      "essential view",
      "implementation view"
    ],
    answer: "essential view"
  },
  {
    question: "Tạo nguyên mẫu tiến hóa thường thích được dùng hơn tạo nguyên mẫu bỏ đi bởi vì:",
    options: [
      "Cho phép tái sử dụng nguyên mẫu đầu",
      "Không đòi hỏi làm việc nhiều với khách hàng",
      "Dễ dàng thực hiện nhanh",
      "Nhiều tin cậy hơn"
    ],
    answer: "Cho phép tái sử dụng nguyên mẫu đầu"
  },
  {
    question: "Những mục nào không là nguyên tắc cho việc biểu diễn yêu cầu:",
    options: [
      "Biểu đồ phải thu hẹp về số và toàn vẹn trong sử dụng",
      "Hình thức và nội dung biểu diễn thích hợp với nội dung",
      "Những biểu diễn phải có thể xem xét lại",
      "Dùng không hơn 7 màu dương và 2 màu âm trong biểu đồ"
    ],
    answer: "Dùng không hơn 7 màu dương và 2 màu âm trong biểu đồ"
  },
  {
    question: "Biểu đồ quan hệ thực thể:",
    options: [
      "Đưa ra hình ảnh những chủ liên các đối tượng dữ liệu",
      "Chỉ ra những quyết định logic chính khi chúng xuất hiện",
      "Chỉ ra sự tương tác của hệ thống với sự kiện bên ngoài"
    ],
    answer: "Đưa ra hình ảnh những chủ liên các đối tượng dữ liệu"
  },
  {
    question: "Biểu đồ dịch chuyển trạng thái:",
    options: [
      "Đưa ra hình ảnh về các đối tượng dữ liệu",
      "Đưa ra hình ảnh chức năng biến đổi luồng dữ liệu",
      "Chỉ ra hình ảnh dữ liệu được biến đổi như thế nào bởi hệ thống",
      "Chỉ ra những tương tác của hệ thống đối với sự kiện bên ngoài"
    ],
    answer: "Chỉ ra những tương tác của hệ thống đối với sự kiện bên ngoài"
  },
  {
    question: "Phân tích văn phạm của bản tường thuật xử lý là bước đầu tiên tốt nhất để tạo ra:",
    options: [
      "Từ điển dữ liệu",
      "Biểu đồ dòng dữ liệu",
      "Biểu đồ quan hệ thực thể",
      "Biểu đồ dịch chuyển trạng thái"
    ],
    answer: "Biểu đồ dòng dữ liệu"
  },
  {
    question: "Loại trừu tượng nào được dùng trong thiết kế phần mềm:",
    options: [
      "Điều khiển",
      "Dữ liệu",
      "Thủ tục",
      "Tất cả mục trên"
    ],
    answer: "Tất cả mục trên"
  },
  {
    question: "Loại mô hình nào không được có trong kiến trúc phần mềm:",
    options: [
      "Dữ liệu",
      "Động",
      "Xử lý",
      "Cấu trúc"
    ],
    answer: "Dữ liệu"
  },
  {
    question: "Cấp bậc điều khiển thể hiện:",
    options: [
      "Thứ tự quyết định",
      "Việc tổ chức của các module",
      "Sự lặp lại của những hoạt động",
      "Sự tuần tự của các tiến trình"
    ],
    answer: "Việc tổ chức của các module"
  },
  {
    question: "Thủ tục phần mềm tập trung vào:",
    options: [
      "Cấp bậc điều khiển trong một cảm nhận trừu tượng hơn",
      "Xử lý chi tiết của mỗi module riêng biệt",
      "Xử lý chi tiết của mỗi tập module",
      "Quan hệ giữa điều khiển và thủ tục"
    ],
    answer: "Xử lý chi tiết của mỗi module riêng biệt"
  },
  {
    question: "Nguyên nhân của việc sinh lỗi do thiết kế mức thành phần trước khi thiết kế dữ liệu là:",
    options: [
      "Thiết kế thành phần thì phụ thuộc vào ngôn ngữ còn thiết kế dữ liệu thì không",
      "Thiết kế dữ liệu thì dễ thực hiện hơn",
      "Thiết kế dữ liệu thì khó thực hiện",
      "Cấu trúc dữ liệu thường ảnh hưởng tới cách thức mà thiết kế thành phần phải theo"
    ],
    answer: "Cấu trúc dữ liệu thường ảnh hưởng tới cách thức mà thiết kế thành phần phải theo"
  },
      {
    question:'Dưới đây lớp Circle được thể hiện sơ đồ UML cho biết “isVisible()” là:<br><img src="Cau-50.png" alt="Câu 50" width="400">',
    options: [
      "A. Phương thức public",
      "B. Đối tượng public",
      "C. Phương thức private",
      "D. Lớp public"
    ],
    answer: "A. Phương thức public"
  },
       {
    question:'Các đường dưới đây trong biểu diễn sơ đồ UML, (i) là:<br><img src="Cau-51.png" alt="Câu 51" width="400">',
    options: [
      "A. Mở rộng",
      "B. Bao gồm",
      "C. Thừa kế",
      "D. Không có đáp án nào"
    ],
    answer: "D. Không có đáp án nào"
  },
  {
    question:'Biểu diễn các tác nhân như sau, phát biểu nào sau đây đúng?<br><img src="Cau-53.png" alt="Câu 53" width="400">',
    options: [
      "A. Hình vẽ thể hiện quan hệ thừa kế giữa các tác nhân",
      "B. Hình vẽ thể hiện quan hệ kết hợp giữa các tác nhân",
      "C. Hình vẽ thể hiện các tác nhân rời rạc",
      "D. Hình vẽ thể hiện một tác nhân tổng quát, hai tác nhân chi tiết"
    ],
    answer: "A. Hình vẽ thể hiện quan hệ thừa kế giữa các tác nhân"
  },
    {
    question:'Cho sơ đồ ca sử dụng như sau?<br><img src="Cau-54.png" alt="Câu 54" width="400">Ca sử dụng có thể là:',
    options: [
      "A. Thẻ VISA, thẻ ngân hàng, VISA, ngân hàng",
      "B. Bỏ tiền vào bằng tiền mặt (deposit by cash)",
      "C. Thẻ VISA rút tiền với thẻ VISA",
      "D. Kiểm tra mã PIN (identify)",
      "E. B, D"
    ],
    answer: "E. B, D"
  },
      {
    question:'Cho sơ đồ ca sử dụng như sau?<br><img src="Cau-55.png" alt="Câu 55" width="400">Từ sơ đồ ca sử dụng có thể biết được là:',
    options: [
      "A. Hệ thống cho rút tiền với giao dịch viên",
      "B. Hệ thống có kiểm tra xác thực",
      "C. Mỗi khi nạp tiền phải nạp bằng ngân phiếu (cheque) và tiền mặt (cash)",
      "D. Có hai tác nhân chính là VISA và ngân hàng",
      "E. Hệ thống không cho xem số tiền trong tải khoản"
    ],
    answer: "B. Hệ thống có kiểm tra xác thực"
  },
      {
    question:'Cho mô tả như sau?<br><img src="Cau-56.png" alt="Câu 56" width="400">Từ mô tả ta có thể biết được:',
    options: [
      "A. Tên lớp là Point",
      "B. Có % phương thức mức bảo vệ",
      "C. Thuộc tính của lớp trong mô tả là một đối tượng của lớp khác",
      "D. Không có phương án nào kiểu đúng sai",
    ],
    answer: "C. Thuộc tính của lớp trong mô tả là một đối tượng của lớp khác"
  },
        {
    question:'Trong sơ đồ sau, tác nhân nào có thể gọi use case H?<br><img src="Cau-57.png" alt="Câu 57" width="400">',
    options: [
      "A. C, I",
      "B. A, D",
      "C. A, B, C",
      "D. E, D",
    ],
    answer: "B. A, D"
  },
       {
    question:'Trong sơ đồ sau:<br><img src="Câu 72.png" alt="Câu 72" width="700">',
    options: [
    ],
    answer: "B. A, D"
  },
          {
    question:'Dựa vào sơ đồ trình tự dưới đây, những phương thức nào sẽ được thực thi cho lớp Taikhoan?<br><img src="Cau-60.png" alt="Câu 60" width="400">',
    options: [
      "A. check(), plus()",
      "B. xfer(), evaluation()",
      "C. check(), minus(), plus()",
      "D. xfer(), plus(), minus()",
    ],
    answer: "D. xfer(), plus(), minus()"
  },
  {
    question:'Cho biết sơ đồ dưới đây là loại sơ đồ gì?<br><img src="Cau-76.png" alt="Câu 76" width="400">',
    options: [
      "A. Sơ đồ máy tính",
      "B. Sơ đồ triển khai",
      "C. Sơ đồ khối",
      "D. Sơ đồ trình tự",
    ],
    answer: "B. Sơ đồ triển khai"
  },
    {
    question:'Cho sơ đồ lớp sau:<br><img src="Cau-89.png" alt="Câu 89" width="400"> Phát biểu nào sau đây là đúng',
    options: [
      "A. Snake là lớp con của Mongoose",
      "B. Quan hệ giữa Mongoose và Snake là quan hệ phụ thuộc",
      "C.  Animal là << interface >> nên mối quan hệ từ lớp Vertebrate nên là nét đứt (realize)",
      "D. B, C",
    ],
    answer: "D. B, C"
  },
    {
    question:'Cho sơ đồ lớp sau:<br><img src="Cau-91.png" alt="Câu 91" width="400"> Phát biểu nào sau đây phù hợp với sơ đồ?',
    options: [
      "A. Một công ty (Company) có thể thuê 0 hoặc 1 người (Person)",
      "B. Một người (Person) có thể làm việc cho một công ty (Company)",
      "C. Một người (Person) có một chế độ thuê (Employment)",
      "D. Một công ty (Company) có một nhà tuyển dụng (employer) là con người (Person)",
    ],
    answer: "B. Một người (Person) có thể làm việc cho một công ty (Company)"
  },

      {
    question:'Cho sơ đồ lớp sau: Sơ đồ chỉ ra rằng?<br><img src="92.png" alt="Câu 92" width="400">',
    options: [
      "A. Người (Person) có một tên (name)",
      "B. Guitarist có một tên",
      "C. Guitar có một tên",
      "D. A, B",
    ],
    answer: "D. A, B"
  },
    {
    question:'Biểu diễn một số người giữ con vật làm thú cưng như thế nào?',
    options: [
      'A. <br><img src="95a.png" alt="Câu 95" width="150">',
      'B. <br><img src="95b.png" alt="Câu 95" width="150">',
      'C. <br><img src="95c.png" alt="Câu 95" width="150">',
      'D. <br><img src="95d.png" alt="Câu 95" width="150">',
      'E. <br><img src="95e.png" alt="Câu 95" width="150">'
    ],
    answer: 'D. <br><img src="95d.png" alt="Câu 95" width="150">'
  },
    {
    question:'Sơ đồ sau là biểu diễn của:<br><img src="cau262.png" alt="Câu 262" width="400"> ',
    options: [
      "A. Lớp",
      "B. Hình tròn",
      "C. Đối tượng",
      "D. Trường hợp sử dụng",
    ],
    answer: "C. Đối tượng"
  },
     {
    question:'Sơ đồ sau là biểu diễn của:<br><img src="263.png" alt="Câu 262" width="400"> ',
    options: [
      "Quan hệ kết tập (aggregation)",
      "Quan hệ phụ thuộc (dependency)",
      "Quan hệ tổng quát hóa (generalization)",
      "Quan hệ ràng buộc (constraint)",
    ],
    answer: "Quan hệ tổng quát hóa (generalization)"
  },
     {
    question:'Use case trống và quan hệ trong sơ đồ là:<br><img src="273.png" alt="Câu 273" width="400"> ',
    options: [
      "A. Lỗi hệ thống và << include >> hoặc << extend >>",
      "B. Use case thừa kế và << include >>",
      "C. Ngoại lệ và << extend >>",
      "D. Tác nhân và << extend >>",
    ],
    answer: "C. Ngoại lệ và << extend >>"
  },
     {
    question:'Sinh mã cho sơ đồ có trình tự sau:<br><img src="280.png" alt="Câu 280" width="400"> ',
    options: [
      `<pre>A. public class A {
    private B objB;
    public void msg1() {
        objB = new B();
        objB.msg2();
        objB.msg3();
    }
}
public class B {
    public void msg2() {}
    public void msg3() {}
}</pre>`,

  `<pre>B. public class A {
    public void msg1()
    public void msg2()
    public void msg3()
}
public class B {
    ...
}</pre>`,

  `<pre>C. public class B {
    objB = new A();
    objB.msg2();
    objB.msg3();
}
public class A {
    public void msg1() {}
    public void msg2() {}
    public void msg3() {}
}</pre>`,

  `<pre>D. public class A {
    objB = new B();
    public void msg1() {}
}
public class B {
    public void msg2() {}
    public void msg3() {}
}</pre>`
    ],
    answer:     `<pre>A. public class A {
    private B objB;
    public void msg1() {
        objB = new B();
        objB.msg2();
        objB.msg3();
    }
}
public class B {
    public void msg2() {}
    public void msg3() {}
}</pre>`,
  },

      {
    question:'Sinh mã cho sơ đồ có trình tự sau:<br><img src="281.png" alt="Câu 281" width="400"> ',
    options: [
      `<pre>A. for(i = 1; i < n; i++) {
    objectB.message();
}</pre>`,

  `<pre>B. for(i = 0; i <= n; i++) {
    objectB.message();
}</pre>`,

  `<pre>C. for(i = 1; i <= n; i++) {
    objectB.message();
}</pre>`,

  `<pre>D. while(n) {
    objectB.message();
}</pre>`,

  `<pre>E. while(!n) {
    objectB.message();
}</pre>`,

  `<pre>F. while(true) {
    objectB.message(n);
}</pre>`
    ],
    answer: `<pre>D. while(n) {
    objectB.message();
}</pre>`
  },
{
  question: `<pre>Khi chọn gói phần mềm, phải xem xét:
i) Gói phần mềm đó có phù hợp với yêu cầu người dùng không?
ii) Mức độ đáng tin của nhà cung cấp
iii) Nhà phát triển hệ thống có phải là một tổ chức ổn định, đáng tin
iv) Gói phần mềm đó có ổn định không hoặc nó có được sửa lại (duyệt lại) lần cuối
v) Mức độ tích hợp với các phần mềm/ ứng dụng khác
vi) Sự hỗ trợ sẵn có
vii) Đội ngũ nhân viên sẵn sàng</pre>`,
  options: [
    "A. i, iv, v",
    "B. ii, iv, v, vi",
    "C. i, ii, iii",
    "D. iii, iv",
    "E. ii, vii, i",
    "F. Tất cả các câu trên"
  ],
  answer: "F. Tất cả các câu trên"
},
{
    question: "Các thông điệp giống nhau được hiểu theo cách khác nhau bởi các lớp khác nhau là thể hiện của",
    options: [
      "A. Tính đa hình",
      "B. Tính đóng gói",
      "C. Tính thừa kế",
      "D. Tính ảo hóa",
      "E. A và C",
      "F. B và D"
    ],
    answer: "A. Tính đa hình"
  },
  {
    question: "Khi viết giả code (pseudo code), những từ khóa quan trọng nên được in đậm hoặc viết hoa?",
    options: [
      "A. Đúng",
      "B. Sai",
      "C. Đúng nếu giả code cùng với mã ngôn ngữ",
      "D. Sai vì giả code giống ngôn ngữ nói",
      "E. A và C",
      "F. B và D"
    ],
    answer: "A. Đúng"
  },
  {
    question: "Biểu thức chính quy (regular expression) dùng trong trường hợp nào sau đây?",
    options: [
      "A. Quy tắc cú pháp địa chỉ email",
      "B. Ẩn mật khẩu khi người dùng nhập vào",
      "C. Viết giả code cho một thuật toán",
      "D. Kiểm thử một chương trình"
    ],
    answer: "A. Quy tắc cú pháp địa chỉ email"
  },
  {
    question: "Chuẩn IEEE cho tài liệu yêu cầu đặc tả là:",
    options: [
      "A. IEEE Standard 837-1998",
      "B. IEEE Standard 830-1998",
      "C. IEEE Standard 839-1998",
      "D. IEEE Standard 832-1998",
      "E. A và C",
      "F. B và D"
    ],
    answer: "B. IEEE Standard 830-1998"
  },

    {
    question: "Mẫu nào sau đây phù hợp với tên của một tác nhân",
    options: [
      "[ Danh từ ]",
      "[ Động từ ]",
      "[ Danh từ ] [ Động từ ]",
      "[ Danh từ ] [Tính từ ]"
    ],
    answer: "[ Danh từ ]"
  },
    {
    question: "Cách định cấu hình tham số URL cho API tìm sản phẩm dựa trên tên:",
    options: [
      "POST/{name}/products",
      "GET /product/{name}",
      "POST/products/{name}",
      "GET/product_id={name}"
    ],
    answer: "GET /product/{name}"
  },
  {
    question:'Sơ đồ sau là biểu diễn của:<br><img src="2966.png" alt="Câu 296" width="330"> ',
    options: [
      'A. <br><img src="296a.png" alt="Câu 95" width="400">',
      'B. <br><img src="296b.png" alt="Câu 95" width="400">',
      'C. <br><img src="296c.png" alt="Câu 95" width="400">',
      'D. <br><img src="296d.png" alt="Câu 95" width="400">',
    ],
    answer: 'C. <br><img src="296c.png" alt="Câu 95" width="400">'
  },

      {
    question: "Quan hệ thừa kế trong sơ đồ lớp được thể hiện bởi:",
    options: [
      "Tên lớp",
      "Các hàm",
      "Đường thẳng",
      "Mũi tên"
    ],
    answer: "Mũi tên"
  },
  {
    question: "Mục đích của tham chiếu chéo những yêu cầu (ma trận) trong tài liệu thiết kế là nhằm:",
    options: [
      "Cho phép người quản lý theo dõi năng suất của nhóm thiết kế",
      "Xác minh là tất cả các yêu cầu đã được xem xét trong thiết kế",
      "Chỉ ra chi phí kết hợp với mỗi yêu cầu",
      "Cung cấp cho việc thực thi tên của những nhà thiết kế cho mỗi yêu cầu"
    ],
    answer: "Xác minh là tất cả các yêu cầu đã được xem xét trong thiết kế"
  },
  {
    question: "Đặc trưng nào là đúng cho kho dữ liệu, không phải là cơ sở dữ liệu đặc trưng:",
    options: [
      "Hướng mức nghiệp vụ và kích thước lớn",
      "Thông tin đúng và hợp thời",
      "Tích hợp và không thường thay đổi",
      "Tất cả những mục trên"
    ],
    answer: "Tích hợp và không thường thay đổi"
  },
  {
    question: "Mẫu kiến trúc nhấn mạnh tới những thành phần:",
    options: [
      "Ràng buộc",
      "Tập hợp những thành phần",
      "Mô hình ngữ nghĩa",
      "Tất cả những mục"
    ],
    answer: "Tất cả những mục"
  },
  {
    question: "Nhằm xác định những mẫu kiến trúc hay kết hợp những mẫu phù hợp nhất cho hệ thống đề nghị, kỹ thuật yêu cầu dùng để khám phá:",
    options: [
      "Giải thuật phức tạp",
      "Đặc trưng và ràng buộc",
      "Điều khiển và dữ liệu",
      "Những mẫu thiết kế"
    ],
    answer: "Đặc trưng và ràng buộc"
  },
  {
    question: "Tiêu chuẩn đánh giá chất lượng của một thiết kế kiến trúc phải dựa vào:",
    options: [
      "Tính truy cập và tính tin cậy của hệ thống",
      "Dữ liệu và điều khiển của hệ thống",
      "Tính chức năng của hệ thống",
      "Những chi tiết thực thi của hệ thống"
    ],
    answer: "Tính truy cập và tính tin cậy của hệ thống"
  },
  {
    question: "Trong phương pháp phân tích kiến trúc, mô tả mẫu kiến trúc thường dùng khung nhìn:",
    options: [
      "Dòng dữ liệu",
      "Module",
      "Tiến trình",
      "Tất cả các mục trên"
    ],
    answer: "Module"
  },
  {
    question: "Khi một luồng tổng thể trong một đoạn của biểu đồ luồng dữ liệu có tính trình tự cao và theo sau những đường thẳng sẽ thể hiện:",
    options: [
      "Liên kết thấp",
      "Module hóa tốt",
      "Luồng giao dịch (transaction)",
      "Luồng biến đổi (transform)"
    ],
    answer: "Luồng biến đổi (transform)"
  },
  {
    question: "Mô hình thiết kế không quan tâm tới:",
    options: [
      "Kiến trúc",
      "Dữ liệu",
      "Giao diện",
      "Phạm vi dự án"
    ],
    answer: "Phạm vi dự án"
  },
  {
    question: "Sự quan trọng của thiết kế phần mềm có thể được tóm tắt bằng từ đơn:",
    options: [
      "Accuracy",
      "Complexity",
      "Efficiency",
      "Quality"
    ],
    answer: "Quality"
  },
  {
    question: "Một đặc trưng của thiết kế tốt là:",
    options: [
      "Cho thấy sự liên kết mạnh giữa các module",
      "Thực hiện tất cả yêu cầu trong phân tích",
      "Bao gồm những test case cho tất cả thành phần",
      "Kết hợp mã nguồn nhằm mục đích mô tả"
    ],
    answer: "Thực hiện tất cả yêu cầu trong phân tích"
  },
  {
    question: "Một bổ sung cần thiết nhằm biến đổi hay ánh xạ giao dịch để tạo một thiết kế kiến trúc đầy đủ là:",
    options: [
      "Sơ đồ quan hệ - thực thể",
      "Từ điển dữ liệu",
      "Mô tả việc xử lý cho mỗi module",
      "Những Test-case cho mỗi module"
    ],
    answer: "Mô tả việc xử lý cho mỗi module"
  },
  {
    question: "Những nguyên lý thiết kế giao diện nào không cho phép người dùng còn điều khiển tương tác với máy tính:",
    options: [
      "Cho phép được gián đoạn",
      "Cho phép tương tác có thể undo",
      "Che dấu những bản chất kỹ thuật với những người dùng thường",
      "Chỉ cung cấp một cách thức xác định cứng khi hoàn thành tác vụ"
    ],
    answer: "Chỉ cung cấp một cách thức xác định cứng khi hoàn thành tác vụ"
  },
  {
    question: "Những nguyên lý thiết kế giao diện cho phép người dùng ít phải nhớ:",
    options: [
      "Xác định những shortcut trực quan",
      "Biểu lộ thông tin theo cách diễn tiến",
      "Thiết lập những trường hợp mặc định có ý nghĩa",
      "Tất cả những mục trên"
    ],
    answer: "Tất cả những mục trên"
  },
  {
    question: "Sự toàn vẹn (consistency) giao diện ngầm định:",
    options: [
      "Những kỹ thuật input giữ tương tự suốt ứng dụng",
      "Mỗi ứng dụng phải có look and feel riêng biệt",
      "Cách thức điều hướng (navigational) nhạy với ngữ cảnh",
      "Câu a và b"
    ],
    answer: "Câu a và b"
  },
  {
    question: "Mô hình nào đưa ra hình ảnh tiền sử (profile) người dùng cuối của hệ thống dựa vào máy tính:",
    options: [
      "Mô hình thiết kế",
      "Mô hình người dùng",
      "Mô hình của người dùng",
      "Mô hình nhận thức hệ thống"
    ],
    answer: "Mô hình người dùng"
  },
  {
    question: "Mô hình nào đưa ra hình ảnh hệ thống trong đầu của người dùng cuối:",
    options: [
      "Mô hình thiết kế",
      "Mô hình người dùng",
      "Hình ảnh hệ thống",
      "Mô hình nhận thức hệ thống"
    ],
    answer: "Mô hình nhận thức hệ thống"
  },
  {
    question: "Mô hình nào đưa ra hình ảnh look and feel cho giao diện người dùng cùng những thông tin hỗ trợ:",
    options: [
      "Mô hình thiết kế",
      "Mô hình người dùng",
      "Mô hình hình ảnh hệ thống",
      "Mô hình nhận thức hệ thống"
    ],
    answer: "Mô hình hình ảnh hệ thống"
  },
  {
    question: "Những hoạt động khung nào thường không kết hợp với những quá trình thiết kế giao diện người dùng:",
    options: [
      "Ước lượng giá",
      "Xây dựng giao diện",
      "Định trị giao diện",
      "Phân tích người dùng và tác vụ"
    ],
    answer: "Ước lượng giá"
  },
  {
    question: "Hướng tiếp cận nào để những phân tích tác vụ của người dùng trong thiết kế giao diện người dùng:",
    options: [
      "Người dùng cho biết những ưa thích qua bản câu hỏi",
      "Dựa vào ý kiến của những lập trình viên có kinh nghiệm",
      "Nghiên cứu những hệ thống tự động liên quan",
      "Quan sát thao tác người dùng"
    ],
    answer: "Quan sát thao tác người dùng"
  },
  {
    question: "Những vấn đề thiết kế chung nổi trội lên trong hầu hết giao diện người dùng:",
    options: [
      "Kết nối tiền sử người dùng (profile) và shortcut chức năng",
      "Xử lý lỗi và thời gian đáp ứng của hệ thống",
      "Quyết định hiển thị hình ảnh và thiết kế icon",
      "Không có mục nào"
    ],
    answer: "Xử lý lỗi và thời gian đáp ứng của hệ thống"
  },
  {
    question: "Những hệ thống phát triển giao diện người dùng đặc trưng cung cấp những kỹ thuật cho việc xây dựng những nguyên mẫu giao diện bao gồm:",
    options: [
      "Tạo code",
      "Những tool vẽ",
      "Định trị input",
      "Tất cả mục trên"
    ],
    answer: "Tất cả mục trên"
  },
  {
    question: "Những bản câu hỏi có ý nghĩa nhất đối với những người thiết kế giao diện khi được hoàn tất bởi:",
    options: [
      "Khách hàng",
      "Những lập trình viên có kinh nghiệm",
      "Người dùng sản phẩm",
      "Người quản lý dự án"
    ],
    answer: "Người dùng sản phẩm"
  },
  {
    question: "Nhiều đo lường hữu dụng có thể thu thập khi quan sát những người dùng tương tác với hệ thống máy tính gồm:",
    options: [
      "Thời gian cho ứng dụng",
      "Số khiếm khuyết (defect) phần mềm",
      "Tính tin cậy của phần mềm",
      "Thời gian đọc tài liệu trợ giúp"
    ],
    answer: "Thời gian đọc tài liệu trợ giúp"
  },
  {
    question: "Một bảng quyết định được dùng:",
    options: [
      "Để tư liệu tất cả những trạng thái phụ thuộc",
      "Để hướng dẫn phát triển kế hoạch quản lý dự án",
      "Chỉ khi xây dựng hệ chuyên gia",
      "Khi một tập phức tạp những điều kiện và hoạt động xuất hiện trong thành phần"
    ],
    answer: "Khi một tập phức tạp những điều kiện và hoạt động xuất hiện trong thành phần"
  },
  {
    question: "Ngôn ngữ thiết kế chương trình (PDL) thường là một:",
    options: [
      "Sự kết hợp giữa cấu trúc lập trình và văn bản tường thuật",
      "Ngôn ngữ lập trình truyền thống theo luật riêng của nó",
      "Ngôn ngữ phát triển phần mềm có thể đọc bởi máy",
      "Một cách hữu dụng để biểu diễn kiến trúc phần mềm"
    ],
    answer: "Sự kết hợp giữa cấu trúc lập trình và văn bản tường thuật"
  },
  {
    question: "Những độ đo phức tạp vòng (cyclomatic complexity metric) cung cấp cho người thiết kế thông tin về số:",
    options: [
      "Chu kỳ trong chương trình",
      "Số lỗi trong chương trình",
      "Những đường logic độc lập trong chương trình",
      "Những phát biểu của chương trình"
    ],
    answer: "Những đường logic độc lập trong chương trình"
  },
  {
    question: "Kiểm thử luồng dữ liệu là một kỹ thuật kiểm thử cấu trúc điều khiển mà những tiêu chuẩn dùng để thiết kế test-case:",
    options: [
      "Dựa vào kiểm thử đường cơ bản",
      "Thử thách điều kiện logic trong module phần mềm",
      "Chọn những đường dẫn kiểm tra dựa vào những vị trí và dùng những biến",
      "Tập trung vào việc kiểm thử việc giá trị những cấu trúc lặp"
    ],
    answer: "Chọn những đường dẫn kiểm tra dựa vào những vị trí và dùng những biến"
  },
  {
    question: "Kiểm thử lặp là một kỹ thuật kiểm thử cấu trúc điều khiển mà những tiêu chuẩn dùng để thiết kế test-case:",
    options: [
      "Dựa vào kiểm thử đường cơ bản",
      "Thử thách điều kiện logic trong module phần mềm",
      "Chọn những đường dẫn kiểm tra dựa vào những vị trí và dùng những biến",
      "Tập trung vào việc kiểm thử việc giá trị những cấu trúc lặp"
    ],
    answer: "Tập trung vào việc kiểm thử việc giá trị những cấu trúc lặp"
  },
  {
    question: "Kiểm thử Black-box cố gắng tìm ra những lỗi:",
    options: [
      "Chức năng không đầy đủ hay không đúng",
      "Những lỗi giao diện",
      "Những lỗi thực thi",
      "Tất cả mục trên"
    ],
    answer: "Tất cả mục trên"
  },
  {
    question: "Lý do tốt nhất cho việc dùng nhóm kiểm tra phần mềm độc lập là:",
    options: [
      "Những người phát triển phần mềm không cần làm bất kỳ kiểm thử nào",
      "Những người lạ sẽ kiểm phần mềm rất chặt",
      "Những người kiểm thử không được dính dáng tới dự án cho đến khi kiểm thử bắt đầu",
      "Mâu thuẫn về quyền lợi giữa những người phát triển và những người kiểm thử sẽ giảm"
    ],
    answer: "Mâu thuẫn về quyền lợi giữa những người phát triển và những người kiểm thử sẽ giảm"
  },
  {
    question: "Trong một dự án thành công sử dụng chiến lược:",
    options: [
      "Đưa ra những xem xét kỹ thuật hình thức ưu tiên trước khi kiểm thử",
      "Chỉ rõ những yêu cầu theo một cách thức có thể định lượng",
      "Quan tâm tới việc sử dụng những nhóm kiểm thử độc lập",
      "Tất cả mục trên"
    ],
    answer: "Tất cả mục trên"
  },
  {
    question: "Kiểm thử tích hợp Top-down có thuận lợi chính là:",
    options: [
      "Những module mức thấp không bao giờ cần kiểm thử",
      "Những điểm quyết định chính được kiểm thử sớm",
      "Không có những stub cần phải viết",
      "Không có mục nào"
    ],
    answer: "Những điểm quyết định chính được kiểm thử sớm"
  },
   {
    question: "Kiểm thử tích hợp Bottom-up có thuận lợi chính là:",
    options: [
      "Những module mức thấp không bao giờ cần kiểm thử",
      "Những điểm quyết định chính được kiểm thử sớm",
      "Không có những driver cần phải viết",
      "Không có những stub (nhánh) cần phải viết",
    ],
    answer: "Không có những driver cần phải viết"
  },
  {
    question: "Vấn đề nào sau đây liên quan chính đến pha thiết kế?",
    options: [
      "Khả thi",
      "Dữ liệu",
      "Tất cả các mục",
      "Phạm vi dự án"
    ],
    answer: "Dữ liệu"
  },
  {
    question: "Từ điển dữ liệu chứa những mô tả của mỗi:",
    options: [
      "Mục cấu hình phần mềm",
      "Đối tượng dữ liệu phần mềm",
      "Biểu đồ phần mềm",
      "Hệ thống ký hiệu phần mềm"
    ],
    answer: "Đối tượng dữ liệu phần mềm" // [3]
  },
  {
    question: "Trong tích hợp module, gom cụm (cluster) được dùng trong:",
    options: [
      "Tích hợp từ dưới lên",
      "Tích hợp big-bang",
      "Tích hợp từ trên xuống",
      "Tích hợp tăng vòng"
    ],
    answer: "Tích hợp từ dưới lên" // [4]
  },
  {
    question: "Trong nhận diện rủi ro, việc không đáp ứng về lịch biểu thuộc loại rủi ro:",
    options: [
      "Về con người",
      "Về ước lượng",
      "Về yêu cầu",
      "Về tổ chức"
    ],
    answer: "Về ước lượng"
  },
  {
    question: "Trong mô hình phân tích thành phần dựa vào kịch bản (Scenario based element) được dùng cho:",
    options: [
      "Thiết kế kiến trúc",
      "Thiết kế thành phần",
      "Thiết kế giao diện",
      "Thiết kế dữ liệu/class"
    ],
    answer: "Thiết kế giao diện"
  },
  {
    question: "Trong mô hình CMM (Software Capability Maturity Model) có mấy mức độ trưởng thành:",
    options: [
      "5 mức độ",
      "4 mức độ"
    ],
    answer: "5 mức độ"
  },
  {
    question: "Trong độ đo hiệu quả khử lỗi DRE, số lỗi tiềm tàng là",
    options: [
      "Tất cả đều sai",
      "Số lỗi do khách hàng phát hiện",
      "Toàn bộ lỗi được phát hiện sau đó",
      "Toàn bộ lỗi chưa phát hiện"
    ],
    answer: "Toàn bộ lỗi được phát hiện sau đó"
  },
  {
    question: "Trong biểu diễn lịch biểu dự án Critical path là đường:",
    options: [
      "Là một đường duy nhất",
      "Có thời gian ngắn nhất",
      "Có thời gian dài nhất",
      "Tất cả đều đúng phụ thuộc vào dự án"
    ],
    answer: "Có thời gian dài nhất"
  },
  {
    question: "Theo Boris Beizer, thiết kế Testcase cần theo ràng buộc (constraint):",
    options: [
      "Theo một cách thức đầy đủ",
      "Tất cả đều đúng",
      "Nỗ lực và thời gian là tối thiểu",
      "Nhằm khám phá lỗi"
    ],
    answer: "Tất cả đều đúng" // [5][4][1]
  },
  {
    question: "Tài liệu nào sau đây sẽ được tạo ra trong pha thiết kế hệ thống?",
    options: [
      "Kế hoạch kiểm thử",
      "Mã lệnh",
      "Thiết kế chi tiết",
      "Lập kế hoạch"
    ],
    answer: "Thiết kế chi tiết" // [9][10][11]
  },
  {
    question: "Sự toàn vẹn (consistency) giao diện ngầm định :",
    options: [
      "Những kỹ thuật input giữ tương tự suốt ứng dụng",
      "Mỗi ứng dụng phải có look and feel riêng biệt",
      "Cách thức điều hướng (navigational) nhạy với ngữ cảnh",
      "Câu a và b"
    ],
    answer: "Câu a và b" // [17][18][19][20][21][22][23][24]
  },
  {
    question: "Những gì làm cho khó đưa ra những yêu cầu:",
    options: [
      "Hiểu rõ những yêu cầu người dùng",
      "Sự thay đổi",
      "Tất cả các mục",
      "Phạm vi, giới hạn"
    ],
    answer: "Tất cả các mục" // [33][34][35][36]
  },
  {
    question: "Những độ đo phức tạp vòng (cyclomatic complexity metric) cung cấp cho người thiết kế thông tin về số :",
    options: [
      "Chu kỳ trong chương trình",
      "Số lỗi trong chương trình",
      "Những đường logic độc lập trong chương trình",
      "Những phát biểu của chương trình"
    ],
    answer: "Những đường logic độc lập trong chương trình" // [37][38][39][40][41][42][43][44]
  },
  {
    question: "Mục nào liên quan tới phân tích người dùng:",
    options: [
      "Mô hình hệ thống của người dùng",
      "Trong tình huống đặc trưng thì người dùng thực hiện công việc gì?",
      "Những feedback từ việc đánh giá của người dùng",
      "Nếu người dùng xảy ra lỗi thì hậu quả như thế nào"
    ],
    answer: "Trong tình huống đặc trưng thì người dùng thực hiện công việc gì?" // [45][46][47][48][49][50][51][52]
  },
  {
    question: "Mục nào không phải là một loại kiến trúc (style): kiến trúc:",
    options: [
      "Luồng dữ liệu",
      "Kiến trúc ngữ cảnh",
      "Gọi trả về",
      "Tầng"
    ],
    answer: "Kiến trúc ngữ cảnh" // [53][54][55][56][57][58]
  },
  {
    question: "Trong phát triển phần mềm, yếu tố nào quan trọng nhất?",
    options: [
      "Con người",
      "Quy trình",
      "Sản phẩm",
      "Thời gian"
    ],
    answer: "Con người" // [70][71][72][73][74]
  },
  {
    question: "Loại phần mềm gì là 1 tập hợp các chương trình để cung cấp dịch vụ cho các chương trình khác",
    options: [
      "Phần mềm hệ thống (System software)",
      "Phần mềm trí tuệ nhân tạo (Artificial Intelligence Software)",
      "Phần mềm thời gian thực (Real time software)",
      "Phần mềm nghiệp vụ (Business software)"
    ],
    answer: "Phần mềm hệ thống (System software)"
  },
  {
    question: "Theo một báo cáo của IBM, \"31% các dự án bị hủy bỏ trước khi chúng được hoàn thành, 53% vượt dự toán trung bình 189% và cứ mỗi 100 dự án, có 94 dự án khởi động lại\". Lý do nào cho số liệu thống kê trên?",
    options: [
      "Thiếu đào tạo đầy đủ về công nghệ phần mềm",
      "Thiếu đạo đức phần mềm và sự hiểu biết",
      "Quản lý các vấn đề trong công ty",
      "Ảnh hưởng của sự suy thoái kinh tế"
    ],
    answer: "Thiếu đào tạo đầy đủ về công nghệ phần mềm"
  },
  {
    question: "Mối quan tâm chính của công nghệ phần mềm là gì?",
    options: [
      "Sản xuất phần cứng",
      "Sản xuất phần mềm",
      "Cấu hình mạng",
      "Phần mềm có thể dùng lại"
    ],
    answer: "Sản xuất phần mềm"
  },
  {
    question: "Điều nào là đặc trưng của một thiết kế phần mềm tốt?",
    options: [
      "Thể hiện kết nối mạnh mẽ giữa các mô-đun của nó",
      "Thực hiện tất cả các yêu cầu trong mô hình phân tích",
      "Bao gồm các trường hợp thử nghiệm cho tất cả các thành phần",
      "Cung cấp một bức tranh hoàn chỉnh của phần mềm"
    ],
    answer: "Thực hiện tất cả các yêu cầu trong mô hình phân tích"
  },
  {
    question: "Theo thống kê từ những thách thức đối với công nghệ phần mềm thì lỗi nhiều nhất là do:",
    options: [
      "Kiểm tra và bảo trì",
      "Phân tích yêu cầu",
      "Thiết kế",
      "Viết Code"
    ],
    answer: "Phân tích yêu cầu"
  },
  {
    question: "2 hình thức dùng mô tả yêu cầu là:",
    options: [
      "Yêu cầu người dùng và yêu cầu hệ thống",
      "Yêu cầu chức năng và yêu cầu phi chức năng",
      "Yêu cầu chủ động và yêu cầu thụ động",
      "Yêu cầu cụ thể và yêu cầu trừu tượng"
    ],
    answer: "Yêu cầu người dùng và yêu cầu hệ thống"
  },
  {
    question: "Nguyên nhân của việc sinh lỗi do thiết kế mức thành phần trước khi thiết kế dữ liệu là:",
    options: [
      "Thiết kế thành phần thì phụ thuộc vào ngôn ngữ còn thiết kế dữ liệu thì không",
      "Thiết kế dữ liệu thì dễ thực hiện hơn",
      "Thiết kế dữ liệu thì khó thực hiện",
      "Cấu trúc dữ liệu thường ảnh hưởng tới cách thức mà thiết kế thành phần phải theo"
    ],
    answer: "Cấu trúc dữ liệu thường ảnh hưởng tới cách thức mà thiết kế thành phần phải theo"
  },
  {
    question: "Loại khả thi nào không được xem xét trong phân tích khả thi:",
    options: [
      "Khả thi về kinh tế",
      "Khả thi về thực hiện",
      "Khả thi về kỹ thuật",
      "Khả thi về chất lượng"
    ],
    answer: "Khả thi về chất lượng" // [1][3][5]
  },
  {
    question: "Tính chất cần có của dữ liệu trong phân tích yêu cầu:",
    options: [
      "Có định hướng thời gian",
      "Có giá trị pháp lý",
      "Tính mô tả trừu tượng",
      "Có thể mô tả bằng toán học"
    ],
    answer: "Có định hướng thời gian" // [8]
  },
  {
    question: "Tính chất nào không cần thiết cho phân tích dữ liệu?",
    options: [
      "Cấu trúc dữ liệu",
      "Đầy đủ",
      "Bảo mật",
      "Độ lớn"
    ],
    answer: "Bảo mật"
  },
    {
    question: "Kỹ nghệ phần mềm dựa trên mấy thành phần chính?",
    options: [
      "4",
      "5",
      "3",
      "7"
    ],
    answer: "4"
  },
  {
    question: "Khi phần mềm bị lỗi, một trong những cách để khắc phục là 'dùng miếng vá khẩn cấp (patching)'. Biện pháp này có tác dụng phụ gì?",
    options: [
      "Tăng độ phức tạp của chương trình",
      "Tạo hiệu quả 'ripple effect'",
      "Tăng độ bảo mật cho chương trình",
      "Tất cả các chọn lựa"
    ],
    answer: "Tất cả các chọn lựa"
  },
  {
    question: "Phân tích yêu cầu bao gồm 3 hoạt động theo đúng thứ tự?",
    options: [
      "Làm tài liệu yêu cầu, làm rõ yêu cầu, xem xét yêu cầu",
      "Làm rõ yêu cầu, xem xét yêu cầu, làm tài liệu yêu cầu",
      "Xem xét yêu cầu, làm tài liệu yêu cầu, làm rõ yêu cầu",
      "Làm rõ yêu cầu, làm tài liệu yêu cầu, xem xét yêu cầu"
    ],
    answer: "Làm rõ yêu cầu, xem xét yêu cầu, làm tài liệu yêu cầu"
  },
  {
    question: "Hoạt động sau đây thuộc loại bảo trì nào 'Làm cho hệ thống tốt ơn, nhanh hơn, nhỏ hơn, tài liệu đầy đủ hơn':",
    options: [
      "Bảo trì sửa lỗi (Corrective maintenance)",
      "Bảo trì thích nghi (Adaptive maintenance)",
      "Bảo trì hoàn chỉnh (Perfective maintenance)",
      "Bảo trì phòng tránh (Preventive maintenance)"
    ],
    answer: "Bảo trì hoàn chỉnh (Perfective maintenance)"
  },
  {
    question: "Hoạt động sau đây thuộc loại bảo trì nào 'Phát hiện sớm và sửa sai các khuyết điểm vừa mới phát hiện trước khi chúng trở thành các khuyết điểm chính':",
    options: [
      "Bảo trì sửa lỗi (Corrective maintenance)",
      "Bảo trì thích nghi (Adaptive maintenance)",
      "Bảo trì hoàn chỉnh (Perfective maintenance)",
      "Bảo trì phòng tránh (Preventive maintenance)"
    ],
    answer: "Bảo trì sửa lỗi (Corrective maintenance)"
  },
  {
    question: "Làm rõ yêu cầu (Eliciting requirements) là:",
    options: [
      "Giao tiếp với khách hàng và người sử dụng để xác định các yêu cầu của họ",
      "Các yêu cầu được ghi nhận lại theo nhiều hình thức",
      "Các yêu cầu được tổng hợp lại theo nhiều hình thức",
      "Xem các yêu cầu có ở tình trạng không rõ ràng?"
    ],
    answer: "Giao tiếp với khách hàng và người sử dụng để xác định các yêu cầu của họ"
  },
  {
    question: "Dạng kiểm thử nào sau đây không thuộc kiểm thử hộp đen:",
    options: [
      "Kiểm thử điều kiện (Condition testing)",
      "Phân tích giá trị biên (boundary value analysis)",
      "Kiểm thử chuyển đổi trạng thái (State Transition Testing)",
      "Đoán lỗi (Error Guessing)"
    ],
    answer: "Kiểm thử điều kiện (Condition testing)"
  },
  {
    question: "Dạng kiểm thử nào sau đây không thuộc kiểm thử hộp trắng:",
    options: [
      "Kiểm thử điều kiện (Condition testing)",
      "Kiểm thử dòng dữ liệu (Data flow testing)",
      "Kiểm thử vòng lặp (Loop testing)",
      "Phân hoạch lớp tương đương (equivalent class partition)"
    ],
    answer: "Phân hoạch lớp tương đương (equivalent class partition)"
  },
  {
    question: "Kỹ thuật gì nên dùng cho kiểm thử đơn vị:",
    options: [
      "Kỹ thuật hộp trắng",
      "Kỹ thuật hộp đen",
      "Cả hai kỹ thuật hộp đen và trắng",
      "Kỹ thuật hồi quy (regression)"
    ],
    answer: "Kỹ thuật hộp trắng"
  },
  {
    question: "SRS là viết tắt của:",
    options: [
      "Software Requirement Specification",
      "System Requirement Specification",
      "Studying Requirement Specification",
      "Solve Requirement Specification"
    ],
    answer: "Software Requirement Specification"
  },
  {
    question: "Nguyên tắc kiểm thử nào sau đây là sai:",
    options: [
      "Phải lên kế hoạch kiểm thử sớm ngay trong giai đoạn phân tích hệ thống",
      "Có thể thực hiện kiểm thử được toàn bộ mọi trường hợp có thể có của hệ thống",
      "Để hiệu quả, kiểm thử nên được thực hiện bởi một đội kiểm thử",
      "Tuân theo nguyên tắc Pareto"
    ],
    answer: "Có thể thực hiện kiểm thử được toàn bộ mọi trường hợp có thể có của hệ thống"
  },
  {
    question: "Phát biểu nào sau đây là không đúng khi nói đến quá trình thu thập yêu cầu:",
    options: [
      "Yêu cầu rất khó phát hiện",
      "Yêu cầu rất dễ bị thay đổi",
      "Yêu cầu phải luôn thống nhất",
      "Yêu cầu luôn được biết một cách chính xác"
    ],
    answer: "Yêu cầu luôn được biết một cách chính xác"
  },
  {
    question: "Chọn lựa nào sau đây mô tả một yêu cầu phi chức năng?",
    options: [
      "Hệ thống phải có khả năng lưu trữ ban đầu là 500MB dữ liệu, mỗi năm tăng lên 100MB",
      "Hệ thống phải phát sinh ra một báo cáo về tất cả các chiến dịch quảng cáo cho một khách hàng",
      "Hệ thống phải cho phép những người sử dụng nhập vào chi tiết các khách hàng",
      "Tất cả các câu đều đúng"
    ],
    answer: "Hệ thống phải có khả năng lưu trữ ban đầu là 500MB dữ liệu, mỗi năm tăng lên 100MB"
  },
  {
    question: "Chọn lựa nào sau đây mô tả một yêu cầu chức năng?",
    options: [
      "Hệ thống phải có khả năng trả lời tất cả các truy vấn trong 5 giây",
      "Các người sử dụng của hệ thống sẽ gây ra ít lỗi hơn 50% so với hệ thống hiện tại",
      "Hệ thống phải cho phép những người sử dụng nhập vào các chi tiết của các chiến dịch quảng cáo",
      "Hàng tháng; báo cáo phải nộp lên giám đốc trước ngày 5 của tháng sau đó"
    ],
    answer: "Hệ thống phải cho phép những người sử dụng nhập vào các chi tiết của các chiến dịch quảng cáo"
  },
  {
    question: "Ai là người viết tài liệu SRS?",
    options: [
      "Người quản lý dự án",
      "Phân tích viên",
      "Lập trình viên",
      "Khách hàng"
    ],
    answer: "Phân tích viên"
  },
  {
    question: "Yêu cầu nào sau đây không phải là yêu cầu chức năng:",
    options: [
      "Bảo mật",
      "Các chi tiết về dữ liệu mà được tổ chức trong hệ thống",
      "Những mô tả về quy trình mà hệ thống được yêu cầu xử lý",
      "Các báo cáo kết xuất"
    ],
    answer: "Bảo mật"
  },
  {
    question: "Kết quả cuối cùng của giai đoạn xác định và phân tích yêu cầu là:",
    options: [
      "Tài liệu SRS",
      "Sơ đồ DFD",
      "Sơ đồ Use case",
      "Sơ đồ ERD"
    ],
    answer: "Tài liệu SRS"
  },
  {
    question: "Mục nào sau đây không bao gồm trong tài liệu SRS?",
    options: [
      "Yêu cầu chức năng",
      "Yêu cầu phi chức năng",
      "Mục tiêu thực hiện",
      "Hướng dẫn sử dụng"
    ],
    answer: "Hướng dẫn sử dụng"
  },
  {
    question: "Phát biểu nào là hợp lý nhất khi nói về mô hình phát triển phần mềm tuần tự tuyến tính:",
    options: [
      "Một mô hình cũ phổ biến mà bây giờ hiếm khi dùng nữa",
      "Hướng tốt nhất để dùng cho những dự án với những nhóm phát triển lớn",
      "Một hướng hợp lý khi những yêu cầu được xác định rõ",
      "Một hướng tốt khi cần tạo nhanh một chương trình thực thi"
    ],
    answer: "Một hướng hợp lý khi những yêu cầu được xác định rõ"
  },
  {
    question: "Loại hình đặc tả nào được dùng phổ biến trong tài liệu SRS?",
    options: [
      "Đặc tả cấu trúc dữ liệu",
      "Đặc tả chức năng",
      "Đặc tả bằng sơ đồ",
      "Đặc tả đối tượng"
    ],
    answer: "Đặc tả bằng sơ đồ"
  },
  {
    question: "Mức độ các chức năng (hay phần tử) trong module kết nối với nhau chỉ tới:",
    options: [
      "Tính móc nối (coupling)",
      "Tính kết dính (cohesion)",
      "Chỉ đến chi phí tích hợp",
      "Chỉ đến chi phí phát triển"
    ],
    answer: "Tính kết dính (cohesion)"
  },
  {
    question: "DQ lớn (Volume) trong phân tích yêu cầu là:",
    options: [
      "Là số lượng máy tính chạy phần mềm",
      "Là số lượng dữ liệu phát sinh trong một chu kỳ nào đó",
      "Là số lượng các nghiệp vụ hệ thống phải tiến hành trong một chu kỳ nào đó",
      "Là số lượng người làm việc với phần mềm"
    ],
    answer: "Là số lượng các nghiệp vụ hệ thống phải tiến hành trong một chu kỳ nào đó"
  },
  {
    question: "Phát biểu nào sau đây là sai khi nói về thiết kế?",
    options: [
      "Thiết kế không là code, code không là thiết kế",
      "Thiết kế phải được đánh giá chất lượng khi nó đang được tạo không phải khi nó có vấn đề",
      "Mô hình thiết kế cung cấp chi tiết về kiến trúc (architecture), giao diện (interfaces) và thành phần (component) cần thiết để cài đặt phần mềm",
      "Thiết kế phải chỉ ra được hệ thống thực thi như thế nào, các yêu cầu được hiện thực hóa ra sao"
    ],
    answer: "Thiết kế phải chỉ ra được hệ thống thực thi như thế nào, các yêu cầu được hiện thực hóa ra sao"
  },
  {
    question: "Câu 297*\nViệc dấu thông tin trong lập trình hướng đối tượng (OOP) được thực hiện trong khái niệm của?",
    options: [
      "A. Tính đa hình",
      "B. Tính đóng gói",
      "C. Tính thừa kế",
      "D. Tính ảo hóa",
      "E. A và C",
      "F. B và D"
    ],
    answer: "B. Tính đóng gói"
  },
  {
    question: "Câu 298*\nPhát triển một ứng dụng mua hàng. Để tạo ra được block chứa hình ảnh món hàng và thay đổi sang hình ảnh khác sau mỗi 3s ta có thể sử dụng?",
    options: [
      "A. HTML",
      "B. CSS",
      "C. Javascript",
      "D. Java",
      "E. Python"
    ],
    answer: "C. Javascript"
  },
  {
    question: "Câu 299*\nƯu điểm của mô hình kho dữ liệu?",
    options: [
      "A. Khi một hệ con thay đổi, chỉ hệ kế cận ảnh hưởng",
      "B. Sử dụng hiệu quả mạng, phân tán dữ liệu dễ dàng",
      "C. Hiệu quả khi chia sẻ một số lượng lớn dữ liệu",
      "D. Hỗ trợ sự phát triển tăng trưởng của các phân hệ"
    ],
    answer: "C. Hiệu quả khi chia sẻ một số lượng lớn dữ liệu"
  },
  {
    question: "Câu 300\nCác phát biểu sau đúng hay sai:\na. Số lượng mô-đun là một cách thể hiện độ phức tạp của hệ thống\nb. Thiết kế kiến trúc thường được xem như trả lời câu hỏi “làm gì?” trong phát triển phần mềm\nc. Sử dụng ngôn ngữ kĩ thuật để mô tả các usecase\nd. Bảo trì là một trong những pha của phát triển phần mềm",
    options: [
      "A. a. Đúng b. Sai c. Đúng d. Đúng",
      "B. a. Sai b. Sai c. Đúng d. Đúng",
      "C. a. Đúng b. Sai c. Đúng d. Sai",
      "D. a. Sai b. Sai c. Sai d. Đúng",
      "E. a. Đúng b. Sai c. Sai d. Đúng",
      "F. a. Đúng b. Đúng c. Sai d. Đúng"
    ],
    answer: "E. a. Đúng b. Sai c. Sai d. Đúng"
  },
  {
    question: "Sơ đồ nào sau đây không cần thiết trong phân tích yêu cầu?",
    options: [
      "Use Case",
      "Entity Relationship Diagram",
      "State Transition Diagram",
      "Activity Diagram"
    ],
    answer: "Activity Diagram"
  },
  {
    question: "Mô tả nào sau đây có mức trừu tượng cao nhất:",
    options: [
      "Kiến trúc hệ thống",
      "Chi tiết các thành phần",
      "Các bảng dữ liệu và ràng buộc",
      "Mô tả một chức năng phần mềm"
    ],
    answer: "Kiến trúc hệ thống"
  },
  {
    question: "Có bao nhiêu đặc trưng khi xem xét phân tích yêu cầu khả thi?",
    options: [
      "3",
      "4",
      "2",
      "99"
    ],
    answer: "3"
  },
  {
    question: "Có bao nhiêu giai đoạn trong phân tích yêu cầu?",
    options: [
      "4",
      "5",
      "6"
    ],
    answer: "5" // Theo tài liệu, phân tích yêu cầu thường gồm 5 giai đoạn chính[2].
  },
  {
    question: "Có bao nhiêu nguyên lý đặc tả yêu cầu?",
    options: [
      "5",
      "121",
      "7",
      "8"
    ],
    answer: "8"
  },
  {
    question: "Độ đo mức độ bảo trì:",
    options: [
      "Số vấn đề giải quyết trong tháng / tổng số vấn đề phát sinh trong tháng",
      "Số lần bảo trì / tổng số lần trong khoảng thời gian",
      "Số lần bảo trì sai sót / tổng số lần bảo trì",
      "Thời gian trung bình của một lần bảo trì"
    ],
    answer: "Số vấn đề giải quyết trong tháng / tổng số vấn đề phát sinh trong tháng"
  },
  {
    question: "Nguyên lý Pareto được áp dụng trong kiểm thử được phát biểu như sau:",
    options: [
      "80% lỗi trong chương trình thường do 20% bug gây ra",
      "20% lỗi trong chương trình thường do 80% bug gây ra",
      "Chi phí sửa lỗi ở giai đoạn thu nhận yêu cầu chỉ bằng 1/5 chi phí sửa lỗi ở giai đoạn cuối",
      "60% lỗi được tìm thấy trong giai đoạn kiểm thử đơn vị"
    ],
    answer: "80% lỗi trong chương trình thường do 20% bug gây ra" // [7][10]
  },
  {
    question: "Mật độ lỗi (defect density) dùng để đo lường:",
    options: [
      "Chất lượng sản phẩm cuối",
      "Dự án phần mềm",
      "Quá trình sản xuất",
      "Chất lượng bảo trì"
    ],
    answer: "Chất lượng sản phẩm cuối"
  },
  {
    question: "Kỹ thuật thu thập yêu cầu nào cần đến chuyên gia?",
    options: [
      "Interview",
      "Observation",
      "Expert",
      "Delphi"
    ],
    answer: "Delphi"
  },
  {
    question: "Phát biểu nào là sai khi nói về bản chất của phần mềm:",
    options: [
      "Có thể là sản phẩm theo đơn đặt hàng",
      "Là một sản phẩm công nghiệp",
      "Là sản phẩm có thể thực thi",
      "Không thực sự là sản phẩm"
    ],
    answer: "Không thực sự là sản phẩm"
  },
  {
    question: "Dạng kiểu thử nào dùng kỹ thuật hộp trắng?",
    options: [
      "Kiểm thử hồi quy (Regression Test)",
      "Kiểm thử nghiệm thu (Acceptance Test)",
      "Kiểm thử hệ thống (System Test)",
      "Tất cả đều đúng"
    ],
    answer: "Kiểm thử hồi quy (Regression Test)"
  },
  {
    question: "Kỹ thuật thu thập yêu cầu nào cần đến sự nhất trí của số đông?",
    options: [
      "Prototype",
      "Facilitated Workshops",
      "Observation",
      "Questionnaires & Surveys"
    ],
    answer: "Facilitated Workshops"
  },
  {
    question: "Xét đường độc lập cơ bản, nếu có 7 node phân nhánh thì ta có số đường thực thi cơ bản độc lập là:",
    options: [
      "6",
      "7",
      "8",
      "9"
    ],
    answer: "8"
  },
  {
    question: "Mục nào không dùng cho đặc tả yêu cầu:",
    options: [
      "Đặc tả cú pháp",
      "Đặc tả đối tượng",
      "Đặc tả chức năng",
      "Đặc tả kỹ thuật"
    ],
    answer: "Đặc tả kỹ thuật"
  },
  {
    question: "Use-cases là một kịch bản mà mô tả:",
    options: [
      "Phần mềm thực hiện như thế nào khi được dùng trong một tình huống cho trước",
      "Những công cụ CASE sẽ được dùng như thế nào để xây dựng hệ thống",
      "Kế hoạch xây dựng cho sản phẩm phần mềm",
      "Những test-case cho sản phẩm phần mềm"
    ],
    answer: "Phần mềm thực hiện như thế nào khi được dùng trong một tình huống cho trước"
  },
  {
    question: "Loại hình đặc tả nào không có?",
    options: [
      "Đặc tả hình thức",
      "Đặc tả phi hình thức",
      "Đặc tả toán học",
      "Đặc tả hỗn hợp"
    ],
    answer: "Đặc tả toán học"
  },
  {
    question: "Khi xác nhận yêu cầu, cần phải làm sáng tỏ các từ nào sau đây:",
    options: [
      '\"một số\", \"đôi khi\", \"thường\", \"thông thường\", \"bình thường\", \"phần lớn\", \"đa số\"',
      "Danh từ là số nhiều hay số ít",
      "Tính từ chỉ trạng thái",
      "Động từ ở hình thức chủ động hay bị động"
    ],
    answer: '\"một số\", \"đôi khi\", \"thường\", \"thông thường\", \"bình thường\", \"phần lớn\", \"đa số\"'
  },
  {
    question: "Mô hình tiến trình phần mềm tiến hóa:",
    options: [
      "Bản chất lặp",
      "Dễ dàng điều tiết những biến đổi yêu cầu sản phẩm",
      "Nói chung không tạo ra những sản phẩm bỏ đi",
      "Tất cả các mục"
    ],
    answer: "Tất cả các mục"
  },
  {
    question: "Những bản câu hỏi có ý nghĩa nhất đối với những người thiết kế giao diện khi được hoàn tất bởi:",
    options: [
      "Khách hàng",
      "Những lập trình viên có kinh nghiệm",
      "Người dùng sản phẩm",
      "Người quản lý dự án"
    ],
    answer: "Người dùng sản phẩm"
  },
  {
    question: "Kiểm thử điều kiện là một kỹ thuật kiểm thử cấu trúc điều khiển mà những tiêu chuẩn dùng để thiết kế test-case:",
    options: [
      "Dựa vào kiểm thử đường cơ bản",
      "Thử thách điều kiện logic trong module phần mềm",
      "Chọn những đường dẫn kiểm tra dựa vào những vị trí và dùng những biến",
      "Tập trung vào việc kiểm thử việc giá trị những cấu trúc lặp"
    ],
    answer: "Thử thách điều kiện logic trong module phần mềm"
  },
  {
    question: "Khi phần mềm bị lỗi, một trong những cách để khắc phục là \"dùng miếng vá khẩn cấp (patching)\". Biện pháp này có tác dụng phụ gì?",
    options: [
      "Tăng độ phức tạp của chương trình",
      "Tạo hiệu quả \"ripple effect\"",
      "Tăng độ bảo mật cho chương trình",
      "Tất cả các chọn lựa"
    ],
    answer: "Tất cả các chọn lựa"
  },
  {
    question: "Xác nhận yêu cầu (Requirements Validation) được tiến hành bởi:",
    options: [
      "Phân tích viên và lập trình viên",
      "Phân tích viên và khách hàng",
      "Phân tích viên và các bên có liên quan",
      "Phân tích viên và người dùng"
    ],
    answer: "Phân tích viên và các bên có liên quan"
  },
    {
    question: "Kết quả của giai đoạn thu thập yêu cầu là:",
    options: [
      "Bảng ước tính chi phí dự án",
      "Tài liệu đặc tả yêu cầu phần mềm",
      "Lược đồ ngữ cảnh",
      "Lược đồ Use case"
    ],
    answer: "Tài liệu đặc tả yêu cầu phần mềm"
  },
   {
    question: "Theo chiến thuật kiểm nghiệm phổ biến, kiểm nghiệm tính năng tương quan với:",
    options: [
      "Phân tích toàn bộ hệ thống",
      "Thiết kế",
      "Phân tích yêu cầu",
      "Mã hóa"
    ],
    answer: "Phân tích yêu cầu"
  },

        // Add more questions here
      ];
      
const quizContainer = document.getElementById("quiz-container");
const resultDiv = document.getElementById("result");
const submitBtn = document.getElementById("submit-btn");
const resetBtn = document.getElementById("reset-btn");
const retryBtn = document.getElementById("retry-wrong-btn");

let userAnswers = [];
let wrongQuestions = [];

// Shuffle quiz
function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
}
const quizDataShuffled = shuffleArray(quizData);

// Hiển thị câu hỏi
function renderQuiz(quizList, isRetry = false) {
    quizContainer.innerHTML = "";

    quizList.forEach((item, index) => {
        const questionIndex = isRetry ? item.originalIndex : index;
        const questionDiv = document.createElement("div");
        questionDiv.classList.add("question");
        questionDiv.innerHTML = `${questionIndex + 1}. ${item.question}`;

        const optionsDiv = document.createElement("div");
        optionsDiv.classList.add("options");
        optionsDiv.dataset.index = questionIndex;

        item.options.forEach(option => {
            const optionDiv = document.createElement("div");
            optionDiv.classList.add("option");
            optionDiv.innerHTML = option;
            optionDiv.dataset.value = option;
            optionsDiv.appendChild(optionDiv);
        });

        quizContainer.appendChild(questionDiv);
        quizContainer.appendChild(optionsDiv);
    });

    // Gắn sự kiện chọn đáp án
    document.querySelectorAll(".options").forEach(group => {
        group.addEventListener("click", e => {
            const optionDiv = e.target.closest(".option");
            if (!optionDiv || optionDiv.classList.contains("disabled")) return;

            const index = parseInt(group.dataset.index);

            // ✅ Cho phép chọn lại nếu đang làm lại các câu sai (isRetry === true)
            if (userAnswers[index] !== undefined && !isRetry) return;

            const selectedValue = optionDiv.dataset.value;
            userAnswers[index] = selectedValue;
            const correctAnswer = quizDataShuffled[index].answer;

            group.querySelectorAll(".option").forEach(opt => {
                opt.classList.add("disabled");
                opt.classList.remove("selected", "correct", "wrong");
            });

            optionDiv.classList.add("selected");

            if (selectedValue === correctAnswer) {
                optionDiv.classList.add("correct");
            } else {
                optionDiv.classList.add("wrong");
                group.querySelectorAll(".option").forEach(opt => {
                    if (opt.dataset.value === correctAnswer) {
                        opt.classList.add("correct");
                    }
                });
            }
        });
    });
}

// Hiển thị kết quả
function showResult() {
    let correctCount = 0;
    let wrongCount = 0;
    wrongQuestions = [];

    let resultHTML = `
        <table class="result-table">
            <thead>
                <tr>
                    <th>Số thứ tự</th>
                    <th>Câu hỏi</th>
                    <th>Đáp án đúng</th>
                    <th>Đáp án của bạn</th>
                    <th>Kết quả</th>
                </tr>
            </thead>
            <tbody>
    `;

    quizDataShuffled.forEach((item, index) => {
        const userAns = userAnswers[index];
        const isCorrect = userAns === item.answer;

        if (isCorrect) {
            correctCount++;
        } else {
            wrongCount++;
            wrongQuestions.push({ ...item, originalIndex: index });
        }

        resultHTML += `
            <tr class="${isCorrect ? 'correct-row' : 'wrong-row'}">
                <td>${index + 1}</td>
                <td>${item.question}</td>
                <td class="correct-answer">${item.answer}</td>
                <td class="${isCorrect ? 'correct-answer' : 'wrong-answer'}">${userAns || 'Chưa trả lời'}</td>
                <td>${isCorrect ? '✅ Đúng' : '❌ Sai'}</td>
            </tr>
        `;
    });

    resultHTML += `
        </tbody>
    </table>
    <div class="summary">
        <p><b>Tổng số câu:</b> ${quizDataShuffled.length}</p>
        <p><b>Số câu đúng:</b> <span class="correct-count">${correctCount}</span></p>
        <p><b>Số câu sai:</b> <span class="wrong-count">${wrongCount}</span></p>
    </div>
    `;

    resultDiv.innerHTML = resultHTML;
    resultDiv.style.display = "block";
    retryBtn.style.display = wrongCount > 0 ? "inline-block" : "none";
}

// Nộp bài
submitBtn.addEventListener("click", () => {
    showResult();
});

// Làm lại từ đầu
resetBtn.addEventListener("click", () => {
    location.reload();
});

// Làm lại các câu sai
retryBtn.addEventListener("click", () => {
    if (wrongQuestions.length === 0) {
        alert("Không còn câu sai để làm lại!");
        return;
    }

    // Đánh dấu các câu sai trước là chưa trả lời lại
    wrongQuestions.forEach(item => {
        userAnswers[item.originalIndex] = undefined;
    });

    renderQuiz(wrongQuestions, true);

    // Thêm nút nộp lại các câu sai
    const submitRetryBtn = document.createElement("button");
    submitRetryBtn.innerText = "Nộp lại các câu sai";
    submitRetryBtn.classList.add("submit-btn");
    submitRetryBtn.style.marginTop = "20px";
    resultDiv.innerHTML = "";
    resultDiv.appendChild(submitRetryBtn);
    resultDiv.style.display = "block";

    submitRetryBtn.addEventListener("click", () => {
        showResult();

        // Nếu vẫn còn câu sai, tiếp tục hiển thị "làm lại"
        if (wrongQuestions.length > 0) {
            retryBtn.style.display = "inline-block";
        } else {
            retryBtn.style.display = "none";
            alert("🎉 Bạn đã hoàn thành tất cả các câu đúng!");
        }
    });
});

renderQuiz(quizDataShuffled);
// Tăng số lượt truy cập
function updateVisitCounter() {
    const count = localStorage.getItem("visitCount") || 0;
    const newCount = parseInt(count) + 1;
    localStorage.setItem("visitCount", newCount);
    document.getElementById("visit-count").textContent = newCount;
}

updateVisitCounter();




// function handleOptionClick(optionDiv, correctAnswer, selectedAnswer, questionIndex, optionsDiv) {
//     if (userAnswers[questionIndex] !== null) return;

//     userAnswers[questionIndex] = selectedAnswer;

// //     // Đánh dấu đáp án đã chọn
// //     Array.from(optionsDiv.children).forEach(div => div.classList.remove("selected"));
// //     optionDiv.classList.add("selected");

// //     if (selectedAnswer === correctAnswer) {
// //         optionDiv.classList.add("correct");

// //         // 🎆 Bắn pháo hoa khi trả lời đúng
// //         confetti({
// //             particleCount: 3,
// //             spread: 90,
// //             origin: { y: 0.6 }
// //         });

// //     } else {
// //         optionDiv.classList.add("wrong");
// //         Array.from(optionsDiv.children).forEach(div => {
// //             if (div.innerHTML === correctAnswer) {
// //                 div.classList.add("show-correct");
// //             }
// //         });
// //     }
//  }
