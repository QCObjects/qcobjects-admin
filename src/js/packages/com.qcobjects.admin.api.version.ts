"use strict";

import { BackendMicroservice, Microservice, _DataStringify } from "qcobjects";

class VersionHandler extends BackendMicroservice {

  constructor(microservice:Microservice){
    microservice.body = _DataStringify((global as any).__get_version__());
    super(microservice);
  }


}

export default VersionHandler;