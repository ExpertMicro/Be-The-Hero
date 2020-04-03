const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.listen(3333);


/**
 * Rota/Recurso
 */

 /**
  * Métodos HTTP:
  * GET: Busca/listar uma informação do backend
  * POST: Criar uma informação no backend
  * PUT: alterar uma informação no backend
  * DELETE: Deletar um informação no backend
  */

/**
 * Tipos de parametros:
 * 
 * Query Params: Parâmetros nomeados enviados na rota apos "?"(filtros, paginação)
 * Route Params: Parâmetros utilizados para indentificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */

 /**
  * Drive: SELECT * FROM users
  * Query Builder: table('users).select('*').where
  */



