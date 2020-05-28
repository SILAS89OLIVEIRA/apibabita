const express = require('express');
const routes = require('./routes');
const cors = require('cors');

require('./database');

const app = express();

app.use(express.json());

app.use((req,res,next) => {
    res.header("Access-Control-Allow-Origin","*");
    //res.header("Access-Control-Allow-Origin",'GET');
    app.use(cors());
    next();
})


app.use(routes);

app.listen(3333);