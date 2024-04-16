import Api from '../../services/api';
import { useEffect, useState } from 'react';
import { Input } from '../../components/Inputs';
import { Button } from '../../components/Buttom';
import { IEmployee } from '../../shared/iemployee';
import Swal from 'sweetalert2';
import { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Profile(){
    const navigate = useNavigate();
    const [profile, setProfile] = useState<IEmployee | null>(null)

    useEffect(() => {
        async function getMyInformation(){
            const response = await Api.get('authemployee/me')
            setProfile(response.data.data)
        }
        getMyInformation()
    },[])

    const update = async (e: any) => {
        e.preventDefault();
        try {
            let patient: IEmployee
            patient = {
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
                                                            <Input id="name" name="name" type="text" className="validate" value={profile?.name} />
                                                            <label htmlFor="name">Nome Completo</label>
                                                        </div>
                                                        <div className="col s12 Input-field">
                                                            <Input id="cpf" name="cpf" type="text" className="validate" value={profile?.cpf?.toString()} />
                                                            <label htmlFor="cpf">CPF</label>
                                                        </div>
                                                        <div className="col s12 Input-field">
                                                            <Input id="dateofbirth" name="dateofbirth" type="date" className="validate" value={profile?.dateofbirth?.toString()} />
                                                            <label htmlFor="dateofbirth">Data de Nascimento</label>
                                                        </div>
                                                        <div className="col s12 Input-field">
                                                            <Input className="validate" type="text" value={profile?.user?.email_cellphone} />
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
                                                            <Input id="cep" name="cep" type="text" className="validate" value={profile?.zipcode} />
                                                            <label htmlFor="cep">CEP</label>
                                                        </div>
                                                        <div className="col s12 Input-field">
                                                            <Input id="address" name="address" type="text" className="validate" value={profile?.address} />
                                                            <label htmlFor="address">Endereço</label>
                                                        </div>
                                                        <div className='row'>
                                                            <div className='col s12'>
                                                                <div className="col s10 Input-field">
                                                                    <Input id="neighborhood" name="neighborhood" type="text" className="validate" value={profile?.neighborhood} />
                                                                    <label htmlFor="neighborhood">Bairro</label>
                                                                </div>
                                                                <div className="col s2 Input-field">
                                                                    <Input id="number" name="number" type="text" className="validate" value={profile?.number?.toString()} />
                                                                    <label htmlFor="number">Número</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col s12 Input-field">
                                                            <Input id="complement" name="complement" type="text" className="validate" value={profile?.complement} />
                                                            <label htmlFor="complement">Complemento</label>
                                                        </div>
                                                        <div className='row'>
                                                            <div className='col s12'>
                                                                <div className="col s10 Input-field">
                                                                    <Input id="city" name="city" type="text" className="validate" value={profile?.city} />
                                                                    <label htmlFor="email">Cidade</label>
                                                                </div>
                                                                <div className="col s2 Input-field">
                                                                    <Input id="state" name="state" type="text" className="validate" value={profile?.state} />
                                                                    <label htmlFor="state">Estado</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col s12 display-flex justify-content-end mt-3">
                                                    <Button isLoading={false} className="btn indigo">Save changes</Button>
                                                    <Button onClick={handleGoBack} isLoading={false} className="btn btn-light">Cancel</Button>
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