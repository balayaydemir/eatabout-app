import config from '../config';
import TokenService from './token-service';

const RestaurantsApiService = {

    getUserRestaurants() {
        return fetch(`${config.API_ENDPOINT}/restaurants`, {
            headers: {
                'authorization': `bearer ${TokenService.getAuthToken()}`,
            },
        })
            .then(res => 
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },
    getRestaurantEntries(id) {
        return fetch(`${config.API_ENDPOINT}/restaurants/${id}/entries`, {
            headers: {
                'authorization': `bearer ${TokenService.getAuthToken()}`,
            },
        })
            .then(res => 
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },
    editUserRestaurant(id, newFields) {
        return fetch(`${config.API_ENDPOINT}/restaurants/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`,
            },
            body: JSON.stringify(newFields),
        })
            .then(res => 
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : ''
            )
    },
    getAllCuisines() {
        return fetch(`${config.API_ENDPOINT}/cuisines`, {
            headers: {
                'authorization': `bearer ${TokenService.getAuthToken()}`,
            }
        })
            .then(res => 
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },
    addNewRestaurant(newRestaurantBody) {
        return fetch(`${config.API_ENDPOINT}/restaurants/all`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`,
            },
            body: JSON.stringify(newRestaurantBody)
        })
            .then(res => 
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },
    addNewUserRestaurant(newUserRestaurantBody) {
        return fetch(`${config.API_ENDPOINT}/restaurants`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`,
            },
            body: JSON.stringify(newUserRestaurantBody)
        })
            .then(res => 
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },
    getAllRestaurants() {
        return fetch(`${config.API_ENDPOINT}/restaurants/all`, {
            headers: {
                'authorization': `bearer ${TokenService.getAuthToken()}`
            },
        })
            .then(res => 
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },
    insertEntry(newEntry) {
        return fetch(`${config.API_ENDPOINT}/entries`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`,
            }, 
            body: JSON.stringify(newEntry)
        })
            .then(res => 
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },
    insertItem(newItem) {
        return fetch(`${config.API_ENDPOINT}/items`, {
            method: 'POST', 
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`,
            }, 
            body: JSON.stringify(newItem)
        })
            .then(res => 
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },



}


export default RestaurantsApiService;