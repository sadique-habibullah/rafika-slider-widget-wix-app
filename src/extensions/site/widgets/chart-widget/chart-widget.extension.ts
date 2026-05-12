import { extensions } from '@wix/astro/builders';

export default extensions.customElement({
  id: 'c573bccd-ff30-49f4-b6d9-32c8b0b48d72',
  name: 'Chart Widget',
  width: {
    defaultWidth: 400,
    allowStretch: true
  },
  height: {
    defaultHeight: 400
  },
  installation: {
    autoAdd: true,
    essential: false
  },
  presets: [{
    id: 'd73f71fc-aff2-4d2b-af47-e789b5181cba',
    name: 'Default Preset',
    thumbnailUrl: '{{BASE_URL}}/thumbnail.png',
  }],
  tagName: 'chart-widget',
  element: './extensions/site/widgets/chart-widget/chart-widget.tsx',
  settings: './extensions/site/widgets/chart-widget/chart-widget.panel.tsx',
});
