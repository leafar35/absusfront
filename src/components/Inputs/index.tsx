import { HTMLAttributes } from 'react';

export interface InputProps extends HTMLAttributes<HTMLInputElement>{
    icon?: string
    label?: string
    type?: string
    name?: string
    value?: string
}

export function Input({icon, label, ...rest}: InputProps){
    return (
        <div className="input-field col s12">
            <i className="material-icons prefix pt-2">{icon}</i>
            <input {...rest} />
            <label htmlFor={label} className="center-align">{label}</label>
        </div>
    )
}