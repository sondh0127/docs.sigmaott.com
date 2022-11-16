---
id: api-server-channel
title: Live Channel
sidebar_label: Channel
---

<!-- import Alert from '@site/src/components/Alert'; -->

The API provides the App Server support tool that manages live stream to use the push-up from third-party apps such as *OBS*, *VMix* or SDK live stream, requesting the return of the 2 parameters as follows:

* **streamUrl**: path to server rtmp listening
* **streamToken**: the identifier of the direct stream

With each direct stream initiated to the 1 **streamId**. Some note as follows.

* Channel status:
  * **coming**: The upcoming event
  * **init**: initiing stream, not receiving or is handling the event from the device spinning device
  * **live**: channel is live
  * **ended**: the channel finished
  * **error**: stream channel failed
* Channel **health**:
  * **excellent**: stable stream, correct configuration with recommendation parameters (bitrate, codec)
  * **accesstable**: stream with a few configurations that need to be optimal. For example, the bitrate is too high, the codec is not appropriate.
  * **unstable**: stream unstable, affecting users
* Tags:
  * The tags system helps make the category easier

## Create Direct Stream

Create a direct stream. With direct streaming, the system supports 3 transmission methods as follows:

* **normal**: Livestreams normal hls are typically 20-30s.
* **low-latency**: Livestream with low latency delay from 7-8s
* **ultra-low-latency**: Livestream with maximum latency delay from 3-4s.

<div class="section-list">
<div class="section">

##### HTTP Request

` ` `
POST http://{API-SERVER}/livestream/live
 ` ` `

</div>
<div class="section">

##### Post Parameters

| Parameter        | Default   | Description                                                  |
| :--------------- | :-------- | :----------------------------------------------------------- |
| name         |           | Tên đầy đủ của kênh                                          |
| description      |           | Mô tả của kênh                                               |
| accountId      | 1 |  Định danh của người phát                                             |
| tags             | ""        | Tags given for the event in a comma separated string. Example: "bong-da, du-lich" |
| mode | normal | Mode view directly with 3 values ** normal**, ** low-latency**, ** ultra-low-latency** |
| catchup | true | if set false, the server will not save the view when the event ends |
| record | false | Turn off the calculation of the mp4 file from the source when the event is over, |
| dvr | false | Turn off the review feature on live stream. Maximum review time of 2h |
| false | false |
| thmmbWidth | 400 | width of the need to create, ** min**: 50, ** max**: 1920 |
| thmbHheight | 400 | height of the thmbnail to create, ** min**: 50, ** max**: 1080 |
| thmbInterval | 10 | Time to produce thmb in seconds, ** min**: 5, ** max**: 100 |
| expire | 86400 | Time expiration of the transmission signal of the channel in seconds, ** min**: 60, ** max**: 7 * 24 * 60 * 60 (7 days). After this period if not connected to the ingest server and pushing the data up, the channel will be closed |
| transcodeProfile | "1080p, 720p, 480p, 360p" | The number of profile wants transcode, the current server supports 4 profile including: ** 1080p**, ** 720p**, ** 480p**, ** 360p* * |
| stopTimeout | 10 * 60 | timeouts when the active thread interrupts the seconds, ** min**: 0, ** max**: 30 * 60 (30 minutes), when the timeout system is too time the system will close the state transfer channel ** ended** |
| ** streamToken** | "" | streamToken wishes to use for this channel, the purpose of reusing streamToken for the following streams |

</div>
<div class="section">

##### Response

` ` ` json
{
  "id": "{your-live-stream-id}",
  " streamUrl ":" rtmp://rtmp-api.example.com ... ",
  " streamToken ":" VcYEMgRCO-110b7ed21b ",
  " createdAt ":" 2019-04-18T10:00,011Z "
}
 ` ` `

</div>

:::note
* Can define link live play and catchup after
  * Live: * http://domain-cdn/{STREAM_ID}/master.m3u8 *
  * Catchup: * http://domain-cdn/{STREAM_ID}/master_dvr.m3u8 *
* Also have a timeout for uninterrupted push, when the broadcaster has a network glitch and does not send connections. The system will timeout ** 2 minutes * * to close the connection and start timing ** stopTimeout**
* Time ** duration** of 1 ** stream** is calculated using the connection time and push the data
* ** expire**: is the expiration time of ** streamToken**
* ** transcodeProfile**: that the profile will be transferred, based on each thread, the transcodeProfile list is not correct for the input value. For example, when the broadcaster only convex the data with the resolution ** 720p* * the system will only transcode max to ** 720p* *
* When the channel state has moved to the end, the broadcaster will not be able to transmit the data again, obliging to create new threads.
:::  

</div>

## Set up the next live stream schedule

Create a standard stream that will start

* Available: **coming in production**

## Get the direct threads information

Get the information of the streaming user directly.

<div class="section-list">
<div class="section">

##### HTTP Request

` ` `
GET http://{API-SERVER}/livestream/live
 ` ` `

</div>
<div class="section">

##### Query Parameters

| Parameter | Default | Description                                                  |
| :-------- | :------ | :----------------------------------------------------------- |
| page      | 1       | tên trang. ** min**: 0 |
| length | 10 | number of livestream returns in 1 page, ** min* * 1, ** max** 100 |
| order | desc | Arrangement based on the start time of live stream.  the accepted values: ** asc**: from old to new, ** desc**: from new to old. |
| status | | Filter channel by channel |
| accountId | "" | Filter Channel according to accountId |
| query | "" | Find a channel under the name |
| tags | "" | Filter channel tags, each tag is separated by the "**, **". For example, live, game, music |
| from | "" | **** from*** is a time string in ISO 8601 date time format. To use the current time can use the keyword ` now `. |
| to | " | **** to**is a time string in ISO 8601 date time format. To use the current time can use the keyword ` now `. |

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
| livestreamUrl | uri | Đường dẫn xem trực tiếp. Only if the state moves to ** live** |
| videoUrl | uri | Video Path review. Only if the state moves to ** ended** |
| thumbililUrl | uri | The uri Path of the thmmbail if installed |

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

## Get the rtmp ingest server connection information with livestreamId

Get the stream server information of a direct stream

<div class="section-list">
<div class="section">

##### HTTP Request

` ` `
GET http://{API-SERVER}/livestream/live/{livestreamId}/rtmp
 ` ` `

</div>
<div class="section">

##### URL Parameters

| Parameters | Description |
|: --------------------------------- |
| livestreamId | The channel's designation need to stop |

</div>
<div class="section">

##### Response

` ` ` json
{
  "id": "{your-live-stream-id}",
  " streamUrl ":" rtmp://rtmp-api.example.com ... ",
  " streamToken ":" VcYEMGRCO-110b7ed21b "
}
 ` ` `

</div>
</div>

## Get information a direct stream with livestreamId

Get the information of a direct stream.

<div class="section-list">
<div class="section">
##### HTTP Request

` ` `
GET http://{API-SERVER}/livestream/live/{livestreamId}
 ` ` `

</div>
<div class="section">

##### URL Parameters

| Parameters | Description |
|: --------------------------------- |
| livestreamId | The channel's designation need to stop |

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

## Update live stream

Update the information of the live stream

<div class="section-list">
<div class="section">

##### HTTP Request

` ` `
PUT http://{API-SERVER}/livestream/live/{livestreamId}
 ` ` `

</div>
<div class="section">

##### URL Parameters

| Parameters | Description |
|: --------------------------------- |
| livestreamId | The channel's designation need to stop |

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

## Stop, Delete Direct Flow

Api provides the ability to block direct flow if live or delete old flow if ended.

<!-- <Alert type="info"> -->

--- == crwdHRulesLBB_2_BBsuleRHdwrc == * With query ** delete** is set with ** true**. The system will delete this event, including the data that has been saved * With the ongoing event that will be stopped immediately and cannot push the data back to --- == crwdHRulesLBB_1_BBsuleRHdwrc ==
<!-- </Alert> -->

<div class="section-list">
<div class="section">

##### HTTP Request

` ` `
DELETE http://{API-SERVER}/livestream/live/{livestreamId}
 ` ` `

</div>
<div class="section">

##### Query Parameters

| Parameters | Default | Description |
|: --------- |: -------- |: --------------------------------------------- |
| delete | false | Delete

</div>
<div class="section">

##### URL Parameters

| Parameters | Description |
|: --------------------------------- |
| livestreamId | The channel's designation need to stop |

</div>
</div>