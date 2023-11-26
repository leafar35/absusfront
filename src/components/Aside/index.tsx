import React, { useState } from 'react';
import logoImg from '../../assets/logo.jpeg';
import { MdDashboard, MdOutlineSchedule, MdPerson, MdExitToApp, MdClose, MdMenu } from 'react-icons/md';
import { Container, Header, LogImg, Title, MenuContainer, MenuItemLink, MenuItemButtom, ToggleMenu, ThemeToggleFooter } from './styles';
import { useAuth } from '../../hooks/auth';
import { useTheme } from '../../hooks/theme';
import Toggle from '../Toggle';

const Aside: React.FC = () => {
    const { sigOuth } = useAuth();
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
                <MenuItemLink href="/">
                    <MdDashboard />
                    Dashboard
                </MenuItemLink>
                <MenuItemLink href="/schedules">
                    <MdOutlineSchedule />
                    Agendamentos
                </MenuItemLink>
                <MenuItemLink href="/patients">
                    <MdPerson />
                    Pacientes
                </MenuItemLink>
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