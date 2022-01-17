const usersService = require("../services/usersService");
module.exports = {
    register: async (req, res) => {
        const userData = { ...req.body };

        usersService.register(userData, (error, results) => {
            if (error) {
                console.log(error);
                return res
                    .status(400)
                    .json({ success: 0, data: "Bad request" });
            }
            return res.status(201).json({
                success: 1,
                data: results,
            });
        });
    },

    login: async (req, res) => {
        res.send("login page");
    },
};
