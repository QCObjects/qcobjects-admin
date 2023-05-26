# QCObjects Admin Panel

# Install 

```shell
npm i qcobjects-admin
```

# Uninstall

Uninstall it before to go live in production environment.

```shell
npm uninstall qcobjects-admin
```


# Setup in your config.json

Below routes are added automatically.

```json
"backend":{
    "routes":[
        {
            "name":"QCObjects Admin Panel!",
            "description":"With this panel, you can manage settings, configurations and install plugins",
            "path":"^/admin",
            "microservice":"qcobjects-admin",
            "headers": {
              "content-type": "text/html; charset=utf-8"
            },
            "responseHeaders":{
            },
            "cors":{
              "allow_origins":"*"
            }
        }
    ]
}
```

# Visit

Visit https://localhost:port/admin

# Create your own microservice

To make your own microservice, you can generate it with QCObjects CLI using this package as template:

```shell
qcobjects create --custom=qcobjects-admin my-own-admin
```

