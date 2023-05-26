import { Controller, Package, QCObjectsElement } from "qcobjects";
import { Fade, WipeRight } from "qcobjects-sdk";

Package("com.qcobjects.admin.controllers", [
  class SVGCodeAnimationController extends Controller {

    dependencies = [];
    elements = [];

    effectsConfig = {
      duration: 770,
      interval: 1000
    };

    timeloop: any = null;

    animateElements() {

      this.elements.sort().map((e) => {
        (e as HTMLElement).style.opacity = "0";
        (e as HTMLElement).style.transform = "scaleX(0)"; 
        return e;
      })
        .map((e, index) => setTimeout(() => {
          const fade = new Fade();
          fade.duration = this.effectsConfig.duration;
          const wipeRight = new WipeRight();
          wipeRight.duration = this.effectsConfig.duration;

          fade.apply(e, 0, 1);
          wipeRight.apply(e, 0, 1);
        }, (index-1) * this.effectsConfig.interval));
    }

    done() {
      if (Object.hasOwnProperty.call(this.component.data, "duration")) {
        this.effectsConfig.duration = this.component.data.duration;
        this.effectsConfig.interval = this.component.data.duration;
      }
      this.elements = (this.component.body as QCObjectsElement)
        .subelements(this.component.data.code_element) as Array<never>;
      this.animateElements();
      this.timeloop = setInterval(() => {
        this.animateElements();
      }, this.effectsConfig.interval * this.elements.length*4);
    }

  }
]);
