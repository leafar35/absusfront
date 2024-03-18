import Swal from 'sweetalert2';
import Api from '../../services/api';
import { useState, useEffect } from 'react';
import { Grid } from '../../components/Grid';
import { IPagination } from '../../shared/ipagination';

export default function Employee(){
    const [data, setData] = useState<IPagination>();

    useEffect(() => {
        getEmployee()
    },[])

    async function getEmployee(page?: number, perPage?: number) {
        const response = await Api.get('employee')
        setData(response.data)   
    }

    const deleteAsync = async (id: number | undefined) => {
        Swal.fire({
            title: 'Deseja mesmo deletar?',
            icon: 'question'
        }).then(async(value) => {
            if(value.isConfirmed){
                const response = await Api.delete(`/employee/${id}`)
                getEmployee()
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
                {data && <Grid data={data} onclick={deleteAsync} fetchData={getEmployee} />}                
            </div>
        </>
    );
}