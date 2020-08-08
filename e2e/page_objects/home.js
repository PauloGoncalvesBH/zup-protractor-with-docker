const Helper = require('protractor-helper')
const { browser } = require('protractor')

const buttonCarrinho = $('#nav-cart')
const inputCaixaDePesquisa = $('#twotabsearchtextbox')
const linkConfiraAgoraDispositivosEcho = $('[aria-label="Dispositivos Echo - Confira agora"]')

const visit = () => {
  browser.get('')
}

const acessarCarrinho = () => {
  Helper.click(buttonCarrinho)
}

const fazerBuscaDeProduto = nomeDoProduto => {
  Helper.fillFieldWithTextAndPressEnter(inputCaixaDePesquisa, nomeDoProduto)
}

const abrirListaDeDispositivosEcho = () => {
  Helper.click(linkConfiraAgoraDispositivosEcho)
}

module.exports = {
  visit,
  abrirListaDeDispositivosEcho,
  acessarCarrinho,
  fazerBuscaDeProduto
}
