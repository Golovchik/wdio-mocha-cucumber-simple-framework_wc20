require("dotenv").config();
const { config } = require("./wdio.cucumber.conf.js");

// =====================
// Sauce specific config
// =====================
// See https://webdriver.io/docs/sauce-service.html for more information
config.services = ["sauce"];
config.user = process.env.USER_SAUCE;
config.key = process.env.KEY_SAUCE;
config.sauceConnect = false;
config.region = "eu";

// ===================================================================================
// Capabilities
// You can find more about constructing the capabilities for real device testing here
// https://wiki.saucelabs.com/display/DOCS/Platform+Configurator#/
//
// All test configuration options and W3C compliant options can be found here
// https://wiki.saucelabs.com/display/DOCS/Test+Configuration+Options
//
// To read more about W3C and Sauce Labs please check
// https://wiki.saucelabs.com/display/DOCS/W3C+Capabilities+Support
// ===================================================================================
config.capabilities = [
  {
    browserName: "chrome",
    browserVersion: "latest",
    platformName: "Windows 10",
  },
  {
    browserName: "MicrosoftEdge",
    browserVersion: "91",
    platformName: "Windows 10",
    "sauce:options": {
      screenResolution: "1280x1024",
      recordVideo: true,
      recordScreenshots: false,
    },
  },
];

exports.config = config;
