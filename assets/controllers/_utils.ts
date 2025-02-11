type ElementDescriptor = {
    element: Element | NodeListOf<Element> | Element[] | null;
    description: string;
};

/**
 * Checks the accessibility of elements and throws an error if any required element is missing.
 * @param elementList List of elements and their descriptions to validate.
 */
export function accessControl(elementList: ElementDescriptor[]): void {
    elementList.forEach(({ element, description }, index) => {
        if (!element || (element instanceof NodeList && element.length === 0)) {
            const errorMsg = `The element "${description}" at index ${index} is missing or invalid.`;
            console.error(errorMsg);
            throw new Error(errorMsg);
        }
    });
}

/**
 * Simple selector function: returns an array of DOM elements.
 * @param cssSelector CSS selector to query.
 * @param all If `true`, returns all matching elements; otherwise, wraps a single matching element in an array.
 * @returns An array of elements (empty if no match is found).
 */
export function select<T extends Element>(
    cssSelector: string,
    all: boolean = false
): T[] {
    cssSelector = cssSelector.trim();
    if (all) {
        return Array.from(document.querySelectorAll<T>(cssSelector));
    } else {
        const element = document.querySelector<T>(cssSelector);
        return element ? [element] : [];
    }
}

/**
 * Adds an event listener to one or more selected elements.
 * @param eventType Type of event (e.g., "click").
 * @param cssSelector CSS selector of the target element(s).
 * @param callback Callback function to execute on the event.
 * @param all If `true`, applies the event listener to all matching elements.
 */
export function on<T extends Element>(
    eventType: string,
    cssSelector: string,
    callback: (event: Event) => void,
    all: boolean = false
): void {
    const selectEl = select<T>(cssSelector, all);
    accessControl([
        { element: selectEl, description: `${cssSelector} (CSS selector)` },
    ]);

    selectEl.forEach((el) => el.addEventListener(eventType, callback));
}

/**
 * Adds a "scroll" event listener to a specified element.
 * @param target Target element to attach the listener to.
 * @param callback Callback function to execute on scroll.
 */
export function onScroll(
    target: Element,
    callback: (event: Event) => void
): void {
    accessControl([{ element: target, description: "onScroll target" }]);
    target.addEventListener("scroll", callback);
}

/**
 * Smoothly scrolls to a target element, considering the offset caused by a fixed navbar.
 * @param element Target element to scroll to.
 */
export function scrollToElement(element: Element): void {
    accessControl([{ element: element, description: "scrollTo target" }]);

    setTimeout(() => {
        const navbar = select<HTMLElement>("#mainNavbar", false); // Retourne toujours un tableau
        let offset = 0;
        if (navbar.length > 0) {
            offset = navbar[0].offsetHeight;
        }
        window.scrollTo({
            top: element.getBoundingClientRect().top + window.scrollY - offset,
            behavior: "smooth",
        });
    }, 500);
}
