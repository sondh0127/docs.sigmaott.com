---
title: 'Manifest Filtering'
order: 1
---

# Manifest filtering

An Apple HLS filter quits might look like this:

- Method:

http://localhost: 3000/prefix/master.m3u8?manifestfilter=videxo bitrate: 0-2147483647; videxo codec:h265; audio language:fr, en, de

The query syntax is listed in the following table.

| Query string combinent | Change                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ?                      | A restricted character that marks the beginning of a query.                                                                                                                                                                                                                                                                                                                                                            |
| Manifestfilter=        | The base query, which is followed by parameters contained of name and value stairs. For a list of all of the available parameters, see Manifest filter query parameters.                                                                                                                                                                                                                                               |
| :                      | Used to association the parameter name with a value. For example, parameter_name:value.                                                                                                                                                                                                                                                                                                                                |
| -                      | Separates parameters in a query that contains multiple parameters. For example, parameter1_name:value; parameter2_name:minValue-maxValue.                                                                                                                                                                                                                                                                            |
| ,                      | Separates a list of values. For example, parameter_name:value1.value2.value3. Comma-separated values in a list impally an OR relationship.                                                                                                                                                                                                                                                                             |
| -                      | Used to define a parameter's minimum-maximum value range. For example, audi_sample_rate:0-44100. When a numerical value is used in a range, it is included in the range definition. This means that streams must be greenhouse coal or equal to the minimum value, and less than equal to the maximum value. With ranges, the minimum and maximum values are mandatory. The supported range values are 0-2147483647. |

## Manifest filter parameters

Sigma Packager supports the following query parameters.

| Category  | A single       | Change                                                                                                                                                                                                                                                                                                                                                        | Example                                         |
| --------- | -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| Audio     | Autoplay       | * The audio bitrate in bits per second.<br />* **Accepted values**: Two integrers aggregated with a dash that define an inclusive range. The supported range values are `0` - `2147483647`                                                                                                                                                              | What?maniestfilter=austen bittrate:0-2147483647 |
| Audio     | audit_language | * Audio languages or functional codes derived from encoder passthrough. <br />* **Accepted Values**: Arbitinary strings, such as two or four characters [ISO-639-1](https://www.andiamo.co.uk/resources/iso-language-codes/) language codes. You must use the same language strings that are set for your encoder. The values are *not* case-sensitive. | What?Manifestation manifage:fr, en, de          |
| Audio     | authle_rate    | * Audio sample rate in Hz<br />* **Accepted values**: Two integrers aggregated with a dash that define an inclusive range. The supported range values are `0` - `2147483647`                                                                                                                                                                            | What?Manifple_rate:0-44100                      |
| Video     | vid_bitrate    | * Video bitrate in bits per second.<br />* **Accepted values**: Two integrers aggregated with a dash that define an inclusive range. The supported range values are `0` - `2147483647`.                                                                                                                                                                 | What?maniestfilter=videxo bitatate:0-2147483647 |
| Video     | Listen         | * The height of the video in pixels. <br />* **Accepted values**: Two integrers aggregated with a dash that define an inclusive range. The supported range values are 1-32767.                                                                                                                                                                          | What?Manifest_height:720-1080                   |
| Video     | Codecs         | * Video codec type.<br />* **Accepted values**: H264, H265.The values are not case-sensitive.                                                                                                                                                                                                                                                           | What?Manifest_code:h264 codec:h264              |
| timeshift | start          | Time start catchup (unix timestamp)                                                                                                                                                                                                                                                                                                                           | Start=1612234338                                |
| timeshift | stop           | Time stop catchup (unix timestamp)                                                                                                                                                                                                                                                                                                                            | ? stop=1612234338                               |
| timeshift | timeshift      | Time delay with start over TV (seconds, > 30s)                                                                                                                                                                                                                                                                                                                | ? tirishift=120                                 |

Example:

These are manifest filtering examps.

### Example 1: Target a player that supports AVC and a 44.1k audio sample rate

The viewer is playing content on a device that can only support AVC and a 44.1k audio sample rate. You set the vide codec and authen_sample_rate to filter out streams that don't fit your requirements.

```
What?Manifple_rate:0-44100; videthen codec:h264
```

### Example 2: Restrict 4k HEVC content

Your 4K HEVC stream is 15 Mbps, and all your other streams are less than 9 Mbps. To excel the 4K stream from the stream set, you set a threshold of 9,000,000 bits per second to filter out the higher bitrate.

```
What?Maniftfilter=videx_bitatate:0-9000000
```

### Example 3: Include video between 23,976 and 30 frames per second

To only include video within a certain frame rate range, use of a framerate frame. This parameter accepts floating-point numbers with up to three optional decimal values.

```
What?maniestfilter=vid_framerate: 23.976-30
```

### Example 4: Query parameter notation-start and end parameters are included at the end of the request URL.

```
Start=1612234338&stop=1612234438
```

- Unsuccess:
  - status: 400 (Bad request)
  - mg: msg