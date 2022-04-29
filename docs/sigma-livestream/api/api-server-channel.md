---
id: api-server-channel
title: Live Channel
sidebar_label: Channel
---
<!-- import Alert from '@site/src/components/Alert'; -->

Api cung cấp công cụ hỗ trợ App Server quản lý luồng live stream 
Để sử dụng luồng đẩy lên từ ứng dụng từ bên thứ 3 như *OBS*, *VMix* hoặc SDK live stream, yêu cầu trả về cho người phát 2 thông số như sau: 

* **streamUrl**: đường dẫn đến server rtmp lắng nghe
* **streamToken**: định danh của luồng trực tiếp

Với mỗi một luồng trực tiếp được khởi tạo sẽ có tương ứng 1 **streamId** duy nhất. Một số lưu ý như sau

* Trạng thái của kênh:
  * **coming**: Sự kiện sắp diễn ra
  * **init**: khởi tạo luồng, chưa nhận hoặc đang xử lý được sự kiện từ thiết bị quay phát đẩy lên
  * **live**: kênh đang trực tiếp
  * **ended**: kênh đã kết thúc
  * **error**: kênh stream bị lỗi
* Tình trạng kênh **health**: 
  * **excellent**: stream ổn định, cấu hình đúng với thông số khuyến nghị (bitrate, codec)
  * **acceptable**: stream có một vài cấu hình cần phải được tối ưu. ví dụ: bitrate quá cao, codec không thích hợp, 
  * **unstable**: stream không ổn định, ảnh hưởng đến người dùng 
* Tags: 
  * Hệ thống tags giúp phân category dễ dàng hơn

## Tạo mới luồng trực tiếp

Tạo luồng trực tiếp. Với luồng phát trực tiếp, hệ thống hỗ trợ 3 phương thức truyền tải như sau:

* **normal**: Livestream dạng hls bình thường có độ trễ từ 20-30s
* **low-latency**: Livestream với độ trễ thấp có độ trễ từ 7-8s
* **ultra-low-latency**: Livestream với độ trễ tối đa có độ trễ từ 3-4s

<div class="section-list">
<div class="section">

##### HTTP Request

```
POST http://{API-SERVER}/livestream/live
```

</div>
<div class="section">

##### Post Parameters

| Parameter        | Default   | Description                                                  |
| :--------------- | :-------- | :----------------------------------------------------------- |
| name         |           | Tên đầy đủ của kênh                                          |
| description      |           | Mô tả của kênh                                               |
| accountId      | 1 |  Định danh của người phát                                             |
| tags             | ""        | Tags given for the event in a comma separated string. example: "bong-da,du-lich" |
| mode             | normal    | Chế độ xem trực tiếp với 3 giá trị **normal**, **low-latency**, **ultra-low-latency** |
| catchup          | true      | nếu set false, server sẽ không lưu lại luồng xem khi sự kiện kết thúc |
| record           | false | Bật tắt tính năng lưu lại file mp4 từ nguồn phát khi sự kiện kết thúc, |
| dvr           | false  | Bật tắt tính năng xem lại trên luồng trực tiếp. Thời gian xem lại tối đa là 2h |
| thumbnail        | false | bật tắt hỗ trợ tạo ảnh thumbnail từ luồng trực tiếp          |
| thumbWidth       | 400       | chiều rộng của thumbnail cần tạo, **min**: 50, **max**: 1920 |
| thumbHeight      | 400       | chiều cao của thumbnail cần tạo, **min**: 50, **max**: 1080  |
| thumbInterval    | 10        | Thời gian tạo thumb tính theo giây, **min**: 5, **max**: 100 |
| expire           | 86400     | Thời gian hết hạn nhận tín hiệu truyền lên của kênh tính theo giây, **min**: 60, **max**: 7 * 24 * 60 * 60 (7 ngày). Sau khoảng thời gian này nếu không kết nối đến ingest server và đẩy dữ liệu lên thì kênh sẽ bị đóng |
| transcodeProfile | "1080p,720p,480p,360p" | Số lượng profile muốn transcode, Máy chủ hiện tại hỗ trợ 4 profile bao gồm: **1080p**, **720p**, **480p**, **360p** |
| stopTimeout      | 10 * 60 | Thời gian timeout khi luồng chủ động ngắt  tải lên tính theo giây , **min**: 0, **max**: 30 * 60 (30 phút), , khi quá thời gian timeout hệ thống sẽ đóng kênh chuyển trạng thái thành **ended** |
| **streamToken** | "" | streamToken mong muốn sử dụng cho kênh này, mục đích tái sử dụng streamToken cho các luồng sau |

</div>
<div class="section">

##### Response

```json
{
  "id": "{your-live-stream-id}",
  "streamUrl": "rtmp://rtmp-api.example.com ... ",
  "streamToken":"VcYEMgRCO-110b7ed21b",
  "createdAt": "2019-04-18T10:00:00.011Z"
}
```

</div>

:::note
* Có thể định nghĩa link live play và catchup theo format sau
  * Live: *http://domain-cdn/{STREAM_ID}/master.m3u8*
  * Catchup: *http://domain-cdn/{STREAM_ID}/master_dvr.m3u8*
* Ngoài ra còn có 1 khoảng thời gian timeout dành cho luồng push chưa ngắt kết nối, khi broadcaster có trục trặc về mạng và không gửi gói tin đóng kết nối, hệ thống sẽ timeout **2 phút** để đóng kết nối và bắt đầu tính thời gian **stopTimeout**
* Thời gian **duration** của 1 **stream** được tính bằng thời gian kết nối của phần mềm quay phát và đẩy dữ liệu
* **expire**: là khoảng thời gian hết hạn của **streamToken**
* **transcodeProfile**: là những profile sẽ được chuyển mã, dựa vào từng luồng, danh sách transcodeProfile sẽ không đúng với giá trị nhập vào. Ví dụ: khi broadcaster chỉ truyền lên dữ liệu có độ phân giải **720p** hệ thống sẽ chỉ transcode tối đa đến **720p**
* Khi trạng thái kênh đã chuyển sang ended, broadcaster sẽ không thể truyền dữ liệu được nữa, bắt buộc phải tạo luồng mới.
:::

</div>

## Lập lịch luồng trực tiếp sắp diễn ra

Tạo một luồng trực tiếp chuẩn bị bắt đầu

* Available: **coming in production**

## Lấy thông tin các luồng trực tiếp

Lấy thông tin của các luồng trực tiếp người dùng đang phát

<div class="section-list">
<div class="section">

##### HTTP Request

```
GET http://{API-SERVER}/livestream/live
```

</div>
<div class="section">

##### Query Parameters

| Parameter | Default | Description                                                  |
| :-------- | :------ | :----------------------------------------------------------- |
| page      | 1       | tên trang. **min**: 0                                        |
| length    | 10      | số lượng livestream trả về trong 1 page, **min** 1, **max** 100 |
| order     | desc    | Sắp xếp dựa trên thời gian bắt đầu của luồng trực tiếp.  các giá trị chấp nhận : **asc**: từ cũ đến mới, **desc**: từ mới đến cũ. |
| status    |         | Lọc kênh theo trạng thái của kênh                            |
| accountId | ""      | Lọc Kênh theo accountId                                      |
| query     | ""      | Tìm kênh theo tên                                            |
| tags      | ""      | Lọc kênh tags, Mỗi tag sẽ được tách biệt bởi dấu "**,**". Ví dụ: live,game,music |
| from      | ""      | ***from*** is a time string in ISO 8601 date time format. Để sử dụng thời gian hiện tại có thể dùng keyword `now`. |
| to        | ""      | ***to*** is a time string in ISO 8601 date time format. Để sử dụng thời gian hiện tại có thể dùng keyword `now`. |

</div>

<div class="section">

##### Channel Object

| field  | format | Description                                                  |
| :--------------- | :-------- | :----------------------------------------------------------- |
| id | string |Định danh của kênh|
| name         | string | Tên đầy đủ của kênh                                          |
| description      | string | Mô tả của kênh                                               |
| accountId      | string |  Định danh của người phát                                             |
| tags             | Array String | Mảng các giá trị tag |
| mode             | string | Chế độ xem trực tiếp với 3 giá trị **normal**, **low-latency**, **ultra-low-latency** |
| status | string | Trạng thái của kênh |
| health    | string | Tình trạng của kênh |
| duration  | number | Thời gian broadcast dữ liệu tính theo giây |
| createdAt | ISO 8601 | bật tắt hỗ trợ tạo ảnh thumbnail từ luồng trực tiếp          |
| startTime | ISO 8601 | chiều rộng của thumbnail cần tạo, **min**: 50, **max**: 1920 |
| stopTime | ISO 8601 | chiều cao của thumbnail cần tạo, **min**: 50, **max**: 1080 |
| livestreamUrl | uri | Đường dẫn xem trực tiếp. chỉ có khi trạng thái chuyển sang **live** |
| videoUrl | uri | Đường dẫn video xem lại. Chỉ có khi trạng thái chuyển sang **ended** |
| thumbnailUrl | uri | Đường dẫn uri của thumbnail nếu cài đặt |

</div>

<div class="section">

##### Response

```json
{
  "data": [
    {
      "id": "5201198",
      "thumbnailUrl": "https://cdn.example.com/livestream/poster-default.jpeg",
      "livestreamUrl": "https://cdn.example.com/livestream/list.m3u8",
      "videoUrl": "https://cdn.example.com/livestream/list.m3u8", // status: end
      "recordUrl": ["https://cdn.example.com/livestream/record.mp4"],
      "description": "description",
      "name": "stream name",
      "accountId": "18855759",
      "health": "excellent",
      "duration": 100              tính theo giây
      "createdAt": "2019-04-15T06:59:09.711Z",
      "startTime": "2019-04-18T10:00:00.011Z",
      "stopTime": "2019-04-18T10:00:00.011Z",
      "tags": [],							
      "mode": "low-latency",
      "status": "init|live|ended|error"
    }
  ],
  "total": 1, // số lượng toàn bộ kết quả
  "length": 1, // Độ dài mảng trả về
  "page": 0
}
```

</div>
</div>
## Lấy thông tin kết nối rtmp ingest server với livestreamId

Lấy thông tin server stream của 1 luồng trực tiếp

<div class="section-list">
<div class="section">

##### HTTP Request

```
GET http://{API-SERVER}/livestream/live/{livestreamId}/rtmp
```

</div>
<div class="section">

##### URL Parameters

| Parameter    | Description                 |
| :----------- | :-------------------------- |
| livestreamId | Định danh của kênh cần dừng |

</div>
<div class="section">

##### Response

```json
{
  "id": "{your-live-stream-id}",
  "streamUrl": "rtmp://rtmp-api.example.com ... ",
  "streamToken":"VcYEMgRCO-110b7ed21b"
}
```

</div>
</div>

## Lấy thông tin một luồng trực tiếp với livestreamId

Lấy thông tin của 1 luồng trực tiếp

<div class="section-list">
<div class="section">
##### HTTP Request

```
GET http://{API-SERVER}/livestream/live/{livestreamId}
```

</div>
<div class="section">

##### URL Parameters

| Parameter    | Description                 |
| :----------- | :-------------------------- |
| livestreamId | Định danh của kênh cần dừng |

</div>
<div class="section">

##### Response

```json
{
      "id": "5201198",
      "thumbnailUrl": "https://cdn.example.com/livestream/poster-default.jpeg",
      "livestreamUrl": "https://cdn.example.com/livestream/list.m3u8",
      "videoUrl": "https://cdn.example.com/livestream/list.m3u8", // status: end
      "recordUrl": ["https://cdn.example.com/livestream/record.mp4"],
      "description": "description",
      "name": "stream name",
      "accountId": "18855759",
      "createdAt": "2019-04-15T06:59:09.711Z",
      "startTime": "2019-04-18T10:00:00.011Z",
      "stopTime": "2019-04-18T10:00:00.011Z",
      "tags": [],
      "catchup": true,											
      "mode": "low-latency",
      "status": "init|live|ended|error"
    }
```

</div>
</div>


## Cập nhật luồng trực tiếp

Cập nhật thông tin của luồng trực tiếp 

<div class="section-list">
<div class="section">

##### HTTP Request

```
PUT http://{API-SERVER}/livestream/live/{livestreamId}
```

</div>
<div class="section">

##### URL Parameters

| Parameter    | Description                 |
| :----------- | :-------------------------- |
| livestreamId | Định danh của kênh cần dừng |

</div>
<div class="section">

##### Form Parameters

| Parameter   | Description                                                |
| :---------- | :--------------------------------------------------------- |
| name| Tên đầy đủ của luồng trực tiếp                           |
| catchup     | bật tắt chế độ lưu trữ                                     |
| description | Mô tả luồng trực tiếp                                      |
| tags        | Tags given for the livestream in a comma separated string. |

</div>
</div>


## Dừng, Xoá luồng trực tiếp

Api cung cấp khả năng chặn luồng trực tiếp nếu đang live hoặc xoá luồng cũ nếu đã kết thúc

<!-- <Alert type="info"> -->

---

* Với query **delete** được đặt bằng **true**. Hệ thống sẽ xoá sự kiện này, kể cả các dữ liệu đã được lưu lại
* Với sự kiện đang diễn ra sẽ được dừng ngay lập tức và không thể đẩy dữ liệu trở lại
---
<!-- </Alert> -->

<div class="section-list">
<div class="section">

##### HTTP Request

```
DELETE http://{API-SERVER}/livestream/live/{livestreamId}
```

</div>
<div class="section">

##### Query Parameters

| Parameter | Default | Description                  |
| :-------- | :------ | :--------------------------- |
| delete    | false   | Có xoá sự kiện này hay không |

</div>
<div class="section">

##### URL Parameters

| Parameter    | Description                 |
| :----------- | :-------------------------- |
| livestreamId | Định danh của kênh cần dừng |

</div>
</div>