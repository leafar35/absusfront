import Auth from '../services/auth';
import { IProfileEntity } from '../shared/iprofile';
import { createContext, useState } from 'react';
import { IAuthProvider, IChildrenAuthProvider } from '../shared/auth';

export const AuthContext = createContext<IAuthProvider>(null!);

function AuthProvider({ children }: IChildrenAuthProvider) {
    const [logged, setLogged] = useState<boolean>(false);
    const [accessToken, setAccessToken] = useState<string>('')
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [profile, setProfile] = useState<IProfileEntity>(null!)

    const getProfile = async() => {
        const {data} = await Auth.get('authemployee/me',{
            headers:{
                Authorization: `bearer ${accessToken}`
            }
        })
        setProfile(data.data)
        setIsLoading(false)
    }

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
        }catch(e){
            setLogged(false);
            setIsLoading(false)
            if(e instanceof Error){
                alert(e.message)
            }
        }finally{
            getProfile()
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