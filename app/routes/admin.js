module.exports = (app) => {

    app.get('/nova', (req, res) => {
        res.render("admin/form_add_noticia", {
            validacao: [],
            noticia:{}
        })
    })

    app.post('/noticias/salvar', (req, res) => {

        req.assert('titulo', 'Título é obrigatório').notEmpty()
        req.assert('resumo', 'Resumo é obrigatório').notEmpty()
        req.assert('resumo', 'Resumo deve conter entre 10 e 100 caracteres').len(10, 100)
        req.assert('autor', 'Autor é obrigatório').notEmpty()
        req.assert('data_noticia', 'Data é obrigatória').notEmpty()
        req.assert('noticia', 'Notícia é obrigatória').notEmpty()

        let erros = req.validationErrors()
        if (erros) {
            res.render("admin/form_add_noticia", {
                validacao: erros,
                noticia: req.body
            })
            return
        }

        let noticiasModel = new app.app.models.NoticiasDAO(app.config.dbConnection())
        noticiasModel.salvarNoticia(req.body, () => res.redirect('/noticias'))
    })
}