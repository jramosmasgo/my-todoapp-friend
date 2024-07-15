import express, { Application, Request, Response, NextFunction } from "express";
import routes from "@routes/index.routes";
import ErrorMiddleware from "@middlewares/error.middleware";
import cors, { CorsOptions } from "cors";

const app: Application = express();

const allowCrossDomain: CorsOptions = {
    origin: "*",
};

app.set("server-port", process.env.PORT);
app.use(cors(allowCrossDomain))
app.use(express.json());
app.use(routes);
app.use(ErrorMiddleware);

export default app;