"use strict";

import { BackendMicroservice, _DataStringify, logger } from "qcobjects";
import { CMDData, execCmdShell } from "./tools/cmdShell";


class CMDShell extends BackendMicroservice {

  post (formData:any){
    const data = JSON.parse(formData.toString()) as CMDData;
    execCmdShell(data).then((responseData)=>{
      this.body = _DataStringify({
        "status":"OK",
        "message":responseData
      });
      this.done();
    }).catch (e=> {
      logger.warn(e);
      this.body = _DataStringify({
        "status":"Error",
        "message":e.message
      });
      this.done();
    });
  }

}

export default CMDShell;