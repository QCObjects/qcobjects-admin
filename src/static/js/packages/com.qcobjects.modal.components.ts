import { ClassFactory, Component, ComponentDoneResponse, ComponentParams, New, QCObjectsShadowedElement } from "qcobjects";

type ModalParams = ComponentParams & { 
    __parent__?:Component;
    enclosureComponentClass?:string;}

class SignalComponent extends Component {
    _signals = {};
    on(signalName:string, callback:()=>void):void{
        (this._signals as any)[signalName] = callback;
    }

    fireSignal(signalName:string):void{
        ((this._signals as any)[signalName] as ()=>void).call(this);
    }
}

class Modal extends SignalComponent {
    __instanceID!:number;
    name = "modal";
    shadowed = true;
    tplsource = "inline";
    enclosureComponentClass!:string;
    submodal!:SignalComponent;
    template = `
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
    `;

    constructor(component:ModalParams){
        super(component);
        this.enclosureComponentClass = component.enclosureComponentClass as string;
        this.body.classList.add(`modal_container_${this.__instanceID}`);
        this.body.style.display = "contents";
        this.submodal = New(ClassFactory(component.enclosureComponentClass as string),{
            __parent__:this,
            shadowed: this.shadowed,
            data:this.data
        });
    }

    open (){
        this.body.style.display = "contents";
        setTimeout(()=>{
            (this.shadowRoot as QCObjectsShadowedElement)?.subelements(`.modal_background_${this.__instanceID},.modal.modal_${this.__instanceID}`)
            .map ((element:any)=> {
                return element.classList.add("open");
            });        
        },100);
    }

    close(remove = false){
        (this.shadowRoot as QCObjectsShadowedElement)?.subelements(`.modal_background_${this.__instanceID},.modal.modal_${this.__instanceID}`)
        .map ((element:any)=> {
            return element.classList.remove("open");
        });
        setTimeout(()=> {
            this.body.style.display = "none";
        },1000);
        if (remove){
            setTimeout(()=>{
                this.remove();
            },1000);
        }
    }

    remove (){
        this.body.remove();
    }

    done(standardResponse: ComponentDoneResponse): Promise<ComponentDoneResponse> {
        const submodalRoot = (this.shadowRoot as QCObjectsShadowedElement).subelements(`.modal.modal_${this.__instanceID}`).pop();
        submodalRoot?.append(this.submodal.body);
        this.open();
        return super.done(standardResponse);
    }

}

export {Modal, ModalParams, SignalComponent};
