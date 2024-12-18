import { Controller } from "@hotwired/stimulus";
import { select, on } from "./_utils";

interface Selectors {
    userBtnSelector: string;
}

export default class extends Controller {
    selectors: Selectors = {
        userBtnSelector: ".userBtn",
    };

    userButtons: HTMLElement[] = [];

    connect(): void {
        // Select all elements matching the user button selector and store them in userButtons
        this.userButtons = select<HTMLElement>(
            this.selectors.userBtnSelector,
            true
        );

        // Attach a click event listener to all user buttons
        on(
            "click",
            this.selectors.userBtnSelector,
            (e) => {
                this.userButtons.forEach((userBtn) => {
                    // If the button is not the one that was clicked and is currently expanded,
                    userBtn !== e.currentTarget &&
                    userBtn.getAttribute("aria-expanded") === 'true'
                        // trigger a click to close it
                        ? userBtn.click()
                        : null;
                });
            },
            true
        );
    }
}
