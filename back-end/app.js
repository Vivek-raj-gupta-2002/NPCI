const express = require('express');
const path = require('path');
const Search = require('./true');
const bodyParser = require('body-parser');

const session = require('express-session');

const app = express();

app.use(session({
    secret: 'Your_Secret_Key',
    resave: true,
    saveUninitialized: true
}))

app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "statics")));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });


app.get('/', (req, res, next)=>{
    res.sendFile('/front-end/index.html', { root: __dirname });
})


app.get('/pin', (req, res, next) => {
    res.sendFile('front-end/file.html', { root: __dirname })
})

app.post('/check', (req, res, next)=>{
    let ph = req.body.ph;
    let amount = req.body.amount;
    
    
    let data = Search(ph);

    req.session.ph = ph;
    req.session.amount = amount;

    res.redirect('/pin');
    
})

app.get('/getData', (req, res, next) => {
    res.send({
        amount: req.session.amount,
        ph: req.session.ph,
    })
})

app.get('/done', (req, res, next) => {
    res.sendFile('front-end/completed.html', { root: __dirname })
})

module.exports = app;