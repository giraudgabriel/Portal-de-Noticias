class NoticiasDAO {
    constructor(connection) {
        this._connection = connection;
    }
    get5UltimasNoticias(callback) {
        this._connection.query('select * from noticias order by data_criacao desc limit 5', callback)
    }
    getNoticias(callback) {
        this._connection.query('select * from noticias order by data_criacao desc', callback);
    }
    getNoticia(id, callback) {
        this._connection.query(`select * from noticias where id_noticia = ${id}`, callback);
    }
    salvarNoticia(noticia, callback) {
        this._connection.query('insert into noticias set ?', noticia, callback);
    }
}


module.exports = () => NoticiasDAO