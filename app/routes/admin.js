module.exports = (app) => {

    app.get('/nova', (req, res) => app.app.controllers.admin.nova_noticia(app, req, res))

    app.post('/noticias/salvar', (req, res) =>  app.app.controllers.admin.salvar_noticia(app, req, res))
}