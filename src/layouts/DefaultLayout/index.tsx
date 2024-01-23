import Aside from '../../components/Aside';
import MainHeader from '../../components/MainHeader';
import Content from '../../components/Content';
import { Outlet } from 'react-router-dom';
import { Main } from './styled';

export function DefaultLayout(){
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