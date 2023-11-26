import React, { useEffect, useState } from 'react';
import Api from '../../../services/api';
import Cep from '../../../services/cep';
import Input from '../../../components/Inputs';
import Button from '../../../components/Buttom';
import { MdPerson } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { IPatient } from '../../../shared/ipatient';
import { Container, Content, Form, Title, FormTitle } from '../styles';

const CreatePatient: React.FC = () => {
    const navigate = useNavigate();
    const [name, setName] = useState<string>('')
    const [cpf, setCpf] = useState<number>(0)
    const [dateofbirth, setDateOfBirth] = useState<string>('')
    const [zipcode, setZipcode] = useState<string>('')
    const [address, setAddress] = useState<string>('')
    const [number, setNumber] = useState<number>(0)
    const [complment, setComplment] = useState<string>('')
    const [neighborhood, setNeighborhood] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [cellphone, setCellphone] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    async function handleCreate(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        let patient: IPatient
        patient = {
            name: name,
            cpf: cpf,
            dateofbirth: new Date(dateofbirth),
            zipcode: zipcode,
            address: address,
            number: number,
            neighborhood: neighborhood,
            complement: complment,
            user: {
                email: email,
                cellphone: cellphone,
                password: password
            }
        }
        console.log(patient)
        const response = await Api.post('patients', patient)
        if(response.data){
            return alert('sucesso')
        }
        alert('error')
    }

    async function findAddress(){
        if(zipcode.length >= 8){
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

                    <Input 
                        type="text"
                        placeholder="Nome"
                        required
                        onChange={ (e) => setName(e.target.value) }
                    />
                    <Input 
                        type="text"
                        placeholder="CPF"
                        required
                        onChange={ (e) => setCpf(parseInt(e.target.value)) }
                    />

                    <Input 
                        type="date"
                        placeholder="Data de Nacimento"
                        required
                        onChange={ (e) => setDateOfBirth(e.target.value) }
                    />

                    <Input
                        type="text"
                        placeholder="CEP"
                        required
                        value={zipcode}
                        onBlur={() => findAddress()}
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
                        onChange={ (e) => setNumber(parseInt(e.target.value)) }
                    />

                    <Input
                        type="text"
                        placeholder="Complemento"
                        required
                        value={complment}
                        onChange={ (e) => setComplment(e.target.value) }
                    />

                    <Input
                        type="text"
                        placeholder="E-mail"
                        required
                        onChange={ (e) => setEmail(e.target.value) }
                    />

                    <Input
                        type="text"
                        placeholder="Celular"
                        required
                        onChange={ (e) => setCellphone(e.target.value) }
                    />

                    <Input
                        type="password"
                        placeholder="Senha de acesso"
                        required
                        onChange={ (e) => setPassword(e.target.value) }
                    />

                    <Button type="submit">Cadastrar</Button>
                    <Button type="button" onClick={() => handleGoBack()}>Voltar</Button>
                </Form>
            </Content>

        </Container>
    );
}

export default CreatePatient;