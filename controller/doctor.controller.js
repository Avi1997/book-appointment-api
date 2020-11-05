const express = require('express');
const app = express.Router();
const sql = require('../config/mysql')
const auth = require('./auth.controller');

app.get('/doctors', (req, res) => {
    try {
        const sq = "select name,doc_id from doctor";
        sql.query(sq, (err, result) => {
            res.send(result);
        });
    } catch (e) {
        res.send(400).send(e);
    }
})

app.get('/appointment/:docid', auth, (req, res) => {
    try {
        const docid = req.params.docid;
        const date = new Date().toISOString();
        const squery = "select * from appointment where doc_id =" + docid + " order by app_date";
        sql.query(squery, (err, resu) => {
            if (err) {
                throw err;
            }
            res.status(200).send(resu);
        })
    } catch (e) {
        console.log(e);
        res.status(400).send(e)
    }
});

app.get('/appointment/date/:docid/:date', auth, (req, res) => {
    try {
        const docid = req.params.docid;
        const date = new Date(req.params.date).toISOString();
        const squery = "select * from appointment where doc_id ='" + docid + "' and app_date ='" + date + "'";
        sql.query(squery, (err, resu) => {
            if (err) {
                throw err;
            }
            res.status(200).send(resu);
        })
    } catch (e) {
        console.log(e);
        res.status(400).send(e)
    }
});

app.post('/appointment/status', auth, (req, res) => {
    try {
        const docid = req.body.doc_id;
        const app_id = req.body.app_id;
        const status = req.body.status;
        const squery = "update  appointment set app_status = '"+status+"' where doc_id =" + docid + " and app_id ="+app_id;
      
        sql.query(squery, (err, resu) => {
            if (err) {
                throw err;
            }
            res.status(200).send(resu);
        })
    } catch (e) {
        console.log(e);
        res.status(400).send(e)
    }
});



module.exports = app;