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

    let status = false

    let descricaoEstado = {}

    estados.forEach((estado) => {

        if (estado.sigla.includes(uf)) {

            descricaoEstado.uf = estado.sigla
            descricaoEstado.descricao = estado.nome
            descricaoEstado.capital = estado.capital
            descricaoEstado.regiao = estado.regiao

            status = true

        }

    })

    if (status)
        return descricaoEstado
    else
        return false
}

const getCapitalEstado = (sigla) => {

    const uf = sigla.toUpperCase()
    const estados = pais.estadosCidades.estados

    let status = false

    let capitalEstado = {}

    estados.forEach((estado) => {

        if (estado.sigla.includes(uf)) {

            capitalEstado.uf = estado.sigla
            capitalEstado.descricao = estado.nome
            capitalEstado.capital = estado.capital

            status = true
        }

    })

    if (status)
        return capitalEstado
    else
        return false

}

const getEstadosRegiao = (regiaoSelecionada) => {

    const regiao = regiaoSelecionada.toUpperCase()

    const estados = pais.estadosCidades.estados

    let status = false

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
            status = true
        }

    })

    estadoRegiao.estados = estadosRegiaoSelecionada

    if (status)
        return estadoRegiao
    else
        return false

}

const getCapitalPais = () => {

    const estados = pais.estadosCidades.estados
    let status = false

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

            status = true

        }

    })

    capitaisPais.capitais = capitais


    if (status)
        return capitaisPais
    else
        return false

}

const getCidades = (sigla) => {

    const uf = sigla.toUpperCase()
    const estados = pais.estadosCidades.estados

    let status = false

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
            status = true
        }

    })

    estadoCidades.cidades = cidades


    if (status)
        return estadoCidades
    else
        return false

}

module.exports = {
    getListaDeEstados,
    getDadosEstado,
    getCapitalEstado,
    getEstadosRegiao,
    getCapitalPais,
    getCidades
}

/*Nicolas Vasconcelos ✈ */