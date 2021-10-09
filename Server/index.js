import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import coursesRoutes from "./routes/courses.js";
import dotenv from "dotenv";
import usersRoutes from "./routes/users.js";

const app = express();
dotenv.config();

app.use(cors());

app.use(express.json({ limit: "30mb", extended: "true" }));
app.use(express.urlencoded({ limit: "30mb", extended: "true" }));

app.use("/all-courses", coursesRoutes);
app.use("/users", usersRoutes);

const PORT = process.env.PORT;

mongoose
    .connect(process.env.CONNETION_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
    .catch((error) => console.log(error.message));

// mongoose.set("useFindAndModify", false);