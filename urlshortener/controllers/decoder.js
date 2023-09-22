const {UrlMap} = require('../models/urlMap')

exports.urlDecoder = async (req, res) => {
    const decodedBuffer = req.params.url
    const project = await UrlMap.findByPk(decodedBuffer);
    if (project === null) {
        return res.json({ message: 'Not Found' });
    }
    console.log(project); 
    const destination_url = project.toJSON().url;
    res.redirect(destination_url);
}
