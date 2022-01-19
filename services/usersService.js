const db = require("../database/db.config");

module.exports = {
    register: (userData, callback) => {
        db.query(
            `INSERT INTO users (firstName, lastName, emailId, password) VALUES (?,?,?,?)`,
            [
                userData.firstName,
                userData.lastName,
                userData.emailId,
                userData.password,
            ],
            (error, results, fields) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, `Registration successful`);
            }
        );
    },

    login: (userData, callback) => {
        db.query(
            `SELECT id FROM users WHERE emailId = ? AND password = ?`,
            [userData.emailId, userData.password],
            (error, results, fields) => {
                if (error) {
                    return callback(error);
                }
                if (results.length > 0) {
                    return callback(null, `Login successful`);
                } else {
                    return callback("Invalid credentials");
                }
            }
        );
    },
};
