---
id: doc-guideline-General-LRM
title: Sigma Live Streaming Platform
sidebar_label: Introduction
---
# Hướng dẫn sử dụng phần mềm quản lý sóng trực tuyến




<Center>Phiên bản: 1.0, Cập nhật 1/10/2022</center>

  

<Center>BẢNG GHI NHẬN THAY ĐỔI TÀI LIỆU</center>



  

 | Phiên bản | Mô tả thay đổi | Người thực hiện |
|---------------------:|:--------------:|:-------------|
| 1.0 | Tạo mới tài liệu | Nguyễn Thị Kim Thanh |








## 1. Tổng quan về Hệ thống Quản lý sóng trực tuyến( LRM- Sigma Linear Right Management)

### 1.1 Khái niệm

Quản lý sóng trực tuyến (LRM- Sigma Linear Right Management) là một Phần mềm được hỗ trợ đầy đủ dưới dạng Dịch vụ (SaaS- Software as a Service) giúp giải quyết sự phức tạp ngày càng tăng của việc phân phối chính xác, quyền và nội dung thẻ hiện thông qua hệ thống của màn hình di động và chương trình phát sóng đa kênh trực tiếp.
 Không chỉ đảm bảo rằng nội dung được truyền tải đến đúng đối tượng vào đúng thời điểm, nó hoạt động để làm rõ các sự kiện và quy trình làm việc của bạn - cung cấp các công cụ rõ ràng, đơn giản có thể điều chỉnh lịch trình, hẹn lịch xuất bản cho các nhu cầu riêng của từng người xem và từng thiết bị.
Hệ thống Sigma Linear Right Management cung cấp 1 giải pháp toàn diện hỗ trợ việc kiểm soát các nội dung trực tiếp hoặc Vod đến từng đối tượng khách hàng
Hệ thống hỗ trợ 2 phương thức kiểm soát nội dung bao gồm:
- Quản lý theo kênh: Hỗ trợ các Transcoder và Packager tích hợp giao thức ESAM
- Quản lý theo người dùng: Khi sử dụng cùng bộ giải pháp Sigma DAI (Dynamic Ads Insert)

### 1.2 Mục đích

* Tài liệu này được xây dựng phục vụ cho công việc hướng dẫn sử dụng chi tiết thao tác các chức năng phần mềm.
* Nội dung trình bày trong tài liệu ngắn gọn, theo trình tự các chức năng và hướng dẫn thực hiện từng bước một. Vì vậy, người dùng dễ dàng sử dụng chương trình thông qua tài liệu này.
### 1.3 Phạm vi sử dụng

* Tài liệu này áp dụng cho phần mềm Quản lý sóng trực tuyến LRM.
* Tài liệu này phục vụ các đối tượng sau:
* Người sử dụng: Là người thao tác trực tiếp trên hệ thống( VTV Editor, VTV partner,....) như danh sách dưới đây và hành động thực hiện:

| **No.** | **Name** | **Action** |
| -------:| ----------- | :-------------------------------------- |
| 1 | VTV Editor | Quản lý tập kênh phân phối cho đối tác <br  />Lập lịch thay thế nội dung luồng live<br  />Cấu hình thay thế nội dung timeshift |
| 2 | VTV Partner | Ingest kênh được phân phối cho mình<br  />Pull các nội dung timeshift của mình |
* Có các chức năng cơ bản của chương trình: login, logout, thay đổi mật khẩu, xử lý các quy trình nghiệp vụ.

### 1.4 Tài liệu liên quan

### 1.5 Thuật ngữ và các từ viết tắt

  | STT | Thuật ngữ | Mô tả | 
  | ------------- | :-----------: | ----: |
  | 1 | LRM | Sigma Linear Right Management- phần mềm quản lý sóng trực tuyến |
  | 2 | CMS |  Content Management System- hệ quản trị nội dung của trang web|
  |3 | SCTE- 224 | Society of Cable Telecommunications Engineers- Hiệp hội kỹ sư viễn thông cáp. Đây là thông tin 1 loại nguồn vào |


## 2- NỘI DUNG

### 2.1 Tổng quan

Hệ thống này được xây dựng nhằm hỗ trợ biên tập viên:

* Biên tập các kênh, quản lý tập kênh

* Biên tập và theo dõi các sự kiện diễn ra, cấu hình thay thế nội dung timeshift,

* Hẹn giờ xuất bản, lập lịch thây thế nội dung luồng Live.

CMS được xây dựng tính năng biên tập kênh diễn ra trên ứng dụng VTVcab ON. Trong phiên bản cập nhật, CMS được cải tiến để dễ sử dụng, trực quan hơn

- Các trình duyệt có thể dùng để biên tập **Web desktop**: Bao gồm các trình duyệt phổ biến như Chrome, Cốc cốc, Fire fox, Opera, Microsoft Edge, Safari . Tuy nhiên, chúng tôi đề xuất dùng trình duyệt **Chrome.** 

### 2.2 Giới thiệu các chức năng

Danh sách các chức năng Hệ thống Quản lý sóng trực tuyến
| STT | Mã Chức năng| Tên chức năng | Mô tả chức năng |
| ------------- | :-----------: |---------| :------- |
| 1 | 3.1 | Giới thiệu về giải pháp LRM | Định nghĩa về giải pháp LRM, lợi ích mang lại cho doanh nghiệp sử dụng |
| 2 | 3.2 | Bắt đầu với phần mềm quản lý sóng trực tuyến |
| 3 | 3.3 | Biên tập kênh LRM |Cho phép CMS user xem giao diện, tìm kiếm kênh theo bộ lọc, thêm mới, chỉnh sửa, xóa kênh. |
| 4 |  3.4  | Biên tập chi tiết kênh | * Loại sự kiện: OneTime- một lần  <br />Cho phép CMS user xem giao diện, tìm kiếm kênh theo ngày( bộ lọc dòng thời gian sự kiện), chỉnh sửa, xóa sự kiện OneTime.<br />Cho phép CMS User thêm mới sự kiện Một lần và Lập lịch<br />* Loại sự kiện: Lập lịch<br />Cho phép CMS user xem danh sách sự kiện lập lịch, tìm kiếm sự kiện đã được lập lịch, chỉnh sửa, xóa sự kiện Lập lịch |

