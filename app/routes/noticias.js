module.exports = (application) => {
    application.get('/noticias', (req, res) => application.app.controllers.noticias.getNoticias(application, req, res))

    application.get('/noticia', (req, res) => application.app.controllers.noticias.getNoticia(application, req, res))
}