<h1 align="center">Automação - Protractor com Docker</h1>

<i><h4 align="center">Automação simples de portal de comércio online usando protractor, docker e lighthouse</h4></i>


<p align="center">
  <a href="https://npmjs.com/package/lighthouse-ci"><img src="https://img.shields.io/badge/audit%20library-lighthouse--ci-blue?style=for-the-badge"></a>
  <a href="https://npmjs.com/package/protractor"><img src="https://img.shields.io/badge/e2e%20library-protractor-blue?style=for-the-badge"></a>
  <br>
  <a href="https://github.com/PauloGoncalvesBH/zup-protractor-with-docker/actions"><img src="https://github.com/PauloGoncalvesBH/zup-protractor-with-docker/workflows/Continuous%20Integration/badge.svg"></a>
  <a href="https://github.com/PauloGoncalvesBH/zup-protractor-with-docker/actions"><img src="https://github.com/PauloGoncalvesBH/zup-protractor-with-docker/workflows/CodeQL/badge.svg"></a>
</p>

---

## Instalação e execução

### Pré-requisitos

- [Git](https://git-scm.com/download/) e [Node.js](https://nodejs.org/en/download/) instalados.

### Clonando o projeto e instalando as dependências

Todos os comandos abaixo são feitos no _terminal_.

**1** - Faça um clone do repositório e acesse o diretório criado pelo clone:

```sh
git clone https://github.com/PauloGoncalvesBH/zup-protractor-with-docker.git && cd zup-protractor-with-docker
```

**2** - Instale as dependências do projeto: 

```sh
npm install --production
```

### Testes

Utilize o seguinte comando para executar os testes E2E:

```sh
npm run test:e2e
```

Para realizar [auditoria](#-auditoria), execute:

```sh
npm run test:audit
```

Para executar ambos os testes acima, execute:
```sh
npm test
```

#### Docker

Caso possua docker na sua máquina, execute:

```sh
npm run test:e2e:docker
```

---

## Detalhes do projeto

![Continuous Integration](https://github.com/PauloGoncalvesBH/zup-protractor-with-docker/workflows/Continuous%20Integration/badge.svg)

Há certa preocupação com boas práticas de código, portanto algumas validações são realizadas no pré commit e outras logo após o código ser integrado no repositório (`git push`).

#### Legenda

💥 > Executado na integração contínua

💻 > Executado no pré-commit

### 💥 Testes E2E

[![protractor](https://img.shields.io/badge/e2e%20library-protractor-blue)](https://npmjs.com/package/protractor)

É utilizada a biblioteca [protractor](https://npmjs.com/package/protractor) em conjunto com [protractor-helper](https://npmjs.com/package/protractor) para a execução dos testes.

Ao término da execução o resultado é apresentado no terminal e em report HTML gerado no diretório `/report`.

### 💥 Auditoria

[![Lighthouse](https://img.shields.io/badge/audit%20library-lighthouse-blue)](https://www.npmjs.com/package/lighthouse)

É utilizada a ferramenta de auditoria [lighthouse](https://npmjs.com/package/lighthouse) para a coleta de métricas de desempenho e percepções sobre se as melhores práticas de desenvolvimento estão sendo seguidas, analisando:

1. **Performance;**
1. **Acessibilidade;**
1. **Boas práticas;**
1. **SEO;**
1. **PWA.**

Para aprofundar sobre seu funcionamento, verifique o [documento sobre a arquitetura do Lighthouse.](https://github.com/GoogleChrome/lighthouse/blob/HEAD/docs/architecture.md)

O teste falha se o _SEO_ estiver abaixo de 95 pontos e a acessibilidade estiver abaixo de _80_.

### 💥💻 Lint

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

É utilizado o [standard](https://www.npmjs.com/package/standard) como linter e formatter do código e [lint-staged](https://www.npmjs.com/package/lint-staged) para forçar lint das alterações que estão em staged do git.

Execute `npm run lint` para padronizar os arquivos.

Execute `npm run lint:fix` para corrigir automaticamente os problemas encontrados pelo lint.

> O commit é abortado caso esse padrão não seja seguido

## 💥💻 Commit

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)

As mensagens de commit seguem o padrão do [_conventional commit_](https://conventionalcommits.org) para que o histórico esteja conciso, claro e organizado, seguindo as melhores práticas de mensagem de commit.

Para saber mais, acesse esses links:
- [Especificação do Conventional Commit](https://www.conventionalcommits.org/)
- [Regras do @commitlint/config-conventional](https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional).

Execute `npm run commit` para ter um painel interativo que permite seguir o padrão de commit de forma fácil.

> O commit é abortado caso esse padrão não seja seguido

---

[MIT License](/LICENSE)
