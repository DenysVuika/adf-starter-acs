import { WidgetInfo } from './pages/dashboard/widget';
import { DashboardWidgetComponent } from './pages/dashboard/dashboard-widget.component';

export const appWidgets: WidgetInfo[] = [
  { key: `widget.${Date.now()}`, name: 'Widget 1', color: 'lightblue', component: DashboardWidgetComponent },
  { key: `widget.${Date.now()}`, name: 'Widget 2', color: 'lightgray', component: DashboardWidgetComponent },
  { key: `widget.${Date.now()}`, name: 'Widget 3', color: 'lightgray', component: DashboardWidgetComponent }
];
