/// <reference types="qcobjects" />
/// <reference types="node" resolution-mode="require"/>
declare module "js/plugins/i/config" { }
declare module "js/plugins/u/config" { }
declare module "js/plugins/config" {
    import "js/plugins/i/config";
    import "js/plugins/u/config";
}
declare module "js/handlers/config" { }
declare module "js/libs/config" { }
declare module "js/version/config" { }
declare module "js/cmdshell/config" { }
declare module "js/client_config/config" { }
declare module "js/client_user/config" { }
declare module "js/routes/config" {
    import "js/plugins/config";
    import "js/handlers/config";
    import "js/libs/config";
    import "js/version/config";
    import "js/cmdshell/config";
    import "js/client_config/config";
    import "js/client_user/config";
}
declare module "js/config" {
    import "js/routes/config";
}
declare module "js/packages/com.qcobjects.api.services" {
    import { BackendMicroservice, Microservice } from "qcobjects";
    class QCObjectsAdmin extends BackendMicroservice {
        constructor(microservice: Microservice);
    }
    export default QCObjectsAdmin;
}
declare module "js/package" {
    import QCObjectsAdmin from "js/packages/com.qcobjects.api.services";
    export default QCObjectsAdmin;
}
declare module "js/index" {
    import "js/config";
    import api from "js/package";
    export default api;
}
declare module "js/packages/services/com.qcobjects.admin.services.npm" {
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
    class NPMService extends Service {
        name: string;
        external: boolean;
        cached: boolean;
        method: string;
        headers: {};
        withCredentials: boolean;
        done({ service }: StandardResponse): void;
    }
    class NPMQCObjectsPluginsService extends NPMService {
        name: string;
        url: string;
    }
    class NPMQCObjectsHandlersService extends NPMService {
        name: string;
        url: string;
    }
    class NPMQCObjectsLibsService extends NPMService {
        name: string;
        url: string;
    }
    export { NPMQCObjectsResponse, NPMQCObjectsHandlersService, NPMQCObjectsPluginsService, NPMQCObjectsLibsService, NPMProject };
}
declare module "js/packages/services/serviceLoaderNode" {
    import { Service } from "qcobjects";
    const serviceLoaderNode: (service: Service) => Promise<{
        request: any;
        service: Service;
    }>;
    export default serviceLoaderNode;
}
declare module "js/packages/tools/packageInfo" {
    const packageInfo: (pName: string) => {
        name: string;
        description: string;
        version: string;
        "repository.url": string;
    };
    export default packageInfo;
}
declare module "js/packages/com.qcobjects.admin.api.libs" {
    import { BackendMicroservice } from "qcobjects";
    class PluginsHandler extends BackendMicroservice {
        done(): void;
    }
    export default PluginsHandler;
}
declare module "js/packages/com.qcobjects.admin.api.client_config" {
    import { BackendMicroservice } from "qcobjects";
    class ConfigHandler extends BackendMicroservice {
        responseHeaders: {
            "Content-Type": string;
        };
        done(): void;
    }
    export default ConfigHandler;
}
declare module "js/client_config/package" { }
declare module "js/client_config/index" {
    import "js/client_config/config";
    import api from "js/packages/com.qcobjects.admin.api.libs";
    import "js/client_config/package";
    export default api;
}
declare module "js/packages/record_manager/com.qcobjects.data.db.engines" {
    import { VO } from "qcobjects";
    export interface IDBFilter {
        fieldName: string;
        fieldValue: string | number | null;
        fieldCondition: "AND" | "OR" | "EQUAL" | "NOR" | "IN" | "NOT_IN" | "NOT";
    }
    export class DBCondition {
        static AND({ fieldName, fieldValue }: {
            fieldName: string;
            fieldValue: any;
        }): IDBFilter;
        static OR({ fieldName, fieldValue }: {
            fieldName: string;
            fieldValue: any;
        }): IDBFilter;
        static EQUAL({ fieldName, fieldValue }: {
            fieldName: string;
            fieldValue: any;
        }): IDBFilter;
        static NOR({ fieldName, fieldValue }: {
            fieldName: string;
            fieldValue: any;
        }): IDBFilter;
        static IN({ fieldName, fieldValue }: {
            fieldName: string;
            fieldValue: any;
        }): IDBFilter;
        static NOT_IN({ fieldName, fieldValue }: {
            fieldName: string;
            fieldValue: any;
        }): IDBFilter;
        static NOT({ fieldName, fieldValue }: {
            fieldName: string;
            fieldValue: any;
        }): IDBFilter;
    }
    export interface IDBEngine {
        name: string;
        databaseName: string;
        __filter: Array<IDBFilter>;
        __collection: string;
        getAllRecords(): Promise<Array<VO>>;
        filter(..._filter: Array<IDBFilter>): IDBEngine;
        get(): Promise<VO>;
        save(item: VO): Promise<VO>;
        collection(collectionName: string): IDBEngine;
        database(collectionName: string): IDBEngine;
    }
    export interface IDBRecordManager {
        parent?: VO;
        __filter: Array<IDBFilter>;
        filter(..._filter: Array<IDBFilter>): IDBRecordManager;
        records(): Promise<Array<VO>>;
        push(item: VO): Promise<VO>;
        get(): Promise<VO>;
    }
    export class DBEngine implements IDBEngine {
        __filter: IDBFilter[];
        __collection: string;
        name: string;
        databaseName: string;
        getAllRecords(): Promise<VO[]>;
        filter(..._filter: IDBFilter[]): IDBEngine;
        collection(collectionName: string): IDBEngine;
        database(collectionName: string): IDBEngine;
        get(): Promise<VO>;
        save(item: VO): Promise<VO>;
    }
}
declare module "js/packages/record_manager/engines/com.qcobjects.data.db.engines.sqlite3" {
    import { VO } from "qcobjects";
    import { DBEngine, IDBEngine, IDBFilter } from "js/packages/record_manager/com.qcobjects.data.db.engines";
    export class SQLite3Engine extends DBEngine implements IDBEngine {
        __filter: IDBFilter[];
        __collection: string;
        name: string;
        databaseName: string;
        __fields: string;
        getAllRecords(): Promise<VO[]>;
        filter(..._filter: IDBFilter[]): IDBEngine;
        get(): Promise<VO>;
        collection(collectionName: string): IDBEngine;
        database(databaseName: string): IDBEngine;
        save(item: VO): Promise<VO>;
    }
}
declare module "js/packages/record_manager/engines/com.qcobjects.data.db.engines.postgresql" {
    import { VO } from "qcobjects";
    import { DBEngine, IDBEngine, IDBFilter } from "js/packages/record_manager/com.qcobjects.data.db.engines";
    export class PostgreSQLEngine extends DBEngine implements IDBEngine {
        __filter: IDBFilter[];
        name: string;
        databaseName: string;
        getAllRecords(): Promise<VO[]>;
        filter(..._filter: IDBFilter[]): IDBEngine;
        get(): Promise<VO>;
        save(item: VO): Promise<VO>;
    }
}
declare module "js/packages/record_manager/engines/com.qcobjects.data.db.engines.mysql" {
    import { VO } from "qcobjects";
    import { DBEngine, IDBEngine, IDBFilter } from "js/packages/record_manager/com.qcobjects.data.db.engines";
    export class MySQLEngine extends DBEngine implements IDBEngine {
        __filter: IDBFilter[];
        name: string;
        databaseName: string;
        getAllRecords(): Promise<VO[]>;
        filter(..._filter: IDBFilter[]): IDBEngine;
        get(): Promise<VO>;
        save(item: VO): Promise<VO>;
    }
}
declare module "js/packages/record_manager/engines/com.qcobjects.data.db.engines.mongodb" {
    import { VO } from "qcobjects";
    import { DBEngine, IDBEngine, IDBFilter } from "js/packages/record_manager/com.qcobjects.data.db.engines";
    export class MongoDBEngine extends DBEngine implements IDBEngine {
        __filter: IDBFilter[];
        name: string;
        databaseName: string;
        getAllRecords(): Promise<VO[]>;
        filter(..._filter: IDBFilter[]): IDBEngine;
        get(): Promise<VO>;
        save(item: VO): Promise<VO>;
    }
}
declare module "js/packages/record_manager/engines/com.qcobjects.data.db.engines.cosmosdb" {
    import { VO } from "qcobjects";
    import { DBEngine, IDBEngine, IDBFilter } from "js/packages/record_manager/com.qcobjects.data.db.engines";
    export class CosmosDBEngine extends DBEngine implements IDBEngine {
        __filter: IDBFilter[];
        name: string;
        databaseName: string;
        getAllRecords(): Promise<VO[]>;
        filter(..._filter: IDBFilter[]): IDBEngine;
        get(): Promise<VO>;
        save(): Promise<VO>;
    }
}
declare module "js/packages/record_manager/mockData" {
    const mockData: ({
        id: number;
        firstName: string;
        lastName: string;
        email: string;
        phoneNumber: string;
        address: string;
        city: string;
        state: null;
        country: string;
        age: number;
        email2: string;
        userToken: string;
    } | {
        id: number;
        firstName: string;
        lastName: string;
        email: string;
        phoneNumber: string;
        address: string;
        city: string;
        state: string;
        country: string;
        age: number;
        email2: string;
        userToken: string;
    })[];
    export default mockData;
}
declare module "js/packages/record_manager/engines/com.qcobjects.data.db.engines.mockupdb" {
    import { VO } from "qcobjects";
    import { DBEngine, IDBEngine, IDBFilter } from "js/packages/record_manager/com.qcobjects.data.db.engines";
    export class MockupDBEngine extends DBEngine implements IDBEngine {
        __filter: IDBFilter[];
        __collection: string;
        name: string;
        databaseName: string;
        getAllRecords(): Promise<VO[]>;
        filter(..._filter: IDBFilter[]): IDBEngine;
        whereClause(): string;
        get(): Promise<VO>;
        collection(collectionName: string): IDBEngine;
        save(item: VO): Promise<VO>;
    }
}
declare module "js/packages/record_manager/com.qcobjects.data.db.engine.gateway" {
    import { DBEngine, IDBEngine } from "js/packages/record_manager/com.qcobjects.data.db.engines";
    import { SQLite3Engine } from "js/packages/record_manager/engines/com.qcobjects.data.db.engines.sqlite3";
    import { PostgreSQLEngine } from "js/packages/record_manager/engines/com.qcobjects.data.db.engines.postgresql";
    import { MySQLEngine } from "js/packages/record_manager/engines/com.qcobjects.data.db.engines.mysql";
    import { MongoDBEngine } from "js/packages/record_manager/engines/com.qcobjects.data.db.engines.mongodb";
    import { CosmosDBEngine } from "js/packages/record_manager/engines/com.qcobjects.data.db.engines.cosmosdb";
    import { MockupDBEngine } from "js/packages/record_manager/engines/com.qcobjects.data.db.engines.mockupdb";
    export class DBSelectedEngine {
        static selectedEngineName: string;
        static engineInstance?: DBEngine | undefined;
    }
    export const engines: {
        mockupdb: typeof MockupDBEngine;
        sqlite3: typeof SQLite3Engine;
        postgresql: typeof PostgreSQLEngine;
        mysql: typeof MySQLEngine;
        mongodb: typeof MongoDBEngine;
        cosmosdb: typeof CosmosDBEngine;
    };
    export const setEngine: (configObj: IDBEngine) => DBEngine;
    export const getEngine: () => DBEngine;
}
declare module "js/packages/record_manager/com.qcobjects.data.record_manager" {
    import { InheritClass, VO } from "qcobjects";
    import { IDBFilter, IDBRecordManager } from "js/packages/record_manager/com.qcobjects.data.db.engines";
    export type IRecordFilter = IDBFilter;
    export class RecordFilter implements IRecordFilter {
        fieldName: string;
        fieldValue: string | number | null;
        fieldCondition: "AND" | "OR";
    }
    export class RecordManager extends InheritClass implements IDBRecordManager {
        parent?: VO | undefined;
        __filter: IDBFilter[];
        filter(..._filter: IDBFilter[]): IDBRecordManager;
        records(): Promise<VO[]>;
        push(item: VO): Promise<VO>;
        get(): Promise<VO>;
    }
}
declare module "js/packages/model/user/com.qcobjects.admin.model.manager.user" {
    import { RecordManager } from "js/packages/record_manager/com.qcobjects.data.record_manager";
    import { IDBRecordManager } from "js/packages/record_manager/com.qcobjects.data.db.engines";
    export class UserManager extends RecordManager implements IDBRecordManager {
    }
}
declare module "js/packages/model/user/vo/com.qcobjects.admin.model.vo.user" {
    import { VO } from "qcobjects";
    export interface IUserVO {
        id: number;
        name: string;
        email: string;
    }
    export class UserVO extends VO implements IUserVO {
        accessToken: string;
        id: number;
        name: string;
        email: string;
    }
}
declare module "js/packages/com.qcobjects.admin.api.client_user" {
    import { BackendMicroservice } from "qcobjects";
    import { UserVO } from "js/packages/model/user/vo/com.qcobjects.admin.model.vo.user";
    class AuthUserHandler extends BackendMicroservice {
        responseHeaders: {
            "Content-Type": string;
        };
        extractAccessToken(): string;
        auth(accessToken: string): Promise<UserVO | undefined>;
        get(): void;
    }
    export default AuthUserHandler;
}
declare module "js/client_user/package" { }
declare module "js/client_user/index" {
    import "js/client_user/config";
    import api from "js/packages/com.qcobjects.admin.api.client_user";
    import "js/client_user/package";
    export default api;
}
declare module "js/packages/tools/cmdShell" {
    type CMDData = {
        cmd: string;
    };
    const execCmdShell: (data: CMDData) => Promise<string>;
    export { CMDData, execCmdShell };
}
declare module "js/packages/com.qcobjects.admin.api.cmdshell" {
    import { BackendMicroservice } from "qcobjects";
    class CMDShell extends BackendMicroservice {
        post(formData: any): void;
    }
    export default CMDShell;
}
declare module "js/cmdshell/package" { }
declare module "js/cmdshell/index" {
    import "js/cmdshell/config";
    import api from "js/packages/com.qcobjects.admin.api.cmdshell";
    import "js/cmdshell/package";
    export default api;
}
declare module "js/packages/com.qcobjects.admin.api.handlers" {
    import { BackendMicroservice } from "qcobjects";
    class PluginsHandler extends BackendMicroservice {
        done(): void;
    }
    export default PluginsHandler;
}
declare module "js/handlers/package" { }
declare module "js/handlers/index" {
    import "js/handlers/config";
    import api from "js/packages/com.qcobjects.admin.api.handlers";
    import "js/handlers/package";
    export default api;
}
declare module "js/libs/package" { }
declare module "js/libs/index" {
    import "js/libs/config";
    import api from "js/packages/com.qcobjects.admin.api.libs";
    import "js/libs/package";
    export default api;
}
declare module "js/packages/com.qcobjects.admin.api.installPlugin" {
    import { BackendMicroservice } from "qcobjects";
    class ApiHandler extends BackendMicroservice {
        post(formData: Buffer): void;
    }
    export default ApiHandler;
}
declare module "js/packages/com.qcobjects.admin.api.plugins" {
    import { BackendMicroservice } from "qcobjects";
    class PluginsHandler extends BackendMicroservice {
        done(): void;
    }
    export default PluginsHandler;
}
declare module "js/packages/com.qcobjects.admin.api.routes" {
    import { BackendMicroservice, Microservice } from "qcobjects";
    class DisplayRoutes extends BackendMicroservice {
        constructor(microservice: Microservice);
    }
    export default DisplayRoutes;
}
declare module "js/packages/com.qcobjects.admin.api.uninstallPlugin" {
    import { BackendMicroservice } from "qcobjects";
    class ApiHandler extends BackendMicroservice {
        post(formData: Buffer): void;
    }
    export default ApiHandler;
}
declare module "js/packages/com.qcobjects.admin.api.version" {
    import { BackendMicroservice, Microservice } from "qcobjects";
    class VersionHandler extends BackendMicroservice {
        constructor(microservice: Microservice);
    }
    export default VersionHandler;
}
declare module "js/plugins/package" { }
declare module "js/plugins/index" {
    import "js/plugins/config";
    import api from "js/packages/com.qcobjects.admin.api.plugins";
    import "js/plugins/package";
    export default api;
}
declare module "js/plugins/i/package" { }
declare module "js/plugins/i/index" {
    import "js/plugins/i/config";
    import api from "js/packages/com.qcobjects.admin.api.installPlugin";
    import "js/plugins/i/package";
    export default api;
}
declare module "js/plugins/u/package" { }
declare module "js/plugins/u/index" {
    import "js/plugins/u/config";
    import api from "js/packages/com.qcobjects.admin.api.uninstallPlugin";
    import "js/plugins/u/package";
    export default api;
}
declare module "js/routes/package" { }
declare module "js/routes/index" {
    import "js/routes/config";
    import api from "js/packages/com.qcobjects.admin.api.routes";
    import "js/routes/package";
    export default api;
}
declare module "js/version/package" { }
declare module "js/version/index" {
    import "js/version/config";
    import api from "js/packages/com.qcobjects.admin.api.version";
    import "js/version/package";
    export default api;
}
declare module "static/js/config" { }
declare module "static/js/customWidgets" { }
declare module "static/js/packages/com.qcobjects.installer" { }
declare module "static/js/packages/com.qcobjects.modal.components" {
    import { Component, ComponentDoneResponse, ComponentParams } from "qcobjects";
    type ModalParams = ComponentParams & {
        __parent__?: Component;
        enclosureComponentClass?: string;
    };
    class SignalComponent extends Component {
        _signals: {};
        on(signalName: string, callback: () => void): void;
        fireSignal(signalName: string): void;
    }
    class Modal extends SignalComponent {
        __instanceID: number;
        name: string;
        shadowed: boolean;
        tplsource: string;
        enclosureComponentClass: string;
        submodal: SignalComponent;
        template: string;
        constructor(component: ModalParams);
        open(): void;
        close(remove?: boolean): void;
        remove(): void;
        done(standardResponse: ComponentDoneResponse): Promise<ComponentDoneResponse>;
    }
    export { Modal, ModalParams, SignalComponent };
}
declare module "static/js/packages/com.qcobjects.auth.login" {
    import "@pwabuilder/pwaauth";
    import { Component, ComponentParams, ComponentDoneResponse, Service } from "qcobjects";
    import { Modal, ModalParams, SignalComponent } from "static/js/packages/com.qcobjects.modal.components";
    class LoginComponent extends SignalComponent {
        tplsource: string;
        template: string;
        constructor(component: ComponentParams);
        authConfig(_component: Component, configValue: string): string;
        signInCompleted(ev: any): void;
        done(standardResponse: ComponentDoneResponse): Promise<ComponentDoneResponse>;
    }
    class LoginModal extends Modal {
        constructor(component: ModalParams);
    }
    class AuthComponent extends Component {
        authenticated: boolean;
        loginModal: LoginModal;
        accessToken: string;
        lockedInnerHTML: string;
        authServiceInstance: Service;
        authBuild(): Promise<{
            request: XMLHttpRequest;
            component: Component;
        }>;
        rebuild(): Promise<{
            request: XMLHttpRequest;
            component: Component;
        }>;
        reset(): void;
        login(): Promise<void>;
        attachLoginModal(): void;
        getAccessToken(): Promise<string>;
        auth(): Promise<{
            component: AuthComponent;
        }>;
    }
    export { LoginComponent, LoginModal, AuthComponent };
}
declare module "static/js/packages/com.qcobjects.main.components" {
    import { AuthComponent } from "static/js/packages/com.qcobjects.auth.login";
    class MainComponent extends AuthComponent {
    }
    export { MainComponent };
}
declare module "static/js/packages/org.quickcorp.custom.effects" { }
declare module "static/js/packages/org.quickcorp.custom.models" { }
declare module "static/js/packages/com.qcobjects.sdk.components" {
    import { Component, ComponentDoneResponse, ComponentParams } from "qcobjects";
    type GridTableColum = {
        name: string;
        label: string;
        value: (row: any) => string;
    };
    type GridComponentParams = ComponentParams & {
        columns: string;
        rows: string;
        gridColumns?: Array<GridTableColum>;
    };
    class GridTableComponent extends Component {
        name: string;
        shadowed: boolean;
        tplsource: string;
        template: string;
        gridColumns?: Array<any>;
        __instanceID: number;
        constructor(o: GridComponentParams);
        hasColumn(k: string): boolean;
        getColumnLabel(k: string): string;
        buildRowObject(row: any): any;
        done(standardResponse: ComponentDoneResponse): Promise<ComponentDoneResponse>;
        appendLoading(): void;
        removeLoading(): void;
    }
    export { GridTableColum, GridComponentParams, GridTableComponent };
}
declare module "static/js/packages/com.qcobjects.admin.components" { }
declare module "static/js/packages/com.qcobjects.admin.controllers" { }
declare module "static/js/packages/org.quickcorp.custom.controllers" { }
declare module "static/js/packages/org.quickcorp.custom.views" { }
declare module "static/js/packages/external.components" {
    import { Controller, ControllerParams } from "qcobjects";
    import { Terminal } from "xterm";
    const typewriter: (term: Terminal, line: string) => void;
    class XTermController extends Controller {
        dependencies: never[];
        term: Terminal;
        constructor(controller: ControllerParams);
    }
    export { XTermController, typewriter };
}
declare module "static/js/packages/com.qcobjects.admin.plugins.controllers" { }
declare module "static/js/packages/com.qcobjects.admin.openshell.controllers" { }
declare module "static/js/packages/services/com.qcobjects.admin.static.services" { }
declare module "static/js/packages/services/com.qcobjects.admin.static.auth.services" { }
declare module "static/js/packages/org.quickcorp.custom" {
    import "static/js/packages/com.qcobjects.installer";
    import "static/js/packages/com.qcobjects.auth.login";
    import "static/js/packages/com.qcobjects.main.components";
    import "static/js/packages/org.quickcorp.custom.effects";
    import "static/js/packages/org.quickcorp.custom.models";
    import "static/js/packages/com.qcobjects.admin.components";
    import "static/js/packages/com.qcobjects.admin.controllers";
    import "static/js/packages/org.quickcorp.custom.controllers";
    import "static/js/packages/org.quickcorp.custom.views";
    import "static/js/packages/com.qcobjects.sdk.components";
    import "static/js/packages/com.qcobjects.admin.plugins.controllers";
    import "static/js/packages/com.qcobjects.admin.openshell.controllers";
    import "static/js/packages/services/com.qcobjects.admin.static.services";
    import "static/js/packages/services/com.qcobjects.admin.static.auth.services";
}
declare module "static/js/init" {
    /**
     * QCObjects New App PWA Template 1.x
     * ________________
     *
     * Author: Jean Machuca <correojean@gmail.com>
     *
     * Cross Browser Javascript Framework for MVC Patterns
     * QuickCorp/QCObjects is licensed under the
     * GNU Lesser General Public License v3.0
     * [LICENSE] (https://github.com/QuickCorp/QCObjects/blob/master/LICENSE.txt)
     *
     * Permissions of this copyleft license are conditioned on making available
     * complete source code of licensed works and modifications under the same
     * license or the GNU GPLv3. Copyright and license notices must be preserved.
     * Contributors provide an express grant of patent rights. However, a larger
     * work using the licensed work through interfaces provided by the licensed
     * work may be distributed under different terms and without source code for
     * the larger work.
     *
     * Copyright (C) 2015 Jean Machuca,<correojean@gmail.com>
     *
     * Everyone is permitted to copy and distribute verbatim copies of this
     * license document, but changing it is not allowed.
    */
    import "static/js/config";
    import "static/js/packages/org.quickcorp.custom";
    import "static/js/customWidgets";
}
