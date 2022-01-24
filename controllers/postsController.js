const axios = require("axios");
const postsService = require("../services/postsService");

module.exports = {
    countries: async (req, res) => {
        // fetch test
        const countriesResponse = await axios.get("https://restcountries.com/v3.1/all");
        const provincesResponse = await axios.get(
            "https://apis.datos.gob.ar/georef/api/provincias"
        );
        provinces = provincesResponse.data
        countries = countriesResponse.data
        return res.status(200).json({
            meta: {
                status: 200,
                count: countries.length + provinces.total,
            },
            data: countries, provinces
        });
    },
    list: async (req, res) => {
        postsService.getAllPosts((posts) => {
            if (!posts) {
                return res.status(400).json({
                    meta: {
                        status: 400,
                    },
                });
            }
            res.status(200).json({
                meta: {
                    status: 200,
                    count: posts.length,
                },
                data: posts,
            });
        });
    },

    addPost: async (req, res) => {
        const data = { ...req.body };

        postsService.addPost(data, (error, result) => {
            if (error) {
                console.log(error);
                return res.status(400).json({
                    success: 0,
                    data: "Bad request",
                });
            }
            return res.status(200).json({
                success: 1,
                data: result,
            });
        });
    },
};
