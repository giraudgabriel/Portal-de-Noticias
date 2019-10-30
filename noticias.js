const http = require('http')

const server = http.createServer((req, res) => {

    switch (req.url) {
        case '/tecnologia':
            res.end("<html><body>Notícias de Tecnologia</body></html>")
            break
        case '/moda':
            res.end("<html><body>Notícias de Moda</body></html>")
            break
        case '/beleza':
            res.end("<html><body>Notícias de Beleza</body></html>")
            break
        default:
            res.end("<html><body>Home</body></html>")
            break
    }

})
server.listen(3000)