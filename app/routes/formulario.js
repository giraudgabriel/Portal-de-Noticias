module.exports = (app) => {
    app.get('/nova', (req, res) => {
        res.render("admin/form_add_noticia")
    })
}