const db = require("../database/db.config");

module.exports = {
    register: (userData, callback) => {
        db.query(
            `INSERT INTO users (firstName, lastName, emailId, password) VALUES (?,?,?,?)`,
            [userData.firstName,userData.lastName,userData.emailId,userData.password],
            (error, results, fields) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, `Registration successful`);
            }
        );
    },
};
