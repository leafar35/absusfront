import Auth from '../services/auth';
import { IProfileEntity } from '../shared/iprofile';
import { createContext, useEffect, useState } from 'react';
import { IAuthProvider, IChildrenAuthProvider } from '../shared/auth';
import Api from '../services/api';

export const AuthContext = createContext<IAuthProvider>(null!);

function AuthProvider({ children }: IChildrenAuthProvider) {
    const [logged, setLogged] = useState<boolean>(false);
    const [accessToken, setAccessToken] = useState<string>('')
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [profile, setProfile] = useState<IProfileEntity>(null!)

    useEffect(() => {
        const getProfile = async() => {
            if(accessToken){
                const {data} = await Auth.get('authemployee/me')
                setProfile(data.data)
                setIsLoading(false)
            }
        }
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
            if(e instanceof Error){
                alert(e.message)
            }
        }
    }

    const sigOuth = () => {
        localStorage.removeItem('@absus:token-auth');
        localStorage.removeItem('@absus:token-refresh');
        setLogged(false);
        setIsLoading(false)
    }

    return (
        <AuthContext.Provider 
            value={{
                logged, 
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