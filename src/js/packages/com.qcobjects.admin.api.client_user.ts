"use strict";

import { BackendMicroservice, _DataStringify } from "qcobjects";
import { UserManager } from "./model/user/com.qcobjects.admin.model.manager.user";
import { UserVO } from "./model/user/vo/com.qcobjects.admin.model.vo.user";
import { DBCondition } from "./record_manager/com.qcobjects.data.db.engines";

interface AuthData {
  userAccessToken: string;
  authenticated: boolean;
  user: UserVO
}

type RequestAccessToken = any | {
  headers: {
    authentication:string;
  }
}

class AuthUserHandler extends BackendMicroservice {

  responseHeaders = {
    "Content-Type": "application/json"
  };

  extractAccessToken():string {
    const authentication = (this.request as RequestAccessToken).headers.authentication as string;
    const accessToken = [...authentication.matchAll(/Bearer (.*)/g)]?.[0]?.[1];
    return accessToken;
  }

  auth(accessToken: string): Promise<UserVO | undefined> {
    return new Promise((resolve, reject)=> {
      try {
        const usersHandler: UserManager = new UserManager();
        (async ()=>{
          const user: UserVO = await usersHandler.filter(
            DBCondition.EQUAL({
              fieldName: "userToken",
              fieldValue: accessToken
            })
          ).get() as UserVO;
          resolve(user);
        })();
  
      } catch (e) {
        reject(e);
      }
    });
  }

  get() {
    ((): Promise<void> => {
      return new Promise((resolve) => {
        const accessToken = this.extractAccessToken();
        this.auth(accessToken)
        .then((user:UserVO| undefined)=>{
          this.body = _DataStringify({
            userAccessToken: user?.accessToken,
            user,
            authenticated: true
          } as AuthData);
  
          resolve();
  
        });

      });
    })()
      .then(() => {
        this.done();
      });
  }


}

export default AuthUserHandler;