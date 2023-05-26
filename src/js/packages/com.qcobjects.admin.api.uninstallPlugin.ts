"use strict";

import { BackendMicroservice, _DataStringify, logger } from "qcobjects";
import { CMDData, execCmdShell } from "./tools/cmdShell";
type UninstallPluginData = {
  package:string;
}


class ApiHandler extends BackendMicroservice {

  post (formData:Buffer){
    const data:UninstallPluginData = JSON.parse(formData.toString());
    const cmdData:CMDData = {
      cmd:`npm uninstall ${data.package} --force`
    };
    execCmdShell(cmdData).then((responseData:string)=> {
      (global as any).__reset_settings__();

      this.body = _DataStringify({
        "status":"OK",
        "message":responseData
      });
      this.done();
    })
    .catch(e=> {
      logger.warn(e);
      this.body = _DataStringify({
        "status":"Error",
        "message":e.message
      });
      this.done();
    });

  }

}

export default ApiHandler;