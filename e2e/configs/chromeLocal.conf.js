module.exports.config = require('./createProtractorConf')({
  directConnect: true,
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      args: ['--headless']
    }
  }
})
