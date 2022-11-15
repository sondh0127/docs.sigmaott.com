#### 3.4.5 Chỉnh sửa lập lịch sự kiện
Cho phép chỉnh sửa sự kiện lập lịch tại Tab Sự kiện.
Điều kiện: Sự kiện đã được tạo trước đó.
 **Bước 1:**
Mở sang Tab Lập lịch sự kiện, hiển thị danh sách sự kiện lập lịch
 **Bước 2:** Hiển thị dòng "chỉnh sửa" khi di chuyển chuột vào icon sửa ![](/images\icon_edit.png) tại cột hành động ![](/images\Action_edit_Schedule.png)
 **Bước 3:** Người dùng click icon "chỉnh sửa" ![](/images\icon_edit.png)
 Hệ thống hiển thị Pop-up Cập nhật chỉnh sửa sự kiện góc phải màn hình với các thông tin được nhập trước đó ![](/images\Popup_edit_event_Schedule.png)

* **Disable các trường không cho phép sửa:**
    
    * Kiểu sự kiện
    * Nội dung đa phương tiện ( ngoại trừ trường hợp VOD và SCTE35/Live trạng thái chuẩn bị cho phép sửa
    * Kiểu xuất bản
    * Loại lập lịch
    * Khoảng thời gian
* **Các nội dung cho phép chỉnh sửa:**
   
   * Tên
   * Mô tả
   * Loại trừ
   * Thẻ
   * Khoảng thời gian (Ngày kết thúc)
   * Chi tiết lập lịch
   <div>
   </style>
   </head>
   <body>

<h2>Bảng mô tả các quy định chỉnh sửa sự kiện Một khoảng </h2>

<table>
  <tr>
    <th>Loại sự kiện</th>
    <th>Trạng thái</th>
    <th>Được phép chỉnh sửa</th>
    <th> Được phép xoá </th>
  </tr>
  <tr>
    <td rowspan="4">SCTE35/LIVE</td>
    <td>Hoàn thành</td>
    <td > Không</td> 
    <td >Không</td>
  </tr>
  <tr>
    <td>Sẵn sàng</td>
    <td>Có</td>
    <td> Cho phép sửa phạm vi thời gian, người dùng có thể kéo dài thời lượng của sự kiện</td>
  </tr>
  <tr>
    <td>Lỗi</td>
    <td>N/A</td>
    <td>Không thay đổi </td>
  </tr>
  <tr>
    <td>Chuẩn bị</td>
    <td>Có</td>
    <td> Cho phép xoá, sửa tất cả</td>
    <tr>
    <td>VOD</td>
    <td>Sẵn sàng</td>
    <td>Có</td>
    <td>Cho phép xoá, sửa tất cả </td>
  </tr>
</table>


#### Trường hợp ngoại lệ(Với Kiểu sự kiện: SCTE35/ Live)

* Vào thời điểm người dùng bấm edit, hệ thống kiểm tra, ngày bắt đầu đã chạy qua (Start date < current date) → disable trường ngày bắt đầu

* Vào thời điểm người dùng bấm Lưu chỉnh sửa,  hệ thống check các sự kiện lập lịch đã chạy hết lập lịch( 24h00 của  stopDate < current date) và chuyển trạng thái Hoàn thành -> disable tất cả các trường/ button Lưu
 **Bước 4:** Người dùng CMS thực hiện chỉnh sửa các thông tin phù hợp
→ Bấm Lưu ![](/images\Button_Cancel_Save.png) 
 Hệ thống thực hiện lưu các thông tin mới vừa được cập nhật, hiển thị thông báo cập nhật thành công ở góc phải màn hình và tự động đóng trong 5s ![](/images\Notice_success_edit_schedule.png)
 * Tiêu đề: Cập nhật lập lịch sự kiện thành công!
 * Icon "X": Click vào đóng ngay thông báo
 * Icon Check: Nhận biết thông báo

