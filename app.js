/*
Objetivo: Criar uma api para responder dados de Estados e cidades
Data: 10/11/2023
Autor: Nicolas Vasconcelos
Versão: 1.0
*/

/**
 * Instalações das dependencias para criação da api
 *     express -> npm install express --save
 * 
 *          dependencia para auxiliar na criação de Api
 * 
 *     cors -> npm install cors --save
 * 
 *          Manipular recursos de acesso, permissões e etc
 * 
 *     Body-parser -> npm install body-parser --save
 * 
 *          Auxilia na chegada de dados da Api
 */

const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

//Cria um objeto tendo a referencia do express
const app = express()

/*
- Request (API recebe os dados)
- Response (API envia o dados)
*/

//função para configurar as permissões do cors
app.use((request, response, next) => {
    //Configura quem poderá fazer as requisições na API (* - Libera para todos | IP restringe o acesso)
    response.header('Access-Control-Allow-Origin', '*')
        //Configura os metodos que poderão ser utilizados na API
    response.header('Access-Control-Allow-Methods', 'GET')

    app.use(cors())

    next()

})

//End Points

app.get('/estados/sigla', cors(), async function(request, response, next) {

    let controleListaEstados = require('./model/consultas.js')

    let estados = controleListaEstados.getListaDeEstados()

    response.json(estados)
    response.status(200)
})

//End Point que retorna os dados do estado filtrando pela sigla
app.get('/estados/sigla/:uf', cors(), async function(request, response, next) {

    //Recebe uma variavel encaminhada por parametro na URL da requisição
    let siglaEstado = request.params.uf

    let controleDadosEstados = require('./model/consultas.js')
    let dadosEstados = controleDadosEstados.getDadosEstado(siglaEstado)

    if (dadosEstados) {
        response.json(dadosEstados)
        response.status(200)
    } else {
        response.status(404)
        response.json({ erro: "Não foi possivel encontrar o item" })

    }
})

app.get('/capital/estado', cors(), async function(request, response, next) {
    let siglaEstado = request.query.uf

    console.log(siglaEstado)

    let controleDadosCapital = require('./model/consultas.js')
    let dadosEstados = controleDadosCapital.getCapitalEstado(siglaEstado)

    response.json(dadosEstados)
    response.status(200)
})

//Executa a API e faz ela ficar aguardando requisições
app.listen(8080, function() {
    console.log('API aguardando requisições')
})