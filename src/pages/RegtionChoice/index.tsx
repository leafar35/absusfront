import { FormEvent, useContext, useEffect } from 'react';
import Select from 'react-select'
import { Button } from '../../components/Buttom';
import { AuthContext } from '../../contexts/AuthContext';
import { Image, Loginpage } from './styles';

export function RegionChoice() {
    const { setRegionId } = useContext(AuthContext);

    useEffect(() => {
        document.body.classList.remove('2-columns')
        const classnames = ['1-column','login-bg', 'blank-page', 'blank-page']
        classnames.map(value => document.body.classList.add(value))
    },[])

    async function handleChoiceRegion(e: FormEvent<HTMLFormElement>){
        const value = (e.currentTarget.elements[1] as HTMLInputElement).value
        e.preventDefault()
        setRegionId(value)
    }

    const customStyles = {
        menuPortal: (base: any) => ({ ...base, zIndex: 9999 }),
    };

    return (
        <div className="row">
            <div className='col s12'>
                <div className="container">
                    <Loginpage className="row">
                        <div className="col s12 m6 l4 z-depth-4 card-panel border-radius-6 login-card bg-opacity-8">
                            <form className="login-form" onSubmit={handleChoiceRegion}>
                                <div className="row">
                                    <div className="input-field col s12 center">
                                        <Image src='/logo.png' alt='Logo absus' />
                                    </div>
                                </div>
                                <div className="row margin">
                                    <div className="input-field col s12 pl-0">
                                        <Select
                                            name='regionId' 
                                            placeholder='Selecione o bairro de atendimento!' 
                                            options={[{ value: 'Centro', label: 'Centro'},
                                                { value: 'Vila Real', label: 'Vila Real'}]}
                                            styles={customStyles}
                                            menuPortalTarget={document.body}
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <Button isLoading={false} className='btn waves-effect waves-light border-round gradient-45deg-indigo-blue col s12'>
                                            Selecionar
                                        </Button>
                                    </div>
                                </div>
                                <br />
                            </form>
                        </div>
                    </Loginpage>
                </div>
            </div>
        </div>
    );
}
