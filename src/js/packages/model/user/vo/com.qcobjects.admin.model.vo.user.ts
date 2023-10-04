import { Package, VO } from "qcobjects";

export interface IUserVO {
    id: number;
    name: string;
    email: string;
}

export class UserVO extends VO implements IUserVO {
    accessToken!:string;
    id!: number;
    name!: string;
    email!: string;
}

Package("com.qcobjects.admin.vo.user", [
    UserVO
]);
