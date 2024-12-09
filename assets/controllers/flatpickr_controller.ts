import { Controller } from "@hotwired/stimulus";
import flatpickr from "flatpickr";
import { French } from "flatpickr/dist/l10n/fr.js";

export default class extends Controller {
    static targets = ["dateInput"];
    declare dateInputTargets: NodeListOf<HTMLInputElement>;

    connect(): void {
        const mode =
            this.element.getAttribute("data-flatpickr-mode") || "sinceToday"; // Default mode
        const options = this.getFlatpickrOptions(mode);

        // Apply flatpickr to each target element
        this.dateInputTargets.forEach((input) => {
            flatpickr(input, {
                locale: French,
                position: "below center",
                allowInput: true,
                altInput: true,
                dateFormat: "Y-m-d",
                ...options });
        });
    }

    /**
     * Returns flatpickr options based on the mode ("sinceToday" or "dateOfBirth").
     * @param mode The configuration mode.
     */
    private getFlatpickrOptions(mode: string) {
        const today = new Date();

        if (mode === "dateOfBirth") {
            const defaultMinDate = new Date(today.getFullYear() - 130, today.getMonth(), today.getDate());
            const defaultMaxDate = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate());

            return {
                minDate:
                    this.element.getAttribute("data-flatpickr-min-date") ||
                    defaultMinDate.toISOString().split("T")[0],
                maxDate:
                    this.element.getAttribute("data-flatpickr-max-date") ||
                    defaultMaxDate.toISOString().split("T")[0],
                altFormat: "j F Y",
            };

        } else {

            return {
                // Default configuration for "sinceToday"
                minDate:
                    this.element.getAttribute("data-flatpickr-min-date") ||
                    "today",
                defaultDate:
                    this.element.getAttribute("data-flatpickr-default-date") ||
                    today.toISOString().split("T")[0],
                altFormat: "l j F Y",
            };

        }
    }
}
