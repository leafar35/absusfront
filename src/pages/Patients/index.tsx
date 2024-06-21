import Api from '../../services/api';
import { useState, useEffect } from 'react';
import { Grid } from '../../components/Grid';
import Swal from 'sweetalert2';
import { IPagination } from '../../shared/ipagination';
import { Input } from '../../components/Inputs';
import { Button } from '../../components/Buttom';
import { keysGrid } from "../../shared/constants/key.grid";
import { Link } from 'react-router-dom';

export function Patients(){
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [data, setData] = useState<IPagination>();

    useEffect(() => {
        getPatients()
    },[])

    async function getPatients(e?: any, page?: number, perPage?: number) {
        let query = (page) ? `?page=${page}&perPage=${perPage}` : ''
        if(e){
            e.preventDefault();
            if(!query){
                query += `?name=${e.target[0].value}`
            }else{
                query += `&name=${e.target[0].value}`
            }
        }
        setIsLoading(true)
        const { data } = await Api.get(`people${query}`)
        setData(data.data)
        setIsLoading(false)
    }

    const deleteAsync = async (id: number | undefined) => {
        Swal.fire({
            title: 'Deseja mesmo deletar?',
            icon: 'question'
        }).then(async(value) => {
            if(value.isConfirmed){
                const { data } = await Api.delete(`people/${id}`)
                getPatients()
                if(data.data)
                    return Swal.fire('Deletado com sucesso','','success')
                Swal.fire('Erro ao deletar','','error')
            }
        })
    }

    return (
        <>
            {keysGrid.length === 3 &&
                keysGrid.push({
                    name: '#',
                    cell(row) {
                        const id = (row?.id) ? row.id : undefined
                        return (
                            <>
                                <Link to={'update/'+id}>
                                    <i className="material-icons">edit</i>
                                </Link>
                                <a href='javascript:void(0)' onClick={() => deleteAsync(id)}>
                                    <i className="material-icons">delete</i>
                                </a>
                            </>
                        )
                    },
                })
            }
            <div className="section">
                <div className="card">
                    <div className="card-content">
                        <div className="row">
                            <form onSubmit={getPatients}>
                                <div className='row'>
                                    <div className='col s12'>
                                        <div className="input-field col s10">
                                            <Input label='Nome' type='text' name='name' />
                                        </div>
                                        <div className="input-field col s2">
                                            <Button isLoading={isLoading} sizeLoader={5} className='btn waves-effect waves-light gradient-45deg-indigo-blue mt-4'>
                                                <i className="material-icons left">search</i> Filtrar
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                {data && <Grid data={data} fetchData={getPatients} columns={keysGrid} title='Pacientes' />}
            </div>
        </>
    );
}
