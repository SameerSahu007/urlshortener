const jwt = require('jsonwebtoken');
const { User } = require('../models/urlMap')
const bcrypt = require('bcrypt');
require('dotenv').config();


const secretKey = process.env.SECRET_KEY;

const handleLogin = async (req, res) => {
  const { email, password } = req.body;
  const checkUser = await User.findOne({where: {email}})
  if (!checkUser) {
    return res.status(404).json({ message: 'User not found' });
  }
  const isPasswordValid = await bcrypt.compare(password, checkUser.password);

  if (!isPasswordValid) {
    return res.status(401).json({ message: 'Invalid password' });
  }
  res.json({ message: 'Login successful' });
  
}

const handleSignUp = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ where: { email } });
  if (user !== null) {
    return res.status(401).json({ message: 'This email is already in use' });
  }
  const token = jwt.sign({ email, password }, secretKey, { expiresIn: '1w' });
  const hashedPassword = await bcrypt.hash(password, 10);
  const createUser = await User.create({ email,password : hashedPassword });
  console.log(createUser.email, createUser.password)
  res.json({ token });

}

module.exports = { handleLogin, handleSignUp }