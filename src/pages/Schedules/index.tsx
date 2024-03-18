import Api from '../../services/api';
import React, { useState, useEffect } from 'react';
import { ISchedule } from '../../shared/ischedule';
import { Schedule } from '../../components/Schedule';
import Swal from 'sweetalert2';

const List: React.FC = () => {
    const [data, setData] = useState<ISchedule[]>([]);

    useEffect(() => {        
        getSchedule()
    },[])

    async function getSchedule() {
        const response = await Api.get('schedule')
        setData(response.data)   
    }

    const deleteAsync = async (id: number | undefined) => {
        Swal.fire({
            title: 'Deseja mesmo deletar?',
            icon: 'question'
        }).then(async(value) => {
            if(value.isConfirmed){
                const response = await Api.delete(`schedule/${id}`)
                getSchedule()
                if(response.data)
                    return Swal.fire('Deletado com sucesso','','success')
                Swal.fire('Erro ao deletar','','error')
            }
        })
    }

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
                <Schedule data={data} onclick={deleteAsync} />
            </div>
        </>
    );
}

export default List;