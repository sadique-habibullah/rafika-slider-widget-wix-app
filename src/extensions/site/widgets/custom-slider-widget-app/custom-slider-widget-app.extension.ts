// import { extensions } from '@wix/astro/builders';

// export default extensions.customElement({
//   id: 'ac892d12-8789-42f6-b06e-b84c5b415133',
//   name: 'My Element',
//   width: {
//     defaultWidth: 450,
//     allowStretch: true
//   },
//   height: {
//     defaultHeight: 250
//   },
//   installation: {
//     autoAdd: true
//   },
//   presets: [
//     {
//       id: '3ae41a7b-216b-496e-816b-47f6f18e70d4',
//       name: 'default',
//       thumbnailUrl: '{{BASE_URL}}/custom-slider-widget-app-thumbnail.png',
//     },
//   ],

//   tagName: 'custom-slider-widget-app',
//   element: './extensions/site/widgets/custom-slider-widget-app/custom-slider-widget-app.tsx',
//   settings: './extensions/site/widgets/custom-slider-widget-app/custom-slider-widget-app.panel.tsx',
// });
import { extensions } from "@wix/astro/builders";

export default extensions.customElement({
  id: "ac892d12-8789-42f6-b06e-b84c5b415133",
  name: "My Element",
  width: {
    defaultWidth: 450,
    allowStretch: true,
  },
  height: {
    defaultHeight: 520,
  },
  installation: {
    autoAdd: true,
  },
  presets: [
    {
      id: "3ae41a7b-216b-496e-816b-47f6f18e70d4",
      name: "default",
      thumbnailUrl: "{{BASE_URL}}/custom-slider-widget-app-thumbnail.png",
    },
  ],
  tagName: "custom-slider-widget-app",
  element:
    "./extensions/site/widgets/custom-slider-widget-app/custom-slider-widget-app.tsx",
  settings:
    "./extensions/site/widgets/custom-slider-widget-app/custom-slider-widget-app.panel.tsx",
});
