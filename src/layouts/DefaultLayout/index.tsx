import { Aside } from '../../components/Aside';
import { MainHeader } from '../../components/MainHeader';
import { Content } from '../../components/Content';
import { Outlet } from 'react-router-dom';
import { Main } from './styled';
import { useEffect } from 'react';

export function DefaultLayout(){
    useEffect(() => {
        document.body.classList.add('2-columns')
        const classnames = ['1-column','login-bg', 'blank-page', 'blank-page']
        classnames.map(value => document.body.classList.remove(value))
    },[])
    return (
        <Main>
            <MainHeader />
            <Aside />
            <Content> 
                <Outlet />
            </Content>
        </Main>
    )
}