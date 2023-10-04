import{b as r}from"./chunk-NOVTE6NR.js";import{a,d as l}from"./chunk-LILTOOK2.js";var m=l(s=>{Object.defineProperty(s,"__esModule",{value:!0});s.SignalComponent=s.Modal=void 0;var n=r(),o=class extends n.Component{constructor(){super(...arguments),this._signals={}}on(t,e){this._signals[t]=e}fireSignal(t){this._signals[t].call(this)}};a(o,"SignalComponent");s.SignalComponent=o;var i=class extends o{constructor(t){super(t),this.name="modal",this.shadowed=!0,this.tplsource="inline",this.template=`
    <style>
    .modal_background_${this.__instanceID} {
        top:0;
        left:0;
        right:0;
        bottom:0;
        position:fixed;
        margin:0;
        padding:0;
        background-color:rgba(1,1,1,0.94);
        z-index:9999999;
        opacity:0;
        transition: 1s;
    }
    .modal.modal_${this.__instanceID}{
        margin: 0 auto;
        position: relative;
        max-width: 50% !important;
        max-height: 50% !important;
        min-width: 30% !important;
        min-height: 30% !important;
        text-align: center;
        margin-top: 27vh;
        opacity: 0;
        transition: 1s;
    }
    .open {
        opacity: 1 !important;
    }
    </style>
    <div class="modal_background_${this.__instanceID}">
    <div class="modal modal_${this.__instanceID}">
    </div>
    </div>
    `,this.enclosureComponentClass=t.enclosureComponentClass,this.body.classList.add(`modal_container_${this.__instanceID}`),this.body.style.display="contents",this.submodal=(0,n.New)((0,n.ClassFactory)(t.enclosureComponentClass),{__parent__:this,shadowed:this.shadowed,data:this.data})}open(){this.body.style.display="contents",setTimeout(()=>{this.shadowRoot?.subelements(`.modal_background_${this.__instanceID},.modal.modal_${this.__instanceID}`).map(t=>t.classList.add("open"))},100)}close(t=!1){this.shadowRoot?.subelements(`.modal_background_${this.__instanceID},.modal.modal_${this.__instanceID}`).map(e=>e.classList.remove("open")),setTimeout(()=>{this.body.style.display="none"},1e3),t&&setTimeout(()=>{this.remove()},1e3)}remove(){this.body.remove()}done(t){return this.shadowRoot.subelements(`.modal.modal_${this.__instanceID}`).pop()?.append(this.submodal.body),this.open(),super.done(t)}};a(i,"Modal");s.Modal=i});export{m as a};
//# sourceMappingURL=chunk-XI7YR2VW.js.map
