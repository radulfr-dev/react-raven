const mysql = require("mysql2");

export default class DatabaseController {
  constructor() {
    this.connection = mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
    });
  }

  getUsersByUsername(username) {
    this.connection.connect();

    const query = `SELECT * FROM users WHERE username = "${username}"`;

    this.connection.query(query, (err, results) => {
      if (err) throw err;
      this.connection.end();
      return results;
    });
  }

  addUserToDatabase(userDataObject) {
    this.connection.connect();

    const query = `INSERT INTO users (username, password) VALUES (${userDataObject.username},${userDataObject.password})`;

    this.connection.query(query, (err, results) => {
      if (err) throw err;
      console.log("1 record inserted");
    });
  }
}
