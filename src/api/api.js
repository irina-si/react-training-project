import Axios from "axios";

const instance = Axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY" : "4a00808b-9a42-4877-8d19-a73fbad7bdc4"
    }
    })

const instanceWeather = Axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5/'
})

export const userAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance
            .get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    },
    followUser(userId) {
        return instance
                .post(`follow/${userId}`)
                .then(response => response.data);
    },
    unfollowUser(userId) {
        return instance
                .delete(`follow/${userId}`)
                .then(response => response.data);
    },
    auth() {
        return instance 
            .get('auth/me')
            .then(response => response.data);
    }
}

export const profileAPI = {
    getUserProfile(userId) {
        return instance
            .get(`profile/${userId}`)
            .then(response => response.data);
        },

    getStatus(userId) {
        return instance
            .get(`profile/status/${userId}`)
            .then(response => response.data);
        },
    updateStatus(status) {
        return instance
            .put('profile/status', {status})
            .then(response => response.data)
            .catch(error => Promise.reject(error.response.data));
        }
    }

export const weatherAPI = {
    getCurrentWeather(cityName) {
        return instanceWeather
            .get('weather', {
                params: {
                    q: cityName,
                    appid: '4a63caf0cdc9b0bdbc8fcfa6681a86a2',
                    units: 'metric'
                }
            })
            .then(response => response.data)
            .catch(error => Promise.reject(error.response.resultCode))
    }
}

export const authAPI = {
    authorizeUser (email, password) {
        return instance
            .post('auth/login', { email, password })
    }
}