import { HTMLAttributes, ReactNode } from 'react';

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    children: ReactNode
}

export function Button({
    children,
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