import axios from "axios";

const Auth = axios.create({
    baseURL: 'http://192.168.0.115:3000/api/'
})

export default Auth;
