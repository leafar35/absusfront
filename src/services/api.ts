import axios from "axios";

const Api = axios.create({
    baseURL: 'http://localhost/'
})

export default Api;