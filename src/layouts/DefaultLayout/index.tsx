import Aside from '../../components/Aside';
import MainHeader from '../../components/MainHeader';
import Content from '../../components/Content';
import { Outlet } from 'react-router-dom';
import { Grid } from './styled';

export function DefaultLayout(){
    return (
        <Grid>
            <MainHeader />
            <Aside />
            <Content> 
                <Outlet />
            </Content>
        </Grid>
    )
}