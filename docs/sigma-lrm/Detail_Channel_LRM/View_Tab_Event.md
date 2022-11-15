### 3.4 Chức năng biên tập sự kiện
* Stream Event là một tính năng hỗ trợ người dùng của CMS chuyển hóa video/hình ảnh thành các channel livestream truyền tải đến khách hàng của họ. Một kênh bao gồm nhiều sự kiện nhỏ với nội dung khác nhau, cung cấp các tùy chọn nội dung thay thế trong các trường hợp sự cố về tín hiệu, mất nguồn nội dung và hạn chế thiết bị.

* Hỗ trợ các trường dữ liệu nâng cao bổ sung, bao gồm cả quyền xem lại và bắt đầu lại.

* Tính năng lập lịch giúp chuyển đổi lập lịch đầu vào thành các sự kiện SCTE 224 với một API cho phép nhiều định dạng nhập lập lịch.
 Có 2 loại event: Một lần và lập lịch

 Giải thích về 1 số từ ngữ dùng trong tài liệu, tránh trường hợp nhầm lẫn, hiểu nhầm ý

| Tên   | Giải thích | 
| ---- | --------- | 
| Thời gian sự kiện  |    Sử dụng để chỉ về thời gian của event đã được tạo ra, đầy đủ thông tin và hiển thị lên Timeline        |
| Thời gian lập lịch   |      Sử dụng để chỉ event chưa được tạo ra khi tạo mới, tại Filed chọn thời gian( Ngày/ giờ)  |
|Kiểu sự kiện  | Sử dụng để chỉ 3 type của kênh: Live/ SCTE 35/ VOD       |
|Kiểu xuất bản|Sử dụng để chỉ 2 loại: OneTime/ Schedule|
|Current Time| thời gian hiện tại|
|Start Date| Ngày bắt đầu, định dạng năm/ tháng/ ngày, trường hợp đầu vào sử dụng từ tiếng Anh để phù hợp với công thức|
|Start Time| thời gian bắt đầu, định dạng 24 tiếng giờ:phút:giây|
|Stop Date| Ngày kết thúc, định dạng năm/ tháng/ ngày|
|Stop Date| thời gian kết thúc, định dạng 24 tiếng giờ:phút:giây|

#### 3.4.1 Xem giao diện biên tập sự kiện một khoảng
 *Tab Sự kiện*

 Đây là khu vực hiển thị các event(bao gồm sự kiện một lần và lập lịch) trong 1 ngày( bắt đầu từ 00:00:00 đến 23:59:59)

##### 3.4.1.1  Dòng thời gian sự kiện 
Dòng thời gian sự kiện bao gồm các thông tin theo thứ tự từ trên xuống như sau:
* Trạng thái: Mỗi sự kiện sau khi được tạo sẽ có các trạng thái chuẩn bị/ sẵn sàng/ hoàn thành/ lỗi ( trừ trường hợp VOD luôn ở trạng thái sẵn sàng) được quy định dựa theo mốc thời gian sự kiện so với thời gian thực.
* Nút thêm sự kiện.
* Chọn ngày: bộ lọc tìm kiếm theo ngày hỗ trợ người dùng tìm kiếm và có cái nhìn khái quát hơn.
* Icon đồng bộ: luôn làm mới hệ thống trong 10s.
* Thanh trượt chạy từ 00:00 đến 24:00 của 1 ngày và cách đều nhau 6 tiếng giúp khái quát thời gian trên dòng dự kiện, người dùng có thể thực hiện các thao tác trượt đoạn thời gian.
* Nội dung chính:
    * Program: Các chương trình gốc với thời lượng chạy xuyên suốt trong ngày, có các mốc chỉ nhằm đánh dấu thời gian.
    * Loại sự kiện: SCTE35/Live/VOD
    * Dấu gạch đứng biểu thị cho trục thời gian thực.
    * Thanh cuộn ngang
    * Có 2 loại sự kiện là **Sự kiện một khoảng** ( không có icon đống hồ đính kèm phía trên ![](/images\Event_Onetime.png)) và **sự kiện lập lịch**( có icon đống hồ đính kèm phía trên ![](/images\Event_schedule.png)) gồm:
       * Tên sự kiện
       * Phạm vi thời gian
       * Nội dung đa phương tiện( chỉ hiển thị ở trạng thái sẵn sàng)

       *Lưu ý:* Khi di chuyển chuột vào sự kiện, chuột chuyển thành hình bàn tay với thông tin chi tiết
* Di chuyển đến hiện tại: Chỉ sử dụng với ngày hiện tại, click vào icon, dòng thời gian sẽ di chuyển tới mốc thời gian hiện tại( current Time)
* Phóng to mức độ từ 50% đến 200% đối với khoảng cách đều thời gian để xem các sự kiện chi tiết hơn.

##### 3.4.1.2 Danh sách sự kiện
Đây là danh sách sự kiện hiển thị tất cả sự kiện có trong ngày bao gồm sự kiện một khoảng và lập lịch tương ứng với ngày trong Dòng thời gian sự kiện, 
* Thời gian hiển thị bên góc phải tương ứng với thời gian lựa chọn bộ lọc ở dòng thời gian sự kiện
* ID: Do hệ thống sinh ra sau khi tạo mới sự kiện
* Tên sự kiện
* Loại sự kiện
* Kiểu xuất bản
* Phạm vi thời gian
* Loại trừ
* Nội dung đa phương tiện
* Mô tả
* Hành động sửa, xoá (**sửa chỉ hiển thị đối với loại sự kiện một khoảng**)