const mysql = require('mysql2/promise');
const config = require('./config.js');

var connection;

const connect = async () => {
   try {
      connection = await mysql.createConnection(config.db);
      console.log('Connected to database');
   }
    catch (err) {
        console.error(err);
        process.exit(1);
    }
}

const query = async (sql, params) => {
   if (!connection) {
      await connect();
   }
    try {
        const [results] = await connection.execute(sql, params);
        return results;
    }
    catch (err) {
        console.error(err);
        throw err;
    }
}

module.exports = {
    connect,
    query
}


