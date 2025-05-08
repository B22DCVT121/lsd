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
        answer: "B. Nó chỉ ra rằng các hoạt động được thực hiện nhiều lần"
      },
      {
        question: "<<include>> là quan hệ use case được gọi mỗi khi use case chính chạy.",
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
        question: "Mục nào không dùng cho đặc tả yêu cầu:",
        options: [
          "A. Đặc tả thao tác",
          "B. Đặc tả mô hình",
          "C. Đặc tả bằng sơ đồ",
          "D. Đặc tả thuật toán"
        ],
        answer: "D. Đặc tả thuật toán"
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
        question: "Phát triển phần mềm dùng SCRUM có phẩm chất nào sau đây khác với các mô hình truyền thống?",
        options: [
          "A. Mức độ sáng tạo và linh hoạt cao",
          "B. Chi phí dự án được quản lý tốt",
          "C. Dễ chuyển giao kiến thức",
          "D. Đáp ứng của quy trình đối với môi trường",
          "E. Bàn giao đúng thời hạn",
          "F. A, C, D"
        ],
        answer: "F. A, C, D"
      },
      {
        question: "Yếu tố nào trong công nghệ phần mềm \"cung cấp sự hỗ trợ tự động hay bán tự động cho các phương pháp\"?",
        options: [
          "A. Công cụ",
          "B. Thủ tục",
          "C. Kỹ thuật",
          "D. Phương pháp"
        ],
        answer: "A. Công cụ"
      },
      {
        question: "Mô hình tiến trình phần mềm tiến hóa :",
        options: [
          "A. Bản chất lặp",
          "B. Dễ dàng điều tiết những biến đổi yêu cầu sản phẩm",
          "C. Nói chung không tạo ra những sản phẩm bỏ đi",
          "D. Tất cả các mục"
        ],
        answer: "D. Tất cả các mục"
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
        question: "Mục nào sau đây không bao gồm trong tài liệu SRS?",
        options: [
          "A. Yêu cầu chức năng",
          "B. Yêu cầu phi chức năng",
          "C. Mục tiêu thực hiện",
          "D. Hướng dẫn sử dụng"
        ],
        answer: "D. Hướng dẫn sử dụng"
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
        question: "Khi nào thì sử dụng quan hệ <<extend>>?",
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
        question: "Chọn đặc điểm được sử dụng để đánh giá một bản thiết kế tốt?",
        options: [
          "A. Thể hiện tất cả các yêu cầu trong pha phân tích",
          "B. Chứa cả các trường hợp kiểm thử của tất cả các thành phần",
          "C. Cung cấp một mô tả hoàn thiện về phần mềm",
          "D. Thể hiện tất cả các yêu cầu trong pha phân tích và cung cấp một mô tả hoàn thiện về PM"
        ],
        answer: "D. Thể hiện tất cả các yêu cầu trong pha phân tích và cung cấp một mô tả hoàn thiện về PM"
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
        question: "Ai là người viết tài liệu SRS?",
        options: [
          "A. Người quản lý dự án",
          "B. Phân tích viên",
          "C. Lập trình viên",
          "D. Khách hàng"
        ],
        answer: "B. Phân tích viên"
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
          "A. Tính liên kết (coupling)",
          "B. Tính kết dính (cohesion)",
          "C. Chỉ đến chi phí tích hợp",
          "D. Chỉ đến chi phí phát triển"
        ],
        answer: "A. Tính liên kết (coupling)"
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
        question: "Mô hình phát triển ứng dụng nhanh:",
        options: [
          "A. Một cách gọi khác của mô hình phát triển dựa vào thành phần",
          "B. Một cách hữu dụng khi khách hàng không xác định yêu cầu rõ ràng",
          "C. Sự ráp nối tốc độ cao của mô hình tuần tự tuyến tính",
          "D. Tất cả mục trên"
        ],
        answer: "C. Sự ráp nối tốc độ cao của mô hình tuần tự tuyến tính"
      },
      {
        question: "Dòng đời hoạt động (life-line) là:",
        options: [
          "A. Hình chữ nhật đứng nhấn mạnh một đối tượng chỉ hoạt động trong suốt kịch bản",
          "B. Dòng thời gian một trình tự",
          "C. Một thông điệp",
          "D. Đường thẳng đứng dưới một đối tượng trong mô hình trình tự"
        ],
        answer: "D. Đường thẳng đứng dưới một đối tượng trong mô hình trình tự"
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
        question: "Trong phát triển phần mềm, yếu tố nào quan trọng nhất?",
        options: ["Con người", "Quy trình", "Sản phẩm", "Thời gian"],
        answer: "Con người"
      },
      {
        question: "Xác nhận yêu cầu (Requirements Validation) được tiến hành bởi:",
        options: ["Phân tích viên và lập trình viên", "Phân tích viên và khách hàng", "Phân tích viên và các bên có liên quan", "Phân tích viên và người dùng"],
        answer: "Phân tích viên và các bên có liên quan"
      },
      {
        question: "Phương án nào sau đây không là lượng số (multiplicity) hợp lệ?",
        options: ["0..*", "1", "3..*", "i."],
        answer: "i."
      },
      {
        question: "Phân tích văn phạm của bản tường thuật xử lý là bước đầu tiên tốt nhất để tạo ra:",
        options: ["Từ điển dữ liệu", "Biểu đồ dòng dữ liệu", "Biểu đồ quan hệ thực thể", "Biểu đồ dịch chuyển trạng thái"],
        answer: "Biểu đồ dòng dữ liệu"
      },
      {
        question: "Chọn 5 hoạt động chính, tổng quát trong quá trình xây dựng phần mềm?",
        options: ["Giao tiếp, lập kế hoạch, mô hình hóa, xây dựng, triển khai", "Phân tích, thiết kế, lập trình, gỡ lỗi, bảo trì", "Giao tiếp, quản lý rủi ro, ước lượng, sản xuất, kiểm tra lại", "Không có mục nào"],
        answer: "Giao tiếp, lập kế hoạch, mô hình hóa, xây dựng, triển khai"
      },
      {
        question: "Loại hình đặc tả nào không có?",
        options: ["Đặc tả chính thức (Formal specification)", "Đặc tả phi chính thức (Informal specification)", "Đặc tả bán chính thức (Semi-formal specification)", "Đặc tả ngẫu nhiên (Random specification)"],
        answer: "Đặc tả ngẫu nhiên (Random specification)"
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
        question: "Phát biểu nào sau đây sai về biểu đồ tuần tự (Sequence Diagram)?",
        options: ["Biểu đồ tuần tự gồm các lớp và thông điệp", "Biểu đồ tuần tự là biểu đồ kiểu cấu trúc", "Biểu đồ tuần tự gồm các đối tượng và mô tả hành vi của hệ thống", "Biểu đồ tuần tự biểu diễn sự tương tác giữa các đối tượng"],
        answer: "Biểu đồ tuần tự là biểu đồ kiểu cấu trúc"
      },
      {
        question: "Tập hợp yêu cầu, thiết kế nhanh, xây dựng bản mẫu, đánh giá của khách hàng, làm mịn yêu cầu, sản phẩm cuối cùng. Đây là các pha của mô hình công nghệ phần mềm nào?",
        options: ["Mô hình làm bản mẫu", "Mô hình thác nước", "Mô hình xoắn ốc", "Mô hình kỹ thuật thế hệ thứ tự"],
        answer: "Mô hình làm bản mẫu"
      },
      {
        question: "Biểu đồ dịch chuyển trạng thái:",
        options: ["Đưa ra hình ảnh về các đối tượng dữ liệu", "Đưa ra hình ảnh chức năng biến đổi luồng dữ liệu", "Chỉ ra hình ảnh dữ liệu được biến đổi như thế nào bởi hệ thống", "Chỉ ra những tương tác của hệ thống đối với sự kiện bên ngoài"],
        answer: "Chỉ ra những tương tác của hệ thống đối với sự kiện bên ngoài"
      },
      {
        question: "Mô hình phát triển phần mềm dựa trên mẫu thử (prototype) là:",
        options: ["Một phương pháp thích hợp được sử dụng khi các yêu cầu đã được xác định rõ ràng", "Phương pháp tốt nhất được sử dụng trong các dự án có nhiều thành viên", "Một phương pháp hữu ích khi khách hàng không thể xác định yêu cầu một cách rõ ràng", "Một mô hình rất rủi ro, khó đưa ra được một sản phẩm tốt"],
        answer: "Một phương pháp hữu ích khi khách hàng không thể xác định yêu cầu một cách rõ ràng"
      },
      {
        question: "Mô hình tiến trình phần mềm tiến hóa:",
        options: ["Bản chất lặp", "Dễ dàng điều tiết những biến đổi yêu cầu sản phẩm", "Nói chung không tạo ra những sản phẩm bỏ đi", "Tất cả các mục"],
        answer: "Tất cả các mục"
      },
      {
        question: "Mục đích chính của việc kiểm thử phần mềm là gì?",
        options: ["Tìm ra tất cả các lỗi trong phần mềm", "Chứng minh rằng phần mềm không có lỗi", "Đảm bảo phần mềm đáp ứng yêu cầu người dùng", "Cải thiện chất lượng tài liệu phần mềm"],
        answer: "Đảm bảo phần mềm đáp ứng yêu cầu người dùng"
      },
      {
        question: "Phát biểu nào đúng về quan hệ <<uses>> trong sơ đồ Use Case?",
        options: ["Tương tự như quan hệ <<include>>", "Cho biết một use case này sử dụng chức năng của use case khác tại một điểm tùy chọn", "Luôn được thực hiện khi use case cơ sở được thực hiện", "Không có quan hệ này trong Use Case Diagram"],
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
      }

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
