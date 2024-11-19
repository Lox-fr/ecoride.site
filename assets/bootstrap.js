import { startStimulusApp } from "@symfony/stimulus-bridge";
import PagePreloaderController from "./controllers/pagePreloader_controller.js";
import TooltipsController from "./controllers/tooltips_controller.js";

const app = startStimulusApp();

app.register("pagePreloader", PagePreloaderController);
app.register("tooltips", TooltipsController);
