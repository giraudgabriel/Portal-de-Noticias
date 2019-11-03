module.exports = (application) => {
    application.get('/noticias', (req, res) => {
        const dbConnection = application.config.dbConnection()
        const noticiasModel = new application.app.models.NoticiasDAO(dbConnection)

        noticiasModel.getNoticias((error, result) => {
            res.render("noticias/noticias", {
                noticias: result
            })
        })
    })
}