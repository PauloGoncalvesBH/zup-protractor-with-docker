const Helper = require('protractor-helper')

const mapeamentoAltDispositivoEcho = {
  'Echo Dot (3ª Geração): Smart Speaker com Alexa - Cor Preta': 'echo dot - Adicione a Alexa a qualquer cômodo',
  'Echo Dot com relógio: Smart Speaker com Alexa - Cor Branca': 'Echo Dot com relógio - com display de LED',
  'Echo Studio - Smart Speaker com áudio de alta fidelidade e Alexa': 'Echo Studio - O som mais extraordinário com Alexa'
}

const selecionarProduto = nomeDoEcho => {
  const altDoDispositivoEcho = mapeamentoAltDispositivoEcho[nomeDoEcho]
  const echoQueSeraSelecionado = element(by.css(`[alt="${altDoDispositivoEcho}"]`))
  Helper.click(echoQueSeraSelecionado)
}

module.exports = {
  selecionarProduto
}
