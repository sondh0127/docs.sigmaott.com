---
title: 'Giám sát'
order: 2
---

# {{ $frontmatter.title }}

## Giám sát kênh

Với mỗi một kênh trên hệ thống sẽ có 1 hay nhiều các **job** thực thi việc chuyển mã hay đóng gói kênh. Trạng thái của kênh sẽ là tổng hợp trạng thái của các **job** ứng với kênh tương ứng

* Số lượng Job của kênh sẽ tương ứng với số lượng đầu ra tương ứng của kênh, bên cạnh đó nếu đầu ra có bật tính năng catchup, timeshift, thì hệ thống sẽ tạo thêm 1 **job catchup** tương ứng với đầu ra này (việc phân tách job này giúp hệ thống hoạt động ổn định khi có 1 trong các job có thể gặp sự cố) 
* Khi cấu hình tạo kênh mới, hệ thống sẽ tự động tạo sẵn các job cần thiết đối với kênh
``` warning
Việc thay đổi cấu hình kênh có thể làm thay đổi số lượng job của kênh và có thể dẫn tới việc mất các job cần thiết
```

### Trạng thái của kênh

Hệ thống kênh có các trạng thái như sau

*   **live**: kênh đang được bật
*   **stop**: Kênh đang được tắt
*   **error**: Kênh đang lỗi
    *   Kênh có thể gặp trạng thái lỗi khi có 1 jobs thực thi tác vụ trong kênh đang gặp lỗi

### Trạng thái của job

Với mỗi Job trong kênh sẽ là 1 dịch vụ chạy riêng trên các máy chủ được quy định khác nhau, nhận đầu vào và đầu ra theo yêu cầu của job. Trong đó Job sẽ có các loại tương ứng như sau: 

1. **Transcode**: đây là job thực hiện việc chuyển mã nôi dung kênh dành cho kênh chuyển mã (transcode). Với mỗi kênh chuyển mã sẽ chỉ có job này.
2. **Package**: Job đóng gói, số lượng tương ứng với số lượng đầu ra cài đặt
3. **Catchup**: Job đóng gói cho nội dung catchup, timeshift, số lượng tương ứng với số lượng đầu ra cài đặt


Với mỗi Job ta sẽ có các trạng thái của job như sau: 

| Trạng thái    | Miêu tả                                                      |
| ------------- | ------------------------------------------------------------ |
| **starting**  | Job đang trong quá trình khởi chạy ban đầu                   |
| **preparing** | Job đang trong quá trình chuẩn bị tài nguyên như lấy thông tin của đầu vào, lấy thông tin đầu ra ... |
| **started**   | Job đã khởi chạy thành công                                  |
| **error**     | Job bị lỗi. Vui lòng xem mã lỗi của job bên dưới để phát hiện nguyên nhân |
| **stop**      | Job đã bị dừng                                               |


Việc thao tác với job hệ thống cung cấp đẩy đủ các **action** như **start**, **stop**, **reset**, được thực hiện qua danh sách **action** của job

* Bạn có thể thao tác với Job từ bên ngoài của danh sách kênh mục **Jobs** hoặc trong trang giám sát kênh

### Giám sát kênh

Từ danh sách của kênh thao tác **click** vào tên của kênh giao diện chi tiết kênh sẽ hiện ra

![Thông tin chi tiết kênh](../images/um-channel-detail.png)

Các component giám sát bao gồm: 

* **Thumbnail**: Hình ảnh thumbnail của kênh được trích xuất định kì trong quá trình xử lý
* **job Speed**: Biểu đồ dây theo thời gian biểu thị tốc độ của các **job**
    * Tốc độ của **job** được tính theo mốc 100%
        * Với các giá trị nhỏ hơn 90% job đang gặp vấn đề trong quá trình xử lý như nguồn đầu vào, đầu ra gặp vấn đề
* **INPUTS**: Danh sách đầu vào của kênh
* **TRANSCODE**: Thông tin về Hệ thống xử lý chuyển mã (Transcode)
    * Bao gồm: chi tiết về Job transcode
    * Thông tin Profile Transcode
* **PACKAGES**: Thông tin đầu ra đóng gói của kênh
    * Danh sách các đầu ra cùng với các job đính kém
    * Với mỗi danh sách đầu ra sẽ có tối đa 2 job bao gồm **package job** và **catchup job**


### Giám sát job

![Bảng giám sát Job](../images/um-job-detail/um-job-detail.png){ width=400px }

Bảng giám sát job Bao gồm

* ![status](../images/um-job-detail/1.png){ height=17px }  **status**: Trạng thái của job
* ![status](../images/um-job-detail/2.png){ height=17px }  **Speed**: Tốc độ hiện tại của job
* ![status](../images/um-job-detail/3.png){ height=17px }  **Lifetime**: Thời gian job chạy được từ lần cuối retry vì lỗi hoặc restart 
* ![status](../images/um-job-detail/4.png){ height=17px }  **created**: thời gian job được tạo (utc time)
* ![status](../images/um-job-detail/5.png){ height=17px }  **outputs**: Đầu ra của job
* ![status](../images/um-job-detail/6.png){ height=17px }  **action**: Các nút thao tác với job 
* ![status](../images/um-job-detail/7.png){ height=17px }  **Errors**: log lỗi của job (lấy 3 lỗi gần nhất)

* Note: 
  * Bảng giám sát **Job** có thể theo dõi ở danh sách kênh hoặc trong trang chi tiết kênh

Cấu trúc log lỗi của job

```
[05-26 02:32:55] Input timeout (code: INPUT_TIMEOUT)
```

Trong đó: 

* **[05-26 02:32:55]**: Giá trị thời gian, tính theo giờ UTC
* **Input timeout** : Message thông báo lỗi
* **(code: INPUT_TIMEOUT)** : Mã lỗi

Một vài mã lỗi phổ biến và chú thích đi kèm

| Code                                   | description                                                  |
| -------------------------------------- | ------------------------------------------------------------ |
| TIMEOUT                                | Job bị timeout (Nguồn đầu vào mất sóng video)                |
| **PACKET_QUEUE_IS_FULL**               | Gói tin trong hàng đợi không kịp xử lý (thiếu tài nguyên)    |
| MEMORY_IS_FULL                         | Hết bộ nhớ Ram                                               |
| **INPUT_TIMEOUT**                      | Đầu vào Timeout (mất sóng đầu vào)                           |
| **OUTPUT_TIMEOUT**                     | Đầu ra Timeout (phụ thuộc vào từng luồng đầu ra)             |
| **TRANSCODE_TIMEOUT**                  | Máy chủ Xử lý gặp vấn đề                                     |
| GOP_INVALID                            | Lỗi GOP cache của đầu vào                                    |
| ASYNC_STREAM                           | Không đồng bộ được các luồng đầu vào (ABR streaming)         |
| **ASYNC_PROFILE**                      | Không đồng bộ được luồng đầu ra (ABR streaming)              |
| INPUT_OUTPUT_ERROR                     | Luồng đầu vào và luồng đầu ra gặp sự cố                      |
| IO_ERROR                               | Lỗi trong quá trình đọc ghi                                  |
| **CONNECTION_REFUSED**                 | Kết nối bị đầu ra bị refused (Lỗi thường xảy ra khi không thể kết nối đến manifest service) |
| CONNECTION_TIMEOUT                     | Kết nối đầu ra timeout                                       |
| CANNOT_OPEN_CONNECTION                 | Không tạo được kết nối                                       |
| URL_READ_ERROR                         | Lỗi đọc dữ liệu URL                                          |
| OPTION_NOTFOUND `*`                  | Cấu hình truyền lên không đúng                               |
| PROTOCOL_NOTFOUND `*`               | Không tìm thấy Protocol                                      |
| STREAM_NOT_FOUND `*`                | Không tìm thấy luồng đầu vào                                 |
| UNABLE_TO_OPEN_RESOURCE                | Không thể khởi tạo tài nguyên                                |
| NO_ROUTE_TO_HOST `*`                 | Không mở được kết nối                                        |
| INVALID_ARGUMENT *****                 | Sai tham số                                                  |
| INITIALIZING_OUTPUT_STREAM `*`  | Lỗi Khởi tạo luồng đầu ra                                    |
| CONNECTION_RESET_BY_PEER               | Kết nối bị reset                                             |
| BROKEN_PIPE                            | Broken pipe                                                  |
| NO_AUDIO_DATA `*`                   | Luồng khởi tạo không có AUDIO data                           |
| NO_VIDEO_DATA `*`                   | Luồng khởi tạo không có VIDEO data                           |

* Các Lỗi in đậm có nhiều khả năng xảy ra khi **job** đã chạy thành công hơn so với các lỗi khác
* Với các lỗi liên quan đến đầu ra: kiểm tra các 
* Các lỗi `*` chỉ xảy ra khi tạo mới **job**
* Khi gặp lỗi hệ thống sẽ tự thử lại các **job** đã bị lỗi đến khi lỗi được xử lý
    * Đối với các lỗi xảy ra khi khởi tạo job sẽ cần khởi động lại job để xử lý

