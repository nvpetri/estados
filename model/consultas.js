/*****************************************************************
 * Objetivo: Fazer as consultas no array fornecido utilizando    *
 * as estruturas de repetição.                                   *
 * Autor: Nicolas Vasconcelos Petri                              *
 * Data: 27/10/2023                                              *
 * Versão: 1.0                                                   *
 ****************************************************************/

var pais = require('./estados_cidades.js')

const getListaDeEstados = () => {

    const estados = pais.estadosCidades.estados
    let siglas = {}
    let uf = []

    estados.forEach((estado) => {

        uf.push(estado.sigla)

    })

    siglas.uf = uf
    siglas.quantidade = estados.length

    return siglas

}

const getDadosEstado = (sigla) => {

    const uf = sigla.toUpperCase()
    const estados = pais.estadosCidades.estados

    let descricaoEstado = {}

    estados.forEach((estado) => {

        if (estado.sigla.includes(uf)) {

            descricaoEstado.uf = estado.sigla
            descricaoEstado.descricao = estado.nome
            descricaoEstado.capital = estado.capital
            descricaoEstado.regiao = estado.regiao

        }

    })

    return descricaoEstado

}

const getCapitalEstado = (sigla) => {

    const uf = sigla.toUpperCase()
    const estados = pais.estadosCidades.estados

    let capitalEstado = {}

    estados.forEach((estado) => {

        if (estado.sigla.includes(uf)) {

            capitalEstado.uf = estado.sigla
            capitalEstado.descricao = estado.nome
            capitalEstado.capital = estado.capital

        }

    })

    return capitalEstado

}

const getEstadosRegiao = (regiaoSelecionada) => {

    const regiao = regiaoSelecionada.toUpperCase()

    const estados = pais.estadosCidades.estados

    let estadoRegiao = {}
    estadoRegiao.regiao = regiao

    let estadosRegiaoSelecionada = []

    estados.forEach((estado) => {

        if ((estado.regiao.toUpperCase()).includes(regiao)) {

            let estadoRegiaoSelecionada = {
                uf: estado.sigla,
                descricao: estado.nome,
            }

            estadosRegiaoSelecionada.push(estadoRegiaoSelecionada)


        }

    })

    estadoRegiao.estados = estadosRegiaoSelecionada

    return estadoRegiao

}

const getCapitalPais = () => {

    const estados = pais.estadosCidades.estados

    let capitaisPais = {}
    let capitais = []

    estados.forEach((estado) => {

        if (estado.capital_pais != undefined) {

            let estadoInfo = {}

            estadoInfo.capital_atual = estado.capital_pais.capital
            estadoInfo.uf = estado.sigla
            estadoInfo.descricao = estado.nome
            estadoInfo.capital = estado.capital
            estadoInfo.regiao = estado.regiao
            estadoInfo.capital_pais_ano_inicio = estado.capital_pais.ano_inicio
            estadoInfo.capital_pais_ano_termino = estado.capital_pais.ano_fim

            capitais.push(estadoInfo)

        }

    })

    capitaisPais.capitais = capitais

    return capitaisPais

}

const getCidades = (sigla) => {

    const uf = sigla.toUpperCase()
    const estados = pais.estadosCidades.estados

    let estadoCidades = {}
    let cidades = []

    console.log(estados.estado)

    estados.forEach((estado) => {

        if (estado.sigla.toUpperCase().includes(uf)) {

            estadoCidades.uf = estado.sigla
            estadoCidades.descricao = estado.nome
            estadoCidades.quantidade_cidades = estado.cidades.length

            estado.cidades.forEach((cidade) => {
                cidades.push(cidade.nome)
            })

        }

    })

    estadoCidades.cidades = cidades

    return estadoCidades

}

let estados = getListaDeEstados()
let destados = getDadosEstado('ba')
let cestados = getCapitalEstado('sp')
let Eestados = getEstadosRegiao('nordeste')
let cPais = getCapitalPais()
let cidade = getCidades('rj')

console.log(estados)
console.log(destados)
console.log(cestados)
console.log(Eestados)
console.log(cPais)
console.log(cidade)