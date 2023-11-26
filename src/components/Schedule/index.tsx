import React from 'react';
import { ISchedule } from '../../shared/ischedule';
import { Container } from './styles';

const Schedule: React.FC<ISchedule> = ({
    id, title, category, localization, schedule, userId 
}) => {

    return (
        <Container>
            <div>
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