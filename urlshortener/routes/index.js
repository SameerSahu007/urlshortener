const express = require('express');
const router = express.Router();
const { urlGenerator } = require('../controllers/urlController')
const { urlDecoder } = require('../controllers/decoder.js')

router.get('/', (req, res) => {
    res.redirect('/url');
});

router.get('/home', (req, res) => {
    res.send('Hello, World!');
});

router.post('/home', urlGenerator);

router.get('/:url', urlDecoder);

module.exports = router;