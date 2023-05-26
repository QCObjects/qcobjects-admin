import { ControllerParams, Package, Service, logger, serviceLoader } from "qcobjects";
import {XTermController, typewriter} from "./external.components";
import { NotificationComponent } from "qcobjects-sdk";

type PluginsControllerParams = ControllerParams & {
    operation:string;
    operationSuccess:string;
    serviceMethod:string;    
}

class PluginsController extends XTermController {

    constructor(controller:PluginsControllerParams){
        super(controller);
        const lines = [
`npm ${controller.operation} ${this.component.data.package}`,
`
Getting command response...`
        ];

        // eslint-disable-next-line array-callback-return
        lines.map ((c:string, index:number) => {
            setTimeout(()=> {
                typewriter(this.term,c);
                this.term.write("\r\n$ ");
            }, 1500*(index+1));
        });

        const returnUrl = `/admin/${this.component.data.packageType}`;

        const service = new Service ();
        service.url = `/admin/api/plugins/${controller.serviceMethod}`;
        service.method = "POST";
        service.done = () => logger.debug(`Plugin ${this.component.data.package} was ${controller.operationSuccess}.`);
        service.data = {package:this.component.data.package};
        serviceLoader(service, false)
            .then(({service}) => {
                const response = JSON.parse(service.template);
                const responseLines = response.message.split("\n");

                // eslint-disable-next-line array-callback-return
                responseLines.map ((c:string, index:number) => {
                    setTimeout(()=> {
                        typewriter(this.term,`${c}`);
                        this.term.writeln("");
                    }, 800*(index+1));
                });
                setTimeout(()=> {
                    if (response.status === "OK"){
                        NotificationComponent.success(`${this.component.data.package} was ${controller.operationSuccess}!`);
                        setTimeout(()=> {location.href=`${returnUrl}`;}, 1000);
                    } else {
                        NotificationComponent.danger(`It was not possible to ${controller.operation} ${this.component.data.package}.`);
                    }
                },800*(responseLines.length+1));

            })
            .catch(e=>{
                logger.warn(e.message);
                NotificationComponent.danger(`It was not possible to ${controller.operation} ${this.component.data.package}.`);
            });

    }

}

class UninstallPluginsController extends PluginsController {
    constructor(controller:PluginsControllerParams){
        controller.operation = "uninstall";
        controller.operationSuccess = "uninstalled";
        controller.serviceMethod = "u";
        super(controller);
    }
}

class InstallPluginsController extends PluginsController {
    constructor(controller:PluginsControllerParams){
        controller.operation = "install";
        controller.operationSuccess = "installed";
        controller.serviceMethod = "i";
        super(controller);
    }
}


Package("com.qcobjects.admin.plugins.controllers", [
    PluginsController,
    InstallPluginsController,
    UninstallPluginsController
]);