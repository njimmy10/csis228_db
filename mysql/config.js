
const config = {
  db: {
  host     : process.env.HOST,
  user     :  process.env.DB_USER,
  password :  process.env.DB_PWD,
  database : process.env.DB_NAME
  }
};

module.exports = config