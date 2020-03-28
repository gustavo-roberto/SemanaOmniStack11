const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');
//ctrl+D depois de selecionar uma palavra para abrir um cursor duplo pra próxima palavra igual a selecionada

const routes = express.Router();//Estou desacoplandoo módulo de rotas do Express em uma nova variável

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

routes.get('/profile', ProfileController.index);

module.exports = routes; //Exportando a variável routes de dentro do arquivo (no caso, as rotas)