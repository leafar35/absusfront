import React, { useEffect, useState } from 'react';
import Api from '../../../services/api';
import Cep from '../../../services/cep';
import Input from '../../../components/Inputs';
import Button from '../../../components/Buttom';
import { MdPerson } from "react-icons/md";
import { useNavigate, useParams } from 'react-router-dom';
import { IPatient } from '../../../shared/ipatient';
import { Container, Content, Form, Title, FormTitle } from '../styles';

const CreatePatient: React.FC = () => {
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
    const [email, setEmail] = useState<string>('')
    const [cellphone, setCellphone] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    useEffect(() => {
        async function getPatientForUpdate() {
            const response = await Api.get(`patients/${patientId.id}`)
            setId(response.data.id)
            setName(response.data.name)
            setCpf(response.data.cpf)
            setDateOfBirth(response.data.dateofbirth)
            setZipcode(response.data.zipcode)
            setAddress(response.data.address)
            setNeighborhood(response.data.neighborhood)
            setComplment(response.data.complement)
            setNumber(response.data.number)
            setEmail(response.data.user.email)
            setCellphone(response.data.user.cellphone)
            setPassword(response.data.user.password)
        }
        getPatientForUpdate()
    },[])

    async function handleCreate(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        let patient: IPatient
        patient = {
            id: id,
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
                        value={name}
                        onChange={ (e) => setName(e.target.value) }
                    />
                    <Input 
                        type="text"
                        placeholder="CPF"
                        required
                        value={cpf}
                        onChange={ (e) => setCpf(parseInt(e.target.value)) }
                    />

                    <Input 
                        type="date"
                        placeholder="Data de Nacimento"
                        required
                        value={dateofbirth}
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
                        value={email}
                        onChange={ (e) => setEmail(e.target.value) }
                    />

                    <Input
                        type="text"
                        placeholder="Celular"
                        required
                        value={cellphone}
                        onChange={ (e) => setCellphone(e.target.value) }
                    />

                    <Input
                        type="password"
                        placeholder="Senha de acesso"
                        required
                        value={password}
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