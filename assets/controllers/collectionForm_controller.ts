import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
    static targets = ["collectionContainer"];

    static values = {
        index: Number,
        prototype: String,
    };

    declare collectionContainerTarget: HTMLElement;
    declare indexValue: number;
    declare prototypeValue: string;

    connect(): void {
        this.collectionContainerTarget
            .querySelectorAll("li")
            .forEach((item) => this.addDeleteLink(item as HTMLElement));
    }

    addCollectionElement() {
        const item = document.createElement("li");
        item.classList.add("collectionItem");
        item.innerHTML = this.prototypeValue.replace(
            /__name__/g,
            this.indexValue.toString()
        );
        this.collectionContainerTarget.appendChild(item);
        this.addDeleteLink(item);
        this.indexValue++;
    }

    private addDeleteLink(item: HTMLElement): void {
        const removeFormButton = document.createElement("button");
        removeFormButton.classList.add("collectionItemDeleteLink");
        removeFormButton.setAttribute("aria-label", "Supprimer cet élément");
        removeFormButton.setAttribute("type", "button");
        const trashIconElement = document.querySelector("[data-trash-icon]");

        if (trashIconElement) {
            const trashIconHTML = trashIconElement.getAttribute("data-trash-icon");
            if (trashIconHTML) {
                removeFormButton.innerHTML = trashIconHTML;
            }
        } else {
            removeFormButton.innerText = "Supprimer cet élément";
        }

        item.appendChild(removeFormButton);

        removeFormButton.addEventListener("click", (e: Event) => {
            e.preventDefault();
            item.remove();
        });
    }
}
