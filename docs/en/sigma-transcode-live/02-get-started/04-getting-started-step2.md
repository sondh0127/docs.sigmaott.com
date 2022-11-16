---
title: 'B2: Create new input'
order: 4
---

# {{ $frontmatter.title }}

You have to create a \'s input. The input specifies the media data flow that the Sigma Transcode Live system uses to transfer code or close the package \.

The Sigma Streaming Platform system supports the following standards:
- MPEG-TS over multicast UDP
- RTMP push
- RTMP pull
- RTP
- RTCP
- SRT push
- SRT pull

**Examples of creating 1 input into UDP multi ast**

1. Sign in to the Sigma Streaming portal and open the MediaLive console at [https://console\.aws\.amazon\.com/medialive/](https://console.aws.amazon.com/medialive/)\.

2. Press **Add** in menu **Input** in section **Transcode**. The Input launch interface will appear

3. Enter the necessary information
   1. **Name** of input
   2. **Redundancy** select **single**
   3. **Type** select **UDP**
   4. **Primary Source** filling out the flow information prepared at 1 [Install the input stream at](03-getting-started-step1.md)
   5. **Primary Interface Network** please select 1 card that receives this udp multicast ignore.


![Create Input](../images/um-create-input.png)

::: tip Note

If you don't fill out the information about the network card, the system will take it from the default network card.

:::