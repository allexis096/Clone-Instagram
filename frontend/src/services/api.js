import axios from 'axios'; //faz requisicoes http (tipo o ajax)

const api = axios.create({
    baseURL: 'http://localhost:3333',
})

export default api;