const mysql = require('mysql');

require('dotenv').config({path: '../../.env'});

exports.executeSql = (sqlQuery, callback) => {

    let connection = mysql.createConnection({
        host     : process.env.HOST,
        user     : process.env.USERNAME,
        password : process.env.DB_PASS,
        database : process.env.DATABASE
    });
    
    connection.connect((error) => {
        console.log('connected to DB');
    }); 
    
    connection.query(sqlQuery, (error, results, fields) => {
        if (!error) {
            return callback(results, error);
        }
        
        return callback(null, error.message);
        });
    connection.end();
} 