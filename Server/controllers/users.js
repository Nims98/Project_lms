import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import User from "../models/user.js";

export const logIn = async(req, res) => {
    const { email, password } = req.body;
    try {
        const existingUser = await User.findOne({ email });
        if (!existingUser) return res.status(404).json({ message: "User doesn't exist" });
        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);
        if (!isPasswordCorrect) return res.status(400).json({ message: "Password Incorrect" });
        const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, "SECRET_KEY", { expiresIn: "1h" });
        res.status(200).json({ result: existingUser, token });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
};
export const signUp = async(req, res) => {
    const { firstName, lastName, email, password, address, phone } = req.body;
    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) return res.status(400).json({ message: "User already exist" });
        const hashedPassword = await bcrypt.hash(password, 12);
        const result = await User.create({
            email,
            password: hashedPassword,
            firstName,
            lastName,
            name: `${firstName} ${lastName}`,
            address,
            phone,
        });

        const token = jwt.sign({ email: result.email, id: result._id }, "SECRET_KEY", { expiresIn: "1h" });
        res.status(200).json({ result, token });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
};

export const updateUser = async(req, res) => {
    const { id: _id } = req.params;
    const { firstName, lastName, email, password, address, phone, imageUrl } = req.body;

    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("User not found");
    if (password) {
        const hashedPassword = await bcrypt.hash(password, 12);
        const updatedUser = await User.findByIdAndUpdate(
            _id, {
                email,
                password: hashedPassword,
                firstName,
                lastName,
                name: `${firstName} ${lastName}`,
                address,
                phone,
                imageUrl,
            }, { new: true }
        );
        res.json(updatedUser);
    } else {
        const updatedUser = await User.findByIdAndUpdate(
            _id, {
                email,
                firstName,
                lastName,
                name: `${firstName} ${lastName}`,
                address,
                phone,
                imageUrl,
            }, { new: true }
        );
        res.json(updatedUser);
    }
};