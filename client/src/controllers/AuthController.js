const axios = require('axios')

export default class AuthController {
    
    static attemptLogin(userData){
        axios.post('http://localhost:8080/api/v1/login',{
            ...userData
        }).then((response) => {
            console.log(response);
        }, (error) => {
            console.log(error);
        });
    }
    static attemptRegister(userData){
        axios.post('http://localhost:8080/api/v1/register',{
            ...userData
        }).then((response) => {
            console.log(response);
        }, (error) => {
            console.log(error);
        });
    }
}
