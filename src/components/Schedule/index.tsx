import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ISchedule } from '../../shared/ischedule';
import { Container } from './styles';

const Schedule: React.FC<ISchedule> = ({
    id, title, category, localization, schedule, userId 
}) => {
    const navigate = useNavigate()
    function update (id: number | undefined){
        navigate(`/schedules/update/${id}`)
    }
    return (
        <Container>
            <div onClick={() => update(id)}>
                <span>{id}</span>
                <small>{title}</small>
                <small>{category}</small>
                <small>{localization}</small>
                <small>{userId}</small>
            </div>
        </Container>
    );
}

export default Schedule;