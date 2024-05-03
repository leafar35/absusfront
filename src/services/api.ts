import axios from "axios";

const Api = axios.create({
    baseURL: (process.env.REACT_APP_ENV === 'Production') ? `${process.env.REACT_APP_API_URL}` : `${process.env.REACT_APP_API_URL_HOMOLOGACAO}`
})

Api.interceptors.request.use((request) => {
    const token = localStorage.getItem('@absus:token-auth')
    if(token){
        request.headers['Authorization'] = `bearer ${token}`
        return request
    }
    return request
})

export default Api;
