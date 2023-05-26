import{a as g}from"./chunk-EEDEAUTA.js";import{a as r,b as p,c as m,d}from"./chunk-4BSOXMA3.js";var h=p(a=>{Object.defineProperty(a,"__esModule",{value:!0});var s=d(),n=g(),u=m();(0,s.Package)("com.qcobjects.admin.plugins.controllers",[r(class extends n.XTermController{constructor(i){super(i),[`npm install ${this.component.data.package}`,`
Getting command response...`].map((t,o)=>{setTimeout(()=>{(0,n.typewriter)(this.term,t),this.term.write(`\r
$ `)},1500*(o+1))});let e=new s.Service;e.url="/admin/api/plugins/i",e.method="POST",e.done=()=>s.logger.debug(`Plugin ${this.component.data.package} was installed.`),e.data={package:this.component.data.package},(0,s.serviceLoader)(e,!1).then(({service:t})=>{JSON.parse(t.template).message.split(`
`).map((c,l)=>{setTimeout(()=>{(0,n.typewriter)(this.term,`${c}`),this.term.write(`\r
 `)},800*(l+1))}),u.NotificationComponent.success(`${this.component.data.package} was installed!`)}).catch(t=>s.logger.warn(t.message))}},"InstallPluginsController")])});export{h as a};
//# sourceMappingURL=chunk-MB24RTHA.js.map
