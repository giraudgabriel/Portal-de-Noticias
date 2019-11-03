module.exports = (application) => {
    application.get('/noticias', (req, res) => application.app.controllers.noticias.getNoticias(application, req, res))

    application.get('/noticias/:id', (req, res) => application.app.controllers.noticias.getNoticia(application, req, res))
}