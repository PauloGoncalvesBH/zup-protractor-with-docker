const Helper = require('protractor-helper')

const buttonExcluir = $('[value="Excluir"]')

const visit = () => {
  browser.get('gp/cart/view.html?ref_=nav_cart')
}

const validarExistenciaDeProduto = nomeDoProduto => {
  const produto = element(by.cssContainingText('.sc-product-title', nomeDoProduto))
  Helper.waitForElementVisibility(produto)
}

const excluirProduto = () => {
  Helper.click(buttonExcluir)
}

module.exports = {
  visit,
  excluirProduto,
  validarExistenciaDeProduto
}
