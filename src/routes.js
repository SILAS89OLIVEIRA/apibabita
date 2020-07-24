const express = require('express');

const VendaController = require('./controllers/VendaController');

const VendadiaController = require('./controllers/VendadiaController');

const VendamesController = require('./controllers/VendamesController');

const EstoquetotalController = require('./controllers/EstoquetotalController');

const UsuariosController = require('./controllers/UsuariosController');

const UsuFornController = require('./controllers/UsuFornController');





const routes = express.Router();




routes.get('/Vendas/:for_cod/:data/:data2',VendaController.index);

routes.get('/Vendasdia/:for_cod/:data',VendadiaController.index);

routes.get('/Vendasmes/:for_cod/:data/:data2',VendamesController.index);

routes.get('/Estoquetotal/:for_cod',EstoquetotalController.index);

routes.get('/erp_usuarios/:usu_login/:usu_senha',UsuariosController.index);






module.exports = routes;