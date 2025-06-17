import { Admin } from "../models/admin.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const login = async (req, res) => {
    try {
        const { name, password } = req.body;
        if (!name || !password) {
            return res.status(401).json({
                message: "Something is missing, please check!",
                success: false,
            });
        }
        let admin = await Admin.findOne({ name });
        if (!user) {
            return res.status(401).json({
                message: "Incorrect name or password",
                success: false,
            });
        }
        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (!isPasswordMatch) {
            return res.status(401).json({
                message: "Incorrect name or password",
                success: false,
            });
        };

        const token = await jwt.sign({ adminId: admin._id }, process.env.SECRET_KEY, { expiresIn: '1d' });

        
        admin = {
            _id: admin._id,
            name: admin.name,
            email: admin.email,
            
        }
        return res.cookie('token', token, { httpOnly: true, sameSite: 'strict', maxAge: 1 * 24 * 60 * 60 * 1000 }).json({
            message: `Welcome back ${admin.name}`,
            success: true,
            admin
        });

    } catch (error) {
        console.log(error);
    }
};
export const logout = async (_, res) => {
    try {
        return res.cookie("token", "", { maxAge: 0 }).json({
            message: 'Logged out successfully.',
            success: true
        });
    } catch (error) {
        console.log(error);
    }
};