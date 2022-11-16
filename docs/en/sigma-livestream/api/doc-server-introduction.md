---
id: doc-server-introduction
title: Overview Rest Api
sidebar_label: Introduction
---

Api connect internal, between the App Server and the Livestream Api to perform the following tasks:
* Channel admin: (Add, delete, edit, list the channel list)
* Channel statistics, systems (metadata, statistic)
* User Configuration (resource limit for users)

## Api Version

| Version  | Status |
| -------- | ------ |
| v1.0-poc | Ready  |

## Connection Method

The Livestream Api is connected via the HTTP protocol

HTTP methods are allowed:
* **POST**: Create new resources
* **PUT** / **PATCH**: resource update
* **GET**: Take the resource or list of resources
* **DELETE**: Delete resources

## Description returns from server

The return return from the server is described as follows:

* HTTP status code:
  * 200 `OK` -Request success (Some APIs can return value 201 instead).
  * 201 `CREATED` -successful requirements and resources created.
  * 204 `No Content` -Required success but no return value is performed (i.e.. Empty return value).
  * 400 `Bad Request` -Request not correct or lack of transmission data.
  * 401 `Unauthorized` -Failed authentication.
  * 403 `Forbidden` -unlicensed access.
  * 404 `Not Found` -Resources does not exist.
  * 405 `Method Not Allowed` -The Request Method is not accepted.
  * 422 `Wrong param` -Wrong parameter


* HTTP Response body
  * Content-Type: **application/json**
  * Body: **JSON**
    * **ec**: The error code returns
      * 0: Success
    * **data**: The response data corresponds to the requirement described in detail at each Api.
    * **msg**: message return error with ec # 0

    Example
    ```json
    {
      "ec": 0,
      "data": {}
}
    ```

## Api Request authentication

Api authentication method via the basic HTTP authentication protocol

* **Example**

```bash
curl http://example.com/api -X POST \
    -u ${LIVE_TOKEN_ID}:${LIVE_TOKEN_SECRET}
    -H "Content-Type: application/json"

```
## Resource

| Resource                                       | description                                               |
| ---------------------------------------------- |:--------------------------------------------------------- |
| [Channel](api-server-channel)                  | Direct stream is being played or prepared to be released  |
| [Webhook](api-server-webhook)                  | Url Callback events live and offline live stream          |
| [Search](doc-server-introduction)              | Search for channel, video by criteria.                    |
| [Insighs & Analytics](doc-server-introduction) | Statistics and analysis of direct threads **coming soon** |

## Guide

Simple steps to be able to publish a live video stream

* **B1**: Create a direct stream to receive **streamamUrl** and **streamId**
* **B2**: offers **streamUrl** and **streamId** for live streaming (live stream sdk, obs …) )
* **B3**: Direct broadcast