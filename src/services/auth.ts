import axios from "axios";

const Auth = axios.create({
    baseURL: 'http://localhost/'
})

export default Auth;
