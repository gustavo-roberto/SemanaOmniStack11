const express = require('express');
const cors = require('cors');
const routes =  require('./routes'); //precisa-se colocar ./ para informar para aplicação que não é um pacote, mas um arquivo que está na mesma pasta

const app = express();

app.use(cors());
app.use(express.json());//Tem que vir antes das requições/rotas
app.use(routes);
 
app.listen(3333);