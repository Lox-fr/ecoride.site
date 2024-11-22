import { Controller } from "@hotwired/stimulus";
import { select } from "./_utils";

class BaseController extends Controller {
    static initialized: boolean = false;
}

interface Selectors {
    pagePreloader: string;
}

export default class extends BaseController {
    selectors: Selectors = {
        pagePreloader: "#pagePreloader",
    };

    connect(): void {
        this.removePreloader();

        if (!BaseController.initialized) {
            this.listenTurbo();
            BaseController.initialized = true;
        }
    }

    private removePreloader(): void {
        const pagePreloader = select<HTMLElement>(
            this.selectors.pagePreloader,
            false
        );
        if (pagePreloader.length > 0) {
            pagePreloader[0].remove();
        }
    }

    private listenTurbo(): void {
        document.addEventListener("turbo:load", () => {
            this.removePreloader();
        });
    }
}
