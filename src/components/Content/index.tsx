import React from 'react';
import { Container, Main } from './styles';
type Props = {
    children?: React.ReactNode
};

export function Content({ children }: Props){
    return (
        <Main id='main'>
            <div className='row'>
                <div className="content-wrapper-before gradient-45deg-indigo-purple"></div>
                <div className="col s12">
                    <Container className='container'>
                        <div className='section'>
                            {children}
                        </div>
                    </Container>
                    <div className="content-overlay"></div>
                </div>
            </div>
        </Main>
    );
}