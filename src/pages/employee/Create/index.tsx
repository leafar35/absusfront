import { FocusEvent, useState } from 'react';
import Api from '../../../services/api';
import Cep from '../../../services/cep';
import { Input } from '../../../components/Inputs';
import { Button } from '../../../components/Buttom';
import { MdPerson } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { IEmployee } from '../../../shared/iemployee';

export default function CreateEmployee(){
    const navigate = useNavigate();
    const [address, setAddress] = useState<string>('')
    const [number, setNumber] = useState<string>('0')
    const [neighborhood, setNeighborhood] = useState<string>('')

    async function handleCreate(e: any) {
        e.preventDefault();
        let employee: IEmployee
        employee = {
            name: e.target[0].value,
            cpf: e.target[1].value,
            dateofbirth: new Date(e.target[2].value),
            zipcode: e.target[3].value,
            address: e.target[4].value,
            neighborhood: e.target[5].value,
            number: e.target[6].value,
            complement: e.target[7].value,
            city: e.target[8].value,
            state: e.target[9].value,
            user: {
                email_cellphone: e.target[10].value,
                password: e.target[11].value
            }
        }
        const response = await Api.post('employee', employee)
        if(response.data){
            return alert('sucesso')
        }
        alert('error')
    }

    function findAddress(event: FocusEvent<HTMLInputElement, Element>){
        if(event.target.value.length >= 8){
            Cep.get(`${event.target.value}/json/`).then((response) => {
                setAddress(response.data.logradouro)
                setNeighborhood(response.data.bairro)
                setNumber(response.data.numero)
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
                            <form>
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
                                                    <Input label='Data de nascimento' type='text' name='dateofbirth' />
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className="input-field col s12">
                                                    <Input label='CEP' type='text' name='zipcode' />
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className="input-field col s12">
                                                    <Input label='Endereço' type='text' name='address' />
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className="input-field col s11">
                                                    <Input label='Bairro' type='text' name='neighborhood' />
                                                </div>
                                                <div className="input-field col s1">
                                                    <Input label='Número' type='text' name='numero' />
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className="input-field col s12">
                                                    <Input label='Complemento' type='text' name='complement' />
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className="input-field col s11">
                                                    <Input label='Cidade' type='text' name='city' />
                                                </div>
                                                <div className="input-field col s1">
                                                    <Input label='Estado' type='text' name='state' />
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className="input-field col s6">
                                                    <Input label='e-mail' type='text' name='email' />
                                                </div>
                                                <div className="input-field col s6">
                                                    <Input label='password' type='password' name='password' />
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