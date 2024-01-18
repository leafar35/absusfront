import { FocusEvent, useState } from 'react';
import Api from '../../../services/api';
import Cep from '../../../services/cep';
import Input from '../../../components/Inputs';
import Button from '../../../components/Buttom';
import { MdPerson } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { Container, Content, Form, Title, FormTitle } from '../styles';
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
        <Container>
            <Title>
                <MdPerson />
                Funcionários
            </Title>
            <Content>
                <Form onSubmit={handleCreate}>
                    <FormTitle>
                        Cadastrar
                    </FormTitle>

                    <Input 
                        type="text"
                        name='name'
                        placeholder="Nome"
                        required
                    />
                    <Input 
                        type="text"
                        name='cpf'
                        placeholder="CPF"
                        required
                    />

                    <Input 
                        type="date"
                        name='dateofbirth'
                        placeholder="Data de Nacimento"
                        required
                    />

                    <Input
                        type="text"
                        placeholder="CEP"
                        required
                        name='zipcode'
                        onBlur={findAddress}
                    />

                    <Input
                        type="text"
                        name='address'
                        placeholder="Endereço"
                        required
                        value={address}
                    />

                    <Input
                        type="text"
                        placeholder="Bairro"
                        required
                        name='neighborhood'
                        value={neighborhood}
                    />

                    <Input
                        type="text"
                        placeholder="Número"
                        required
                        name='number'
                        value={number}
                    />

                    <Input
                        type="text"
                        name='complement'
                        placeholder="Complemento"
                        required                        
                    />

                    <Input
                        type="text"
                        name='city'
                        placeholder="Cidade"
                        required
                    />

                    <Input
                        type="text"
                        name='state'
                        placeholder="Estado"
                        required
                    />

                    <Input
                        type="text"
                        placeholder="E-mail"
                        required
                        name='email'
                    />

                    <Input
                        type="password"
                        placeholder="Senha de acesso"
                        required
                        name='password'
                    />

                    <Button type="submit">Cadastrar</Button>
                    <Button type="button" onClick={() => handleGoBack()}>Voltar</Button>
                </Form>
            </Content>

        </Container>
    );
}