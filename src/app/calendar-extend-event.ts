import { CalendarEvent } from "angular-calendar";

export interface CalendarExtendEvent  extends CalendarEvent {
    colorClass: string;
    repeatId: string
    eventStart: Date;
    eventEnd: Date;
  }
