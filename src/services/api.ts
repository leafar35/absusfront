import axios from "axios";

const Api = axios.create({
    baseURL: (process.env.Environment === 'Production') ? `${process.env.REACT_APP_API_URL}` : `${process.env.REACT_APP_API_URL_HOMOLOGACAO}`
})

export default Api;