import { FormEvent, useContext, useEffect } from 'react';
import logoImg from '../../assets/logo.jpeg';
import { Input } from '../../components/Inputs';
import { Button } from '../../components/Buttom';
import { AuthContext } from '../../contexts/AuthContext';
import { Loginpage } from './styles';

export function SingIn() {
    const { signIn } = useContext(AuthContext);

    useEffect(() => {
        document.body.classList.remove('2-columns')
        const classnames = ['1-column','login-bg', 'blank-page', 'blank-page']
        classnames.map(value => document.body.classList.add(value))
    },[])

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
        <div className="row">
            <div className='col s12'>
                <div className="container">
                    <Loginpage className="row">
                        <div className="col s12 m6 l4 z-depth-4 card-panel border-radius-6 login-card bg-opacity-8">
                            <form className="login-form" onSubmit={handleLogin}>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <h5 className="ml-4">Sign in</h5>
                                    </div>
                                </div>
                                <div className="row margin">
                                    <Input label='E-mail' icon="person_outline" name="email_cellphone" type="text" />
                                </div>
                                <div className="row margin">
                                    <Input label='Senha' icon="lock_outline" name="password" type="password" />
                                </div>
                                <div className="row">
                                    <div className="col s12 m12 l12 ml-2 mt-1">
                                    <p>
                                        <label>
                                            <input type="checkbox" />
                                            <span>Remember Me</span>
                                        </label>
                                    </p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <Button
                                            className='btn waves-effect waves-light border-round gradient-45deg-purple-deep-orange col s12'
                                            required='required'
                                        >
                                            Entrar
                                        </Button>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s6 m6 l6">
                                        <p className="margin medium-small"><a href="user-register.html">Register Now!</a></p>
                                    </div>
                                    <div className="input-field col s6 m6 l6">
                                        <p className="margin right-align medium-small"><a href="user-forgot-password.html">Forgot password ?</a></p>
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