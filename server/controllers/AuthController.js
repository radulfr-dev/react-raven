import DatabaseController from './DatabaseController'

export default class AuthController {
    static async loginUser(username){
        let db = new DatabaseController()   
        
        let userRecords = await db.getUsersByUsername(username)

        console.log(userRecords)
    }
}
