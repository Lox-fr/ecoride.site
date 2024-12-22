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
        removeFormButton.innerText = "Delete this item";

        item.appendChild(removeFormButton);

        removeFormButton.addEventListener("click", (e: Event) => {
            e.preventDefault();
            item.remove();
        });
    }
}
