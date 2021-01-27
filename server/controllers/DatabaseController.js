const mysql = require('mysql')

export default class DatabaseController {
    constructor(){
        this.connection = mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASS,
            database: process.env.DB_NAME
        })
    }

    async getUsersByUsername(username){
        try {
            this.connection.connect()

            const response = await new Promise((resolve, reject) => {
                const query = `SELECT * FROM users WHERE username = "${username}"`

                this.connection.query(query, (err, results) => {
                    if(err) reject(new Error(err.message))
                    resolve(results)
                })
            })
            
            this.connection.end()

            return response
        }catch(e){
            this.connection.end()
            return e
        }
    }
}
