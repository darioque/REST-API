const { createPool } = require("mysql");
/** Connection pool creation - START */
const db = createPool({
    port: YOURPORT,
    host: "YOURHOST",
    user: "YOURUSERNAME",
    password: "YOURPASSWORD",
    database: "YOURDB",
    connectionLimit: 10,
});
/** Connection pool creation - END */

module.exports = db;
