import { app } from "@wix/astro/builders";
import customSlider from "./extensions/site/widgets/custom-slider/custom-slider.extension.ts";

export default app().use(customSlider);
