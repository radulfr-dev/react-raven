const axios = require('axios')

export default class AuthController {
    static attemptLogin(userData){
        console.log(userData)
        axios({
            method: 'post',
            url: process.env.REACT_APP_API_URL + '/login',
            data: userData
        })
    }
}
