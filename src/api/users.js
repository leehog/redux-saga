import axios from 'axios'

export const getUsers = () => {
    return axios.get('/api/users', {
        params: {
            limit: 25
        }
    })
}