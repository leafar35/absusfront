import Api from '../../services/api';
import { useState, useEffect } from 'react';
import { Container, Title, Actions, Content } from './styles';
import { MdPerson, MdOutlineAddCircle } from "react-icons/md";
import { IPatient } from '../../shared/ipatient';
import Patient from '../../components/Patient';
import { Link } from 'react-router-dom';

export function Patients(){
    const [data, setData] = useState<IPatient[]>([]);

    useEffect(() => {
        async function getPatients() {
            const response = await Api.get('people')
            setData(response.data)   
        }
        getPatients()
    },[])

    return (
        <Container>
            <Title>
                <MdPerson />
                Pacientes
            </Title>
            <Actions>
                <Link to='/patients/create'>
                    <MdOutlineAddCircle />
                    Cadastrar
                </Link>
            </Actions>
            <Content>
                {
                    data.map(item => (
                        <Patient
                            key={item.id}
                            id={item.id ?? 0}
                            name={item.name}
                            dateofbirth={item.dateofbirth}
                            user={item.user}
                        />
                    ))
                }
            </Content>
        </Container>
    );
}