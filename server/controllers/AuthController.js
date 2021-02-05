import DatabaseController from './DatabaseController'

const bcrypt = require('bcrypt');

export default class AuthController {

    static async loginUser(username){
        let db = new DatabaseController()   
        
        let userRecords = await db.getUsersByUsername(username)

        console.log(userRecords)
    }

    static async registerUser(userDataObject){
        let db = new DatabaseController();

        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(userDataObject.password, salt);

        userDataObject.hashed = hashedPassword;

        try {
            db.addUserToDatabase(userDataObject);
        }catch(err){
            console.log(err);
        }

    }

}
