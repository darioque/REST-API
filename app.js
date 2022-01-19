const express = require("express");

const app = express();

const swaggerUi = require('swagger-ui-express')
const swaggerJsDoc = require('swagger-jsdoc')

const usersRouter = require("./routers/usersRouter");
const postsRouter = require("./routers/postsRouter");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Swagger config
const swaggerConfig = {
    swaggerDefinition: (swaggerJsDoc.Options = {
        info: {
            title: "rest-api-practice",
            description: "API documentation",
            contact: {
                name: "Developer",
            },
            servers: ["http://localhost:3002/"],
        },
    }),
    apis: ["app.js", "./routers/*.js"],
};

const swaggerDocs = swaggerJsDoc(swaggerConfig);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use("/users", usersRouter);
app.use("/posts", postsRouter);

app.listen(3002, () => {
    console.log("Server is running on port 3002");
});
