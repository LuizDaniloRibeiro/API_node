const express = require('express');
const app = express();

const indexRoute = require('./Routes/index');
const usersRoute = require('./Routes/index');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');



// string de conexão --> mongodb+srv://usuario_admin:<password>@clusterapi.bcowx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

const url = 'mongodb+srv://usuario_admin:admAPI1578@clusterapi.bcowx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const options = { reconnectTries: Number.MAX_VALUE, reccountInterval: 500, poolSize: 5, useNewUrlParser: true}

mongoose.connect(url, options);
mongoose.set('useCreateIndex', true);

mongoose.connection.on('error', (err) => {
    console.log('Error na conexão com o banco de dados: ' + err);
})

mongoose.connection.on('disconnected', () => {
    console.log('Aplicação desconectada do banco de dados!')
})

mongoose.connection.on('connected', () => {
    console.log('Aplicação conectada ao banco de dados!');
})


//BODY PARSER 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', indexRoute);
app.use('/', usersRoute);


app.listen(3000)

module.exports = app;