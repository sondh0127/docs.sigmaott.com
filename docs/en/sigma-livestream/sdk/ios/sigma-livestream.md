---
id: Doc-sigma-livestream
title: LiveStreamming
---

## LiveStreamming iOS

### One. Add framework to project
Drag SigmaLive.framing into project. Then add the framework as the image:

![Framework](./imgs/embed_sigmalive.png)

### Two. Live Stream module integration

<div class="section-list">
<div class="section">

#### Declare Privacy Description in Info.plist

![Permission](./imgs/privacy.png)

</div>
<div class="section">

#### Live streamming:
` ` `
_sigmaLive = [[SigmaLive alloc] init];
 ` ` `

</div>
<div class="section">


#### Set Preview for camera
` ` `
[_sigmaLive setPreView:self.containerView];
[_sigmaLive initSession];
 ` ` `

</div>
<div class="section">


### Switch camera
` ` `
[self.session switchCamera]
 ` ` `

</div>
<div class="section">

#### Change Camera
` ` `
[self.sigmaLive changeCamera :AVCaptureDevicePositionFront];//Front Camera
[self.sigmaLive changeCamera :AVCaptureDevicePositionBack];//Back Camera
 ` ` `

</div>
<div class="section">

#### Beauty Face
` ` `
 [_self.sigmaLive setBeauty: TRUE];
 [_self.sigmaLive isBeatty];
 ` ` `

</div>
<div class="section">

#### Start Live
` ` `
[_self.sigmaLive start: @ "RTMP_URL" chanelName: @ "CHANEL_NAME"];
` ` `

#### Stop Live
` ` `
[_self.sigmaLive stop];
 ` ` `

</div>
<div class="section">

#### Start Camera
` ` `
[_self.sigmaLive startCamera]
 ` ` `

</div>
</div>

### Three. Config
```
self.sigmaLive.videoSize = CGSizeMake (320, 640);
self.sigmaLive.videoBitRate = 800 * 1024;
self.sigmaLive.videoMaxBitRate = 1000 * 1024;
self.sigmaLive.videoMinBitRate = 500 * 1024;
self.sigmaLive.videoLiveRate = 24;
self.sigmaLive.sessionPreset = SigmaVideoPreset720x1280;
```

::caution

Note: active only for iOS 9.0 or above and running on main thread

:::