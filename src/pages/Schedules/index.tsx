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
        const { data } = await Api.get('people')
        const usermap = data.data.data.map((people: IPeople) => {
            return { label: people.name, value: people.id} 
        })
        setOptions(usermap)
    }    

    async function loadOptions(name: string){
        return Api.get(`people?name=${name}`)
          .then((people: any) => {
            let options: any[] = []
            people.data.data.data.forEach((people: IPeople) => {
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
        const { data } = await Api.get(`schedule${query}`)
        setData(data.data)
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

    const status = async (id: number| undefined) => {
        Swal.fire({
            title: 'Compareceu no horário marcado?',
            icon: 'question'
        }).then(async(value) => {
            if(value.isConfirmed){
                const response = await Api.put(`schedule/status/${id}`)
                getSchedule()
                if(response.data)
                    return Swal.fire('Atualizado com sucesso','','success')
                Swal.fire('Erro ao deletar','','error')
            }
        })
    }

    const alert_patient = async (id: number | undefined) => {
        Swal.fire({
            title: 'Chamar o paciente?',
            icon: 'question'
        }).then(async(value) => {
            if(value.isConfirmed){
                const response = await Api.put(`schedule/notify/${id}`)
                getSchedule()
                if(response.data)
                    return Swal.fire('Atualizado com sucesso','','success')
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
                                <a href='javascript:void(0)' onClick={() => status(id)} title='Compareceu'>
                                    <i className="material-icons">{row.appear ? 'check_box' : 'check_box_outline_blank'}</i>
                                </a>
                                <a href='javascript:void(0)' onClick={() => alert_patient(id)} title='Avisar o paciente'>
                                    <i className="material-icons">send</i>
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
                                    <div className='col s12'>
                                        <div className="input-field col s10">
                                            <AsyncSelect
                                                options={options} 
                                                loadOptions={loadOptions} 
                                                name='peopleId' 
                                                placeholder='Buscar paciente' 
                                            />
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
                {data && <Grid data={data} fetchData={getSchedule} columns={keysGridSchedule} title='Agendamentos' />}
            </div>
        </>
    );
}

export default List;
