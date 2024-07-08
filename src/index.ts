import dotenv from "dotenv";
dotenv.config();
import app from "./app";
import dbConnection from "config/dbConnection";

const port = app.get("server-port");

dbConnection();

app.listen(port, () => {
    console.log("Application on port", port);
});