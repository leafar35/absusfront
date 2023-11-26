import React from 'react';
import { Container } from './styles';
import { ISelectInputProps } from '../../shared/iselectinput';

const SelectInput: React.FC<ISelectInputProps> = ({ options, change,  defaultValue }) => {
    return (
        <Container>
            <select onChange={change} defaultValue={defaultValue}>
                {
                    options.map(option => (
                        <option key={option.value} value={option.value.toString()}>{option.label.toString()}</option>
                    ))
                }
            </select>
        </Container>
    );
}

export default SelectInput;