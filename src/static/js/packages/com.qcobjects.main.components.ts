import { Package } from "qcobjects";
import { AuthComponent } from "./com.qcobjects.auth.login";


class MainComponent extends AuthComponent {

}

Package("com.qcobjects.main.components", [
    MainComponent
]);

export {
    MainComponent
};