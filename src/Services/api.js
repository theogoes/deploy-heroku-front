
import axios from 'axios'

const api = axios.create({
    baseURL : 'https://b-partyf.herokuapp.com/'
})

export default api