const SpecReporter = require('jasmine-spec-reporter').SpecReporter
const Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter')

module.exports = providedConfig => {
  const defaultConfig = {
    baseUrl: 'https://www.amazon.com.br/',
    specs: ['../spec/*.spec.js'],
    onPrepare: () => {
      browser.waitForAngularEnabled(false)
      browser.driver.manage().deleteAllCookies()
      browser.driver.manage().window().maximize()
      jasmine.getEnv().addReporter(
        new SpecReporter({
          suite: {
            displayNumber: true
          },
          spec: {
            displayFailed: true,
            displayPending: true,
            displayDuration: true,
            displayStackTrace: true
          },
          summary: {
            displayFailed: true
          }
        })
      ),
      jasmine.getEnv().addReporter(
        new Jasmine2HtmlReporter({
          savePath: 'report/screenshots'
        })
      )
    },
    jasmineNodeOpts: {
      random: true,
      includeStackTrace: true,
      print: function () {}
    }
  }

  return Object.assign({}, defaultConfig, providedConfig)
}
