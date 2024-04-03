import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarEvent, CalendarEventAction, CalendarEventTimesChangedEvent, CalendarModule, CalendarView } from 'angular-calendar';
import { addDays, addHours, endOfMonth, isSameDay, isSameMonth, startOfDay, subDays } from 'date-fns';
import { EventColor } from 'calendar-utils';
import { Subject } from 'rxjs';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

const colors: Record<string, EventColor> = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3'
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF'
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA'
  }
};

@Component({
  selector: 'lib-calendar-plugin',
  standalone: true,
  imports: [CommonModule, CalendarModule, MatButtonModule, MatIconModule],
  templateUrl: './calendar-plugin.component.html',
  styleUrls: ['./calendar-plugin.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CalendarPluginComponent {
  viewDate: Date = new Date();

  view: CalendarView = CalendarView.Month;
  CalendarView = CalendarView;

  refresh = new Subject<void>();
  activeDayIsOpen: boolean = true;

  actions: CalendarEventAction[] = [
    // {
    //   label: '<span class="material-icons-outlined">edit</span>',
    //   a11yLabel: 'Edit',
    //   onClick: ({ event }: { event: CalendarEvent }): void => {
    //     this.handleEvent('Edited', event);
    //   }
    // },
    {
      label: '<span class="material-icons-outlined">delete</span>',
      a11yLabel: 'Delete',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.events = this.events.filter((iEvent) => iEvent !== event);
        this.handleEvent('Deleted', event);
      }
    }
  ];

  events: CalendarEvent[] = [
    {
      start: subDays(startOfDay(new Date()), 1),
      end: addDays(new Date(), 1),
      title: 'A 3 day event',
      color: { ...colors['red'] },
      actions: this.actions,
      allDay: true,
      resizable: {
        beforeStart: true,
        afterEnd: true
      },
      draggable: true
    },
    {
      start: startOfDay(new Date()),
      title: 'An event with no end date',
      color: { ...colors['yellow'] },
      actions: this.actions
    },
    {
      start: subDays(endOfMonth(new Date()), 3),
      end: addDays(endOfMonth(new Date()), 3),
      title: 'A long event that spans 2 months',
      color: { ...colors['blue'] },
      allDay: true
    },
    {
      start: addHours(startOfDay(new Date()), 2),
      end: addHours(new Date(), 2),
      title: 'A draggable and resizable event',
      color: { ...colors['yellow'] },
      actions: this.actions,
      resizable: {
        beforeStart: true,
        afterEnd: true
      },
      draggable: true
    }
  ];

  handleEvent(action: string, event: CalendarEvent): void {
    console.info('action: ', action, event);
  }

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      if ((isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) || events.length === 0) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
      this.viewDate = date;
    }
  }

  eventTimesChanged({ event, newStart, newEnd }: CalendarEventTimesChangedEvent): void {
    this.events = this.events.map((iEvent) => {
      if (iEvent === event) {
        return {
          ...event,
          start: newStart,
          end: newEnd
        };
      }
      return iEvent;
    });
    this.handleEvent('Dropped or resized', event);
  }

  setView(view: CalendarView) {
    this.view = view;
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }
}
