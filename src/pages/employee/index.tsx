import Api from '../../services/api';
import { useState, useEffect } from 'react';
import Patient from '../../components/Patient';
import { IEmployee } from '../../shared/iemployee';
import { MdPerson, MdOutlineAddCircle } from "react-icons/md";
import { Container, Title, Actions, Content } from './styles';
import { Link } from 'react-router-dom';

export default function Employee(){
    const [data, setData] = useState<IEmployee[]>([]);

    useEffect(() => {
        async function getEmployee() {
            const response = await Api.get('employee')
            setData(response.data)   
        }
        getEmployee()
    },[])

    return (
        <Container>
            <Title>
                <MdPerson />
                Funcionários
            </Title>
            <Actions>
                <Link to='/employee/create'>
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