import { Service } from "qcobjects";
type StandardResponse = {
    request: XMLHttpRequest;
    service: Service;
};
type NPMProject = {
    package: {
        name: string;
        scope: string;
        version: string;
        description: string;
        keywords: Array<string>;
        date: string;
        links: {
            npm: string;
            homepage: string;
            repository: string;
            bugs: string;
        };
        author: {
            name: string;
            url: string;
        };
        publisher: {
            username: string;
            email: string;
        };
        maintainers: Array<{
            username: string;
            email: string;
        }>;
    };
    flags: {
        unstable: boolean;
    };
    score: {
        final: number;
        detail: {
            quality: number;
            popularity: number;
            maintenance: number;
        };
    };
    searchScore: number;
};
type NPMQCObjectsResponse = {
    total: number;
    time: string;
    objects: Array<NPMProject>;
};
declare class NPMService extends Service {
    name: string;
    external: boolean;
    cached: boolean;
    method: string;
    headers: {};
    withCredentials: boolean;
    done({ service }: StandardResponse): void;
}
declare class NPMQCObjectsPluginsService extends NPMService {
    name: string;
    url: string;
}
declare class NPMQCObjectsHandlersService extends NPMService {
    name: string;
    url: string;
}
declare class NPMQCObjectsLibsService extends NPMService {
    name: string;
    url: string;
}
export { NPMQCObjectsResponse, NPMQCObjectsHandlersService, NPMQCObjectsPluginsService, NPMQCObjectsLibsService, NPMProject };
