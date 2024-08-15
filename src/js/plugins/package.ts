import { Package } from "qcobjects";
import PluginsApi from "../packages/com.qcobjects.admin.api.plugins";

Package("qcobjects-admin/plugins",
Package("qcobjects-admin/public/js/plugins/index.cjs",
Package("com.qcobjects.admin.api.plugins",[
    PluginsApi
]) as Array<never>));

export default PluginsApi;