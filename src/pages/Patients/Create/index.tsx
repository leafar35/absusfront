import React, { FocusEvent, useState } from 'react';
import Api from '../../../services/api';
import Cep from '../../../services/cep';
import { Input } from '../../../components/Inputs';
import { Button } from '../../../components/Buttom';
import { useNavigate } from 'react-router-dom';
import { IPatient } from '../../../shared/ipatient';
import { AxiosError } from 'axios';
import Swal from 'sweetalert2';

const CreatePatient: React.FC = () => {
    const navigate = useNavigate();
    const [zipcode, setZipcode] = useState<string>('')
    const [address, setAddress] = useState<string>('')
    const [number, setNumber] = useState<string>('s/n')
    const [complment, setComplment] = useState<string>('')
    const [city, setCity] = useState<string>('');
    const [state, setState] = useState<string>('');
    const [neighborhood, setNeighborhood] = useState<string>('')
    const [isLoading, setIsLoading] = useState<boolean>(false)

    async function handleCreate(e: any) {
        e.preventDefault();
        try {
            let patient: IPatient
            patient = {
                name: e.target[0].value,
                cpf: e.target[1].value,
                dateofbirth: new Date(e.target[2].value),
                number_sus: e.target[3].value,
                number_post: e.target[4].value,
                zipcode: e.target[5].value,
                address: e.target[6].value,
                neighborhood: e.target[7].value,
                number: e.target[8].value,
                complement: e.target[9].value,
                city: e.target[10].value,
                state: e.target[11].value,
                user: {
                    email_cellphone: e.target[12].value,
                    password: e.target[13].value
                }
            }
            await Api.post('people', patient)
            return Swal.fire({
                title: 'Paciente cadastado!',
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

    async function findAddress(event: FocusEvent<HTMLInputElement, Element>){
        if(event.target.value.length >= 8){
            Cep.get(`${event.target.value}/json/`).then((response: any) => {
                console.log(response)
                setAddress(response.data.logradouro)
                setNeighborhood(response.data.bairro)
                setNumber(response.data.numero)
                setCity(response.data.localidade)
                setState(response.data.uf)
            })
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
                            <form onSubmit={handleCreate}>
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
                                                    <Input label='Nome' type='text' name='name' />
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className="input-field col s12">
                                                    <Input label='CPF' type='text' name='cpf' />
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className="input-field col s12">
                                                    <Input label='Data de nascimento' type='date' name='dateofbirth' />
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className="input-field col s12">
                                                    <Input label='Número do Sus' type='text' name='number_sus' />
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className="input-field col s12">
                                                    <Input label='Número do posto' type='text' name='number_post' />
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className="input-field col s12">
                                                    <Input label='CEP' type='text' name='zipcode' onBlur={findAddress} />
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
                                                    <Input label='Número' type='text' name='numero' value={number} />
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
                                                    <Input label='celular' type='text' name='email_cellphone' />
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
                                                        <i className="material-icons right">save</i> Cadastrar
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