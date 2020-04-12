const appUrl = process.env.APP_URL

module.exports = {
    getFileLink: fileName => {
        if (!fileName) {
            return null
        }
        return appUrl + '/public/' + fileName
    },
}
