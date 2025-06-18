import asyncHandler from 'express-async-handler';
import Order from '../models/Order';

export const createOrder = asyncHandler(async (req, res) => {
  const order = await Order.create({ ...req.body, user: req.user?._id });
  res.status(201).json(order);
});

export const getOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find({ user: req.user?._id }).populate('orderItems.product');
  res.json(orders);
});

export const getAllOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find().populate('user');
  res.json(orders);
});
