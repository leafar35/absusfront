import axios from "axios";

const Api = axios.create({
    baseURL: 'https://agendamento-sus-marcos.onrender.com/'
})

export default Api;