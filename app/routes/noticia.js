module.exports = (app) => {
    app.get('/noticia', (req, res) => {
        let connection = app.config.dbConnection()
        connection.query('select * from noticias where id_noticia = 1', (error, result) => {
            res.render("noticias/noticia", {
                noticia:result
            })
        })
    })
}