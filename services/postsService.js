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
        db.query(
            `SELECT p.id AS postId, p.description, p.datetimeCreated, p.likeCount, p.dislikeCount, p.addedByUserId, u.firstName, u.lastName FROM posts AS p INNER JOIN users AS u ON p.addedByUserId = u.id`,
            (error, results, fields) => {
                if (error) {
                    return console.log(error);
                }
                return callback(results);
            }
        );
    },
    getAllPostComments: (postId, callback) => {
        db.query(
            `SELECT c.comment, c.datetimecreated, c.addedByUserId, u.firstName, u.lastName FROM comments AS c INNER JOIN users AS u ON c.addedByUserID = u.id WHERE c.postId = ?`,
            [postId],
            (error, results, fields) => {
                if (error) {
                    return console.log(error);
                }
                return callback(results);
            }
        );
    },
    addPostComment: (data, callback) => {
        db.query(
            `INSERT INTO comments (postId, comment, datetimeCreated, addedByUserId) VALUES (?,?,?,?)`,
            [data.postId, data.comment, new Date(), data.addedByUserId],
            (error, results, fields) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, "Comment added succesfully");
            }
        );
    },
};
