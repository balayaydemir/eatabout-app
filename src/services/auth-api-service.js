import config from '../config'
import TokenService from './token-service'



const AuthApiService = {
    postUser(user) {
        return fetch(`${config.API_ENDPOINT}/users`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(user)
        })
            .then(res => 
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },
    postLogin({ user_name, password }) {
        return fetch(`${config.API_ENDPOINT}/auth/login`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({ user_name, password }),
        })
            .then(res => 
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()    
            )
            .then(res => {
                TokenService.saveAuthToken(res.authToken)
                return res
            })
    },
    setUserName(user_name) {
        return fetch(`${config.API_ENDPOINT}/auth/${user_name}`)
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
            .then(res => {
                window.sessionStorage.setItem('user_name', res.full_name.split(' ')[0])
            })
    },
    getUserName() {
        return window.sessionStorage.getItem('user_name')
    },
    clearUserName() {
        window.sessionStorage.removeItem('user_name')
    }
}

export default AuthApiService;