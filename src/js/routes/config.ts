import { Route, CONFIG } from "qcobjects";
import "../plugins/config";
import "../handlers/config";
import "../libs/config";
import "../version/config";
import "../cmdshell/config";

/*
* The next values are the default settings
* You can change any value in runtime by using CONFIG.set
* or changing the static initial value in a config.json file
*/
CONFIG.set("hasAdmin", true);

const backend = CONFIG.get("backend", {});
if (typeof backend.routes === "undefined"){
  backend.routes = [];
}
backend.routes.push({
  name:"QCObjects Admin Panel Routes!",
  description:"This endpoint returns a list with the routes",
  path: "^/admin/api/routes$",
  microservice:"qcobjects-admin/routes",
  headers: {
    "content-type": "text/html; charset=utf-8"
  },
  responseHeaders:{
  },
  cors:{
    "allow_origins":"*"
  }
} as Route);

backend.routes.push({
  name: "Admin Static Assets",
  description: "Admin Static Assets",
  path: "^/admin/assets/(.*)$",
  microservice: "com.qcobjects.backend.microservice.static",
  redirect_to:  "./node_modules/qcobjects-admin/public/static/assets/$1",
  responseHeaders: {
    
  },
  cors: {
    "allow_origins": "*"
  }
} as Route);

backend.routes.push({
  name: "Admin Static Assets CSS",
  description: "Admin Static Assets CSS",
  path: "^/admin/css/(.*)$",
  microservice: "com.qcobjects.backend.microservice.static",
  redirect_to:  "./node_modules/qcobjects-admin/public/static/assets/css/$1",
  responseHeaders: {
    
  },
  cors: {
    "allow_origins": "*"
  }
} as Route);

backend.routes.push({
  name: "Admin Static Assets Xterm CSS",
  description: "Admin Static Assets Xterm CSS",
  path: "^/admin/external/xterm/css/(.*)$",
  microservice: "com.qcobjects.backend.microservice.static",
  redirect_to:  "./node_modules/qcobjects-admin/node_modules/xterm/css/$1",
  responseHeaders: {
    
  },
  cors: {
    "allow_origins": "*"
  }
} as Route);

backend.routes.push({
  name: "Admin Static Assets Xterm JS",
  description: "Admin Static Assets Xterm JS",
  path: "^/admin/external/xterm/js/(.*)$",
  microservice: "com.qcobjects.backend.microservice.static",
  redirect_to:  "./node_modules/qcobjects-admin/node_modules/xterm/lib/$1",
  responseHeaders: {
    
  },
  cors: {
    "allow_origins": "*"
  }
} as Route);

backend.routes.push({
  name: "Admin Static Assets IMG",
  description: "Admin Static Assets IMG",
  path: "^/admin/img/(.*)$",
  microservice: "com.qcobjects.backend.microservice.static",
  redirect_to:  "./node_modules/qcobjects-admin/public/static/assets/img/$1",
  responseHeaders: {
    
  },
  cors: {
    "allow_origins": "*"
  }
} as Route);

backend.routes.push({
  name: "Admin Static JS",
  description: "Admin Static JS",
  path: "^/admin/js/(.*)$",
  microservice: "com.qcobjects.backend.microservice.static",
  redirect_to:  "./node_modules/qcobjects-admin/public/static/js/$1",
  responseHeaders: {
    
  },
  cors: {
    "allow_origins": "*"
  }
} as Route);

backend.routes.push({
  name: "Admin Static Templates",
  description: "Admin Static Templates",
  path: "^/admin/templates/(.*)$",
  microservice: "com.qcobjects.backend.microservice.static",
  redirect_to:  "./node_modules/qcobjects-admin/public/static/templates/$1",
  responseHeaders: {
    
  },
  cors: {
    "allow_origins": "*"
  }
} as Route);

backend.routes.push({
  name: "Admin Manifest",
  description: "Admin Manifest",
  path: "^/admin/manifest.json$",
  microservice: "com.qcobjects.backend.microservice.static",
  redirect_to:  "./node_modules/qcobjects-admin/public/static/manifest.json",
  responseHeaders: {
    
  },
  cors: {
    "allow_origins": "*"
  }
} as Route);

backend.routes.push({
  name: "Admin Static Robots.txt",
  description: "Admin Static Robots.txt",
  path: "^/admin/robots.txt$",
  microservice: "com.qcobjects.backend.microservice.static",
  redirect_to:  "./node_modules/qcobjects-admin/public/static/robots.txt",
  responseHeaders: {
    
  },
  cors: {
    "allow_origins": "*"
  }
} as Route);

backend.routes.push({
  name: "Admin Static Favicon",
  description: "Admin Static Favicon",
  path: "^/admin/favicon.ico$",
  microservice: "com.qcobjects.backend.microservice.static",
  redirect_to:  "./node_modules/qcobjects-admin/public/static/assets/favicon.ico",
  responseHeaders: {
    
  },
  cors: {
    "allow_origins": "*"
  }
} as Route);

backend.routes.push({
  name:"QCObjects Admin Panel!",
  description:"With this panel, you can manage settings, configurations and install plugins",
  path: "^/admin/shell|/admin/settings/(.*)|/admin/plugins|/admin/handlers|/admin/libs|/admin/(install|uninstall)_(plugins|handlers|libs)/(.*)$",
  microservice:"qcobjects-admin",
  headers: {
    "content-type": "text/html; charset=utf-8"
  },
  responseHeaders:{
  },
  cors:{
    "allow_origins":"*"
  }
} as Route);


CONFIG.set("backend", backend);
