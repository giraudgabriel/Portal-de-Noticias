const app = require('./config/server')

require('./app/routes/noticias')(app)
require('./app/routes/home')(app)
require('./app/routes/formulario')(app)


app.listen(3000, () => {
    console.log("Servidor rodando com express")
})