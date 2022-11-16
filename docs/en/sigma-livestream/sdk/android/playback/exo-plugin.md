---
title: ExoPlayer Plugin
description: "About Vector, the log and metrics collector, forwarder, and router"
sidebar_label: "ExPlayer plugin"
---

## System requirements

1. Min Sdk version 14
2. Exoplayer version 2.9.6

To integrate the SHls system, please follow the following steps:
1. The ExoPlayer integration version 2.9.6 returns
2. Shls module integration
3. SHlExExPlayer initiation
4. Initis SHlsMediaSource
5. Use player after completion

#### The ExoPlayer integration version 2.9.6 returns

Shls is integrated in the form of a 2.9.6 version ExPlayer module.

Add Google and JCenter territories to *build.gradle*

```xml
Territories {
    Google ()
    jcenter ()
}
```

Add modules *ExExPlayer*

```java
implementation 'com.google.android.exoplayer:exoplayer:2.9.6'
implementation 'com.google.android.exoplayer:exoplayer-core:2.9.6'
implementation 'com.google.android.exoplayer:exoplayer-dash:2.9.6'
implementation 'com.google.android.exoplayer:exoplayer-ui:2.9.6'
implementation 'com.google.android.exoplayer:exoplayer-hls:2.9.6'
implementation 'com.google.android.exoplayer:exoplayer-smoothstreaming:2.9.6'
```

Enable Java 8 support

```java
compileOptions {
    sourceCompability JavaVersion.VERSION_1_8
    targetCompability JavaVersion.VERSION_1_8
}
```

#### Shls Module Integration

Copy *library-shengreae.aar* in directories *app/libs*, then add to the dependency:

```java
impleentation fileTree (dir: 'libs', incline: ["* .aar"])
```

Start *SHlExExPlayer*

```java
player = SHlsExPlayerFactory.newSHlInstance (
context, rendererfactory, trackSelector, drmSessionManager, bufferLength);
```

Starting *SHlMediaSource*

```java
SHlSPlaylistCallback shlsCallback = new SHlSPlaylistCallback () {
    @Override
    public void onLiveStreamPause () {
        // show stream discontinued, the majority of the cases will be sent before the player transfers a
    }

    @Override
    public void onLiveStreamResume () {
        // upload source here
    }
};
mediaSource = SHlsMediaSourceFactory (dataSourceFactory)
            .setPlaylistParserFactory (
                new DefaultSHlsPlaylistenFactory (shlsCallback))
            .createMediaSource (uri);
```

Initiator *trackselector*

<!-- import Alert from '@site/src/components/Alert'; -->

<!-- <Alert type="warning"> -->

*** SHlSTrackSelectionFactory*** can use the default to replace the * exoplayer * bandwidth measurement for non-** ultralow-latency**. However mandatory use for threads ** ultralow-latency**, it ensures automatic transfer of flow when the network quality is variable.

<!-- </Alert> -->

``` java
SHlsTrackSelectionFactory adaptiveTrackSelectionFactory = new SHlsTrackSelectionFactory(1900);
adaptiveTrackSelectionFactory.setBufferProvider(
new SHlsTrackSelectionBufferProvider() {
    @Override
    public float getCurrent() {
        if (player != null)
            return player.getTotalBufferedDuration() / 1000f;
        return 0;
    }

    @Override
    public float getPreferBuff() {
        if (player != null)
            return ((SHlsExoPlayer) player).getTargetBufferTime();
        return -1f;
    }
});
trackSelector = new DefaultTrackSelector(adaptiveTrackSelectionFactory);
```

Details of integration and use of ExoPlayer 2.9.6 can refer to: [Github ExPlayer](https://github.com/google/ExoPlayer)