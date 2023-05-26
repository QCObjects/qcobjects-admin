import { BackendMicroservice, Microservice } from "qcobjects";
declare class VersionHandler extends BackendMicroservice {
    constructor(microservice: Microservice);
}
export default VersionHandler;
