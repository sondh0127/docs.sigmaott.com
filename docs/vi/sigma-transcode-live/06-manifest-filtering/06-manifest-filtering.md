---
title: 'Manifest Filtering'
order: 1
---

# Manifest filtering

An Apple HLS filter query might look like this:

- Method: Get

http://localhost:3000/prefix/master.m3u8?manifestfilter=video_bitrate:0-2147483647;video_codec:h265;audio_language:fr,en,de

The query syntax is listed in the following table.

| Query string component | Description                                                  |
| ---------------------- | ------------------------------------------------------------ |
| ?                      | A restricted character that marks the beginning of a query.  |
| manifestfilter=        | The base query, which is followed by parameters constructed of name and value pairs. For a list of all of the available parameters, see Manifest filter query parameters. |
| :                      | Used to associate the parameter name with a value. For example, parameter_name:value. |
| ;                      | Separates parameters in a query that contains multiple parameters. For example, parameter1_name:value;parameter2_name:minValue-maxValue. |
| ,                      | Separates a list of values. For example, parameter_name:value1,value2,value3. Comma-separated values in a list imply an OR relationship. |
| -                      | Used to define a parameter's minimum - maximum value range. For example, audio_sample_rate:0-44100. When a numerical value is used in a range, it is included in the range definition. This means that streams must be greater than or equal to the minimum value, and less than or equal to the maximum value. With ranges, the minimum and maximum values are mandatory. The supported range values are 0 - 2147483647. |

## Manifest filter query parameters

Sigma Packager supports the following query parameters.

| Category  | Name              | Description                                                  | Example                                    |
| --------- | ----------------- | ------------------------------------------------------------ | ------------------------------------------ |
| Audio     | audio_bitrate     | * The audio bitrate in bits per second.<br />* **Accepted values**: Two integers aggregated with a dash that define an inclusive range. The supported range values are `0` - `2147483647` | ?manifestfilter=audio_bitrate:0-2147483647 |
| Audio     | audio_language    | *  Audio languages or functional codes derived from encoder passthrough. <br />* **Accepted values**: Arbitrary strings, such as two or four character [ISO-639-1](https://www.andiamo.co.uk/resources/iso-language-codes/) language codes. You must use the same language strings that are set for your encoder. The values are *not* case-sensitive. | ?manifestfilter=audio_language:fr,en,de    |
| Audio     | audio_sample_rate | * Audio sample rate in Hz<br />* **Accepted values**: Two integers aggregated with a dash that define an inclusive range. The supported range values are `0` - `2147483647` | ?manifestfilter=audio_sample_rate:0-44100  |
| Video     | video_bitrate     | * Video bitrate in bits per second.<br />* **Accepted values**: Two integers aggregated with a dash that define an inclusive range. The supported range values are `0` - `2147483647`. | ?manifestfilter=video_bitrate:0-2147483647 |
| Video     | video_height      | * The height of the video in pixels. <br />* **Accepted values**: Two integers aggregated with a dash that define an inclusive range. The supported range values are 1 - 32767. | ?manifestfilter=video_height:720-1080      |
| Video     | video_codec       | * Video codec type.<br />* **Accepted values**: H264, H265.The values are not case-sensitive. | ?manifestfilter=video_codec:h264           |
| timeshift | start             | Time start catchup (unix timestamp)                          | ?start=1612234338                          |
| timeshift | stop              | Time stop catchup (unix timestamp)                           | ?stop=1612234338                           |
| timeshift | timeshift         | Time delay with start over TV (seconds, > 30s)               | ?timeshift=120                             |

example: 

These are manifest filtering examples.

### Example 1: Target a player that supports AVC and a 44.1k audio sample rate

The viewer is playing content on a device that can only support AVC and a 44.1k audio sample rate. You set the video_codec and audio_sample_rate to filter out streams that don't fit these requirements.

```
?manifestfilter=audio_sample_rate:0-44100;video_codec:h264
```

### Example 2: Restrict 4k HEVC content

Your 4K HEVC stream is 15 Mbps, and all your other streams are less than 9 Mbps. To exclude the 4K stream from the stream set, you set a threshold of 9,000,000 bits per second to filter out the higher bitrate.

```
?manifestfilter=video_bitrate:0-9000000
```

### Example 3: Include video between 23.976 and 30 frames per second

To only include video within a certain frame rate range, use video_framerate. This parameter accepts floating-point numbers with up to three optional decimal values.

```
?manifestfilter=video_framerate:23.976-30
```

### Example 4: Query parameter notation – start and end parameters are included at the end of the request URL

```
?start=1612234338&stop=1612234438
```

- Unsuccess:
  - status: 400 (Bad request)
  - msg: msg