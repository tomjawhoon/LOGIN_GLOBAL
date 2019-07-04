var mysql = require('mysql')
var con   = mysql.createConnection({
    host        : 'db1',
    user        : 'root',
    password    : 'test',
    database    : 'MTEC_TEST',
    // port        : '3306'
})

con.connect(function(err) {
    if(err) throw err
    console.log("Server was connected!")
})

module.exports = con