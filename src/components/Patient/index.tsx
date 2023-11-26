import React from 'react';
import { IPatientProps } from '../../shared/ipatientprops';
import { Container } from './styles';

const Patient: React.FC<IPatientProps> = ({
    id, name, dateofbirth, user,
}) => {

    return (
        <Container>
            <div>
                <span>{id}</span>
                <small>{name}</small>
                <small>{dateofbirth.toString()}</small>
                <small>{user?.email}</small>
                <small>{user?.cellphone}</small>
            </div>
        </Container>
    );
}

export default Patient;