---
id: api-server-webhook
title: Webhook Callback
sidebar_label: Webhook
---


Webhook cho phép App Server nhận thông báo từ Api Server theo các sự kiện sau: 

* Khi có 1 sự kiến trực tiếp bắt đầu được phát sóng hoặc kết thúc

* Danh sách các event có thể được push:
  * **channel_live**: Sự kiện bắt đầu live
  * **channel_stop**: Sự kiện stop, người dùng ngắt dữ liệu truyền lên
  * **channel_ended**:  Sự kiện kết thúc 
  
* Http callback sẽ được gọi với method là **POST**, header:  **Content-Type: application/json**, dữ liệu Post data có dạng: 


  `Sample Payload`: 

```json
{
    "event": "channel_live",
		"eventTime": 1476697473034 // thời gian theo timestamp dạng milisecond sự kiện diễn ra
    ... phần còn lại của data channel, giống với hàm get kênh
}
```

### Tạo Webhook

Api cung cấp phương thức tạo webhook

<div class="section-list">
<div class="section">

##### HTTP Request

```
POST http://{API-SERVER}/v1/webhook
```

</div>
<div class="section">


##### Post Parameters

| Parameter | Default | Description                                                  |
| :-------- | :------ | :----------------------------------------------------------- |
| uri       |         | Đường dẫn của webhook                                        |
| event     |         | Danh sách sự kiện ứng với webhook này, "**all**: ứng với toàn bộ sự kiện, phân tách các sự kiện với nhau thông qua dấu ",", example: "**channel_live**,**channel_ended**" |

</div>
<div class="section">

##### Response

```json
{
  "id": "123456" ,
  "uri": "http://webhook.com",
  "event": [
    "channel_live"
  ]
}
```

</div>
</div>

### Lấy danh sách webhook

Api cung cấp phương thức lấy danh sách webhook đã thêm vào

<div class="section-list">
<div class="section">

##### HTTP Request

```
GET http://{API-SERVER}/v1/webhook
```

</div>
<div class="section">

##### Query Parameters

| Parameter | Default | Description                                                  |
| :-------- | :------ | :----------------------------------------------------------- |
| page      | 0       | tên trang. **min**: 0                                        |
| length    | 10      | số lượng webhook trả về trong 1 page, **min** 1, **max** 100 |
| event     |    | danh sách sự kiện muốn lọc webhook, các sự kiện được phân tách nhau bởi dấu "," |

</div>
<div class="section">

##### Response

```json
{
  "data": [
    {
      "id": "5201198",
      "uri": "http://example.com",
      "event": [
      	"channel_live",
      	"channel_ended"
      ]
    }
  ],
  "total": 1, // số lượng toàn bộ kết quả
  "length": 1, // Độ dài mảng trả về
  "page": 0
}
```

</div>
</div>

### Update Webhook

<div class="section-list">
<div class="section">

##### HTTP Request

```
PUT http://{API-SERVER}/v1/webhook/{webhookId}
```

</div>
<div class="section">

##### URL Parameters

| Parameter    | Description                 |
| :----------- | :-------------------------- |
| webhookId    | Định danh của webhook  |

</div>
<div class="section">

##### Put Data

* **Tương tự dữ liệu như tạo webhook**

</div>
<div class="section">

##### Response

Dữ liệu webhook đã được update

```json
{
  "id": "123456" ,
  "uri": "http://webhook.com",
  "event": [
    "channel_live"
  ]
}
```
</div>
</div>

### Xoá Webhook
Api cung cấp phương thức xoá webhook đã được tạo

<div class="section-list">
<div class="section">

##### HTTP Request

```
GET http://{API-SERVER}/v1/webhook/{webhookId}
```

</div>
<div class="section">


##### URL Parameters

| Parameter    | Description                 |
| :----------- | :-------------------------- |
| webhookId   | Định danh của webhook  |

</div>
<div class="section">

##### Query Parameters

| Parameter | Default | Description                                                  |
| :-------- | :------ | :----------------------------------------------------------- |
| event     |         | danh sách sự kiện cần xoá với webhook này, các sự kiện phân tách nhau bởi dấu "," |

</div>
<div class="section">

##### Response

```json
{   
}
```

</div>
</div>