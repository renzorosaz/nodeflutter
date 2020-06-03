const express= requiere('express');
const app = express();


app.use(express.json());
app.use(express.urlencoded({extended: false}))

/* 
app.use(requiere('./controllers/authController')) */

module.exports = app;