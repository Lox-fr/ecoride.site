import { startStimulusApp } from "@symfony/stimulus-bridge";

import FlatpickrController from "./controllers/flatpickr_controller.ts";
import FileInputController from "./controllers/fileInput_controller.ts";
import PagePreloaderController from "./controllers/pagePreloader_controller.ts";
import profileMenuController from "./controllers/profileMenu_controller.ts";
import TooltipsController from "./controllers/tooltips_controller.ts";
import CollectionFormController from "./controllers/collectionForm_controller.ts";
import RatingValueController from "./controllers/ratingValue_controller.ts";
import CarpoolFiltersController from "./controllers/carpoolFilters_controller.ts";

const app = startStimulusApp();

app.register("flatpickr", FlatpickrController);
app.register("fileInput", FileInputController);
app.register("pagePreloader", PagePreloaderController);
app.register("profileMenu", profileMenuController);
app.register("tooltips", TooltipsController);
app.register("collectionForm", CollectionFormController);
app.register("ratingValue", RatingValueController);
app.register("carpoolFilters", CarpoolFiltersController);
