require("dotenv").config();
require("express-async-errors");

const express = require("express");
const app = express();

const { connectDB } = require("./database/db")
const port = process.env.PORT || 5000
const uri = process.env.MONGO_URI

//*routers
const authRouter = require("./routes/auth")
const questionRouter = require("./routes/questions")

//* error handler 
const notFoundMiddleware = require("./middleware/not_found")
const errorHandlerMiddleware = require("./middleware/error_handler");

//*json usage
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

//* activate routers 
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/questions", questionRouter);

//* middlewares
app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)


const start = async () => {
    try {
        await connectDB(uri);
        app.listen(port, () => {
            console.log(`app has started on port ${port} number`);
        })
    } catch (error) {
        console.log(error);
    }
}

start();