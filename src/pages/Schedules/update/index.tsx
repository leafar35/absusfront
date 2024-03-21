import React, { useEffect, useState } from 'react';
import Api from '../../../services/api';
import AsyncSelect from 'react-select/async'
import { Input } from '../../../components/Inputs';
import { Button } from '../../../components/Buttom';
import { ISchedule } from '../../../shared/ischedule';
import { IOptionProps } from '../../../shared/iselectinput';
import { useNavigate, useParams } from 'react-router-dom';
import { IPeople } from '../../../shared/IPeople';
import Swal from 'sweetalert2';
import { AxiosError } from 'axios';

const Updatechedule: React.FC = () => {
    const navigate = useNavigate();
    const scheduleId = useParams()
    const [options, setOptions] = useState<Array<IOptionProps>>([])
    const [id, setId] = useState<number>()
    const [title, setTitle] = useState<string>('')
    const [description, setDescription] = useState<string>('')
    const [dateTime, setDateTime] = useState<string>('')
    const [localization, setlocalization] = useState<string>('')
    const [google_maps_link, setGooleMapsLink] = useState<string>('')
    const [peopleId, setPeopleId] = useState<number>(0)
    const [valueDefault, setValueDefault] = useState<IOptionProps>()

    useEffect(() => {
        async function getPatients(){
            const response = await Api.get('people')
            const usermap = response.data.data.map((people: IPeople) => {
                return { label: people.name, value: people.id} 
            })
            setOptions(usermap)
        }

        async function getSchedule(){
            const response = await Api.get(`schedule/${scheduleId.id}`)
            setId(response.data.id)
            setTitle(response.data.title)
            setDescription(response.data.description)
            setDateTime(response.data.dateTime)
            setlocalization(response.data.localization)
            setGooleMapsLink(response.data.google_maps_link)
            setPeopleId(response.data.people.id)
            setValueDefault({label: response.data.people.name, value: response.data.people.id})
        }

        getSchedule()
        getPatients()
    }, [])

    async function loadOptions(name: string){
        return Api.get(`people?name=${name}`)
          .then((people: any) => {
            let options: any[] = []
            people.data.forEach((people: IPeople) => {
              options.push({
                label: people.name,
                value: people.id
              })
            })
            return options
          })
    }

    async function handleUpdate(event: any) {
        event.preventDefault();
        let schedule: ISchedule
        try{
            schedule = {
                id: id,
                title: event.target[2].value,
                description: event.target[3].value,
                dateTime: new Date(event.target[4].value),
                localization: event.target[5].value,
                google_maps_link: event.target[6].value,
                peopleId: event.target[1].value
            }
            await Api.put('schedule', schedule)
            return Swal.fire({
                title: 'Agendamento atualizado!',
                icon: 'success',
            })
        }catch(e){
            if(e instanceof AxiosError){
                const html = `<div style="text-align: justify;">${e.response?.data.message.join('<Br />')}</div>`
                Swal.fire({
                    title: 'Corrija os seguinte erros!',
                    icon: 'error',
                    html: html
                })
            }
        }
    }

    function handleGoBack(){        
        navigate(-1)
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
                <div className="row">
                    <div className="col s12">
                        <div className="card card-default scrollspy">
                            <form onSubmit={handleUpdate}>
                                <div className="card-content">
                                    <div className="card-title">
                                        <div className="row">
                                            <div className="col s12 m6 l10">
                                                <h4 className="card-title">Informações Grais</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col s12">
                                            <div className='row'>
                                                <div className="input-field col s12 pl-0">
                                                    <AsyncSelect 
                                                        options={options} 
                                                        loadOptions={loadOptions} 
                                                        name='peopleId'
                                                        value={valueDefault}
                                                        placeholder='Buscar paciente' 
                                                    />
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className="input-field col s12">
                                                    <Input label='Titulo' type='text' name='title' value={title} />
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className="input-field col s12">
                                                    <Input label='Descrição' type='text' name='description' value={description} />
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className="input-field col s12">
                                                    <Input label='Data do Agendamento' type='datetime-local' name='dateTime' value={dateTime} />
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className="input-field col s12">
                                                    <Input label='Localização' type='text' name='localization' value={localization} />
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className="input-field col s12">
                                                    <Input label='Link do google Maps' type='text' name='google_maps_link' value={google_maps_link} />
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <Button className='btn waves-effect waves-light col s1 red'>
                                                    Voltar
                                                </Button>
                                                <Button className='btn waves-effect waves-light col s1 right'>
                                                    Cadastrar
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Updatechedule;