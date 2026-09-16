const express = require("express");

const userRouter = require("./router/userRouter");

const app = express();


// Middleware
app.use(express.json());


// Routes
app.use("/", userRouter);


// Server
const PORT = 5000;

app.listen(PORT, "127.0.0.1", () => {
    console.log(`Server running on port ${PORT}`);
});