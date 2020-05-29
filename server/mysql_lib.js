var mysql = require('mysql');

require('dotenv').config();

exports.executeSql = (sqlQuery, callback) => {

    var connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : process.env.DB_PASS,
        database : 'test'
    });
    
    connection.connect((error) => {
        console.log('connected to DB');
    });
    
    connection.query(sqlQuery, function (error, results, fields) {
        if (!error) {
            return callback(results, error);
        }

        return callback(null, error.message);
        });
    connection.end();
} 