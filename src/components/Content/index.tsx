import React from 'react';
import { Container, Main } from './styles';
import { BreadCrumb } from '../Breadcrumb';
type Props = {
    children?: React.ReactNode
};

export function Content({ children }: Props){
    return (
        <Main id='main'>
            <div className='row'>
                <div className="content-wrapper-before gradient-45deg-indigo-purple"></div>
                <BreadCrumb />
                <div className="col s12">
                    <Container className='container'>
                        {children}
                    </Container>
                    <div className="content-overlay"></div>
                </div>
            </div>
        </Main>
    );
}