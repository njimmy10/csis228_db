var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : process.env.HOST,
  user     :  process.env.DB_USER,
  password :  process.env.DB_PWD,
  database : process.env.DB_NAME
});
 
exports.connect = function(callback) {
    connection.connect(callback);
}

exports.query = function(query, callback) {
    connection.query(query, callback);
}

