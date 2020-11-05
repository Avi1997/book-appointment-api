const auth = require('./auth.controller');
const express = require('express');
const app = express.Router();
const bookAppointment = require('../services/appointment.service');


app.post('/book',(req,res)=>{
    bookAppointment(req,res);
})

module.exports = app;