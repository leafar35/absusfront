import Api from '../../services/api';
import { FocusEvent, useEffect, useState } from 'react';
import { Input } from '../../components/Inputs';
import { Button } from '../../components/Buttom';
import { IEmployee } from '../../shared/iemployee';
import Swal from 'sweetalert2';
import { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';
import Cep from '../../services/cep';

export default function Profile(){
    const navigate = useNavigate();
    const [name, setName] = useState<string>('')
    const [cpf, setCpf] = useState<number>(0)
    const [dateofbirth, setDateOfBirth] = useState<string>('')
    const [zipcode, setZipcode] = useState<string>('')
    const [address, setAddress] = useState<string>('')
    const [number, setNumber] = useState<number>(0)
    const [complement, setComplment] = useState<string>('')
    const [neighborhood, setNeighborhood] = useState<string>('')
    const [city, setCity] = useState<string>('')
    const [state, setState] = useState<string>('')
    const [email, setEmail] = useState<string>('')

    useEffect(() => {
        async function getMyInformation(){
            const response = await Api.get('authemployee/me')
            setName(response.data.data.name)
            setCpf(response.data.data.cpf)
            setDateOfBirth(response.data.data.dateofbirth)
            setZipcode(response.data.data.zipcode)
            setAddress(response.data.data.address)
            setNeighborhood(response.data.data.neighborhood)
            setComplment(response.data.data.complement)
            setNumber(response.data.data.number)
            setCity(response.data.data.city)
            setState(response.data.data.state)
            setEmail(response.data.data.user.email_cellphone)
        }
        getMyInformation()
    },[])

    const update = async (e: any) => {
        e.preventDefault();
        try {
            let employee: IEmployee
            employee = {
                name: e.target[0].value,
                cpf: e.target[1].value,
                dateofbirth: new Date(e.target[2].value),
                zipcode: e.target[5].value,
                address: e.target[6].value,
                neighborhood: e.target[7].value,
                number: e.target[8].value,
                complement: e.target[9].value,
                city: e.target[10].value,
                state: e.target[11].value,
                user: {
                    email_cellphone: e.target[3].value,
                    password: e.target[4].value
                }
            }
            await Api.put('authemployee/me', employee)
            return Swal.fire({
                title: 'Dados Atualizados!',
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
                setZipcode(response.data.cep)
                setAddress(response.data.logradouro)
                setNeighborhood(response.data.bairro)
                setComplment(response.data.complemento)
                setCity(response.data.localidade)
                setState(response.data.uf)
            })
        }
    }

    function handleGoBack(e: any){
        e.preventDefault();
        navigate(-1)
    }

    return (
        <>
            <div className="section">
                <div className='row'>
                    <div className='col s12'>
                        <div className="card">
                            <div className="card-content card-default scrollspy">
                                <div className="card-title">
                                    <div className="row">
                                        <div className="col s12 m6 l10">
                                            <h3 className="card-title">Minhas Informações</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="divider mb-3"></div>
                                <div className="row">
                                    <div className="col s12" id="account">
                                        <form id="accountform" onSubmit={update}>
                                            <div className="row">
                                                <div className="col s12 m6">
                                                    <div className="row">
                                                        <div className="col s12 Input-field">
                                                            <Input id="name" name="name" type="text" className="validate" value={name} onChange={(e: any) => setName(e.target.value)} />
                                                            <label htmlFor="name">Nome Completo</label>
                                                        </div>
                                                        <div className="col s12 Input-field">
                                                            <Input id="cpf" name="cpf" type="text" className="validate" value={cpf?.toString()} onChange={(e: any) => setCpf(e.target.value)} />
                                                            <label htmlFor="cpf">CPF</label>
                                                        </div>
                                                        <div className="col s12 Input-field">
                                                            <Input id="dateofbirth" name="dateofbirth" type="date" className="validate" value={dateofbirth?.toString()} onChange={(e: any) => setDateOfBirth(e.target.value)} />
                                                            <label htmlFor="dateofbirth">Data de Nascimento</label>
                                                        </div>
                                                        <div className="col s12 Input-field">
                                                            <Input className="validate" type="text" value={email} onChange={(e: any) => setEmail(e.target.value)} />
                                                            <label>Usuário / E-mail</label>
                                                        </div>
                                                        <div className="col s12 Input-field">
                                                            <Input className="validate" type="password" />
                                                            <label>Senha</label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col s12 m6">
                                                    <div className="row">
                                                        <div className="col s12 Input-field">
                                                            <Input id="cep" name="cep" type="text" className="validate" value={zipcode} onChange={(e: any) => setZipcode(e.target.value)} onBlur={findAddress} />
                                                            <label htmlFor="cep">CEP</label>
                                                        </div>
                                                        <div className="col s12 Input-field">
                                                            <Input id="address" name="address" type="text" className="validate" value={address} onChange={(e: any) => setAddress(e.target.value)} />
                                                            <label htmlFor="address">Endereço</label>
                                                        </div>
                                                        <div className='row'>
                                                            <div className='col s12'>
                                                                <div className="col s10 Input-field">
                                                                    <Input id="neighborhood" name="neighborhood" type="text" className="validate" value={neighborhood} onChange={(e: any) => setNeighborhood(e.target.value)} />
                                                                    <label htmlFor="neighborhood">Bairro</label>
                                                                </div>
                                                                <div className="col s2 Input-field">
                                                                    <Input id="number" name="number" type="text" className="validate" value={number?.toString()} onChange={(e: any) => setNumber(e.target.value)} />
                                                                    <label htmlFor="number">Número</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col s12 Input-field">
                                                            <Input id="complement" name="complement" type="text" className="validate" value={complement} onChange={(e: any) => setComplment(e.target.value)} />
                                                            <label htmlFor="complement">Complemento</label>
                                                        </div>
                                                        <div className='row'>
                                                            <div className='col s12'>
                                                                <div className="col s10 Input-field">
                                                                    <Input id="city" name="city" type="text" className="validate" value={city} onChange={(e: any) => setCity(e.target.value)} />
                                                                    <label htmlFor="email">Cidade</label>
                                                                </div>
                                                                <div className="col s2 Input-field">
                                                                    <Input id="state" name="state" type="text" className="validate" value={state} onChange={(e: any) => setState(e.target.value)} />
                                                                    <label htmlFor="state">Estado</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className="col s12 mt-3">
                                                        <Button isLoading={false} className='btn waves-effect waves-light gradient-45deg-indigo-blue right'>
                                                            <i className="material-icons left">save</i> Atualizar
                                                        </Button>
                                                        <Button onClick={handleGoBack} isLoading={false} className='btn waves-effect waves-light gradient-45deg-red-pink left'>
                                                            <i className="material-icons left">arrow_back</i> Voltar
                                                        </Button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}