const dbConnection = require('../../config/dbConnection')
module.exports = (app) => {
    let connection = dbConnection()

    app.get('/noticias', (req, res) => {
        connection.query("SELECT * FROM NOTICIAS", (error, result) => {
            res.render("noticias/noticias", {
                noticias: result
            })
        })
    })
}