"use strict";

import { BackendMicroservice, CONFIG, _DataStringify } from "qcobjects";

class ConfigHandler extends BackendMicroservice {
  responseHeaders = {
    "Content-Type":"application/json"
  };

  done (){
    const authEnabled = CONFIG.get("backend", {auth:{enabled:""}}).auth.enabled as boolean;
    const microsoftapikey = CONFIG.get("backend", {auth:{microsoftapikey:""}}).auth.microsoftapikey || "" as string;
    const defaultUser = CONFIG.get("backend", {auth:{defaultUser:"admin"}}).auth.defaultUser || "admin" as string;
    const defaultPasswd = CONFIG.get("backend", {auth:{defaultPasswd:"admin123"}}).auth.defaultPasswd || "admin123" as string;
    this.body = _DataStringify({
      backend:{
        auth: {
          enabled:authEnabled,
          defaultUser,
          defaultPasswd,
          microsoftapikey
        },
      }
    });
    super.done();
  }

}

export default ConfigHandler;