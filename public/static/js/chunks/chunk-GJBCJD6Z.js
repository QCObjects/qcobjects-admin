import{a as t,b as a,d}from"./chunk-4BSOXMA3.js";var r=a(i=>{Object.defineProperty(i,"__esModule",{value:!0});var s=d();(0,s.Package)("com.qcobjects.admin.components",[t(class extends s.Component{constructor(){super(...arguments),this.assignRoutingParams=!0,this.shadowed=!0}},"HeaderComponent"),t(class extends s.Component{constructor(){super(...arguments),this.shadowed=!0,this.tplsource="inline",this.name="shadowed-card",this.template=`
    <!-- shadowed card
    To use this card, insert this component tag in your container file
         <card name="shadowed-card" shadowed="true" data-title="" data-description="" data-image=""></component>
    -->
    <style>
      /* If you use shadowed=true
      This style will be automatically shadowed in the browser */
      @import url("./css/components/card.css");
    </style>
    
    <div class="card">
      <div class="img">
      <slot id="slot-logo" name="logo"><img src="img/placeholder.svg" alt="Avatar" style="width:100%"></slot>
      </div>
      <div class="container">
        <div class="title">
          <slot id="slot-card-title" name="card_title"></slot>
        </div>
        <div class="description">
        <slot id="slot-card-description" name="card_description"></slot>
        </div>
        <div class="card-button">
          <slot id="slot-card-button" name="card-button" ></slot>
        </div>
      </div>
    </div>    
    `}},"ShadowedCard"),t(class extends s.Component{constructor(e){e.body?.setAttribute("serviceClass","VersionStringService"),e.body?.setAttribute("response-to","data"),super(e),this.name="version-string",this.tplsource="inline",this.template=`
    <p>Version: QCObjects {{qcobjects}} CLI: {{cli}} SDK: {{sdk}}</p>
    `}},"VersionComponent")])});export{r as a};
//# sourceMappingURL=chunk-GJBCJD6Z.js.map
