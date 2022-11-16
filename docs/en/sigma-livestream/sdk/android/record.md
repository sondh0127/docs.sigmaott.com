---
title: Live Kit
description: "About Vector, the log and metrics collector, forwarder, and router"
sidebar_label: "Live Kit"
---

#### Add a library to project

Copy *sigma-live.aar* into app/libs folder, then add to the dependency:

```xml
impleentation fileTree (dir: 'libs', incline: ["* .aar"])
```

#### Integration of the Livestream module

Permitisons declaration in *AndroidManifiest.xml*

```xml
+ Manifest.permitison.RECORD_AUDIO
+ Manifest.permitison.CAMERA
```

<!-- import Alert from '@site/src/components/Alert'; -->

<!-- <Alert type="info"> -->

--- == crwdHRulesLBB_2_BBsuleRHdwrc == Since *Android 6.0 (API level 23) * the permission for LEVERD_AUDIO* * and ***** * need to pass * requestPermisons*, to show the interface so that the user accepts access to the application. ` ` ` java ActivityCompat.requestPermissions (MainActivity.this, new String []{Manifest.permission.CAMERA, Manifest.permission.RECORD_AUDIO}, REQUEST_CODE); ` ` ` --- == crwdHRulesLBB_1_BBsuleRHdwrc ==
<!-- </Alert> -->


```java
@Override
public void onRequestPermisisResult Result (int requestCode,
                                       String permitisons [], int [] grantResults) {
    switch (requestCode) {
        case REQUEST_CODE: {
            // If request is cancelled, the result arrests are empty.
            if (grantResults.length > 0
                && grantResults[0] == PackageManager.PERMISSION_GRANTED) {
                // permission was granted, yay! Do the
                // contacts-related task you need to do.
            Else {
                // permission denied, boo! Discable the
                // function that departs on this permission.
            
            return;
        }
    }
}
```

Launch LiveStream Tool

```java
mLiveManager = LiveManager.getInstance ();
mLiveManager.setup (Activity.this, (ViewGroup) findViewById (R. id.cameraPreviewContainer), newLiveManager.LiveListener () {
    @Override
    public void onLiveStarting () {
        }
    @Override
    public void onLiveStarted () {
        }
    @Override
    public void onLiveError (Exception ex) {
        }
    @Override
    public void onLiveStated () {
        }

```

Resolution settings

```java
List<LiveManager.Resolution> list = mLiveManager.getSupedResolutions ();
mLiveManager.setResolution (list.get (index));
```

Enable the Livestream sound

```java
mLiveManager.setAudioEnable (true/false);
```

Select the camera before

```java
mLiveManager.switchCamaFace ();    
mLiveManager.setCameraFace (LiveManager.CamaFace.Back);
mLiveManager.setCameraFace (LiveManager.CamaFace.Front);
```

Turn off stream flow

```java
if (mLiveManager.isRunning ())
    mLiveManager.stop ();
else 
    mLiveManager.start (url);
```


