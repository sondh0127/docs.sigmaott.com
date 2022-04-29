---
title: ExoPlayer Plugin
description: "About Vector, the log and metrics collector, forwarder, and router"
sidebar_label: "ExoPlayer plugin"
---
## Yêu cầu hệ thống

1. Min Sdk version 14
2. Exoplayer version 2.9.6 trở lên

Để tích hợp hệ thống SHls, vui lòng thực hiện theo các bước sau:
1. Tích hợp ExoPlayer phiên bản 2.9.6 trở lên
2. Tích hợp module SHls
3. Khởi tạo SHlsExoPlayer
4. Khởi tạo SHlsMediaSource
5. Sử dụng player sau khi hoàn thành

#### Tích hợp ExoPlayer phiên bản 2.9.6 trở lên

SHls được tích hợp dưới dạng một module của ExoPlayer phiên bản 2.9.6 trở lên

Thêm Google và JCenter repositories vào *build.gradle*

```xml
repositories {
    google()
    jcenter()
}
```

Thêm các module *ExoPlayer*

```java
implementation 'com.google.android.exoplayer:exoplayer:2.9.6'
implementation 'com.google.android.exoplayer:exoplayer-core:2.9.6'
implementation 'com.google.android.exoplayer:exoplayer-dash:2.9.6'
implementation 'com.google.android.exoplayer:exoplayer-ui:2.9.6'
implementation 'com.google.android.exoplayer:exoplayer-hls:2.9.6'
implementation 'com.google.android.exoplayer:exoplayer-smoothstreaming:2.9.6'
```

Bật hỗ trợ Java 8

```java
compileOptions {
    sourceCompatibility JavaVersion.VERSION_1_8
    targetCompatibility JavaVersion.VERSION_1_8
}
```

#### Tích hợp Module SHls

Copy *library-shls-release.aar* vào thư mục *app/libs*, sau đó thêm vào dependencies:

```java
implementation fileTree(dir: 'libs', include: ["*.aar"])
```

Khởi tạo *SHlsExoPlayer*

```java
player = SHlsExoPlayerFactory.newSHlsInstance(
context, renderersFactory, trackSelector, drmSessionManager, bufferLength);
```

Khởi tạo *SHlsMediaSource*

```java
SHlsPlaylistCallback shlsCallback = new SHlsPlaylistCallback() {
    @Override
    public void onLiveStreamPause() {
    	// show stream discontinued, phần lớn các trường hợp sẽ gửi về trước khi player chuyển trạng thái buffer
    }

    @Override
    public void onLiveStreamResume() {
    	// reload source here
    }
};
mediaSource = SHlsMediaSourceFactory(dataSourceFactory)
            .setPlaylistParserFactory(
                new DefaultSHlsPlaylistParserFactory(shlsCallback))
            .createMediaSource(uri);
```

Khởi tạo *trackselector*

<!-- import Alert from '@site/src/components/Alert'; -->

<!-- <Alert type="warning"> -->

***SHlsTrackSelectionFactory*** có thể sử dụng mặc định để thay thế bộ đo băng thông của *exoplayer* đối với các luồng không phải **ultralow-latency**. Tuy nhiên bắt buộc sử dụng đối với các luồng **ultralow-latency**, nó đảm bảo việc tự động chuyển luồng khi chất lượng mạng biến động

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

Chi tiết việc tích hợp và sử dụng ExoPlayer 2.9.6 có thể tham khảo: [Github ExoPlayer](<https://github.com/google/ExoPlayer>)