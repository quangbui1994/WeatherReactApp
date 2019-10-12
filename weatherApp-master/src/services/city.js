import axios from 'axios';

const baseURL = '/api/cities'

const saveCity = (body) => {
    return axios.post(baseURL, body).then(res => res.data)
};

export default {
    saveCity
}