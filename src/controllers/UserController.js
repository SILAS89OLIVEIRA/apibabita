const Usuarios = require('../models/Usuarios');
const sequelize = require("sequelize");

module.exports = {
  async index(req, res) {
    const view_base_12meses = await Usuarios.findAll({
     
      attributes: [
        'lojas_nome', 
        [sequelize.fn('sum', sequelize.col('prcvenda_x_quantidade')), 'total'],
    ],
      group : ['lojas_nome'],

      where: { 
        data: 'NOW();'
      },
     
    });
 
    return res.json(view_base_12meses);
  },

  async store(req, res) {
    const {usu_login} = req.body;

    const view_base_12meses = await Usuarios.create({usu_login});
 
    return res.json(view_base_12meses);
  },

  async delete(req, res) {
    const {usu_cod} = req.params;
  
    const view_base_12meses = await Usuarios.findByPk(usu_cod);

    if (!view_base_12meses){
      return res.status(400).json({error: 'nao localizado'})
    }

    await Usuarios.destroy({
      where: {
        usu_cod
      }
    });

    return res.json();
  },
  

 /* async update(req, res) {
    const {usu_cod} = req.params;
    const {usu_login} = req.body;
  
    const erp_usuario = await Usuarios.update ({
      usu_login
      },{
      where: {
        usu_cod
      }
    });

    return res.json();
  },*/
  

};