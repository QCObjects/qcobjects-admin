"use strict";

import { BackendMicroservice, CONFIG } from "qcobjects";
import { NPMQCObjectsLibsService } from "./services/com.qcobjects.admin.services.npm";
import serviceLoaderNode from "./services/serviceLoaderNode";
import packageInfo from "./tools/packageInfo";

class PluginsHandler extends BackendMicroservice {

  done (){
    const installed = CONFIG.get("backend", {libs:[]}).libs as Array<string>;
    const npmAvailable = new NPMQCObjectsLibsService();
    serviceLoaderNode(npmAvailable)
    .then(({service})=>{
      const available = JSON.parse(service.template).result.map((r:any)=>r.package.name) as Array<string>;
      const nonInstalled = available.filter(p=>!installed.includes(p));
      const responseBody = {
        available:available.map(p=>packageInfo(p)),
        installed:installed.map(p=>packageInfo(p)),
        nonInstalled:nonInstalled.map(p=>packageInfo(p))
      };
      this.body = JSON.stringify(responseBody);
      super.done();
    });
  }

}

export default PluginsHandler;