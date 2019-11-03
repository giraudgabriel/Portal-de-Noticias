module.exports.getNoticias = (application,req,res) =>{
    const dbConnection = application.config.dbConnection()
    const noticiasModel = new application.app.models.NoticiasDAO(dbConnection)

    noticiasModel.getNoticias((error, result) => {
        res.render("noticias/noticias", {
            noticias: result
        })
    })
}

module.exports.getNoticia = (application,req,res) =>{
    const noticiasModel = new application.app.models.NoticiasDAO(application.config.dbConnection())
    noticiasModel.getNoticia(req.params.id, (error, result) => {
        res.render("noticias/noticia", {
            noticia: result
        })
    })
}