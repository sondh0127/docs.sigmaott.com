---
id: Doc-avplayershls-plugin
title: AVPlayerSHlPlugin
---

## AVPlayerSHlPlugin iOS

### One. Add framework to project
Drag the AVPlayerSHlPlugin.framework into project. Then add the framework as the image:

![Framework](./imgs/embed_avplayershlsplugin.png)

### Two. AVPlayerSHlPlugin module integration

#### 2.1. Declare App Transport Security Setting in the Info.plist file

![Permission](./imgs/ats.png)

#### 2.2. AVPlayer initis

```
NSURL * url = [NSURL URLWithString:url];
AVURLAsset * asset = [AVURLAsset URLAssetWithURL :url options:nil];
self.playerItem = [AVPlayerItem playerItemWithAsset:asset];
self.player = [AVPlayer playerWithPlayerIem];
self.playerLayer= [AVPlayerLayer playerLayerWithPlayer:self.player];
self.playerLayer.frame = self.view.bounds;
[self.view.layer addSublayer];
```

#### 2.3. AVPlayerSHlPlugin

```
self.avplayerShlPlusgin = [[AVPlayerSHlPlugin alloc] init];
[self.avplayerShlplugin initSession:self.player playItem:self.playerItem];
```

#### 2.4. Play video

```
[self.player play];
```

#### 2.5. Pause video

```
[self.player pause];
```

#### 2.6. Check video status

```
[self.avplayerShlPlugin isPlaying];
```

#### 2.6. Subscribe to LiveStreamPause and LiveStreamResume

1. implment AVPlayerSHlPluginDelegate

```
@interface ViewController ()<AVPlayerSHlsPluginDelegate>
...
@end
```
1. set Delegate for AVPlayerSHlPlugin

```
[self.avplayerShlPlugin setDelegate:self];
```

1. Declare the functions to receive notifications when the event is available.

```
-(void) onLiveStreamPause {
    NSLog (@ "onLiveStreamPause");
}

-(void) onLiveStreamResume {
    NSLog (@ "onLiveStreamResume");
}
```