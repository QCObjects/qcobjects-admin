import { Service, logger } from "qcobjects";

type StandardResponse = { 
    request: XMLHttpRequest;
    service: Service; 
};

type NPMProject = {
    package:{
        name:string;
        scope:string;
        version:string;
        description:string;
        keywords:Array<string>;
        date:string;
        links:{
            npm:string;
            homepage:string;
            repository:string;
            bugs:string;
        }
        author:{
            name:string;
            url:string;
        }
        publisher:{
            username:string;
            email:string;
        }
        maintainers:Array<{
            username:string;
            email:string;
        }>
    };
    flags:{
        unstable:boolean;
    };
    score:{
        final:number;
        detail:{
            quality:number;
            popularity:number;
            maintenance:number;
        }
    };
    searchScore:number;
}

type NPMQCObjectsResponse = {
    total:number;
    time:string;
    objects:Array<NPMProject>;
};

class NPMService extends Service {
    name = "npm-service";
    external = true;
    cached = false;
    method = "GET";
    headers = { };
    withCredentials = false;

    done({ service }: StandardResponse) {
        logger.debug(service.template);
    
      const result:Array<NPMProject> = (JSON.parse(service.template) as NPMQCObjectsResponse)
        .objects.map( (project: NPMProject) => {
        return {
            package:project.package,
            flags:project.flags,
            score:project.score,
            searchScore:project.searchScore
        };
      });

      service.template = JSON.stringify({
        result
      });
    }

}

class NPMQCObjectsPluginsService extends NPMService {
    name = "npm-plugins-service";
    url = "https://registry.npmjs.org/-/v1/search?text=keywords:qcobjects-command&size=250";
}

class NPMQCObjectsHandlersService extends NPMService {
    name = "npm-handlers-service";
    url = "https://registry.npmjs.org/-/v1/search?text=keywords:qcobjects-handler&size=250";
}

class NPMQCObjectsLibsService extends NPMService {
    name = "npm-libs-service";
    url = "https://registry.npmjs.org/-/v1/search?text=keywords:qcobjects-lib&size=250";
}


export {
    NPMQCObjectsResponse,
    NPMQCObjectsHandlersService,
    NPMQCObjectsPluginsService,
    NPMQCObjectsLibsService,
    NPMProject
};