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
                <div className="card">
                    <div className="card-content">
                    <p className="caption mb-0">Tables are a nice way to organize a lot of data. We provide a few utility classes to help
                        you style your table as easily as possible. In addition, to improve mobile experience, all tables on
                        mobile-screen widths are centered automatically.</p>
                    </div>
                </div>
                <Calendar data={data} />
            </div>
        </>
    )
}