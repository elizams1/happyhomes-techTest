import express from "express";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js";
import ProjectRoute from "./routes/ProjectRoute.js";
import KegiatanRoute from "./routes/KegiatanRoute.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(UserRoute);
app.use(ProjectRoute);
app.use(KegiatanRoute);


app.listen(5000, ()=> console.log('server up and running'));