import React, { useState, useEffect } from 'react';
import { Actions, Container, Content, ScheduleTag, Title } from './styles';
import Schedule from '../../components/Schedule';
import Api from '../../services/api';
import { MdAccessTime, MdOutlineAddCircle } from "react-icons/md";
import { ISchedule } from '../../shared/ischedule';

const List: React.FC = () => {
    const [data, setData] = useState<ISchedule[]>([]);

    useEffect(() => {
        async function getSchedule() {
            const response = await Api.get('schedule')
            setData(response.data)   
        }
        getSchedule()
    },[])

    return (
        <Container>
            <Title>
                <MdAccessTime />
                Agendamentos
            </Title>
            <Actions>
                <ScheduleTag href='/schedules/create'>
                    <MdOutlineAddCircle />
                    Agendar
                </ScheduleTag>
            </Actions>
            <Content>
                {
                    data.map(item => (
                        <Schedule
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            category={item.title}
                            localization={item.localization}
                            schedule={item.schedule}
                            userId={item.userId}
                        />
                    ))
                }
            </Content>

        </Container>
    );
}

export default List;