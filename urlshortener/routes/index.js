const express = require('express');
const router = express.Router();
const { urlGenerator } = require('../controllers/urlController')
const { urlDecoder } = require('../controllers/decoder.js')
const { handleLogin, handleSignUp, verifyToken } = require('../controllers/Authentication')

router.get('/', (req, res) => {
    res.redirect('/url');
});

router.get('/home', (req, res) => {
    res.send('Hello, World!');
});

router.get('/secret',verifyToken, (req, res) => {
    res.json({text : "Hello this is a secret text"});
});

router.post('/home', urlGenerator);
router.post('/login', handleLogin);
router.post('/signup', handleSignUp);
router.get('/:url', urlDecoder);

module.exports = router;