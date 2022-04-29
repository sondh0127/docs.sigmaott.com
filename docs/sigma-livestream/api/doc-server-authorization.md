---
id: doc-server-authorization
title: Api authorization
sidebar_label: Api authorization
---


Phương thức xác thực Api thông qua giao thức HTTP basic authentication

* **example**

```bash
curl http://example.com/api -X POST \
	-u ${LIVE_TOKEN_ID}:${LIVE_TOKEN_SECRET}
	-H "Content-Type: application/json"
	
```


