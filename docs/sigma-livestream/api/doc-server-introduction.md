---
id: doc-server-introduction
title: Tổng quan Rest Api
sidebar_label: Introduction
---

Api kết nối nội bộ, giữa App Server và Livestream Api thực hiện các tác vụ sau:
* Quản trị kênh: (Thêm, xoá, sửa, liệt kê danh sách kênh)
* Thống kê kênh, hệ thống (metadata, statistic)
* Cấu hình người dùng (giới hạn tài nguyên đối với người dùng)

## Api Version

| Version  | status |
| -------- | ------ |
| v1.0-poc | ready  |

## Phương thức kết nối

Livestream Api được kết nối thông qua giao thức HTTP

Các phương thức HTTP được phép: 
* **POST**: Tạo mới tài nguyên
* **PUT** / **PATCH**: cập nhật tài nguyên
* **GET**: Lấy tài nguyên hoặc danh sách tài nguyên
* **DELETE**: Xoá tài nguyên

## Mô tả kết quả trả về từ máy chủ

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

    Example
    ```json
    {
      "ec": 0,
      "data": {}
    }
    ```

## Xác Thực Yêu cầu Api

Phương thức xác thực Api thông qua giao thức HTTP basic authentication

* **example**

```bash
curl http://example.com/api -X POST \
	-u ${LIVE_TOKEN_ID}:${LIVE_TOKEN_SECRET}
	-H "Content-Type: application/json"
	
```
## Tài nguyên

| Resource                        | description                                               |
| ------------------------------- | :-------------------------------------------------------- |
| [Channel](api-server-channel)              | Luồng trực tiếp đang được phát hoặc chuẩn bị được phát    |
| [Webhook](api-server-webhook)              | Url Callback các sự kiện live và offline luồng trực tiếp  |
| [Search](doc-server-introduction)                | Tìm kiếm kênh, video theo các tiêu chí đề ra              |
| [Insighs & Analytics](doc-server-introduction) | Thống kê và phân tích các luồng trực tiếp **coming soon** |

## Hướng dẫn

Các bước đơn giản để có thể publish 1 luồng video trực tiếp

* **B1**: Tạo một luồng trực tiếp để nhận về **streamUrl** và **streamId**
* **B2**: cung cấp **streamUrl** và **streamId** cho công cụ phát trực tiếp (live stream sdk, obs … )
* **B3**: Phát trực tiếp