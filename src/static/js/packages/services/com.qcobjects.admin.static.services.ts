import { JSONService, Service, Package } from "qcobjects";

class AdminAvailableNpmService extends JSONService {

    done ({service}:{ request:XMLHttpRequest, service:Service }){
        const result = JSON.parse(service.template);
        const {available, installed} = result;
        service.template = {
            result:available
            .map((m:{
                name:string;
                description:string;
                version:string;
                "repository.url":string;
            })=>{return {
                name:m.name,
                description:m.description,
                version:m.version,
                "repository.url":m["repository.url"]
            };})                
            .map ((a:any)=>{
                return Object.assign({
                    installed: (installed.filter((i:any)=>i.name === a.name).length>0)
                }, a);
            })
        };
    }
}

class AdminAvailablePluginsService extends AdminAvailableNpmService {
    url = "/admin/api/plugins";
}

class AdminAvailableHandlersService extends AdminAvailableNpmService {
    url = "/admin/api/handlers";
}

class AdminAvailableLibsService extends AdminAvailableNpmService {
    url = "/admin/api/libs";
}

class VersionStringService extends JSONService {
    url = "/admin/api/version";
}

Package("com.qcobjects.admin.static.services", [
    AdminAvailableNpmService,
    AdminAvailablePluginsService,
    AdminAvailableHandlersService,
    AdminAvailableLibsService,
    VersionStringService
]);