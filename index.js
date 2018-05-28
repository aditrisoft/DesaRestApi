const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//impor api.js dari routes
const routes = require('./routes/api');

const app = express();

//buat koneksi dan bikin database
mongoose.connect('mongodb://localhost/datadesa');
mongoose.Promise = global.Promise;

//middleware body parser untuk json
app.use(bodyParser.json());

//inisialisasi routes yang barusan diimport
app.use(routes);

//listen pada port 2021
app.listen(process.env.port || 2021, function(){
  console.log("listening dari port 2021");
});
