const express = require("express");

const app = express();

const usersRouter = require("./routers/usersRouter");
const postsRouter = require("./routers/postsRouter");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/users", usersRouter);

app.listen(3002, () => {
    console.log("Server is running on port 3002");
});
