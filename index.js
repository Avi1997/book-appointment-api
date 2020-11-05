
const express = require('express');
var cors = require('cors')
require("./config/mysql");
const app = express();
const appointment = require('./controller/appointment.controller');
app.use(express.json());
const userRoute = require('./controller/user.controller');
const docRoute = require('./controller/doctor.controller');


// use it before all route definitions
app.use(cors({origin: 'http://localhost:4200'}));
//app.use(cors);
app.use('/user',userRoute);
app.use('/doc',docRoute)
app.use('/appointment',appointment);
app.listen(8080,()=>{
    console.log("SERVER IS LISTENING ON PORT 8080");
});
