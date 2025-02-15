import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { createUser, findUserByUsername, User } from '../models/User';
import dotenv from 'dotenv'
dotenv.config()

// Login function (unchanged)
export const login = (req: Request, res: Response): void => {
  const { username, password } = req.body;

  const user = findUserByUsername(username);

  if (!user || user.password !== password) {
    res.status(401).json({ message: 'Invalid credentials' });
    return;
  }

  const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET!, {
    expiresIn: '1h',
  });

  res.json({ token });
};

// Signup function
export const signup = (req: Request, res: Response): void => {
  const { username, password } = req.body;

  // Check if the username already exists
  if (findUserByUsername(username)) {
    res.status(400).json({ message: 'Username already exists' });
    return;
  }

  // Create a new user
  const newUser = createUser(username, password);

  // Generate a JWT token for the new user
  const token = jwt.sign({ userId: newUser.id }, process.env.JWT_SECRET!, {
    expiresIn: '1h',
  });

  res.status(201).json({ token });
};