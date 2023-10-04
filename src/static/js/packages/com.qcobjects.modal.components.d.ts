import { Component, ComponentDoneResponse, ComponentParams } from "qcobjects";
type ModalParams = ComponentParams & {
    __parent__?: Component;
    enclosureComponentClass?: string;
};
declare class SignalComponent extends Component {
    _signals: {};
    on(signalName: string, callback: () => void): void;
    fireSignal(signalName: string): void;
}
declare class Modal extends SignalComponent {
    __instanceID: number;
    name: string;
    shadowed: boolean;
    tplsource: string;
    enclosureComponentClass: string;
    submodal: SignalComponent;
    template: string;
    constructor(component: ModalParams);
    open(): void;
    close(remove?: boolean): void;
    remove(): void;
    done(standardResponse: ComponentDoneResponse): Promise<ComponentDoneResponse>;
}
export { Modal, ModalParams, SignalComponent };
