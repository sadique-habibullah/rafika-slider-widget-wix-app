import { extensions } from '@wix/astro/builders';

export default extensions.customElement({
  id: '73eb08b8-b4d3-4eef-9786-6ba9408a4cde',
  name: 'custom-slider',
  width: {
    defaultWidth: 450,
    allowStretch: true
  },
  height: {
    defaultHeight: 250
  },
  installation: {
    autoAdd: true
  },
  presets: [
    {
      id: '0af56886-5f99-4a09-91bf-0e7647d33b05',
      name: 'default',
      thumbnailUrl: '{{BASE_URL}}/custom-slider-thumbnail.png',
    },
  ],
  
  tagName: 'custom-slider',
  element: './extensions/site/widgets/custom-slider/custom-slider.tsx',
  settings: './extensions/site/widgets/custom-slider/custom-slider.panel.tsx',
});
