import config from '../config'
import jwtDecode from 'jwt-decode'

const TokenService = {
    saveAuthToken(token) {
        window.sessionStorage.setItem(config.TOKEN_KEY, token)
    },
    getAuthToken() {
        return window.sessionStorage.getItem(config.TOKEN_KEY)
    },
    clearAuthToken() {
        window.sessionStorage.removeItem(config.TOKEN_KEY)
    },
    hasAuthToken() {
        console.log('hello', TokenService.getAuthToken())
        return !!TokenService.getAuthToken()
    },
    parseJwt(jwt) {
        return jwtDecode(jwt)
    },
    readJwtToken() {
        return TokenService.parseJwt(TokenService.getAuthToken())
    },
}

export default TokenService;