"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const qcobjects_1 = require("qcobjects");
const com_qcobjects_admin_model_manager_user_1 = require("./model/user/com.qcobjects.admin.model.manager.user");
const com_qcobjects_data_db_engines_1 = require("./record_manager/com.qcobjects.data.db.engines");
class AuthUserHandler extends qcobjects_1.BackendMicroservice {
    constructor() {
        super(...arguments);
        this.responseHeaders = {
            "Content-Type": "application/json"
        };
    }
    extractAccessToken() {
        const authentication = this.request.headers.authentication;
        const accessToken = [...authentication.matchAll(/Bearer (.*)/g)]?.[0]?.[1];
        return accessToken;
    }
    auth(accessToken) {
        return new Promise((resolve, reject) => {
            try {
                const usersHandler = new com_qcobjects_admin_model_manager_user_1.UserManager();
                (async () => {
                    const user = await usersHandler.filter(com_qcobjects_data_db_engines_1.DBCondition.EQUAL({
                        fieldName: "userToken",
                        fieldValue: accessToken
                    })).get();
                    resolve(user);
                })();
            }
            catch (e) {
                reject(e);
            }
        });
    }
    get() {
        (() => {
            return new Promise((resolve) => {
                const accessToken = this.extractAccessToken();
                (async () => {
                    const user = await this.auth(accessToken);
                    if (user !== undefined) {
                        this.body = (0, qcobjects_1._DataStringify)({
                            userAccessToken: user?.accessToken,
                            user,
                            authenticated: true
                        });
                    }
                    else {
                        this.body = (0, qcobjects_1._DataStringify)({
                            userAccessToken: "",
                            user: {},
                            authenticated: false
                        });
                    }
                    resolve();
                })();
            });
        })()
            .then(() => {
            this.done();
        });
    }
}
exports.default = AuthUserHandler;
