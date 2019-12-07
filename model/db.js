const mysql = require('mysql');

const { dbConfig } = require('../config');
const pool  = mysql.createPool(dbConfig);

const db = {};

db.q = function (sql, params) {
    return new Promise((resolve, reject) => {
        pool.getConnection((err, connection) => {
            if (err) {
                reject(err);
                return;
            }
            connection.query(sql, params, (error, results) => {
                console.log(`${sql}=>${params}`);
                // 释放连接
                connection.release();
                if (err) {
                    reject(err);
                    return;
                }
                resolve(results);
            });
        });
    });
};


// 导出对象
module.exports = db;
