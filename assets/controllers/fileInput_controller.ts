import { Controller } from "@hotwired/stimulus";

// Define the structure of the selectors used in this controller
interface Selectors {
    triggerSelector: string;
    fileInputSelector: string;
}

// Stimulus controller for handling file input through a trigger element
export default class extends Controller {
    // Define default selectors
    selectors: Selectors = {
        triggerSelector: ".file-input-trigger",
        fileInputSelector: ".file-input",
    };

    // Automatically called when the controller is connected to the DOM
    connect(): void {
        // Find all trigger elements within the current controller's scope
        const triggers = this.element.querySelectorAll<HTMLElement>(
            this.selectors.triggerSelector
        );

        // Add a click event listener to each trigger
        triggers.forEach((trigger) => {
            trigger.addEventListener(
                "click",
                this.handleTriggerClick.bind(this)
            );
        });
    }

    // Handle the click event for the trigger element
    handleTriggerClick(event: Event): void {
        event.preventDefault();

        // Find the associated file input element within the current controller's scope
        const fileInput = this.element.querySelector<HTMLInputElement>(
            this.selectors.fileInputSelector
        );

        if (fileInput) {
            fileInput.click();
        } else {
            console.error(
                "Aucun champ de fichier trouvé avec le sélecteur : ${this.selectors.fileInputSelector}"
            );
        }
    }
}
