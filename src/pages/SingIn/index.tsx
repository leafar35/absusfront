import { FormEvent, useContext } from 'react';
import logoImg from '../../assets/logo.jpeg';
import Input from '../../components/Inputs';
import Button from '../../components/Buttom';
import { AuthContext } from '../../contexts/AuthContext';
import { Container, Logo, FormTitle, Form } from './styles';

export function SingIn() {
    const { signIn } = useContext(AuthContext);

    function handleLogin(e: FormEvent<HTMLFormElement>){
        const email = (e.currentTarget.elements[0] as HTMLInputElement).value
        const password = (e.currentTarget.elements[1] as HTMLInputElement).value
        e.preventDefault()
        signIn({
            email_cellphone: email,
            password: password
        })
    }

    return (
        <Container>
            <Logo>
                <img src={logoImg} alt="Absus" />
                <h2>Entrar</h2>
            </Logo>
            <Form onSubmit={handleLogin}>
                <FormTitle>Entrar</FormTitle>

                <Input 
                    name='email_cellphone'
                    type="text"
                    placeholder="E-mail ou Telefone"
                    required
                />
                <Input
                    name='password'
                    type="password"
                    placeholder="senha"
                    required
                />

                <Button type="submit">Acessar</Button>
            </Form>
        </Container>
    );
}