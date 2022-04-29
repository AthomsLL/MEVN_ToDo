require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const TodosRoute = require('./routes/Todos');

// Création de notre app Express
const app = express();

// Mise en place CORS + middleware
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,PATCH,DELETE");
    res.header("Access-Control-Allow-Headers", "auth-token, Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader('Content-Type', 'Application/json');
    res.removeHeader('X-Powered-By');
    next();
})

// Database connection
const uri = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_URL}`
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log("MongoDB Connected")
})
.catch(err => console.log(err));

app.use(bodyParser.json());

// Routes
app.use('/todos', TodosRoute);

// Démarrer serveur
app.listen(3000, () => {
    console.log("Listening at port 3000")
})