---
title: Cấu hình cơ bản
order: 1
---

### 3.2.2 Hướng dẫn cấu hình cơ bản
#### 3.2.2.1 Thao tác nhập liệu
Một vài lưu ý, cũng như thông tin mô tả chung khi người dùng thao tác thêm, sửa dữ liệu trong form:
![](/images\Field.png)

Trong một form sẽ bao gồm nhiều trường dữ liệu, mỗi trường dữ liệu sẽ bao gồm 2 thành phần: *Tiêu đề và Ô nhập/chọn dữ liệu*.

Phần *tiêu đề* hiển thị thông tin tên.Một số lưu ý các quy tắc hiển thị của chương trình/hệ thống: 

- Màn hình với các nội dung bắt buộc có dấu * đỏ phía trước, thì trường dữ liệu không được bỏ trống, bắt buộc người dùng phải nhập dữ liệu trước khi lưu form.
- Ngày giờ có định dạng YYYY/MM/DD HH:mm:ss.

Phần *Ô nhập/chọn dữ liệu* cho phép người dùng nhập/chọn dữ liệu mong muốn. 

Hiển thị **giới hạn ký tự** cho phép ở một số trường, ví dụ giới hạn 0/50, không hiển thị ký tự thứ 51.

 ![](/images\Limit_field.png)

Dữ liệu người dùng đôi khi cần được xác thực để đảm bảo hợp lệ, khi dữ liệu người dùng nhập không hợp lệ sẽ có **thông báo lỗi màu đỏ** hiển thị ngay phía dưới.

![](/images\error_field1.png)

Nội dung thông báo lỗi tùy thuộc từng trường hợp cụ thể. Sau đây ví dụ thêm một vài loại thông báo khác:

![](/images\special_charater.png)
![](/images\error_field2.png)
![](/images\error_field3.png)
![](/images\error_field4.png)


#### 3.2.2.3 Submit dữ liệu
Khi người dùng thực hiện xác nhận dữ liệu lưu trữ trong form bằng cách ấn nút **Submit** hoặc **Save**. Hệ thống thực thi tác vụ và sau đó sẽ trả về thông báo cho người dùng:

Nếu tác vụ thực hiện thành công, sẽ có thông báo màu xanh hiển thị phía trên của màn hình trình duyệt.
![](/images\Notice_success_delete_channel.png)

Nếu tác vụ thực thi không thành công, sẽ có thông báo màu đỏ, kèm nội dung lỗi hiển thị phía trên của màn hình trình duyệt. Tuỳ vào trường hợp lỗi, hiển thị với nội dung khác nhau.
![](/images\Data_invalid.png)

![](/images\Data_invalid1.png)


