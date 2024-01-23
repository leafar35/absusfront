import React, { FocusEvent, useState } from 'react';
import Api from '../../../services/api';
import Cep from '../../../services/cep';
import { Input } from '../../../components/Inputs';
import { Button } from '../../../components/Buttom';
import { MdPerson } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { IPatient } from '../../../shared/ipatient';
import { Container, Content, Form, Title, FormTitle } from '../styles';

const CreatePatient: React.FC = () => {
    const navigate = useNavigate();
    const [zipcode, setZipcode] = useState<string>('')
    const [address, setAddress] = useState<string>('')
    const [number, setNumber] = useState<string>('0')
    const [complment, setComplment] = useState<string>('')
    const [neighborhood, setNeighborhood] = useState<string>('')

    async function handleCreate(e: any) {
        e.preventDefault();
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
        console.log(patient)
        const response = await Api.post('people', patient)
        if(response.data){
            return alert('sucesso')
        }
        alert('error')
    }

    async function findAddress(event: FocusEvent<HTMLInputElement, Element>){
        if(event.target.value.length >= 8){
          const response = await Cep.get(`${zipcode}/json/`)
          setZipcode(response.data.cep)
          setAddress(response.data.logradouro)
          setNeighborhood(response.data.bairro)
          setComplment(response.data.complemento)
        }
      }

    function handleGoBack(){        
        navigate(-1)
    }

    return (
        <Container>
            <Title>
                <MdPerson />
                Pacients
            </Title>
            <Content>
                <Form onSubmit={handleCreate}>
                    <FormTitle>
                        Cadastrar
                    </FormTitle>

                    {/* <Input 
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
                        name='number_sus'
                        placeholder="Número do sus"
                        required
                    />

                    <Input 
                        type="text"
                        name='number_post'
                        placeholder="Número do Posto"
                        required
                    />

                    <Input
                        type="text"
                        placeholder="CEP"
                        required
                        value={zipcode}
                        onBlur={findAddress}
                        onChange={ (e) => setZipcode(e.target.value) }
                    />

                    <Input
                        type="text"
                        placeholder="Endereço"
                        required
                        value={address}
                        onChange={ (e) => setAddress(e.target.value) }
                    />

                    <Input
                        type="text"
                        placeholder="Bairro"
                        required
                        value={neighborhood}
                        onChange={ (e) => setNeighborhood(e.target.value) }
                    />

                    <Input
                        type="text"
                        placeholder="Número"
                        required
                        value={number}
                        onChange={ (e) => setNumber(e.target.value) }
                    />

                    <Input
                        type="text"
                        placeholder="Complemento"
                        value={complment}
                        onChange={ (e) => setComplment(e.target.value) }
                    />

                    <Input
                        type="text"
                        placeholder="Cidade"
                        name='city'
                    />

                    <Input
                        type="text"
                        placeholder="Estado"
                        name='state'
                    />

                    <Input
                        type="text"
                        placeholder="E-mail ou Celular"
                        name='email_cellphone'
                        required
                    />

                    <Input
                        type="password"
                        name='password'
                        placeholder="Senha de acesso"
                        required
                    /> */}

                    {/* <Button type="submit">Cadastrar</Button>
                    <Button type="button" onClick={() => handleGoBack()}>Voltar</Button> */}
                </Form>
            </Content>

        </Container>
    );
}

export default CreatePatient;