import React from 'react';
import { Container } from './styles';

interface IPatientProps {
    id: number,
    title: string,
    category: string,
    email: string,
}

const Patients: React.FC<IPatientProps> = ({
    id, title, category, email, 
}) => {

    return (
        <Container>
            <div>
                <span>{id}</span>
                <small>{title}</small>
                <small>{category}</small>
                <small>{email}</small>
            </div>
        </Container>
    );
}

export default Patients;