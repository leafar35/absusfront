import Swal from 'sweetalert2';
import Api from '../../services/api';
import React, { useState, useEffect } from 'react';
import { Grid } from '../../components/Grid';
import { keysGridSchedule } from '../../shared/constants/key.grid.schedule';
import { Link } from 'react-router-dom';
import { IPagination } from '../../shared/ipagination';
import { Button } from '../../components/Buttom';
import AsyncSelect from 'react-select/async'
import { IPeople } from '../../shared/IPeople';
import { IOptionProps } from '../../shared/iselectinput';

const List: React.FC = () => {
    const [data, setData] = useState<IPagination>();
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [options, setOptions] = useState<Array<IOptionProps>>([])

    useEffect(() => {        
        getSchedule()
        getPatients()
    },[])

    async function getPatients(){
        const response = await Api.get('people')
        const usermap = response.data.data.map((people: IPeople) => {
            return { label: people.name, value: people.id} 
        })
        setOptions(usermap)
    }    

    async function loadOptions(name: string){
        return Api.get(`people?name=${name}`)
          .then((people: any) => {
            let options: any[] = []
            people.data.data.forEach((people: IPeople) => {
              options.push({
                label: people.name,
                value: people.id
              })
            })
            return options
          })
    }

    async function getSchedule(e?: any, page?: number, perPage?: number) {
        let query = (page) ? `?page=${page}&perPage=${perPage}` : ''
        if(e){
            e.preventDefault();
            if(!query){
                query += `?peopleId=${e.target[1].value}`
            }else{
                query += `&peopleId=${e.target[1].value}`
            }
        }
        setIsLoading(true)
        const response = await Api.get(`schedule${query}`)
        setData(response.data)
        setIsLoading(false)
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

    const status = async () => {
        Swal.fire({
            title: 'Deseja mesmo deletar?',
            icon: 'question'
        }).then(async(value) => {
            if(value.isConfirmed){
                const response = await Api.put(`schedule/status`)
                getSchedule()
                if(response.data)
                    return Swal.fire('Deletado com sucesso','','success')
                Swal.fire('Erro ao deletar','','error')
            }
        })
    }

    return (
        <>
            {keysGridSchedule.length === 3 &&
                keysGridSchedule.push({
                    name: '#',
                    cell(row) {
                        const id = (row?.id) ? row.id : undefined
                        return (
                            <>
                                <Link to={'update/'+id} title='Atualizar esse agendamento'>
                                    <i className="material-icons">edit</i>
                                </Link>
                                <a href='javascript:void(0)' onClick={() => deleteAsync(id)} title='Deletar esse agendamento?'>
                                    <i className="material-icons">delete</i>
                                </a>
                                <a href='javascript:void(0)' onClick={() => status()} title='Compareceu'>
                                    <i className="material-icons">{row.appear ? 'check_box' : 'check_box_outline_blank'}</i>
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
                            <form onSubmit={getSchedule}>
                                <div className='row'>
                                    <div className="input-field col s10">
                                        <AsyncSelect
                                            options={options} 
                                            loadOptions={loadOptions} 
                                            name='peopleId' 
                                            placeholder='Buscar paciente' 
                                        />
                                    </div>
                                    <div className="input-field col s2">
                                        <Button isLoading={isLoading} sizeLoader={5} className='btn waves-effect waves-light mt-4'>
                                            Filtrar
                                        </Button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                {data && <Grid data={data} fetchData={getSchedule} columns={keysGridSchedule} title='Agendamentos' />}
            </div>
        </>
    );
}

export default List;