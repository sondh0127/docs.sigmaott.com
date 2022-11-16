---
title: 'Supervisor.'
order: 2
---

# {{ $frontmatter.title }}

## Channel supervisor

For each channel on the system there will be 1 or more **job** that execute the transfer code or close the channel. The state of the channel will be a total state of **job** applications with corresponding channel

* The number of Job of the channel will correspond to the corresponding output of the channel, next to which if the output has a catchup feature, the timeshift, then the system will create 1 **job catchup** corresponding to this output (this job separation helps the system to stabilize when one of the job can meet the problem).
* When creating a new channel, the system automatically generates the job needed for the ::: warning  
  The change of the channel configuration can change the channel's number job and may result in the loss of job needed
:::

### Channel Status

The channel system has states as follows:

*   **live**: the channel is on
*   **stop**: Channel is off
*   **error**: Channel is error
    *   The channel can be met with an error state when a job execs in the channel is in error

### Job State

For every Job in the channel it will be a separate running service on different regulated servers, receiving input and output at the request of job. Then Job will have the same types as follows:

1. **Transcode**: this is the job that makes the transfer of the channel crib to the transcode channel. With every transfer channel there will be only job.
2. **Package**: Job packaging, number corresponding to the number of installed output
3. **Catchup**: Job packaging for catchup content, timeshift, quantity corresponding to the number of installed output numbers


With each Job we will have the status of job as follows:

| Status        | Description                                                                                                         |
| ------------- | ------------------------------------------------------------------------------------------------------------------- |
| **Starting**  | Job's in the initial launch process.                                                                                |
| **Preparing** | Job is in the process of preparing resources such as taking the input from the input, taking output information ... |
| **Started**   | Job started to work.                                                                                                |
| **An error**  | Job's guilty. Please see the job code below to detect the cause.                                                    |
| **stop**      | Job was stopped.                                                                                                    |


The operation with job systems provides enough **action** as **start**, **stop**, **reset**, are made through the **action**.

* You can work with Job from the outside of the **Jobs** or in the channel monitoring page.

### Channel supervisor

From the list of the **click** on the name of the channel detailed channel present

![Channel Details Information](../images/um-channel-detail.png)

The monitoring commonent included:

* **Thumbnail**: The channel's thumbnail image is periodically extracted during processing.
* **job Speed**: Schedule graph by time denograph speed of **job**
    * The speed of **job** is calculated at 100%.
        * With values that are less than 90% job is having problems during the processing as the input source, head to problem.
* **INPUTS**: The channel input list
* **TranSCODE**: Information on the Transcode Processing System (Transcode)
    * Includes: details on Job transcode
    * Profile Transcode Information
* **PACKAGES**: The channel's packaging output information
    * List of outputs with the attachment job
    * For each output list there will be a maximum of 2 job consisting of **package job** and **catchup job**


### Job monitoring

![The Job Board.](../images/um-job-detail/um-job-detail.png){width =400px}

Job monitoring board includes

* ![Status](../images/um-job-detail/1.png){height=17px}  **status**: Status of job
* ![Status](../images/um-job-detail/2.png){height=17px}  **Speed**: Current speed of job
* ![Status](../images/um-job-detail/3.png){height=17px}  **Lifetime**: Time job runs from the last retry because of an error or restart
* ![Status](../images/um-job-detail/4.png){height=17px}  **created**: time job is created (utc time)
* ![Status](../images/um-job-detail/5.png){height=17px}  **outputs**: Head of job
* ![Status](../images/um-job-detail/6.png){height=17px}  **action**: Action buttons with job
* ![Status](../images/um-job-detail/7.png){height=17px}  **Errors**: log error of job.

* Note:
  * **Job** can be monitored at the channel list or in the channel details page

Job error log structure

```
[05-26 02:32:55] Input timeout (code: INPUT_TIMEOUT)
```

In it:

* **[05-26 02:32:55]**: Value of time, calculated UTC
* **Input timeout** : Message message
* **(code: INPUT_TIMEOUT)** : Error code

Some common error codes and annotations.

| Code                                                                                    | description                                                                                                             |
| --------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| TIMEOUT                                                                                 | Job suffers from timeouts                                                                                               |
| **PACKET_XX_ENCODE_CASE_CAPS_LOCK_ON quee_is_XX_ENCODE_CASE_CAPS_LOCK_Off** | Unprocessed queue package (lack of resources)                                                                           |
| MEMORI_IS_FULL                                                                        | All of the Ram memory.                                                                                                  |
| **INPUT_TIMEOUT**                                                                       | Head to Timeout.                                                                                                        |
| **OUTPUT_TIMEOUT**                                                                      | Output Timeout (depending on the output stream)                                                                         |
| **TRSCODE_TIMEOUT**                                                                     | The processing server encountered problems                                                                              |
| GOP_INVALID                                                                             | The GOP cache failed.                                                                                                   |
| ASYN_STREAM                                                                             | Failed to synchrony to input streams (ABR streaming)                                                                    |
| **ASYN_PROFILE**                                                                        | Failed to synchrony output flow (ABR streaming)                                                                         |
| INPUT_OUTPUT_ERROR                                                                    | The input stream and the output flow to the incident                                                                    |
| IO_ERROR                                                                                | Error during reading                                                                                                    |
| **CONNECTION_REFUSED**                                                                  | The connection is launched by the refused (The error occurs when it is not possible to connect to the service manifest) |
| CONNECTION_TIMEOUT                                                                      | Timeout output                                                                                                          |
| CANNOT_OPEN_CONNECTION                                                                | Failed to create connection                                                                                             |
| URL_READ_ERROR                                                                        | Error reading URL data                                                                                                  |
| OPTION_NOTFOUND `*`                                                                     | The configuration is not correct                                                                                        |
| PROTOCOL_NOTFOUND `*`                                                                   | Protocol not found                                                                                                      |
| STREAM_NOT_FOUND `*`                                                                  | No input stream found                                                                                                   |
| UNABLE_TO_OPEN_RESOURCE                                                               | Unable to initiate resource                                                                                             |
| NO_ROUTE_TO_HOST `*`                                                                  | Unconnected                                                                                                             |
| INALID_ARGUENT *******                                                                  | Parameter error                                                                                                         |
| INITIALIZING_OUTPUT_STREAM `*`                                                        | Failed to start output stream                                                                                           |
| CONNECTION_RESET_BY_PEER                                                              | Reset connection                                                                                                        |
| BROM_PIPE                                                                               | Broken pipe                                                                                                             |
| NOIS_DATA `*`                                                                           | Start stream without AUDIO data                                                                                         |
| NO_DATA data `*`                                                                        | Start stream without VIDEO data                                                                                         |

* Bold-printed errors are more likely to occur when **job** has been more successful than other faults.
* With errors related to output: check out
* The errors `*` only occur when creating new **job**
* When meeting the system error will retest the **job** failed until the error is processed.
    * For errors that occur when the start of job will need to restart job for processing.

