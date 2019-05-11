import { CalendarEvent } from "angular-calendar";

export interface CalendarExtendSchedule  extends CalendarEvent {
    colorClass: string;
    amsId: string
    processId: string;
    processTitle: string;
    managerId: string;
    managerName: string;
    operatorId: string;
    operatorName: string;
  }
