import { Controller } from "@hotwired/stimulus";
import flatpickr from "flatpickr";
import { French } from "flatpickr/dist/l10n/fr.js";

export default class extends Controller {
    static targets = ["dateInput"];
    declare dateInputTargets: HTMLInputElement[];
    connect(): void {
        const defaultDate = this.element.getAttribute("data-flatpickrHomepage-default-date") || "today";
        flatpickr(this.dateInputTargets, {
            locale: French,
            minDate: "today",
            defaultDate: defaultDate,
            allowInput: true,
            altInput: true,
            altFormat: "l j F Y",
            dateFormat: "Y-m-d H:i:S",
            position: "below center",
        });
    }
}
