const {UrlMap} = require('../models/urlMap')

exports.urlDecoder = async (req, res) => {
    const decodedBuffer = req.params.url
    const project = await UrlMap.findByPk(decodedBuffer);
    if (project === null) {
        return res.json({ message: 'Not Found' });
    }
    project.visitCount += 1
    const currentDate = new Date();
    project.lastVisit = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), currentDate.getHours(), currentDate.getMinutes());
    await project.save()
    const destination_url = project.toJSON().url;
    res.redirect(destination_url);
}
