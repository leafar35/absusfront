import { useEffect, useState } from "react";
import { Calendar } from "../../components/Calendar";
import Api from "../../services/api";
import { ISchedule } from "../../shared/ischedule";

export function CalendarPage(){
    const [data, setData] = useState<ISchedule[]>([]);

    useEffect(() => {
        async function getSchedule() {
            const response = await Api.get('schedule')
            setData(response.data.data)
        }
        getSchedule()
    },[])

    return (
        <>
            <div className="section">
                <div className="card pt-1 pl-1 pr-1 pb-1">
                    <Calendar data={data} />
                </div>
            </div>
        </>
    )
}
