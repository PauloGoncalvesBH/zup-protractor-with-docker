const { Home, ResultadoBusca, DetalhesDoProduto, DispositivosEcho, Carrinho } = require('../page_objects')

describe('Fluxo de sucesso', () => {
  beforeEach(() => Home.visit())

  afterEach(() => Carrinho.excluirProduto())

  it('Adicionar produto a partir da caixa de pesquisa', () => {
    const nomeProduto = 'Echo Dot (3ª Geração): Smart Speaker com Alexa - Cor Preta'

    Home.fazerBuscaDeProduto(nomeProduto)
    ResultadoBusca.selecionarProduto(nomeProduto)
    DetalhesDoProduto.adicionarProdutoNaSacola()
    Home.acessarCarrinho()
    Carrinho.validarExistenciaDeProduto(nomeProduto)
  })

  it('Adicionar produto a partir da seção "Dispositivos Echo" na home', () => {
    const nomeProduto = 'Echo Studio - Smart Speaker com áudio de alta fidelidade e Alexa'

    Home.abrirListaDeDispositivosEcho()
    DispositivosEcho.selecionarProduto(nomeProduto)
    DetalhesDoProduto.adicionarProdutoNaSacola()
    Home.acessarCarrinho()
    Carrinho.validarExistenciaDeProduto(nomeProduto)
  })
})
