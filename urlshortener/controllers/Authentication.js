const { User } = require('../models/urlMap')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const secretKey = process.env.SECRET_KEY;

const handleLogin = async (req, res) => {
  const { email, password } = req.body;
  const checkUser = await User.findOne({ where: { email } })
  if (checkUser === null) {
    console.log("Here")
    return res.status(404).json({ error: 'User not found' });
  }
  const isPasswordValid = await bcrypt.compare(password, checkUser.password);

  if (!isPasswordValid) {
    return res.status(401).json({ error: 'Invalid password' });
  }
  const token = jwt.sign({ email }, secretKey, { expiresIn: '1h' });
  res.cookie('token', token, { httpOnly: true, maxAge: 3600000 });
  return res.json({ token });

}

const handleSignUp = async (req, res) => {
  const { email, password, passwordagain } = req.body;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const user = await User.findOne({ where: { email } });
  if (user !== null) {
    return res.status(401).json({ error: 'This email is already in use' });
  }
  else if(!emailRegex.test(email)){
    return res.status(401).json({ error: 'Invalid Email Address' });
  }
  else if (password !== passwordagain) {
    return res.status(401).json({ error: 'Password mismatch' })
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  await User.create({ email, password: hashedPassword });
  const token = jwt.sign({ email }, secretKey, { expiresIn: '1h' });
  return res.json({ token });
}

const verifyToken = (req, res, next) => {
  const token = req.header('Authorization')?.split(' ')[1];
  if (!token) {
    return res.status(401).json({ message: 'Access denied. No token provided.' });
  }

  try {
    const decoded = jwt.verify(token, secretKey);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(400).json({ message: 'Invalid token.' });
  }
};


module.exports = { handleLogin, handleSignUp, verifyToken }