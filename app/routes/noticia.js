module.exports = (app) => {
    app.get('/noticia/:id', (req, res) => {
        const connection = app.config.dbConnection()
        const noticiasModel = app.app.models.noticiasModel
        noticiasModel.getNoticia(connection, (error, result) => {
            res.render("noticias/noticia", {
                noticia: result
            })
        }, req.params.id)
    })
}