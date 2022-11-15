**Bước 1:** Chọn Kiểu xuất bản: Một khoảng
**Bước 2:** Người dùng nhập các thông tin > Click nút "Lưu" ![](/images/Button_Cancel_Save.png)  ở cuối Pop-up
 Thực hiện tạo mới sự kiện, hiển thị thông báo bên góc phải màn hình
![](/images\Notice_success_create_event.png)

* Tiêu đề: “ Tạo sự kiện thành công”

Đồng thời hiển thị thông tin lên dòng thời gian với Tên sự kiện + khoảng thời gian tương ứng
(Nhận biết trạng thái xem tại góc phải dòng thời gian)
![](/images/Status_Event.png)  

* **Chuẩn bị**: Thời gian thực hiện tại bé hơn thời gian bắt đầu chạy của sự kiện.
* **Sẵn sàng:** Sự kiện đang trong thời gian chạy.
* **Hoàn thành:** Thời gian thực hiện tại lớn hơn thời gian kết thúc chạy của sự kiện.
* **Lỗi:** Trong quá trình hệ thống kiểm tra sự kiện gặp vấn đề( mất tín hiệu, gián đoạn,...).

 <div>
</style>
</head>
<body>

<h2>Bảng mô tả các thông tin loại sự kiện </h2>

<table>
  <tr>
    <th>Loại sự kiện</th>
    <th> Nội dung đa phương tiện</th>
    <th>Asset </th>
    <th>Hình thức</th>
    <th> Chế độ </th>
    <th>Mô tả</th>
    <th> Các quy định </th>
  </tr>
  <tr>
    <td>SCTE35</td>
    <td>Không</td> 
    <td>Video, image </td>
    <td>N/A</td>
    <td>N/A </td>
    <td>Sử dụng để báo hiệu tất cả các loại sự kiện chương trình và quảng cáo trong các luồng vận chuyển tuyến tính và ở các định dạng phân phối ABR mới hơn như HLS và Dash</td>
    <td rowspan="2">Chỉ được phép tạo với StopTime lớn hơn thời điểm hiện tại 1 phút Stop Time > current time + 1 minute </td>
  </tr>
  <tr>
    <td>LIVE</td>
    <td>Có</td>
    <td>Video, image </td>
    <td>N/A</td>
    <td>N/A</td>
    <td>Luồng thay thế nội dung trực tuyến</td>
  </tr>
  <tr>
    <td rowspan="6">VOD</td>
    <td rowspan="6">Có</td>
    <td rowspan="6">Video </td>
    <td colspan="3">Luồng thay thế nội dung video theo yêu cầu, thay thế bản phác thảo,khi luồng kết thúc, có thể replay lại, thực hiện sửa, xoá event</td>
    <td rowspan="6">Được phép tạo event với khoảng thời gian (Start Date+ Start Time), (Stop date + Stop Time) trong quá khứ </td>
  </tr>
  <tr>
    <td>Cắt</td>
    <td>N/A</td>
    <td>Xoá luôn luồng gốc, không chọn nội dung thay thế( người dùng gọi không thấy được nội dung gốc)</td>
  </tr>
  <tr>
    <td rowspan="4">Nội dung thay thế</td>
    <td colspan="2">Video thay thế đoạn cần thay thế Ví dụ trường hợp: Video thay thế( 15 phút) ngắn hơn đoạn cần thay thế(60 phút)</td>
  </tr>
  <tr>
    <td>Thay thế</td>
    <td>Thay thế đoạn người dùng cms cấu hình thời gian của event( thay thế 15 phút đầu) và giữ nguyên nội dung còn lại( 45 phút) của đoạn gốc</td>
  </tr>
  <tr>
    <td>Lặp lại</td>
    <td>video refill phù hợp với thời gian của đoạn cần thay thế, lặp đi lặp lại nếu chưa đủ thời lượng( lặp đi lặp lại video thay thế 15 phút cho đến khi đủ thời lượng cần thay thế của đoạn gốc 60 phút)</td>
  </tr>
  <tr>
    <td>Thay thế và cắt</td>
    <td>Điều chỉnh để phù hợp vs thời gian, phần còn lại bị bỏ đi ( bỏ đoạn gốc, đoạn có sẵn) video chạy 15 phút đầu, 45 phút còn lại của đoạn gốc bị bỏ đi -> không hiển thị</td>
  </tr>
</table>



#### Các thông tin đầu vào

| Tên trường              | Kiểu dữ liệu | **Gợi ý/ mặc định**                              | Định dạng                                          | Bắt buộc | Các quy định                                                 |
| ----------------------- | ------------ | ------------------------------------------------ | -------------------------------------------------- | -------- | ------------------------------------------------------------ |
| Tên                     | String       | Gợi ý: vui lòng nhập tên sự kiện       | String[A-Za-z0-9_-/s]                              | Yes      | Chặn kí tự đặc biệt<br /> Không hỗ trợ ngôn ngữ tiếng Việt<br /> Hỗ trợ dấu cách, gạch dưới, gạch ngang |
| Kiểu dữ liệu            | Enum         | mặc định: SCTE35                             |                                                    | Yes      |                                                              |
| Mô tả                   | String       | Gợi ý: vui lòng nhập mô tả | String[A-Za-z0-9_-/s]                              | Yes      | Chặn kí tự đặc biệt<br /> Không hỗ trợ ngôn ngữ tiếng Việt<br /> Hỗ trợ dấu cách, gạch dưới, gạch ngang |
| Loại trừ                | Enum         | Gợi ý: lựa chọn                             |                                                    | No       |                                                              |
| Nội dung đa phương tiện | String       |                                                  |                                                    | Yes      | Lấy từ thư viện hoặc upload file từ device                   |
| Khoảng thời gian            | DateTime      | mặc định: thời gian hiện tại                  | YYYY/MM/DD HH:mm:ss | Yes     | Thời gian sự kiện phải trong khoảng từ 1 phút đến 24 tiếng<br /> Ngày bắt đầu bé hơn hoặc bằng ngày kết thúc nửa ngày |
