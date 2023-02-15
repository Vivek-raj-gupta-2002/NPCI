const express = require('express');

const Search = require('./true')

const app = express();

app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });


app.post('/api', (req, res, next) => {

    

    if(req.body.ph !== undefined){

        let data = Search(req.body.ph);

        data.then(function(responce){

        responce = JSON.parse(responce)

        res.status(201).json({
            responce
        });

    })

    }else{
        res.status(400).json({
            message: "Bad Request"
        });
    }

    

    

})


module.exports = app;