module.exports = () => {
    this.getNoticias = (connection, callback) => {
        connection.query('select * from noticias', callback)
    }

    this.getNoticia = (connection, callback, id) => {
        connection.query(`select * from noticias where id_noticia = ${id}`, callback)
    }
    return this
}