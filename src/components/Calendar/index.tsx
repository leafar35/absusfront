import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import { ISchedule } from '../../shared/ischedule'
import Swal from 'sweetalert2'

interface IDataISchedule {
    data: ISchedule[]
}

export function Calendar({data}: IDataISchedule){
    
    function renderEventContent(eventInfo: any) {
        return (
          <>
            <p>{`Consulta: ${eventInfo.event.title}`}<br />{`Hora marcada: ${eventInfo.timeText}`}</p>
          </>
        )
    }

    function alertEventContent(eventInfo: any) {
        Swal.fire(eventInfo.event.title, '', 'info')
    }

    return (
        <FullCalendar
            locale='pt-br'
            eventContent={renderEventContent}
            plugins={[ dayGridPlugin ]}
            initialView="dayGridMonth"
            events={data.map((value) => {
                return {title: value.title, start: value.dateTime}
            })}
            eventClick={alertEventContent}
        />
    )
}