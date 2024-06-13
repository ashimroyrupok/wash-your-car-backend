import cookieParser from "cookie-parser";
import cors from "cors";
import express, { Application } from "express";
import router from "./app/routes";

const app:Application = express();


app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use("api/v1", router);

app.get('/', (req, res) => {
    res.send("server is running")
})



export default app;