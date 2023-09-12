const UrlMap = require('../models/urlMap')

exports.urlDecoder = async (req, res) => {
    const decodedBuffer = req.params.url
    const urlobj = await UrlMap.findOne({ encodedString: decodedBuffer  })
    const destination_url  = urlobj.toJSON().url;
    res.redirect(destination_url);
}
