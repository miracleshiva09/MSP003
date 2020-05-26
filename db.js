const mysql = require('mysql');

const pool = mysql.createPool({
    host: "sivademoserver.mysql.database.azure.com", 
    user: "myroot@sivademoserver", 
    password: 'Azure@12345', 
    database: 'restful_db', 
    port: 3306,
    ssl: true
});

let restfuldb = {};

restfuldb.all = () => {
    return new Promise((resolve, reject) => {
        pool.query(`CALL GET_SERVICE_ORGS_AND_LINES()`, (err, results) => {
            if(err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
};

restfuldb.one = (id) => {
    return new Promise((resolve, reject) => {
        pool.query(`Select * from product where product_id=?`, [id], (err, results) => {
            if(err) {
                return reject(err);
            }
            return resolve(results[0]);
        });
    });
};

module.exports = restfuldb;