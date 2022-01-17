const fetch = require("node-fetch");
module.exports = {
    countries: async (req, res) => {
        const countries = await fetch(
            "https://restcountries.com/v3.1/all"
        ).then((response) => response.json());
        const provinces = await fetch(
            "https://apis.datos.gob.ar/georef/api/provincias"
        ).then((response) => response.json());
        return res.status(200).json({
            meta: {
                status: 200,
                count: countries.length + provinces.total,
            },
            data: countries,
            provinces,
        });
    },
};
