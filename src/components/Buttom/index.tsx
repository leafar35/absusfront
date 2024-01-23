import { HTMLAttributes, ReactNode } from 'react';

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    children: ReactNode
    required: string
}

export function Button({
    children,
    required,
    ...rest
}: ButtonProps){
    return (
        <button
            {...rest}
            type='submit'
        >
            {children as string}
        </button>
    )
}