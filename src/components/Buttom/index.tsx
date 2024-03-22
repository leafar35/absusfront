import { HTMLAttributes, ReactNode } from 'react';
import { PulseLoader } from 'react-spinners';
import { ButtonContainer } from './styles';

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    children: ReactNode,
    isLoading: boolean,
    sizeLoader?: number,
}

export function Button({
    children,
    isLoading,
    sizeLoader = 14,
    ...rest
}: ButtonProps){
    return (
        <ButtonContainer
            {...rest}
            type='submit'
        >
            {isLoading ? (
                <PulseLoader color="#fff" size={sizeLoader} />
            ): (
                <>{children as string}</>
            )}
        </ButtonContainer>
    )
}