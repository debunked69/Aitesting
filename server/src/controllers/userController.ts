import asyncHandler from 'express-async-handler';
import User from '../models/User';

export const getProfile = asyncHandler(async (req, res) => {
  res.json(req.user);
});

export const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find();
  res.json(users);
});
