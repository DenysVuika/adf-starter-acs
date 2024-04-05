import { Widget } from '@app/sdk';
import { SimpleWidget } from './lib/SimpleWidget';
import { YouTubeWidget } from './lib/YouTubeWidget';
import { ChartWidget } from './lib/ChartWidget';
import { OrgChartWidget } from './lib/OrgChartWidget';

export const WIDGETS_PLUGIN_WIDGETS: readonly Widget[] = [
  {
    key: `widget.1`,
    name: 'Simple Widget (3:1)',
    layout: { cols: 3, rows: 1, color: 'lightblue' },
    component: SimpleWidget
  },

  {
    key: `widget.2`,
    name: 'Simple Widget (1:2)',
    layout: { cols: 1, rows: 2, color: 'lightgreen' },
    component: SimpleWidget
  },
  {
    key: `widget.3`,
    name: 'Simple Widget (1:1)',
    layout: { cols: 1, rows: 1, color: 'lightpink' },
    component: SimpleWidget
  },
  {
    key: `widget.4`,
    name: 'Simple Widget (2:1)',
    layout: { cols: 2, rows: 1, color: '#DDBDF1' },
    component: SimpleWidget
  },
  {
    key: `widget.5`,
    name: 'YouTube Widget (2:2)',
    layout: { cols: 2, rows: 2 },
    component: YouTubeWidget
  },
  {
    key: `widget.6`,
    name: 'Chart (2:2)',
    layout: { cols: 2, rows: 2 },
    component: ChartWidget
  },
  {
    key: `widget.7`,
    name: 'Org Chart (2:2)',
    layout: { cols: 2, rows: 2 },
    component: OrgChartWidget
  }
] as const;
