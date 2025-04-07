import { Controller } from "@hotwired/stimulus";
import { Popover } from "bootstrap";
import { select } from "./_utils";

interface Selectors {
    popoversSelector: string;
}

export default class extends Controller {
    selectors: Selectors = {
        popoversSelector: '[data-bs-toggle="popover"]',
    };

    popoverTriggerList: Element[] = [];

    connect(): void {
        this.popoverTriggerList = select<Element>(
            this.selectors.popoversSelector,
            true
        );
        this.popoverTriggerList.forEach((popoverTriggerEl) => {
            new Popover(popoverTriggerEl);
        });
    }
}
