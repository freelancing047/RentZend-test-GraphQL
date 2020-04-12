const {getFileLink} = require('../../helpers/storage')

module.exports = {
    id: ({ id }) => id,
    name: ({ name }) => name,
    email: ({ email }) => email,
    phone: ({ phone }) => phone,
    address: ({ address }) => address,
    zipCode: ({ zipCode }) => zipCode,
    file_upload: ({ file_upload }) => getFileLink(file_upload),
}
