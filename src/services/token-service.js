import config from '../config'
import jwtDecode from 'jwt-decode'

const TokenService = {
    saveAuthToken(token) {
        window.sessionStorage.setItem(config.REACT_APP_TOKEN_KEY, token)
    },
    getAuthToken() {
        return window.sessionStorage.getItem(config.REACT_APP_TOKEN_KEY)
    },
    clearAuthToken() {
        window.sessionStorage.removeItem(config.REACT_APP_TOKEN_KEY)
    },
    hasAuthToken() {
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