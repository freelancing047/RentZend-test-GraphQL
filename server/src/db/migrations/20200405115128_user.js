exports.up = knex =>
    knex.schema.createTable('user', tbl => {
        tbl.uuid('id')
            .notNullable()
            .primary()
        tbl.string('name').notNullable()
        tbl.string('email').notNullable()
        tbl.string('phone').notNullable()
        tbl.string('address').notNullable()
        tbl.string('zipCode').notNullable()
        tbl.string('file_upload').nullable()

    });

exports.down = knex => knex.schema.dropTableIfExists("user");
