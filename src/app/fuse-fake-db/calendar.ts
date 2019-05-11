import {
    startOfDay,
    endOfDay,
    subDays,
    addDays,
    endOfMonth,
    isSameDay,
    isSameMonth,
    addHours
} from 'date-fns';

export class CalendarFakeDb
{

    public static data = [
        {
            id  : 'events',
            data: [
                {
                    start    : startOfDay(new Date(Date.now())),
                    end      : endOfDay(new Date(Date.now())),
                    title    : 'No end date',
                    allDay   : false,
                    color    : {
                        primary  : '#ad2121',
                        secondary: '#FAE3E3'
                    },
                    repeatId : 1,
                    colorClass : 'mat-blue-grey-700-bg'
                },
                {
                    start    : startOfDay(new Date()),
                    end      : '',
                    title    : 'Module 4, AMS 4115',
                    allDay   : false,
                    color    : {
                        primary  : '#e3bc08',
                        secondary: '#FDF1BA'
                    },
                    repeatId : 1,
                    colorClass : 'mat-blue-grey-700-bg'
                },
                {
                    start    : subDays(endOfMonth(new Date()), 3),
                    end      : addDays(endOfMonth(new Date()), 3),
                    title    : 'Module 3, AMS 1315',
                    allDay   : false,
                    color    : {
                        primary  : '#1e90ff',
                        secondary: '#D1E8FF'
                    },
                    repeatId : 1,
                    colorClass : 'mat-blue-grey-700-bg'
                },
                {
                    start    : addHours(startOfDay(new Date()), 2),
                    end      : new Date(),
                    title    : 'Module 2, AMS 1215',
                    allDay   : false,
                    color    : {
                        primary  : '#e3bc08',
                        secondary: '#FDF1BA'
                    },
                    repeatId : 1,
                    colorClass : 'mat-blue-grey-700-bg'
                }
            ]
        }
    ];
}
