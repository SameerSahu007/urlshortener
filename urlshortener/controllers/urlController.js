const validator = require('validator')
const crypto = require('crypto');
const {UrlMap} = require('../models/urlMap')

function generateUniqueIdentifier(url) {
    url = url + Date.now()
    const uniqueIdentifier = crypto.createHash('sha256').update(url).digest('hex').slice(0, 8);
    console.log(uniqueIdentifier)
    // eslint-disable-next-line no-undef
    const encodedIdentifier = Buffer.from(uniqueIdentifier).toString('base64').replace(/=+$/, '');
    return encodedIdentifier;
}


exports.urlGenerator = async  (req, res) => {
    const url = req.body.url
    if (!url) {
        return res.status(400).json({ urlIsNull: 'URL is required.' })
    }

    if (validator.isURL(url)) {
        const encodedString = generateUniqueIdentifier(url)
        const urlobj = new UrlMap({encodedString, url })
        await urlobj.save()       
        return res.json({message:encodedString });
    } else {
        return res.json({invalidUrl: 'Invalid URL' });
    }
}
