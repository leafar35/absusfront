import Swal from 'sweetalert2';
import { FocusEvent, useEffect, useState } from 'react';
import Api from '../../../services/api';
import Cep from '../../../services/cep';
import { useNavigate } from 'react-router-dom';
import { Input } from '../../../components/Inputs';
import { Button } from '../../../components/Buttom';
import { IEmployee } from '../../../shared/iemployee';
import { IProfileProps } from '../../../shared/iprofile.props';
import { AxiosError } from 'axios';

export default function CreateEmployee(){
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [profile, setProfile] = useState<number>(0)
    const [profiles, setProfiles] = useState<Array<IProfileProps> | null>(null)
    const [address, setAddress] = useState<string>('')
    const [number, setNumber] = useState<string>('S/N')
    const [city, setCity] = useState<string>('');
    const [state, setState] = useState<string>('');
    const [neighborhood, setNeighborhood] = useState<string>('')

    useEffect(() => {
        getProfiles()
    },[])

    async function getProfiles() {
        const response = await Api.get('rules/profile')
        setProfiles(response.data)
        const elems = document.querySelectorAll('select');
        M.FormSelect.init(elems);
    }

    async function handleCreate(e: any) {
        e.preventDefault();
        setIsLoading(true)
        try{
            let employee: IEmployee
            employee = {
                name: e.target[2].value,
                cpf: e.target[3].value,
                dateofbirth: new Date(e.target[4].value),
                zipcode: e.target[5].value,
                address: e.target[6].value,
                neighborhood: e.target[7].value,
                number: e.target[8].value,
                complement: e.target[9].value,
                city: e.target[10].value,
                state: e.target[11].value,
                user: {
                    email_cellphone: e.target[12].value,
                    password: e.target[13].value,
                    profileId: profile,
                }
            }
            await Api.post('employee', employee)
            Swal.fire({
                title: 'Funcionário cadastado!',
                icon: 'success',
            })
            setIsLoading(false)
            return navigate('/employees')
        }catch(e){
            setIsLoading(false)
            if(e instanceof AxiosError){
                if(e.response?.status == 403){
                    return Swal.fire({
                        title: 'Seu perfil não tem atribuição para criar funcionários',
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

    function handleChange(e: any) {
        let {value} = e.target;
        setProfile(value)
    }

    function findAddress(event: FocusEvent<HTMLInputElement, Element>){
        if(event.target.value.length >= 8){
            Cep.get(`${event.target.value}/json/`).then((response) => {
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
                                            <div className="row">
                                                <div className="input-field col s12">
                                                    <select name='perfil' onChange={handleChange}>
                                                        {profiles?.map((value) => 
                                                            <option value={value.id}>{value.profile}</option>
                                                        )}
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
                                                    <Input label='Data de nascimento' type='date' name='dateofbirth' />
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
                                                    <Input label='Complemento' type='text' name='complement' />
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
                                                    <Input label='e-mail' type='text' name='email' />
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
