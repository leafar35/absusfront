import Auth from '../services/auth';
import { IProfileEntity } from '../shared/iprofile';
import { createContext, useEffect, useState } from 'react';
import { IAuthProvider, IChildrenAuthProvider } from '../shared/auth';
import Api from '../services/api';
import { AxiosError } from 'axios';
import Swal from 'sweetalert2';

export const AuthContext = createContext<IAuthProvider>(null!);

function AuthProvider({ children }: IChildrenAuthProvider) {
    const [region, setRegion] = useState<boolean>(() => { return localStorage.getItem('@absus:choice-regtion') !== null });
    const [logged, setLogged] = useState<boolean>(() => { return localStorage.getItem('@absus:token-auth') !== null });
    const [accessToken, setAccessToken] = useState<string | null>(localStorage.getItem('@absus:token-auth'))
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [profile, setProfile] = useState<IProfileEntity>(null!)

    useEffect(() => {
        const setAuthorization = () => {
            Api.defaults.headers.common['Authorization'] = `bearer ${accessToken}`
            Auth.defaults.headers.common['Authorization'] = `bearer ${accessToken}`
        }
        const getProfile = async() => {
            if(accessToken){
                const {data} = await Auth.get('authemployee/me')
                setProfile(data.data)
                setIsLoading(false)
            }
        }
        setAuthorization()
        getProfile()
    },[accessToken])

    const signIn = async (inputData: any) => {
        try{
            setIsLoading(true)
            const { data } = await Auth.post('authemployee/signIn', {
                email_cellphone: inputData.email_cellphone,
                password: inputData.password
            })
            localStorage.setItem('@absus:token-auth', data.data.accessToken)
            localStorage.setItem('@absus:token-refresh', data.data.refreshToken)
            setAccessToken(data.data.accessToken)
            setLogged(true);
            setIsLoading(false)
            Api.defaults.headers.common['Authorization'] = `bearer ${data.data.accessToken}`
            Auth.defaults.headers.common['Authorization'] = `bearer ${data.data.accessToken}`
        }catch(e){
            setLogged(false);
            setIsLoading(false)
            if(e instanceof AxiosError){
                if(e.response?.data.message && e.response?.data.message instanceof Array){
                    const html = `<div style="text-align: justify;">${e.response?.data.message.join('<Br />')}</div>`
                    return Swal.fire({
                        title: 'Corrija os seguinte erros!',
                        icon: 'error',
                        html: html
                    })
                }
                return Swal.fire({
                    title: e.response?.data.message,
                    icon: 'error',
                })
            }
        }
    }

    const sigOuth = () => {
        localStorage.removeItem('@absus:token-auth');
        localStorage.removeItem('@absus:token-refresh');
        setLogged(false);
        setIsLoading(false)
        window.location.replace('/')
    }

    const setRegionId = (value: string) => {
        setRegion(true)
        localStorage.setItem('@absus:choice-regtion', value)
    }

    return (
        <AuthContext.Provider 
            value={{
                logged,
                region,
                setRegionId,
                signIn, 
                sigOuth, 
                profile, 
                isLoading
            }}
        >
            {children}
        </AuthContext.Provider>
    )

}

export default AuthProvider
