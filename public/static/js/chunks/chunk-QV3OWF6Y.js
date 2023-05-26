import{a as g}from"./chunk-EEDEAUTA.js";import{a as i,b as p,d as m}from"./chunk-4BSOXMA3.js";var u=p(o=>{Object.defineProperty(o,"__esModule",{value:!0});var s=m(),n=g();(0,s.Package)("com.qcobjects.admin.plugins.controllers",[i(class extends n.XTermController{constructor(a){super(a),[`npm install ${this.component.data.package}`,`
Getting command response...`].map((t,r)=>{setTimeout(()=>{(0,n.typewriter)(this.term,t+`\r
$ `),this.term.write(`\r
$ `)},1500*(r+1))});let e=new s.Service;e.url="https://192.168.100.10:8443/admin/api/plugins/i",e.method="POST",e.done=()=>s.logger.debug(`Plugin ${this.component.data.package} was installed.`),e.data={package:"qcobjects-lib-mailchimp-api"},(0,s.serviceLoader)(e,!1).then(({service:t})=>{JSON.parse(t.template).message.split(`\r
`).map((c,l)=>{setTimeout(()=>{(0,n.typewriter)(this.term,c+`\r
$ `),this.term.write(`\r
$ `)},800*(l+1))})}).catch(t=>s.logger.warn(t.message))}},"InstallPluginsController")])});export{u as a};
//# sourceMappingURL=chunk-QV3OWF6Y.js.map
