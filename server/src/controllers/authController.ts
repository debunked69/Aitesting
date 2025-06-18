import asyncHandler from 'express-async-handler';
import bcrypt from 'bcryptjs';
import User from '../models/User';
import { generateToken } from '../config/jwt';

export const register = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400).json({ message: 'User already exists' });
    return;
  }
  const hashed = await bcrypt.hash(password, 10);
  const user = await User.create({ name, email, password: hashed });
  const token = generateToken(user._id.toString(), process.env.JWT_SECRET as string);
  res.json({ token });
});

export const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && (await bcrypt.compare(password, user.password))) {
    const token = generateToken(user._id.toString(), process.env.JWT_SECRET as string);
    res.json({ token });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});
