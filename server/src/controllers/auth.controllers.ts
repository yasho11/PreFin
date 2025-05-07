// controllers/user.controller.ts

import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import { User } from "../models/users.model";

//?------------------------------------------------------------------------

//! @name: registerUser
//! @description: This function handles user registration by checkiung if the email is already in the database

export const registerUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { name, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ where: { email } });

    if (existingUser) {
      res.status(400).json({ message: " Email already in use" });
      return;
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password_hash: hashedPassword,
    });

    res.status(201).json({
      message: "User created successfully",
      user: {
        id: user.id,
        email: user.email,
        created_at: user.created_at,
      },
    });
    return;
  } catch (error) {
    console.error("Error creating user: ", error);
    res.status(500).json({ message: "Internal server error" });
    return;
  }
};
