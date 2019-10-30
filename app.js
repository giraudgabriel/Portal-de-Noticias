const app = require('./config/server')

app.get('/', (req, res) => {
    res.render("home/index")
})

app.get('/noticia/nova', (req, res) => {
    res.render("admin/form_add_noticia")
})

app.get('/noticias', (req, res) => {
    res.render("noticias/noticias")
})

app.get('/tecnologia', (req, res) => {
    res.render("secao/tecnologia")
})

app.listen(3000, () => {
    console.log("Servidor rodando com express")
})