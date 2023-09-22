const express = require('express');
const router = express.Router();
const { urlGenerator } = require('../controllers/urlController')
const { urlDecoder } = require('../controllers/decoder.js')
const {handleLogin, handleSignUp} = require('../controllers/Authentication')

router.get('/', (req, res) => {
    res.redirect('/url');
});

router.get('/home', (req, res) => {
    res.send('Hello, World!');
});

router.post('/home', urlGenerator);
router.get('/:url', urlDecoder);
router.post('/login', handleLogin);
router.post('/signup', handleSignUp);

module.exports = router;