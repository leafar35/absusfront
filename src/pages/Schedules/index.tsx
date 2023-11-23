import React, { useState, useEffect } from 'react';
import { Container, Content } from './styles';
import Patients from '../../components/Patients';
import Api from '../../services/api';

interface IData {
    id: number
    title: string
    category: string
    localization: string
    schedule: string
    appear: boolean
    userId: number
}

const List: React.FC = () => {
    const [data, setData] = useState<IData[]>([]);

    useEffect(() => {
        async function getSchedule() {
            const response = await Api.get('schedule')
            setData(response.data)   
        }
        getSchedule()
    },[])

    return (
        <Container>

            <Content>
                {
                    data.map(item => (
                        <Patients
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            category={item.title}
                            email={item.category}
                        />
                    ))
                }
            </Content>

        </Container>
    );
}

export default List;