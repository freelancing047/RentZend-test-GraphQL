const path = require('path')

module.exports = {
    development: {
        client: 'pg',
        connection: 'postgres://nuotzysr:5zisCR94Ab8FkjFiphVB_1KPSBiqjPBN@drona.db.elephantsql.com:5432/nuotzysr',
        debug: true,
        searchPath: ['knex', 'public'],
        migrations: {
            directory: path.join(__dirname, 'src', 'db', 'migrations'),
        },
        seeds: {
            directory: path.join(__dirname, 'src', 'db', 'seeds'),
        },
    }
}