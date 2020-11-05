const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mysqlConnection = require('../config/mysql');
const sql = require('../config/mysql')

const auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '');
        const decoded = jwt.verify(token, 'avinash');
        const query = "select * from user where user_id = '"+decoded+"'";
        
        mysqlConnection.query(query, (err,result,fields) => {
            if(err){
                throw err;
            }
            req.user = result;
        }); 

        req.token = token
        next()

       
    } catch (e) {
        res.status(401).send({ error: 'Please authenticate.' })
    }
}

module.exports = auth;
