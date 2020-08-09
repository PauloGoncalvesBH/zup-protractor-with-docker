module.exports.config = require('./createProtractorConf')({
  seleniumAddress: 'http://localhost:4444/wd/hub/',
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      args: ['--headless']
    }
  }
})
