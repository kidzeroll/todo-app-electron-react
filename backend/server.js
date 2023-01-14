import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import todoRoute from "./routes/todoRoute.js";
import cors from "cors";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

// mongodb
mongoose.set("strictQuery", false);
mongoose
    .connect(process.env.MONGODB_URI)
    .then(console.log("connected to database"))
    .catch((err) => console.log(err));

// routing
app.use("/api", todoRoute);

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`server running at: http://localhost:${port}`);
});
