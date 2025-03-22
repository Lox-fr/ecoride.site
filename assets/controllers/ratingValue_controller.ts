import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
    static targets = ["range", "output"];

    declare rangeTarget: HTMLInputElement;
    declare outputTarget: HTMLElement;

    connect() {
        this.updateValue();
    }

    updateValue() {
        const value = this.rangeTarget.value;
        this.outputTarget.textContent = value;
    }
}
