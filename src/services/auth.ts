import axios from "axios";

const Auth = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}`
})

export default Auth;
