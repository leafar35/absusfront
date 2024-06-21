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
    const [isLoading, setIsLoading] = useState<boolean>(false)

    useEffect(() => {
        async function getPatients(){
            const { data } = await Api.get('people')
            const usermap = data.data.data.map((people: IPeople) => {
                return { label: people.name, value: people.id} 
            })
            setOptions(usermap)
        }

        async function getSchedule(){
            const { data } = await Api.get(`schedule/${scheduleId.id}`)
            setId(data.data.id)
            setTitle(data.data.title)
            setDescription(data.data.description)
            setDateTime(data.data.dateTime)
            setlocalization(data.data.localization)
            setGooleMapsLink(data.data.google_maps_link)
            setPeopleId(data.data.people.id)
            setValueDefault({label: data.data.people.name, value: data.data.people.id})
        }

        getSchedule()
        getPatients()
    }, [])

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

    async function handleUpdate(event: any) {
        event.preventDefault();
        let schedule: ISchedule
        setIsLoading(true)
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
            Swal.fire({
                title: 'Agendamento atualizado!',
                icon: 'success',
            })
            setIsLoading(false)
            return navigate('/schedules')
        }catch(e){
            setIsLoading(false)
            if(e instanceof AxiosError){
                if(e.response?.status == 403){
                    return Swal.fire({
                        title: 'Seu perfil não tem atribuição para atualizar agendamento',
                        icon: 'error',
                    })
                }
                const html = `<div style="text-align: justify;">${e.response?.data.message.join('<Br />')}</div>`
                Swal.fire({
                    title: 'Corrija os seguinte erros!',
                    icon: 'error',
                    html: html
                })
            }
        }
    }

    function handleGoBack(e: any){
        e.preventDefault();
        navigate(-1)
    }

    return (
        <>
            <div className="section">
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
                                                <div className='col s12'>
                                                    <Button onClick={handleGoBack} isLoading={false} className='btn waves-effect waves-light gradient-45deg-red-pink left'>
                                                        <i className="material-icons left">arrow_back</i> Voltar
                                                    </Button>
                                                    <Button isLoading={isLoading} className='btn waves-effect waves-light gradient-45deg-indigo-blue right'>
                                                        <i className="material-icons right">save</i> Atualizar
                                                    </Button>
                                                </div>
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
