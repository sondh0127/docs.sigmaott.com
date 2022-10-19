---
id: doc-server-result
title: Kết quả trả về
sidebar_label: Return result
---

Khi gọi Restful Api vào hệ thống livestream platform. Nếu thành công, Http code sẽ luôn trả về là 200, Với yêu cầu thất bại, Http code 4xx hoặc 5xx sẽ được trả về

Dữ liệu gửi lên và trả về được hệ thống hỗ trợ dạng **json** 

Kết quả trả về từ server được mô tả như sau:

* HTTP status code:
  * 200 `OK` - Yêu cầu thành công (Một số API có thể trả về giá trị 201 thay thế).
  * 201 `CREATED` - Yêu cầu thành công và tài nguyên được tạo.
  * 204 `No Content` - Yêu cầu thành công nhưng không có giá trị trả về được biểu diễn (i.e. Giá trị trả về rỗng).
  * 400 `Bad Request` - Yêu cầu không đúng hoặc thiếu dữ liệu truyền lên.
  * 401 `Unauthorized` - Xác thực thất bại.
  * 403 `Forbidden` - Truy cập không được phép.
  * 404 `Not Found` - Tài nguyên không tồn tại.
  * 405 `Method Not Allowed` - Phương thức Yêu cầu không được chấp nhận.
  * 422 `Wrong param` - Sai tham số

* HTTP Response body
  * Content-Type: **application/json**
  * Body: Đối tượng **JSON**
    * **ec**: Mã lỗi trả về
       	* 0: Thành công 
    * **data**: Dữ liệu trả về tương ứng với yêu cầu được mô tả chi tiết ở từng Api
    * **msg**: message lỗi trả về với ec # 0 
    
example
```json
{
  "ec": 0,
  "data": {}
}
```