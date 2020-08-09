module.exports.config = require('./createProtractorConf')({
  capabilities: {
    browserName: 'firefox',
    'moz:firefoxOptions': {
      args: ['--headless']
    }
  }
})
