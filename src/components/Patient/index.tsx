import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IPatientProps } from '../../shared/ipatientprops';
import { Container } from './styles';

const Patient: React.FC<IPatientProps> = ({
    id, name, dateofbirth, user,
}) => {
    const navigate = useNavigate()
    function update (id: number){
        navigate(`update/${id}`)
    }

    return (
        <Container>
            <div onClick={() => update(id)}>
                <span>{id}</span>
                <small>{name}</small>
                <small>{dateofbirth?.toString()}</small>
                <small>{user?.email_cellphone}</small>
            </div>
        </Container>
    );
}

export default Patient;