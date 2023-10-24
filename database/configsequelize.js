const { Sequelize } = require('sequelize');

const config = {
    db:{
        host: process.env.DB_HOST || "127.0.0.1",
        user: process.env.DB_USER || "root",
        port: process.env.DB_PORT || "3306",
        password: process.env.DB_PWD || "root",
        database: process.env.DB_NAME || "csis228_social_media_db",
        connectionLimit: 10,
    }
}

const sequelize = new Sequelize(config.db.database, config.db.user, config.db.password, {
    host: config.db.host,
    dialect: 'mysql',
    logging: false,
    pool: {
        max: config.db.connectionLimit,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});


module.exports = sequelize;
