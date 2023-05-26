import { Route, CONFIG } from "qcobjects";
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
  name:"QCObjects Admin Panel Handlers!",
  description:"This endpoint returns a list of handlers available in the application",
  path: "^/admin/api/handlers$",
  microservice:"qcobjects-admin/handlers",
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
