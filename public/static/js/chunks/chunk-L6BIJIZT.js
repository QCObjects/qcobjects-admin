import{a as u}from"./chunk-EEDEAUTA.js";import{a as i,b as p,d as m}from"./chunk-4BSOXMA3.js";var g=p(o=>{Object.defineProperty(o,"__esModule",{value:!0});var s=m(),r=u();(0,s.Package)("com.qcobjects.admin.plugins.controllers",[i(class extends r.XTermController{constructor(a){super(a),[`npm install ${this.component.data.package}`,`
Getting command response...`].map((e,n)=>{setTimeout(()=>{(0,r.typewriter)(this.term,e+`\r
$ `),this.term.write(`\r
$ `)},1500*(n+1))});let t=new s.Service;t.url="https://192.168.100.10:8443/admin/api/plugins/i",t.data={package:"qcobjects-lib-mailchimp-api"},(0,s.serviceLoader)(t,!1).then(({service:e})=>{JSON.parse(e.template).message.split(`\r
`).map((c,l)=>{setTimeout(()=>{(0,r.typewriter)(this.term,c+`\r
$ `),this.term.write(`\r
$ `)},800*(l+1))})}).catch(e=>s.logger.warn(e.message))}},"InstallPluginsController")])});export{g as a};
//# sourceMappingURL=chunk-L6BIJIZT.js.map
