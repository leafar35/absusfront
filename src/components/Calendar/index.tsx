import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import { ISchedule } from '../../shared/ischedule'

interface IDataISchedule {
    data: ISchedule[]
}

export function Calendar({data}: IDataISchedule){
    
    function renderEventContent(eventInfo: any) {
        console.log('entrou ', eventInfo.event.title, eventInfo.event.dateTime)
        return (
          <>
            <b>{eventInfo.timeText}</b>
            <i>{eventInfo.event.title}</i>
          </>
        )
    }

    return (
        <FullCalendar
            locale='pt-br'
            eventContent={renderEventContent}
            plugins={[ dayGridPlugin ]}
            initialView="dayGridMonth"
            events={data.map((value) => {
                return {title: value.title, date: value.dateTime}
            })}
            eventClick={renderEventContent}
        />
    )
}