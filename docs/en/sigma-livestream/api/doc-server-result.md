---
id: Doc-server-result
title: Return results
sidebar_label: Return result
---

When calling Restful Api to the livestream platform. If successful, the http code will always return to 200, with the request to fail, http code 4xx or 5xx will be returned

Data sent and returned to the **json** support system.

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