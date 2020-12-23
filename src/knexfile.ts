const defaults = {
    client: 'sqlite3',
    connection: {
        filename: './src/database/database.sqlite'
    },
    pool: {
        min: 2,
        max: 10
    },
    migrations: {
        directory: './src/database/migrations'
    }
};

const knexConfig = {
    local: {
        client: 'sqlite3',
        connection: {
            filename: './src/database/database.sqlite'
        },
        useNullAsDefault: true
    },

    development: {
        ...defaults,
        debug: true,
        useNullAsDefault: true
    },

    production: {
        ...defaults
    }
};

export default knexConfig;