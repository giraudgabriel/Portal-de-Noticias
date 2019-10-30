module.exports = (app) => {
    app.get('/noticias', (req, res) => {
        let connection = app.config.dbConnection()
        connection.query("SELECT id_noticia,titulo FROM NOTICIAS", (error, result) => {
            res.render("noticias/noticias", {
                noticias: result
            })
        })
    })
}