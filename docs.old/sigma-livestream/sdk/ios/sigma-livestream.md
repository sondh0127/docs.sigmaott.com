---
id: doc-sigma-livestream
title: LiveStreamming
---
## Tài liệu tích hợp LiveStreamming iOS

### 1. Add framework to project
Kéo thả SigmaLive.framework vào project. Sau đó add framework như hình:

![Framework](./imgs/embed_sigmalive.png)

### 2. Tích hợp module Live Stream

<div class="section-list">
<div class="section">

####  Khai báo Privacy Description trong file Info.plist

![Permission](./imgs/privacy.png)

</div>
<div class="section">

####  Khai báo live streamming:
```
_sigmaLive = [[SigmaLive alloc] init];
```

</div>
<div class="section">


#### Set Preview cho camera
```
[_sigmaLive setPreView:self.containerView];
[_sigmaLive initSession];
```

</div>
<div class="section">


####  Switch camera
```
[self.session switchCamera]
```

</div>
<div class="section">

####  Change Camera
```
[self.sigmaLive changeCamera:AVCaptureDevicePositionFront];// Front Camera
[self.sigmaLive changeCamera:AVCaptureDevicePositionBack];// Back Camera
```

</div>
<div class="section">

####  Beauty Face
```
 [_self.sigmaLive setBeauty:TRUE];
 [_self.sigmaLive isBeatuty];
```

</div>
<div class="section">

####  Start Live
```
[_self.sigmaLive start:@"RTMP_URL" chanelName:@"CHANEL_NAME"];
```

####  Stop Live
```
[_self.sigmaLive stop];
```

</div>
<div class="section">

#### Start Camera
```
[_self.sigmaLive startCamera]
```

</div>
</div>

### 3. Config
```
self.sigmaLive.videoSize = CGSizeMake(320, 640);
self.sigmaLive.videoBitRate = 800*1024;
self.sigmaLive.videoMaxBitRate = 1000*1024;
self.sigmaLive.videoMinBitRate = 500*1024;
self.sigmaLive.videoFrameRate = 24;
self.sigmaLive.sessionPreset = SigmaVideoPreset720x1280;
```

:::caution

Note: chỉ hoạt động đối với iOS 9.0 trở lên và chạy trên main thread

:::