"use strict";

import { BackendMicroservice, CONFIG, Microservice, Route } from "qcobjects";

class DisplayRoutes extends BackendMicroservice {

  constructor(microservice:Microservice){
    microservice.body = JSON.stringify(CONFIG.get("backend", {}).routes as Array<Route>);
    super(microservice);
  }

}

export default DisplayRoutes;