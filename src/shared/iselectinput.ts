import React from 'react';

export interface IOptionProps {
    value: string | number,
    label: string | number,
}

export interface ISelectInputProps {
    options: Array<IOptionProps>,
    change(event: React.ChangeEvent<HTMLSelectElement>) : void,
    defaultValue?: string | number;
}