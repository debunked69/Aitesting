import jwt from 'jsonwebtoken';

export const generateToken = (id: string, secret: string) => {
  return jwt.sign({ id }, secret, { expiresIn: '30d' });
};
