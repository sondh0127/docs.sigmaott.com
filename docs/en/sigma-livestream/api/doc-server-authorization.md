---
id: Doc-server-server
title: Api authorization
sidebar_label: Api authorization
---


Api authentication method via the basic HTTP authentication protocol

* **Example**

```bash
curl http://example.com/api -X POST \
    -u ${LIVE_TOKEN_ID}:${LIVE_TOKEN_SECRET}
    -H "Content-Type: application/json"

```


