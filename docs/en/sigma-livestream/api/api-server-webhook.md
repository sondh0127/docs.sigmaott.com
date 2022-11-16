---
id: api-server-webhook
title: Webhook Callback
sidebar_label: Webhook
---


Webhook allows the App Server to receive notifications from Api Server under the following events:

* When a direct petition begins to broadcast or end.

* List of events that can be push:
  * **channel_live**: Live start event
  * **channel_stop**: Stop event, user interrupts transmission
  * **channel_ended**: Final event

* Http callback will be called **POST**, header:  **Content-Type: application/json**, Post data data is available:


  `Sample Payload`:

```json
{
    "event": "channel_live",
        "eventTime": 1476697473034 // Time by timestamp the milisecond event takes place
... the rest of the data channel, the same as the
} channel.
```

### Webhook Create

Api provides webhook method

<div class="section-list">
<div class="section">

##### HTTP Request

` ` `
POST http://{API-SERVER}/v1/webhook
 ` ` `

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

` ` ` json
{
  "id": "123456",
  "uri": "http://webhook.com ",
  " event ": [
    " channel_live "
  ]
}
 ` ` `

</div>
</div>

### Get the webhook list

Api provides the added webhook list method added.

<div class="section-list">
<div class="section">

##### HTTP Request

` ` `
GET http://{API-SERVER}/v1/webhook
 ` ` `

</div>
<div class="section">

##### Query Parameters

| Parameter | Default | Description                                                  |
| :-------- | :------ | :----------------------------------------------------------- |
| page      | 0       | tên trang. ** min**: 0 |
| length | 10 | webhook amount returned in 1 page, ** min* * 1, ** max** 100 |
| event | | list of webhook filtering events, events separated by mark "," |

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

` ` `
PUT http://{API-SERVER}/v1/webhook/{webhookId}
 ` ` `

</div>
<div class="section">

##### URL Parameters

| Parameters | Description |
|: --------------------------------- |
| webhookId | The title of webhook |

</div>
<div class="section">

#Put Data

* ** Same data as the webhook * *

</div>
<div class="section">

##### Response

webhook data were updated

` ` json
{
  "id": "123456",
  "uri": "http://webhook.com ",
  " event ": [
    " channel_live "
  ]
}
 ` ` `
</div>
</div>

### Delete Webhook
Api provides webhook method created

<div class="section-list">
<div class="section">

##### HTTP Request

` ` `
GET http://{API-SERVER}/v1/webhook/{webhookId}
 ` ` `

</div>
<div class="section">


##### URL Parameters

| Parameters | Description |
|: --------------------------------- |
| webhookId | The title of webhook |

</div>
<div class="section">

##### Query Parameters

| Parameter | Default | Description                                                  |
| :-------- | :------ | :----------------------------------------------------------- |
| event     |         | danh sách sự kiện cần xoá với webhook này, các sự kiện phân tách nhau bởi dấu "," |

</div>
<div class="section">

##### Response

` ` ` json
{   
}
 ` ` `

</div>
</div>