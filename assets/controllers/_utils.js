/* Easy access control function : throw return if a needed element is missing. */
export function accessControl(elementList) {
    elementList.forEach(({ element, description }, index) => {
        if (!element) {
            const errorMsg = "The element " + description + " at index " + index + " is missing or invalid.";
            console.error(errorMsg);
            throw new Error(errorMsg);
        }
    });
}

/* Easy selector function : return one or more Element object, null if don't exist. */
export function select(cssSelector, all = false) {
    cssSelector = cssSelector.trim();
    if (all) {
        return [...document.querySelectorAll(cssSelector)];
    } else {
        return document.querySelector(cssSelector);
    }
}

/* Easy event listener function : launch callback on event. */
export function on(eventType, cssSelector, callback, all = false) {
    let selectEl = select(cssSelector.trim(), all);
    accessControl([
        { element: selectEl, description: cssSelector + " (css selector)" },
    ]);
    if (all) {
        selectEl.forEach((e) => e.addEventListener(eventType, callback));
    } else {
        selectEl.addEventListener(eventType, callback);
    }
}

/* Easy on scroll event listener function : launch callback on scroll. */
export function onScroll(target, callback) {
    accessControl([{ element: target, description: "onScroll target" }]);
    target.addEventListener("scroll", callback);
}

/* Easy scrollTo function : taking into account the offset due to the fixing of the navbar. */
export function scrollToElement(element) {
    accessControl([{ element: element, description: "scrollTo target" }]);
    setTimeout(() => {
        window.scrollTo({
            top: element.offsetTop - (select("#navbar") ? select("#navbar").offsetHeight : 0),
            behavior: "smooth",
        });
    }, 500);
}
