## Requirement
* Videojs version 5,6
* Browser support Media Source Extensions 
* SDK Shls plugin for videojs version 1.0.0-poc


## Getting Started

```html
<video id=example-video width=600 height=300 class="video-js vjs-default-skin" controls>
    <source src="https://example.com/index.m3u8" type="application/x-mpegURL">
</video>
<script src="video.js"></script>
<script src="videojs-contrib-shls.min.js"></script> <script>
    var player = videojs('example-video'); 
    player.play();
</script>
```

## How To Use 

### Initialization

```javascript
// html5 for html hls
videojs(video, {html5: {
  hls: {
    withCredentials: true
  }
}});
```

### source

Some options, such as withCredentials can be passed in to hls during player.src

```javascript
var player = videojs('some-video-id');
player.src({
    src: 'https://example.com/index.m3u8', type: 'application/x-mpegURL', withCredentials: true
});
```

### Example


```html
<!DOCTYPE html> 
<html lang="en"> 
<head>
    <meta charset="UTF-8">
    <title>Low Latency Hls demo</title>
    <!-- Videojs 6.x Builds -->
    <script src="https://vjs.zencdn.net/6.3.0/video.js"></script> <!-- Sigma Videojs Plugin -->
    <script src="videojs-contrib-shls.min.js"></script>
</head>
<body>
    <div id="main">
        <video id="player" >
            <source src="https://example.com/index.m3u8" type="application/x-mpegURL"/>
        </video>
    </div>
    <script> 
        videojs('#player', {
            autoplay: true,
            html5: {
            hls: {
                maxBufferSize: 0,
                liveSyncDurationCount: 10,
                fragLoadingTimeOut: 4000,
                } 
            });
    </script>
</body>
</html>
```