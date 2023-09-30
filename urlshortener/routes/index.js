const express = require('express');
const router = express.Router();
const { urlGenerator, mylinks } = require('../controllers/urlController')
const { urlDecoder } = require('../controllers/decoder.js')
const { handleLogin, handleSignUp, verifyToken } = require('../controllers/Authentication')

router.get('/', (req, res) => {
    res.redirect('/url');
});

router.get('/home', (req, res) => {
    res.send('Hello, World!');
});

router.get('/mylinks',verifyToken, mylinks);

router.post('/home', urlGenerator);
router.post('/login', handleLogin);
router.post('/signup', handleSignUp);
router.get('/:url', urlDecoder);

module.exports = router;