import Api from '../../../services/api';
import Cep from '../../../services/cep';
import { Input } from '../../../components/Inputs';
import { Button } from '../../../components/Buttom';
import React, { useEffect, useState } from 'react';
import { IEmployee } from '../../../shared/iemployee';
import { useNavigate, useParams } from 'react-router-dom';
import { AxiosError } from 'axios';
import Swal from 'sweetalert2';

export default function UpdateEmployee() {
    const navigate = useNavigate();
    const patientId = useParams()
    const [id, setId] = useState<number>(0)
    const [name, setName] = useState<string>('')
    const [cpf, setCpf] = useState<number>(0)
    const [dateofbirth, setDateOfBirth] = useState<string>('')
    const [zipcode, setZipcode] = useState<string>('')
    const [address, setAddress] = useState<string>('')
    const [number, setNumber] = useState<number>(0)
    const [complment, setComplment] = useState<string>('')
    const [neighborhood, setNeighborhood] = useState<string>('')
    const [city, setCity] = useState<string>('')
    const [state, setState] = useState<string>('')
    const [idUser, setIdUser] = useState<number | undefined>(undefined)
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [isLoading, setIsLoading] = useState<boolean>(false)

    useEffect(() => {
        const elems = document.querySelectorAll('select');
        M.FormSelect.init(elems);
        async function getPatientForUpdate() {
            const response = await Api.get(`employee/${patientId.id}`)
            setId(response.data.id)
            setName(response.data.name)
            setCpf(response.data.cpf)
            setDateOfBirth(response.data.dateofbirth)
            setZipcode(response.data.zipcode)
            setAddress(response.data.address)
            setNeighborhood(response.data.neighborhood)
            setComplment(response.data.complement)
            setNumber(response.data.number)
            setCity(response.data.city)
            setState(response.data.state)
            setIdUser(response.data.user.id)
            setEmail(response.data.user.email_cellphone)
            setPassword(response.data.user.password)
        }
        getPatientForUpdate()
    },[patientId.id])

    async function handleUpdate(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        try{
            let employee: IEmployee
            employee = {
                id: id,
                name: name,
                cpf: cpf,
                dateofbirth: new Date(dateofbirth),
                zipcode: zipcode,
                address: address,
                number: number,
                neighborhood: neighborhood,
                complement: complment,
                city: city,
                state: state,
                user: {
                    id: idUser,
                    email_cellphone: email,
                    password: password
                }
            }
            await Api.put('employee', employee)
            return Swal.fire({
                title: 'Funcionário atualizado!',
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

    async function findAddress(){
        if(zipcode.length >= 8){
            const response = await Cep.get(`${zipcode}/json/`)
            setZipcode(response.data.cep)
            setAddress(response.data.logradouro)
            setNeighborhood(response.data.bairro)
            setComplment(response.data.complemento)
            setCity(response.data.localidade)
            setState(response.data.uf)
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
                                            <div className="row">
                                                <div className="input-field col s12">
                                                    <select name='perfil'>
                                                        <option value="1">Administrador</option>
                                                        <option value="2">Recepicionista</option>
                                                        <option value="3">Agentes de Saúde</option>
                                                        <option value="4">Médicos</option>
                                                        <option value="5">Dentistas</option>
                                                        <option value="6">Enfermeiros</option>
                                                    </select>
                                                    <label>Selecione o perfil do usuário</label>
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className="input-field col s12">
                                                    <Input label='Nome' type='text' name='name' value={name} />
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className="input-field col s12">
                                                    <Input label='CPF' type='text' name='cpf' value={cpf.toString()} />
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className="input-field col s12">
                                                    <Input label='Data de nascimento' type='text' name='dateofbirth' value={dateofbirth} />
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className="input-field col s12">
                                                    <Input label='CEP' type='text' name='zipcode' onBlur={findAddress} value={zipcode} />
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className="input-field col s12">
                                                    <Input label='Endereço' type='text' name='address' value={address} />
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className="input-field col s11">
                                                    <Input label='Bairro' type='text' name='neighborhood' value={neighborhood} />
                                                </div>
                                                <div className="input-field col s1">
                                                    <Input label='Número' type='text' name='numero' value={number.toString()} />
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className="input-field col s12">
                                                    <Input label='Complemento' type='text' name='complement' value={complment} />
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className="input-field col s11">
                                                    <Input label='Cidade' type='text' name='city' value={city} />
                                                </div>
                                                <div className="input-field col s1">
                                                    <Input label='Estado' type='text' name='state' value={state} />
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className="input-field col s6">
                                                    <Input label='e-mail' type='text' name='email' value={email} />
                                                </div>
                                                <div className="input-field col s6">
                                                    <Input label='password' type='password' name='password' />
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className='col s12'>
                                                    <Button isLoading={false} className='btn waves-effect waves-light gradient-45deg-red-pink left'>
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