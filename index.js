import express from "express";
import { krutrimRoutes } from "./routes/krutrimRoutes.js";
import "dotenv/config";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({origin:"*"}));
app.use(express.json());

app.use("/krutrim", krutrimRoutes);

app.listen(PORT, () => {
    console.log("🛩️ Server started at port " + PORT);
})