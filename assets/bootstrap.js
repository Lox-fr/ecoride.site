import { startStimulusApp } from "@symfony/stimulus-bridge";
import PagePreloaderController from "@controllers/pagePreloader_controller.ts";
import TooltipsController from "@controllers/tooltips_controller.ts";

const app = startStimulusApp();

app.register("pagePreloader", PagePreloaderController);
app.register("tooltips", TooltipsController);
