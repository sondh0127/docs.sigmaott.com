---
title: Live Kit
description: "About Vector, the log and metrics collector, forwarder, and router"
sidebar_label: "Live Kit"
---

#### Thêm thư viện vào project

Copy *sigma-live.aar* vào thư mục app/libs, sau đó thêm vào dependencies:

```xml
implementation fileTree(dir: 'libs', include: ["*.aar"])
```

#### Tích hợp module Livestream

Khai báo permissions trong *AndroidManifiest.xml*

```xml
+ Manifest.permission.RECORD_AUDIO
+ Manifest.permission.CAMERA
```

<!-- import Alert from '@site/src/components/Alert'; -->

<!-- <Alert type="info"> -->

---
Kể từ *Android 6.0 (API level 23)* việc xin quyền **RECORD_AUDIO** và **CAMERA** cần thông qua *requestPermissions*, nhằm hiển thị giao diện để người dùng chấp nhận quyền truy cập cho ứng dụng.

```java

ActivityCompat.requestPermissions(MainActivity.this,
    new String[]{Manifest.permission.CAMERA, Manifest.permission.RECORD_AUDIO}, REQUEST_CODE);
```
---
<!-- </Alert> -->


```java
@Override
public void onRequestPermissionsResult(int requestCode,
                                       String permissions[], int[] grantResults) {
    switch (requestCode) {
        case REQUEST_CODE: {
            // If request is cancelled, the result arrays are empty.
            if (grantResults.length > 0
                && grantResults[0] == PackageManager.PERMISSION_GRANTED) {
                // permission was granted, yay! Do the
                // contacts-related task you need to do.
            } else {
                // permission denied, boo! Disable the
                // functionality that depends on this permission.
            }
            return;
        }
    }
}
```

Khởi tạo công cụ LiveStream

```java
mLiveManager = LiveManager.getInstance();
mLiveManager.setup(Activity.this, (ViewGroup) findViewById(R.id.cameraPreviewContainer), newLiveManager.LiveListener() {
    @Override
    public void onLiveStarting() {
        }
    @Override
    public void onLiveStarted() {
        }
    @Override
    public void onLiveError(Exception ex) {
        }
    @Override
    public void onLiveStopped() {
        }
});
```

Thiết lập độ phân giải

```java
List<LiveManager.Resolution> list = mLiveManager.getSupportedResolutions();
mLiveManager.setResolution(list.get(index));
```

Bật tắt âm thanh Livestream

```java
mLiveManager.setAudioEnable(true/false);
```

Chọn camera trước sau

```java
mLiveManager.switchCameraFace();	
mLiveManager.setCameraFace(LiveManager.CameraFace.Back);
mLiveManager.setCameraFace(LiveManager.CameraFace.Front);
```

Bật tắt luồng stream

```java
if (mLiveManager.isRunning())
    mLiveManager.stop();
else 
    mLiveManager.start(url);
```


