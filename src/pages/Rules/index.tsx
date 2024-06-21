import { MouseEventHandler, useEffect, useState } from 'react';
import Api from '../../services/api';
import { IProfileProps, IRulesProps } from '../../shared/iprofile.props';
import { PulseLoader } from 'react-spinners';

export default function Rules(){
    const [loading, setLoading] = useState(false)
    const [allRules, setAllRules] = useState<IRulesProps[] | null>(null)
    const [profiles, setProfiles] = useState<IProfileProps[] | null>(null)
    const [rules, setRules] = useState<IRulesProps[] | null>(null)
    const [myRule, setMyRules] = useState<IRulesProps[] | null>(null)

    useEffect(() => {
        async function getProfile(){
            const { data } = await Api.get('rule/profile')
            setProfiles(data.data)
        }
        async function getRules() {
            const { data } = await Api.get('rule/rules')
            setRules(data.data)
            setAllRules(data.data)
        }
        getProfile()
        getRules()
    },[])

    const handleClick: MouseEventHandler<HTMLLIElement> = (event) => {
        const id = event.currentTarget.id
        if(!id) return
        setLoading(true)
        setRules(allRules)
        Api.get(`rule/allow/${id}`).then((response) => {
            setMyRules(response.data.data)
            setLoading(false)
            procedure()
        })
    };

    const procedure = () => {
        if(myRule && myRule.length && rules && rules.length){
            const newRules = rules?.filter(rule => !myRule?.some(my => my.id === rule.id))
            console.log(newRules)
            if(newRules && newRules.length){
                setRules(newRules)
            }
        }
    }

    const handleClickLeft: MouseEventHandler<HTMLLIElement> = (event) => {
        const id = event.currentTarget.id        
    };

    const handleClickRight: MouseEventHandler<HTMLLIElement> = (event) => {
        const id = event.currentTarget.id        
    };

    return (
        <>
            <div className="section">
                <div className='row'>
                    <div className='col s12'>
                        <div className="card">
                            <div className="card-content card-default scrollspy">
                                <div className="card-title">
                                    <div className="row">
                                        <div className="col s12 m6 l10">
                                            <h3 className="card-title">
                                                <i className="material-icons left">verified_user</i> Regras de Acesso
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="divider mb-3"></div>
                                <div className="row">
                                   <div className='col s3'>
                                        <div className='card'>
                                            <div className="card-content card-default scrollspy">
                                                <div className="card-title">
                                                    <div className="row">
                                                        <div className="col s12 m6 l10">
                                                            <h3 className="card-title">
                                                                <i className="material-icons left">person</i> Perfils
                                                            </h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="divider mb-3"></div>
                                                <div className='row'>
                                                    <div className='col s12'>
                                                        <ul className='collection'>
                                                            {profiles?.length && profiles.map(value => <li className='collection-item cursor-pointer' key={value.id} id={value.id?.toString()} onClick={(e) => handleClick(e)}>{value.profile}</li>)}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                   </div>
                                   <div className='col s4'>
                                        <div className='card'>
                                            <div className="card-content card-default scrollspy">
                                                <div className="card-title">
                                                    <div className="row">
                                                        <div className="col s12 m6 l10">
                                                            <h3 className="card-title">
                                                                <i className="material-icons left">check</i>Permitido
                                                            </h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="divider mb-3"></div>
                                                <div className='row'>
                                                    <div className='col s12'>
                                                        <ul className='collection'>
                                                            {!loading ? (
                                                                myRule?.length 
                                                                    ? (
                                                                        myRule.map(value => (
                                                                            <li className='collection-item' key={value.id} onClick={(e) => handleClickLeft(e)}>{value.rule}</li>
                                                                        ))
                                                                    ) 
                                                                    : (
                                                                        <li className='collection-item'>Selecione um perfil</li>
                                                                    )
                                                                ) : (
                                                                    <div className='center'>
                                                                        <PulseLoader color="#000" size={15} />
                                                                    </div>
                                                                )
                                                            }
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                   </div>
                                   <div className='col s1 center'>
                                        <i className="material-icons mt-10">chevron_left</i> 
                                        <i className="material-icons mt-10">chevron_right</i>
                                   </div>
                                   <div className='col s4'>
                                        <div className='card'>
                                            <div className="card-content card-default scrollspy">
                                                <div className="card-title">
                                                    <div className="row">
                                                        <div className="col s12 m6 l10">
                                                            <h3 className="card-title">
                                                                <i className="material-icons left">close</i> Não Permitido
                                                            </h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="divider mb-3"></div>
                                                <div className='row'>
                                                    <div className='col s12'>
                                                        <ul className='collection'>
                                                            {rules?.length && rules.map(value => <li className='collection-item' key={value.id} onClick={(e) => handleClickRight(e)}>{value.rule}</li>)}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                   </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
