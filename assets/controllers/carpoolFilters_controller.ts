import { Controller } from "@hotwired/stimulus";
// @ts-ignore
import Isotope from "isotope-layout";

export default class extends Controller {

    // Define targets for the HTML elements we will manipulate
    static targets = [
        "ecoButton",
        "priceSlider",
        "durationSlider",
        "ratingSlider",
        "reset"
    ];

    private isotopeInstances: { [key: string]: Isotope } = {};
    private filters: { [key: string]: any } = {};

    // Add the target properties
    ecoButtonTarget!: HTMLElement;
    priceSliderTarget!: HTMLInputElement;
    durationSliderTarget!: HTMLInputElement;
    ratingSliderTarget!: HTMLInputElement;
    resetTarget!: HTMLElement;

    connect() {
        // Initialize filters for today and following days
        this.filters = {
            filterCarpoolSearchResultsForToday: {},
            filterCarpoolSearchResultsForFollowingDays: {},
        };

        // Initialize Isotope for today grid if it exists
        const todayGrid = document.querySelector(".today-grid");
        if (todayGrid) {
            this.isotopeInstances["filterCarpoolSearchResultsForToday"] = new Isotope(".today-grid", {
                itemSelector: ".card",
                layoutMode: "fitRows",
                getSortData: {
                    price: "[data-price] parseInt",
                    duration: "[data-duration] parseInt",
                    rating: "[data-driver-rating] parseFloat",
                    ecological: "[data-ecological]",
                },
            });
            // Add event listener to adjust card psotion if necessary after filtering
            this.isotopeInstances["filterCarpoolSearchResultsForToday"].on('arrangeComplete', () => {
                this.adjustCardPositionsIfNecessary("today-grid");
                this.refreshFilterButtonText('filterCarpoolSearchResultsForToday');
            });
            this.adjustCardPositionsIfNecessary("today-grid");
        }

        // Initialize Isotope for following days grid if it exists
        const followingDaysGrid = document.querySelector(".following-days-grid");
        if (followingDaysGrid) {
            const followingDaysSection = document.getElementById("carpoolSearchResultsForFollowingDays");
            if (followingDaysSection) {
                const isVisible = window.getComputedStyle(followingDaysSection).display !== "none";

                const initFollowingDaysIsotope = () => {
                    if (!this.isotopeInstances["filterCarpoolSearchResultsForFollowingDays"]) {
                        this.isotopeInstances["filterCarpoolSearchResultsForFollowingDays"] =
                        new Isotope(followingDaysGrid,
                        {
                            itemSelector: ".card",
                            layoutMode: "fitRows",
                            getSortData: {
                                price: "[data-price] parseInt",
                                duration: "[data-duration] parseInt",
                                rating: "[data-driver-rating] parseFloat",
                                ecological: "[data-ecological]",
                            },
                        });
                        this.applyFilters("filterCarpoolSearchResultsForFollowingDays");
                        // Add event listener to adjust card positions if necessary after filtering
                        this.isotopeInstances["filterCarpoolSearchResultsForFollowingDays"].on('arrangeComplete',
                        () => {
                            this.adjustCardPositionsIfNecessary("following-days-grid");
                            this.refreshFilterButtonText('filterCarpoolSearchResultsForFollowingDays');
                        });
                        this.adjustCardPositionsIfNecessary("following-days-grid");
                    } else {
                        this.isotopeInstances["filterCarpoolSearchResultsForFollowingDays"].arrange();
                    }
                };

                if (isVisible) {
                    // If the section is already visible, initialize Isotope immediately
                    initFollowingDaysIsotope();
                } else {
                    // else, wait for the section to be shown
                    followingDaysSection.addEventListener("shown.bs.collapse", initFollowingDaysIsotope);
                }
            }
        }
    }

    applyFilters(groupId: string) {
        const currentFilters = this.filters[groupId];

        this.isotopeInstances[groupId].arrange({
            filter: (itemElem: Element) => {
                const price = parseInt(itemElem.getAttribute("data-price") || "0");
                const duration = parseInt(itemElem.getAttribute("data-duration") || "0");
                const rating = parseFloat(itemElem.getAttribute("data-driver-rating") || "0");
                const ecological = itemElem.getAttribute("data-ecological") === "true";

                const priceMatch =
                    currentFilters.price !== undefined ? price <= currentFilters.price : true;
                const durationMatch =
                    currentFilters.duration !== undefined ? duration <= currentFilters.duration : true;
                const ratingMatch =
                    currentFilters.rating !== undefined ? rating >= currentFilters.rating : true;
                const ecoMatch =
                    currentFilters.eco ? ecological : true;

                return priceMatch && durationMatch && ratingMatch && ecoMatch;
            },
        });
    }

    toggleEco(event: Event) {
        const button = event.currentTarget as HTMLElement;
        const groupId = button.dataset.groupId!;
        const isActive = button.classList.toggle("active");
        this.filters[groupId].eco = isActive;
        this.applyFilters(groupId);
    }

    filterByPrice(event: Event) {
        const input = event.target as HTMLInputElement;
        const groupId = input.dataset.groupId!;
        this.filters[groupId].price = parseInt(input.value);
        document.querySelector(`#${groupId} #price-value`)!.textContent = input.value;
        this.applyFilters(groupId);
    }

    filterByDuration(event: Event) {
        const input = event.target as HTMLInputElement;
        const groupId = input.dataset.groupId!;
        this.filters[groupId].duration = parseInt(input.value);
        document.querySelector(`#${groupId} #duration-value`)!.textContent = input.value;
        this.applyFilters(groupId);
    }

    filterByRating(event: Event) {
        const input = event.target as HTMLInputElement;
        const groupId = input.dataset.groupId!;
        this.filters[groupId].rating = parseFloat(input.value);
        document.querySelector(`#${groupId} #rating-value`)!.textContent = input.value;
        this.applyFilters(groupId);
    }

    // Reset all filters to their default state
    reset(event: Event) {
        const groupId = (event.currentTarget as HTMLElement).dataset.groupId!;

        // Reset eco button
        const ecoButton = this.ecoButtonTarget;
        const ecoLabel = document.getElementById("eco-label");
        if (ecoLabel) {
            ecoButton.classList.remove('active');
            ecoLabel.textContent = "Seulement les trajets écologiques";
        }

        // Reset price filter
        const priceSlider = this.priceSliderTarget as HTMLInputElement;
        const priceValue = document.getElementById("price-value");
        if (priceValue) {
            priceSlider.value = priceSlider.max;
            priceValue.textContent = priceSlider.max;
        }

        // Reset duration filter
        const durationSlider = this.durationSliderTarget as HTMLInputElement;
        const durationValue = document.getElementById("duration-value");
        if (durationValue) {
            durationSlider.value = durationSlider.max;
            durationValue.textContent = durationSlider.max;
        }

        // Reset rating filter
        const ratingSlider = this.ratingSliderTarget as HTMLInputElement;
        const ratingValue = document.getElementById("rating-value");
        if (ratingValue) {
            ratingSlider.value = ratingSlider.min;
            ratingValue.textContent = ratingSlider.min;
        }

        this.filters[groupId] = {};
        this.applyFilters(groupId);
    }

    refreshFilterButtonText(groupId: string) {
        const button = document.querySelector(`#${groupId}FilterButton`) as HTMLElement;
        // Check if all filters are in their default state
        const currentFilters = this.filters[groupId];
        const allFiltersDefault = (
            currentFilters.price === undefined &&
            currentFilters.duration === undefined &&
            currentFilters.rating === undefined &&
            currentFilters.eco === undefined
        );
        // Check how many cards are visible in the group after applying filters
        const grid = document.querySelector(`#${groupId}Grid`) as HTMLElement;
        const visibleItems = Array.from(grid ? grid.querySelectorAll('.card') : []).filter(item => {
            const computedStyle = window.getComputedStyle(item as HTMLElement);
            return computedStyle.display !== 'none' && computedStyle.visibility !== 'hidden';
        });
        // If all filters are default, display "Filtrer les résultats"
        if (button) {
            if (allFiltersDefault) {
                button.innerHTML = "Filtrer les résultats";
            } else if (visibleItems.length === 0) {
                button.innerHTML = "Aucun résultat avec les filtres sélectionnés";
            } else {
                // Update the button text with the number of filtered results
                const resultCount = visibleItems.length;
                button.innerHTML = `${resultCount} résultats avec les filtres sélectionnés`;
            }
        }
    }

    adjustCardPositionsIfNecessary(gridId: string) {
        const screenWidth = window.innerWidth;
        const grid = document.querySelector(`.${gridId}`);
        const items = grid ? grid.querySelectorAll('.card') : [];
        const visibleItems = Array.from(items).filter(item => {
            const computedStyle = window.getComputedStyle(item as HTMLElement);
            return computedStyle.display !== 'none' && computedStyle.visibility !== 'hidden';
        });

        visibleItems.forEach((item) => {
            const element = item as HTMLElement;
            if (screenWidth >= 618 && screenWidth <= 913 && visibleItems.length === 1 ||
                screenWidth >= 914 && screenWidth <= 1399 && (visibleItems.length === 1 || visibleItems.length === 2) ||
                screenWidth > 1399 && (visibleItems.length >= 1 && visibleItems.length <= 3)
            ) {
                element.style.position = 'relative';
                element.style.left = '0px';
            } else {
                element.style.position = 'absolute';
            }
        });
    }
}
