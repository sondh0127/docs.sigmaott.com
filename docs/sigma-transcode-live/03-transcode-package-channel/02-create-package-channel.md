---
title: 'Tạo kênh đóng gói'
order: 2
---

# {{ $frontmatter.title }}


Kênh đóng gói (package) thực hiện việc chuẩn bị và bảo vệ video của bạn để phân phối qua Internet thông qua các định dạng truyền tải dữ liệu nội dung đa phương tiện qua giao thức http (HTTP Adaptive Stream) như HLS, DASH

Để tạo một kênh đóng gói thủ công, ta thực hiện các bước tạo kênh cơ bản. vui lòng chọn theo hướng dẫn 

- **Manual** => **Package** => **Next**

Màn hình giao diện dành cho việc cấu hình kênh đóng gói hiện ra như sau: 

![Tạo kênh đóng gói thủ công](../images/um-create-channel/um-create-package-channel-1.png)



Trong đó menu bar bên phải sẽ có các mục như sau: 

1. **Config**: Cấu hình cơ bản của kênh
2. **Inputs**: Cấu hình luồng đầu vào
3. **Profiles**: Danh sách các Profile sử dụng
4. **Targets**: Cấu hình danh sách các đầu ra mong muốn (HLS/DASH ... )


Notes: 

* Đối với kênh đóng gói hệ thống sẽ tự động cấu hình **Profile** tương ứng với **Input** được thêm vào. Vì vậy bạn chỉ việc thêm các giá trị **Input** các giá trị **Profile** sẽ được tự động thêm vào và bạn không có quyền thay đổi các giá trị này


## B1. Cấu hình Chung 

Trong cấu hình kênh đóng gói cơ bản được chia thành các mục sau: 
- **Information**:
    - **Name**: Tên của kênh dùng để phân biệt và tìm kiếm kênh ở danh sách kênh
    - **Description**: Mô tả kênh
    - **Tags**: Danh sách các tags 
- **Name modifier**: Tên thay thế của kênh phải là duy nhất trên toàn bộ hệ thống, phục vụ việc truy vấn tệp tin manifest 1 cách ngắn gọn

::: tip
Ví dụ: nếu đặt tên thay thế là **VTV1**: link truy cập manifest sẽ có dạng là: *http://origin/com/manifest/VTV1/manifest_name*
:::

- **Options**: Cấu hình nâng cao của kênh

## B2. Cấu hình đầu vào của kênh

Chọn nút Cộng để thêm đầu vào cho kênh. Danh sách đầu vào đã liệt kê sẵn sẽ hiện ra. Vui lòng chọn đầu vào cho kênh mong muốn

* Hệ thống hỗ trợ việc thêm nhiều đầu vào với 1 kênh 

* Với mỗi đầu vào mong muốn *popup* chọn tên thay thế cho **profile** đóng gói ứng với đầu vào sẽ hiện ra. vui lòng chọn tên thay thế duy nhất với các **profile** khác của kênh
  

::: info
Tên thay thế này giúp hệ thống định nghĩa tên profile mong muốn đối với tập profile ABR. Ví dụ với luồng đầu vào là **1080p** bạn nên đặt tên thay thế cho profile là **1080p**, tên thay thế này sẽ có trong đường dẫn của tệp tin manifest ứng với profile cần đóng gói
:::
    

* Nhấn **Confirm** để xác nhận tên thay thế

* Lần lượt thêm các đầu vào và tên thay thế **profile** mong muốn


## B3. Cấu hình Đầu ra đóng gói  của kênh

Chọn phím **Cộng** ở mục **Target** để thêm 1 đầu ra mong muốn. Popup hiển thị các đầu ra mong muốn sẽ hiện ra. Hệ thống hỗ trợ các đầu ra như sau: 

* **HLS**: Apple Http Live Streaming
* **DASH**: DASH
* **UDP**: multicast hoặc unicast mpeg transport stream
* **RTMP**: Realtime Message Protocol

Sau khi đã khởi tạo 1 đầu ra mong muốn. Cấu hình của đầu ra sẽ hiện ra như sau. Trong đó: 

* **Data**: Cấu hình cơ bản của đầu ra
    * **Name**: Tên của đầu ra
    * **Replaced name**: Tên thêm vào cuối tập tin manifest nguồn, phải là duy nhất đối với các đầu ra khác nhau cùng loại HLS hoặc DASH, phục vụ việc tạo đường dẫn duy nhất cho các tập tin manifest của HLS hoặc DASH, nên được bắt đầu bằng dấu "_" hoặc "-". Có thể để là rỗng "" nếu bạn muốn giữ nguyên tên tập tin manifest nguồn
        * Ví dụ: Nếu bạn để rỗng, tập tin manifest nguồn của HLS sẽ có tên là **master.m3u8** với Dash là **master.mpd**
        * Ví dụ: Nếu bạn để là "**-tv360**, tập tin manifest nguồn của HLS sẽ có tên là **master-tv360.m3u8** với Dash là **master.mpd**
    * **Format**: Tên của loại đầu ra
    * **Description**: Mô tả đầu ra
* **Manifest**: Cấu hình tập tin **manifest** và **segment**
    * **Container**: Định dạng tập tin **segment**. Có giá trị là **mpeg-ts** hoặc **fmp4**. Mặc định là **mpeg-ts**
    * **TS**: Độ dài của 1 tập tin **segment**. Mặc định là 6 giây
    * **Counter**: Số lượng tập tin Segment được lưu trong file **manifest**
    * **Time**: bật tắt hiển thị tag: **Programing-date-time**  sử dụng với đầu ra là HLS
* **DRM**: Cấu hình mã hoá DRM
    * **Enable**: Cấu hình bật tắt DRM
    * **Key provider**: Phương thức cung cấp key mã hoá, tĩnh hoặc lấy từ server chứa key mã hoá
        * **static**: key mã hoá tĩnh
        * **sigma-drm**: Hệ thống mã hoá Sigma Drm
        * **Sigma-drm-v1**: Hệ thống mã hoá Sigma DRM V1
        * **Sigma-multi-drm**: Hệ thống mã hoá Multi-DRM hỗ trợ Widevine, PlayReady, FairPlay được triển khai bởi Sigma drm
        * **drmtoday**: Hệ thống mã hoá Multi-DRM hỗ trợ Widevine, PlayReady, FairPlay được triển khai bởi castlab
    * **Asset Id**: Id sử dụng cho hệ thống drm mã hoá kênh, sử dụng cho sigma drm hoặc sigma multi drm
    * **App ID**: AppId của hệ thông sigma drm,sigma multi drm
    * **Merchant ID**: MerchantId của hệ thông sigma drm,sigma multi drm
    * **User**: User đăng nhập hệ thống sigma drm,sigma multi drm
    * **Password**: Password hệ thống sigma drm,sigma multi drm
* **Low Latency**: Cấu hình truyền hình độ trễ thấp
* **Catchup**: Cấu hình Lưu trữ Catchup-timeshift
    * **Storage**: Bật tắt chế độ lữu trữ catchup-timeshift
    * **Cache time**: Cấu hình thời gian lưu trữ mong muốn đơn vị được tính bằng giờ
    * **Trickplay**: Bật tắt Trickplay mode với catchup
* **Preset**: Cấu hình các profile được đóng gói vào đầu ra này


Hướng dẫn cấu hình **preset** với đầu ra: 

1. chọn ![select profile](../images/um-create-channel/um-select-profile.png){ width=17px } để lựa chọn các profile sẽ được đóng gói trong đầu ra này. Bảng danh sách profile sẽ được hiện ra
2. tích vào ô vuông để chọn các **profile** bạn muốn thêm vào đầu ra => nhấn **submit** để hoàn thành thao tác
3. Bảng danh sách các profile được chọn sẽ hiện ra, bạn có thể thao tác các tác vụ mong muốn đối với danh sách này như thêm, xoá, sửa



Hướng dẫn cấu hình DRM của đầu ra ứng với mỗi 1 **Key provider**


1. **Static**

| Tên trường  | Miêu tả                                                      |
| ----------- | ------------------------------------------------------------ |
| **Key**     | Key mã hoá tĩnh đã được encode dưới dạng base64              |
| **Key ID**  | KeyId mã hoá tĩnh đã được encode dưới dạng base 64           |
| **Key URI** | Đường dẫn keyUri được đặt vào tập tin manifest .m3u8 để lấy client có thể lấy key mã hoá |


2. **Sigma multi drm**

| Tên trường      | Miêu tả                                                      |
| --------------- | ------------------------------------------------------------ |
| **AssetId**     | **Id** sử dụng cho hệ thống drm mã hoá kênh, sử dụng cho sigma drm hoặc sigma multi drm |
| **App ID**      | **AppId** của hệ thốnng sigma drm,sigma multi drm            |
| **Merchant ID** | **MerchantId** của hệ thông sigma drm,sigma multi drm        |
| **Email**       | User đăng nhập hệ thống sigma drm,sigma multi drm            |
| **Password**    | Password hệ thống sigma drm, sigma multi drm                 |


::: warning
Với Key provider sử dụng hệ thống Sigma multi drm, vui lòng lấy đẩy đủ các thông tin từ trang cms của hệ thống Sigma Drm bao gồm (AppId, MerchantID, Email, password)
:::



