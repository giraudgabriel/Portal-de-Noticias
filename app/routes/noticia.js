module.exports = (app) => {
    app.get('/noticia/:id', (req, res) => {
        const noticiasModel = new app.app.models.NoticiasDAO(app.config.dbConnection())
        noticiasModel.getNoticia(req.params.id, (error, result) => {
            res.render("noticias/noticia", {
                noticia: result
            })
        })
    })
}