import { Controller } from "@hotwired/stimulus";
import { Tooltip } from "bootstrap";
import { select } from "./_utils.js";

export default class extends Controller {
    selectors = {
        tooltipsSelector: '[data-bs-toggle="tooltip"]',
    };

    connect() {
        this.tooltipTriggerList = select(this.selectors.tooltipsSelector, true);
        this.tooltipTriggerList.forEach((tooltipTriggerEl) => {
            new Tooltip(tooltipTriggerEl);
        });
    }
}
