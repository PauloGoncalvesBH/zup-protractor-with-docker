const Helper = require('protractor-helper')

const selecionarProduto = nomeDoProduto => {
  const mapeamentoProduto = element.all(by.cssContainingText('.a-color-base', nomeDoProduto)).first()
  Helper.click(mapeamentoProduto)
}

module.exports = {
  selecionarProduto
}
