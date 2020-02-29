let settings = {};

const DBConfig = {
    local: {
        port: 3002,
        mongo: {
            host: "localhost",
            port: 27017,
            database: "product",
        },
    }
}

switch (process.env.NODE_ENV) {

    default:
        let local = DBConfig.local;
        DBConfig.local.URI = `mongodb://${local.mongo.host}:${local.mongo.port}/${local.mongo.database}`;
        settings = DBConfig.local;
        break;
}


module.exports = settings;
