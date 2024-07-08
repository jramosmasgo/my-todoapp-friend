import express, { Application } from "express";
import routes from "@routes/index.routes";
import ErrorMiddleware from "@middlewares/error.middleware";

const app: Application = express();

app.set("server-port", process.env.PORT);
app.use(express.json());
app.use(routes);
app.use(ErrorMiddleware);

export default app;