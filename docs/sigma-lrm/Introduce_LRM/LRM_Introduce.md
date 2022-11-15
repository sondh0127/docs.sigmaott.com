# 3- HƯỚNG DẪN SỬ DỤNG CÁC CHỨC NĂNG HỆ THỐNG

## 3.1 Giới thiệu về giải pháp LRM-Sigma Linear Right Management

### 3.1.1 Giải pháp  LRM- Sigma Linear Right Management là gì?
Với sự phổ biến của các thiết bị hỗ trợ IP, người tiêu dùng có thể truy cập nội dung bất cứ đâu, bất cứ lúc nào và nhu cầu này ngày càng tăng. Chính vì vậy, Người lập trình TV và Dịch vụ TV, các nhà phân phối đang cố gắng phát triển hơn nhằm cung cấp đầy đủ video được cá nhân hóa, phân phối qua nhiều các kênh đến các nhà khai thác, cung cấp tiềm năng kiếm tiền tối đa nhưng vẫn đảm bảo tuân thủ phân phối quyền và các quy định của địa phương (nhà phân phối truyền hình). Để giải quyết thách thức này chúng tôi cho ra đời giải pháp Quản lý sóng trực tuyến (LRM- Sigma Linear Right Management). Hệ thống Sigma Linear Right Management cung cấp 1 giải pháp toàn diện hỗ trợ việc kiểm soát các nội dung trực tiếp hoặc Vod đến từng đối tượng khách hàng trong các trường hợp mất tín hiệu, mất nội dung và hạn chế thiết bị.
 Quản lý sóng trực tuyến  (LRM- Sigma Linear Right Management) là một Phần mềm được hỗ trợ đầy đủ dưới dạng Dịch vụ (SaaS- Software as a Service) giúp giải quyết sự phức tạp ngày càng tăng của việc phân phối chính xác, quyền và nội dung thẻ hiện thông qua hệ thống của màn hình di động và chương trình phát sóng đa kênh trực tiếp. 
 Hệ thống hỗ trợ 2 phương thức kiểm soát nội dung bao gồm:

-   **Quản lý theo kênh:** Hỗ trợ các Transcoder và Packager tích hợp giao thức ESAM.
    
-   **Quản lý theo người dùng:**Khi sử dụng cùng bộ giải pháp Sigma DAI (Dynamic Ads Insert).
### 3.1.2  Cách LRM hoạt động
Dựa trên Thay thế 1 nội dung timeshift theo quy trình làm việc hướng dẫn lập trình điện tử( EPG- Electronic Program Guide) hoặc theo thời gian định sẵn với các nội dung hình ảnh, video.
### 3.1.3 Quy trình
Luồng đầu vào tín hiệu kênh được ingest từ hệ thống của Thudo JSC, cung cấp một nguồn cấp dữ liệu dữ liệu IP tuyến tính cho API LRM thông qua nhiều định dạng được hỗ trợ cho cả người lập trình và người vận hành thông qua dịch vụ LRM nhập dữ liệu và chuẩn hóa nó thành định dạng SCTE 224 được lưu trữ cục bộ. Sau đó, nó được phân phối tới nhiều điểm cuối của đối tác phân phối và dữ liệu được hiển thị tới người xem( đầu ra) dưới:
* Định dạng **UDP/ HLS**,
* **Profiles**: 1080p, 720p, 480p, 360p, 
* **Watermark**: Logo theo từng đối tác.
### 3.1.4 Lợi ích
Giải pháp LRM không phải giải pháp hoàn toàn mới, đã được phát triển ở nước ngoài như PRISMA- MediaKind,  COMCAST TECHNOLOGY SOLUTIONS. Nhưng ở Việt Nam có các quy định của địa phương và cần tuân thủ phân phối quyền khác nhau, Là đơn vị đầu tiên và duy nhất ở Việt Nam phát triển giải pháp LRM, chính vì thế giải pháp của chúng tôi phù hợp hơn hết.
 Việc phát triển 1 giải pháp luôn mang lại cho người sử dụng các lợi ích:

* Cung cấp các tùy chọn nội dung thay thế trong các trường hợp mất tín hiệu, mất nội dung và hạn chế thiết bị.
* Đảm bảo rằng nội dung thay thế được truyền tải đến đúng đối tượng vào đúng thời điểm.
* LRM hoạt động để làm rõ các sự kiện và quy trình làm việc của bạn - cung cấp các công cụ rõ ràng, đơn giản có thể điều chỉnh lịch trình, hẹn lịch xuất bản cho các biên tập viên, nhu cầu riêng của từng người xem và từng thiết bị. 
* Người dùng sử dụng bảng điều khiển LRM để xem tất cả dữ liệu sự kiện, xác định khoảng trống chương trình, tuỳ chọn nội dung nhằm chỉnh sửa/ mở rộng sự kiện trong thời gian thực và xác minh nội dung thay thế thích hợp.
* Tự động điều khiển lịch trình thành quy trình làm việc hướng dẫn lập trình điện tử (EPG) của người vận hành.
* Cung cấp một nguồn cấp dữ liệu duy nhất về quản lý dữ liệu cho cả người lập trình và người vận hành thông qua tổng hợp các sự kiện SCTE 224.



