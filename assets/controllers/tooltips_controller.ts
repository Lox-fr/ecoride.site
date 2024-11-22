import { Controller } from "@hotwired/stimulus";
import { Tooltip } from "bootstrap";
import { select } from "./_utils";

interface Selectors {
    tooltipsSelector: string;
}

export default class extends Controller {
    selectors: Selectors = {
        tooltipsSelector: '[data-bs-toggle="tooltip"]',
    };

    tooltipTriggerList: Element[] = [];

    connect(): void {
        this.tooltipTriggerList = select<Element>(
            this.selectors.tooltipsSelector,
            true
        );
        this.tooltipTriggerList.forEach((tooltipTriggerEl) => {
            new Tooltip(tooltipTriggerEl);
        });
    }
}
