const mysql = require('mysql')

const connMySql = () =>
    mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'portal_noticias'
    })
    
module.exports = () => connMySql