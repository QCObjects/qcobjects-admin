import { _DataStringify } from "qcobjects";

const packageInfo = (pName:string):{
    name:string;
    description:string;
    version:string;
    "repository.url":string
} => {
    /* eslint-disable @typescript-eslint/no-var-requires */
    const { execSync } = require("child_process");
    let data;
    try {
        data = execSync(`npm view ${pName} name description version repository.url --json`).toString();
    } catch(e){
        data = _DataStringify({
            name: pName,
            description:"",
            version:"0.0.0",
            "repository.url":""
        });
    }
    return JSON.parse(data);
};

export default packageInfo;