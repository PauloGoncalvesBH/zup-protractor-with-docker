const Helper = require('protractor-helper')

const buttonAdicionarProdutoNoCarrinho = $('#add-to-cart-button')

const adicionarProdutoNaSacola = () => {
  Helper.click(buttonAdicionarProdutoNoCarrinho)
}

module.exports = {
  adicionarProdutoNaSacola
}
