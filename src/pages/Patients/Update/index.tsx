import React, { useEffect, useState } from 'react';
import Api from '../../../services/api';
import Cep from '../../../services/cep';
import { Input } from '../../../components/Inputs';
import { Button } from '../../../components/Buttom';
import { useNavigate, useParams } from 'react-router-dom';
import { IPatient } from '../../../shared/ipatient';
import { AxiosError } from 'axios';
import Swal from 'sweetalert2';

const CreatePatient: React.FC = () => {
    const navigate = useNavigate();
    const patientId = useParams()
    const [id, setId] = useState<number>(0)
    const [name, setName] = useState<string>('')
    const [cpf, setCpf] = useState<number>(0)
    const [dateofbirth, setDateOfBirth] = useState<string>('')
    const [number_sus, setNumberSus] = useState<number>(0)
    const [number_post, setNumberPost] = useState<number>(0)
    const [zipcode, setZipcode] = useState<string>('')
    const [address, setAddress] = useState<string>('')
    const [number, setNumber] = useState<number>(0)
    const [complment, setComplment] = useState<string>('')
    const [neighborhood, setNeighborhood] = useState<string>('')
    const [city, setCity] = useState<string>('')
    const [state, setState] = useState<string>('')
    const [userId, setUserId] = useState<number | undefined>()
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [isLoading, setIsLoading] = useState<boolean>(false)

    useEffect(() => {
        async function getPatientForUpdate() {
            const { data } = await Api.get(`people/${patientId.id}`)
            setId(data.data.id)
            setName(data.data.name)
            setCpf(data.data.cpf)
            setDateOfBirth(data.data.dateofbirth)
            setNumberSus(data.data.number_sus)
            setNumberPost(data.data.number_post)
            setZipcode(data.data.zipcode)
            setAddress(data.data.address)
            setNeighborhood(data.data.neighborhood)
            setComplment(data.data.complement)
            setNumber(data.data.number)
            setCity(data.data.city)
            setState(data.data.state)
            setUserId(data.data.user.id)
            setEmail(data.data.user.email_cellphone)
            setPassword(data.data.user.password)
        }
        getPatientForUpdate()
    },[patientId.id])

    async function handleUpdate(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setIsLoading(true)
        try{
            let patient: IPatient
            patient = {
                id: id,
                name: name,
                cpf: cpf,
                dateofbirth: new Date(dateofbirth),
                number_sus: number_sus,
                number_post: number_post,
                zipcode: zipcode,
                address: address,
                number: number,
                neighborhood: neighborhood,
                complement: complment,
                city: city,
                state: state,
                user: {
                    id: userId,
                    email_cellphone: email,
                    password: password
                }
            }
            await Api.put('people', patient)
            Swal.fire({
                title: 'Paciente atualizado!',
                icon: 'success',
            })
            setIsLoading(false)
            return navigate('/patients')
        }catch(e){
            setIsLoading(false)
            if(e instanceof AxiosError){
                if(e.response?.status == 403){
                    return Swal.fire({
                        title: 'Seu perfil não tem atribuição para atualizar pacientes',
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

    async function findAddress(){
        if(zipcode.length >= 8){
          const response = await Cep.get(`${zipcode}/json/`)
          setZipcode(response.data.cep)
          setNumber(response.data.numero)
          setAddress(response.data.logradouro)
          setNeighborhood(response.data.bairro)
          setComplment(response.data.complemento)
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
                                                <div className="input-field col s12">
                                                    <Input label='Nome' type='text' name='name' value={name} onChange={(e: any) => setName(e.target.value)} />
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className="input-field col s12">
                                                    <Input label='CPF' type='text' name='cpf' value={cpf.toString()} onChange={(e: any) => setCpf(e.target.value)} />
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className="input-field col s12">
                                                    <Input label='Data de nascimento' type='text' name='dateofbirth' value={dateofbirth} onChange={(e: any) => setDateOfBirth(e.target.value)} />
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className="input-field col s12">
                                                    <Input label='CEP' type='text' name='zipcode' onBlur={findAddress} value={zipcode} onChange={(e: any) => setZipcode(e.target.value)} />
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className="input-field col s12">
                                                    <Input label='Endereço' type='text' name='address' value={address} onChange={(e: any) => setAddress(e.target.value)} />
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className="input-field col s11">
                                                    <Input label='Bairro' type='text' name='neighborhood' value={neighborhood} onChange={(e: any) => setNeighborhood(e.target.value)} />
                                                </div>
                                                <div className="input-field col s1">
                                                    <Input label='Número' type='text' name='numero' value={number.toString()} onChange={(e: any) => setNumber(e.target.value)} />
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className="input-field col s12">
                                                    <Input label='Complemento' type='text' name='complement' value={complment} onChange={(e: any) => setComplment(e.target.value)} />
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className="input-field col s11">
                                                    <Input label='Cidade' type='text' name='city' value={city} onChange={(e: any) => setCity(e.target.value)} />
                                                </div>
                                                <div className="input-field col s1">
                                                    <Input label='Estado' type='text' name='state' value={state} onChange={(e: any) => setState(e.target.value)} />
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className="input-field col s6">
                                                    <Input label='e-mail' type='text' name='email' value={email} onChange={(e: any) => setEmail(e.target.value)} />
                                                </div>
                                                <div className="input-field col s6">
                                                    <Input label='password' type='password' name='password' />
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

export default CreatePatient;
