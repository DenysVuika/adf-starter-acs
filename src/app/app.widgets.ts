import { Widget } from '@app/sdk';
import { SimpleWidget, YouTubeWidget } from './pages/dashboard/widgets';

export const appWidgets: Widget[] = [
  {
    key: `widget.${Date.now()}`,
    name: 'Simple Widget (3:1)',
    layout: { cols: 3, rows: 1, color: 'lightblue' },
    component: SimpleWidget
  },

  {
    key: `widget.${Date.now()}`,
    name: 'Simple Widget (1:2)',
    layout: { cols: 1, rows: 2, color: 'lightgreen' },
    component: SimpleWidget
  },
  {
    key: `widget.${Date.now()}`,
    name: 'Simple Widget (1:1)',
    layout: { cols: 1, rows: 1, color: 'lightpink' },
    component: SimpleWidget
  },
  {
    key: `widget.${Date.now()}`,
    name: 'Simple Widget (2:1)',
    layout: { cols: 2, rows: 1, color: '#DDBDF1' },
    component: SimpleWidget
  },
  {
    key: `widget.${Date.now()}`,
    name: 'YouTube Widget (2:2)',
    layout: { cols: 2, rows: 2 },
    component: YouTubeWidget
  }
];
