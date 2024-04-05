import { FormEvent, useContext, useEffect, useState } from 'react';
import { Input } from '../../components/Inputs';
import { Button } from '../../components/Buttom';
import { AuthContext } from '../../contexts/AuthContext';
import { Image, Loginpage } from './styles';

export function SingIn() {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const { signIn } = useContext(AuthContext);

    useEffect(() => {
        document.body.classList.remove('2-columns')
        const classnames = ['1-column','login-bg', 'blank-page', 'blank-page']
        classnames.map(value => document.body.classList.add(value))
    },[])

    async function handleLogin(e: FormEvent<HTMLFormElement>){
        const email = (e.currentTarget.elements[0] as HTMLInputElement).value
        const password = (e.currentTarget.elements[1] as HTMLInputElement).value
        e.preventDefault()
        setIsLoading(true)
        await signIn({
            email_cellphone: email,
            password: password
        })
        setIsLoading(false)
    }

    return (
        <div className="row">
            <div className='col s12'>
                <div className="container">
                    <Loginpage className="row">
                        <div className="col s12 m6 l4 z-depth-4 card-panel border-radius-6 login-card bg-opacity-8">
                            <form className="login-form" onSubmit={handleLogin}>
                                <div className="row">
                                    <div className="input-field col s12 center">
                                        <Image src='/logo.png' alt='Logo absus' />
                                    </div>
                                </div>
                                <div className="row margin">
                                    <div className="input-field col s12">
                                        <Input label='E-mail' icon="person_outline" name="email_cellphone" type="text" />
                                    </div>
                                </div>
                                <div className="row margin">
                                    <div className="input-field col s12">
                                        <Input label='Senha' icon="lock_outline" name="password" type="password" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col s12 m12 l12 ml-2 mt-1">
                                    <p>
                                        <label>
                                            <input type="checkbox" />
                                            <span>Mantenha-se conectado </span>
                                        </label>
                                    </p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <Button isLoading={isLoading} className='btn waves-effect waves-light border-round gradient-45deg-indigo-blue col s12'>
                                            Entrar
                                        </Button>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <p className="margin medium-small"><a href="user-forgot-password.html">Esqueceu sua senha ?</a></p>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </Loginpage>
                </div>
            </div>
        </div>
    );
}