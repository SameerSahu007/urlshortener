import express from 'express';
import { urlGenerator, mylinks } from '../controllers/urlController';
import { urlDecoder } from '../controllers/decoder';
import { handleLogin, handleSignUp, verifyToken } from '../controllers/Authentication';

const router = express.Router();


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

export default router