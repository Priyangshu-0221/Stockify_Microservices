import { clerkClient, getAuth } from '@clerk/express';
import UserModel from '../model/User.Model.js';

export const addUser = async (req, res) => {
  try {
    const { clerkUserId, userName, userEmail } = req.body;

    if (!clerkUserId || !userEmail) {
      return res.status(400).json({
        success: false,
        error: "Missing required fields: clerkUserId and userEmail are required"
      });
    }

    const existingUser = await UserModel.findOne({ clerk_id: clerkUserId });

    if (existingUser) {
      return res.status(200).json({
        success: true,
        message: "User already exists",
        user: existingUser
      });
    }

    const newUser = await UserModel.create({
      clerk_username: userName || "Unknown",
      email: userEmail,
      clerk_id: clerkUserId,
    });

    return res.status(201).json({
      success: true,
      message: "User created successfully",
      user: newUser
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
      details: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });
  }
};
