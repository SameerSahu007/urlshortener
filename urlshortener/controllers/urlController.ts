import validator from 'validator';
import crypto from 'crypto';
import { UrlMap } from '../models/urlMap';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const secretKey: string | undefined = process.env.SECRET_KEY;



function generateUniqueIdentifier(url) {
    url = url + Date.now()
    const uniqueIdentifier = crypto.createHash('sha256').update(url).digest('hex').slice(0, 8);
    // eslint-disable-next-line no-undef
    const encodedIdentifier = Buffer.from(uniqueIdentifier).toString('base64').replace(/=+$/, '');
    return encodedIdentifier;
}


const urlGenerator = async (req, res) => {
    const url = req.body.url
    const token = req.header('Authorization')?.split(' ')[1] ?? null;
    if (!url) {
        return res.status(400).json({ error: 'URL is required.' })
    }
    if (validator.isURL(url)) {
        const encodedString = generateUniqueIdentifier(url)
        if (token.length > 4) {
            try {
                const decoded = jwt.verify(token, secretKey);
                const email = decoded.email;
                // @ts-ignore
                const urlobj = new UrlMap({ encodedString, url, userEmail: email })
                await urlobj.save()
            } catch (error) {
                console.log(error)
                return res.status(400).json({ error: 'Invalid token.' });
            }
        }
        else {
            // @ts-ignore
            const urlobj = new UrlMap({ encodedString, url })
            await urlobj.save()
        }
        return res.json({ message: encodedString });
    } else {
        return res.json({ error: 'Invalid URL' });
    }
}

const mylinks = async (req, res) => {
    console.log(req.user.email)
    const allUserLinks = await UrlMap.findAll({ where: { userEmail: req.user.email } })
    console.log(allUserLinks)
    console.log(JSON.stringify(allUserLinks))
    res.json(allUserLinks)
}

export {
    urlGenerator,
    mylinks
  };