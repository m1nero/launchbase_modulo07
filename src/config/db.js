const { Pool } = require("pg");

module.exports = new Pool({
    user: 'postgres',
    password: "41090426",
    host: "localhost",
    port: 5432,
    database: "launchstoredb"
})