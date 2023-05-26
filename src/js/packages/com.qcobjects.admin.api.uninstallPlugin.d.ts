/// <reference types="node" />
import { BackendMicroservice } from "qcobjects";
declare class ApiHandler extends BackendMicroservice {
    post(formData: Buffer): void;
}
export default ApiHandler;
