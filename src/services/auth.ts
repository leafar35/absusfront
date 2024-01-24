import axios from "axios";

const Auth = axios.create({
    baseURL: (process.env.REACT_APP_ENV === 'Production') ? `${process.env.REACT_APP_API_URL}` : `${process.env.REACT_APP_API_URL_HOMOLOGACAO}`
})

export default Auth;
