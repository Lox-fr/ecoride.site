import { Controller } from "@hotwired/stimulus";
import { Popover } from "bootstrap";

export default class extends Controller {
    static values = {
        url: String,
    };

    declare readonly urlValue: string;

    private boundLoadDetails: () => void = this.loadDetails.bind(this); // Initialisation

    private isLoading = false;

    connect(): void {
        this.element.addEventListener("shown.bs.popover", this.boundLoadDetails);
    }

    disconnect(): void {
        this.element.removeEventListener("shown.bs.popover", this.boundLoadDetails);
    }

    async loadDetails(): Promise<void> {
        if (this.isLoading || !this.urlValue) return;

        this.isLoading = true;

        try {
            const response = await fetch(this.urlValue);
            if (!response.ok) throw new Error("Échec du chargement");

            const html = await response.text();

            // Temporarily detach to prevent infinite loop
            this.element.removeEventListener("shown.bs.popover", this.boundLoadDetails);

            const popover = Popover.getInstance(this.element);
            if (popover) {
                popover.setContent({
                    ".popover-body": html,
                });
            }

            // Reattach the event listener after slight delay
            setTimeout(() => {
                this.element.addEventListener("shown.bs.popover", this.boundLoadDetails);
                this.isLoading = false;
            }, 300);

        } catch (e) {
            console.error("Erreur lors du chargement des détails :", e);
            this.isLoading = false;
        }
    }
}
