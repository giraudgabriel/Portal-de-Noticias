module.exports = (app) => {

    app.get('/nova', (req, res) => {
        res.render("admin/form_add_noticia")
    })

    app.post('/noticias/salvar', (req, res) => {
        let noticiasModel = new app.app.models.NoticiasDAO(app.config.dbConnection())
        noticiasModel.salvarNoticia(req.body, () => res.redirect('/noticias'))
    })
}