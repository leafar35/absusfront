import Api from '../../services/api';
import React, { useState, useEffect } from 'react';
import { Container, Title, Actions, Schedule, Content } from './styles';
import { MdPerson, MdOutlineAddCircle } from "react-icons/md";
import { IPatient } from '../../shared/ipatient';
import Patient from '../../components/Patient';

const Patients: React.FC = () => {
    const [data, setData] = useState<IPatient[]>([]);

    useEffect(() => {
        async function getPatients() {
            const response = await Api.get('peoples')
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
                <Schedule href='/patients/create'>
                    <MdOutlineAddCircle />
                    Cadastrar
                </Schedule>
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

export default Patients;