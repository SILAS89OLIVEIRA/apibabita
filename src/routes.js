const express = require('express');

const UserController = require('./controllers/UserController');


const routes = express.Router();

routes.get('/usuarios', UserController.index);
routes.post('/usuarios', UserController.store);
routes.delete('/usuarios/:usu_cod', UserController.delete);
//routes.put('/usuarios', UserController.store);





module.exports = routes;