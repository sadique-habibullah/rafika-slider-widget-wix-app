import { app } from "@wix/astro/builders";
// import customSliderWidget from "./extensions/site/widgets/custom-slider-widget-app/custom-slider-widget-app.extension";
// import customSliderWidgetApp from "./extensions/site/widgets/custom-slider-widget-app/custom-slider-widget-app.extension.ts";
import customSlider from "./extensions/site/widgets/custom-slider/custom-slider.extension.ts";
// import chartWidget from "./extensions/site/widgets/chart-widget/chart-widget.extension.ts";

export default app().use(customSlider);
