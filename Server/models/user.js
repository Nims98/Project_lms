import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    isAdmin: Boolean,
    name: String,
    firstName: String,
    lastName: String,
    imageUrl: String,
    email: String,
    address: String,
    phone: Number,
    password: String,
    courses: [String],
});

const User = mongoose.model("User", userSchema);

export default User;