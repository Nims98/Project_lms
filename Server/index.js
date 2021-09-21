import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import coursesRoutes from "./routes/courses.js";
import dotenv from "dotenv";

const app = express();
dotenv.config();

app.use(cors());

app.use(express.json({ limit: "30mb", extended: "true" }));
app.use(express.urlencoded({ limit: "30mb", extended: "true" }));
app.use("/all-courses", coursesRoutes);

// const CONNETION_URL =
//     "mongodb+srv://Nirmala:nirmala1234@cluster0.h6ako.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT;

mongoose
    .connect(process.env.CONNETION_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() =>
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
    )
    .catch((error) => console.log(error.message));

// mongoose.set("useFindAndModify", false);