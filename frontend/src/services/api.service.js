import axios from 'axios';
import authHeader from '../header/auth.header';

const API_URL = process.env.VUE_APP_API_URL + '/api/';

class apiService {
    getDrivers() {
        return axios.
        post(API_URL + 'get_drivers',{
        },{
            headers: authHeader()
        })
    }
}

export default new apiService();