const db = require("../database/db.config");

module.exports = {
    addPost: (data, callback) => {
        db.query(
            `INSERT INTO POSTS (description, imagePath, datetimeCreated, addedByUserId) VALUES (?,?,?,?)`,
            [data.description, data.imagePath, new Date(), data.addedByUserId],
            (error, results, fields) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, "Post added succesfully");
            }
        );
    },
    getAllPosts: (callback) => {
        db.query(`SELECT * FROM posts`, (error, results, fields) => {
            if (error) {
                return console.log(error)
            }
            return callback(results)
        });
    }
};
