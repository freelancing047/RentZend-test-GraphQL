const uuid = require('uuid')
const knex = require('../../db/knex')
const fs = require('fs')
const path = require('path')

const uploadFile = async file => {
    const ext = file.filename.substr(file.filename.lastIndexOf('.') + 1)
    const newFileName = +(new Date()) + `.${ext}`
    const stream = file.createReadStream()
    const filePath = path.join(__dirname, "../../storage", newFileName)
    await new Promise((res) =>
        stream
            .pipe(fs.createWriteStream(filePath))
            .on("close", res)
    );
    return newFileName;
}

const createUser = async (_, args) => {
    if (args['file_upload']) {
        const file = await args['file_upload']
        const fileName = await uploadFile(file)
        delete args.file_upload
        args.file_upload = fileName
    }
    const id = uuid()
    const user = { id, ...args }
    await knex('user').insert(user)
    return user
}

module.exports = createUser
