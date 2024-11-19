import { Controller } from "@hotwired/stimulus";
import { select } from "./_utils.js";

export default class extends Controller {
    selectors = {
        pagePreloader: "#pagePreloader",
    };
    static initialized = false;

    connect() {
        this.removePreloader();

        if (!this.constructor.initialized) {
            this.listenTurbo();
            this.constructor.initialized = true;
        }
    }

    removePreloader() {
        const pagePreloader = select(this.selectors.pagePreloader);
        if (pagePreloader) {
            pagePreloader.remove();
        }
    }

    listenTurbo() {
        document.addEventListener("turbo:load", () => {
            this.removePreloader();
        });
    }
}
