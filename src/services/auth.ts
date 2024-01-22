import axios from "axios";

const Auth = axios.create({
    baseURL: (process.env.Environment === 'Production') ? `${process.env.REACT_APP_API_URL}` : `${process.env.REACT_APP_API_URL_HOMOLOGACAO}`
})

export default Auth;
