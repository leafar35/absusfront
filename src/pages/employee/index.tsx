import Api from '../../services/api';
import { useState, useEffect } from 'react';
import { Grid } from '../../components/Grid';
import { IPeople } from '../../shared/IPeople';

export default function Employee(){
    const [data, setData] = useState<IPeople[]>([]);

    useEffect(() => {
        getEmployee()
    },[])

    async function getEmployee() {
        const response = await Api.get('employee')
        setData(response.data)   
    }

    const deleteAsync = async (id: number | undefined) => {
        const response = await Api.delete(`/employee/${id}`)
        getEmployee()
        if(response.data)
            return alert('Deletado com sucesso')
        return alert('Erro ao deletado com sucesso')
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
                <Grid data={data} onclick={deleteAsync} />
            </div>
        </>
    );
}