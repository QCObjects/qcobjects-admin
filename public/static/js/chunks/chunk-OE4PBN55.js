import{a as u}from"./chunk-EEDEAUTA.js";import{a,b as m,c as d,d as g}from"./chunk-4BSOXMA3.js";var h=m(r=>{Object.defineProperty(r,"__esModule",{value:!0});var s=g(),n=u(),i=d();(0,s.Package)("com.qcobjects.admin.plugins.controllers",[a(class extends n.XTermController{constructor(c){super(c),[`npm install ${this.component.data.package}`,`
Getting command response...`].map((t,o)=>{setTimeout(()=>{(0,n.typewriter)(this.term,t),this.term.write(`\r
$ `)},1500*(o+1))});let e=new s.Service;e.url="/admin/api/plugins/i",e.method="POST",e.done=()=>s.logger.debug(`Plugin ${this.component.data.package} was installed.`),e.data={package:this.component.data.package},(0,s.serviceLoader)(e,!1).then(({service:t})=>{JSON.parse(t.template).message.split(`
`).map((l,p)=>{setTimeout(()=>{(0,n.typewriter)(this.term,`${l}`),this.term.write(`\r
 `)},800*(p+1))}),i.NotificationComponent.success(`${this.component.data.package} was installed!`)}).catch(t=>{s.logger.warn(t.message),i.NotificationComponent.danger(`It was not possible to install ${this.component.data.package}.`)})}},"InstallPluginsController")])});export{h as a};
//# sourceMappingURL=chunk-OE4PBN55.js.map
