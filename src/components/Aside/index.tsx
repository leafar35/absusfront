import React, { useContext, useState } from 'react';
import logoImg from '../../assets/logo.jpeg';
import { MdDashboard, MdOutlineSchedule, MdPerson, MdExitToApp, MdClose, MdMenu } from 'react-icons/md';
import { Container, Header, LogImg, Title, MenuContainer, MenuItemLink, MenuItemButtom, ToggleMenu, ThemeToggleFooter } from './styles';
import { useTheme } from '../../contexts/theme';
import Toggle from '../Toggle';
import { AuthContext } from '../../contexts/AuthContext';
import { Link } from 'react-router-dom';

const Aside: React.FC = () => {
    const { sigOuth } = useContext(AuthContext)
    const { toggleTheme, theme } = useTheme();
    const [ toggleMenuIsOpened, setToggleMenuIsOpened ] = useState(false);
    const [ dartkTheme, setDarkTheme ] = useState(() => theme.title === 'dark' ? true : false);
    const handleToggleMenu = () => {
        setToggleMenuIsOpened(!toggleMenuIsOpened);
    }
    const handleChangeTheme = () => {
        setDarkTheme(!dartkTheme);
        toggleTheme();
    }
    return (
        <Container menuIsOpen={toggleMenuIsOpened}>
            <Header>
                <ToggleMenu onClick={handleToggleMenu}>
                    { toggleMenuIsOpened ? <MdClose /> : <MdMenu /> }
                </ToggleMenu>
                <LogImg src={logoImg} alt="Logo Absus" />
                <Title>Agendamentos Sus</Title>
            </Header>

            <MenuContainer>
                <Link to="/">
                    <MdDashboard />
                    Dashboard
                </Link>
                <Link to="/employees">
                    <MdPerson />
                    Funcionários
                </Link>
                <Link to="/schedules">
                    <MdOutlineSchedule />
                    Agendamentos
                </Link>
                <Link to="/patients">
                    <MdPerson />
                    Pacientes
                </Link>
                <MenuItemButtom onClick={() => sigOuth()}>
                    <MdExitToApp />
                    Sair
                </MenuItemButtom>
            </MenuContainer>

            <ThemeToggleFooter menuIsOpen={toggleMenuIsOpened}>
                <Toggle 
                    labelLeft='Light'
                    labelRight='Dark'
                    checked={dartkTheme}
                    onChangeParam={handleChangeTheme}
                />
            </ThemeToggleFooter>

        </Container>
    );
}

export default Aside;