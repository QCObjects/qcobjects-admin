import{a as g}from"./chunk-EEDEAUTA.js";import{a as o,b as p,d as m}from"./chunk-4BSOXMA3.js";var u=p(a=>{Object.defineProperty(a,"__esModule",{value:!0});var t=m(),n=g();(0,t.Package)("com.qcobjects.admin.plugins.controllers",[o(class extends n.XTermController{constructor(i){super(i),[`npm install ${this.component.data.package}`,`
Getting command response...`].map((s,r)=>{setTimeout(()=>{(0,n.typewriter)(this.term,s),this.term.write(`\r
$ `)},1500*(r+1))});let e=new t.Service;e.url="https://192.168.100.10:8443/admin/api/plugins/i",e.method="POST",e.done=()=>t.logger.debug(`Plugin ${this.component.data.package} was installed.`),e.data={package:"qcobjects-lib-mailchimp-api"},(0,t.serviceLoader)(e,!1).then(({service:s})=>{JSON.parse(s.template).message.split(`
`).map((c,l)=>{setTimeout(()=>{(0,n.typewriter)(this.term,c)},800*(l+1))})}).catch(s=>t.logger.warn(s.message))}},"InstallPluginsController")])});export{u as a};
//# sourceMappingURL=chunk-4WE57B5N.js.map
