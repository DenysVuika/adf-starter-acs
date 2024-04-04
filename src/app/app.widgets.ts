import { Widget } from './pages/dashboard/widget';
import { DashboardWidgetComponent } from './pages/dashboard/dashboard-widget.component';

export const appWidgets: Widget[] = [
  { key: `widget.${Date.now()}`, name: 'Widget 1 (3:1)', layout: { cols: 3, rows: 1, color: 'lightblue' }, component: DashboardWidgetComponent },
  { key: `widget.${Date.now()}`, name: 'Widget 2 (1:2)', layout: { cols: 1, rows: 2, color: 'lightgreen' }, component: DashboardWidgetComponent },
  { key: `widget.${Date.now()}`, name: 'Widget 3 (1:1)', layout: { cols: 1, rows: 1, color: 'lightpink' }, component: DashboardWidgetComponent },
  { key: `widget.${Date.now()}`, name: 'Widget 4 (2:1)', layout: { cols: 2, rows: 1, color: '#DDBDF1' }, component: DashboardWidgetComponent }
];
