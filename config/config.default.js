const path = require('path');
const fs = require('fs');
const util = require('../libs/util.js');
const wechat_file = path.join(__dirname, './wechat.txt');

module.exports = app => {
  const exports = {};

  exports.siteFile = {
    '/favicon.ico': fs.readFileSync(path.join(app.baseDir, 'app/web/asset/images/favicon.ico'))
  };

  exports.view = {
    cache: false
  };

  exports.vuessr = {
    layout: path.join(app.baseDir, 'app/web/view/layout.html')
  };

  exports.logger = {
    consoleLevel: 'DEBUG',
    dir: path.join(app.baseDir, 'logs')
  };

  exports.static = {
    prefix: '/public/',
    dir: path.join(app.baseDir, 'public')
  };

  exports.keys = '123456';

  // wechat configuration
  exports.initWechat = {
    token: 'bhu89ijnmko0',
    // appID: 'wxd61026a80b610e7c',
    // appSecret: '7b9dde29e00e60d9474551e06e409c3f587a45fca820916e183acca9e41839e',
    appID: 'wx58080b1fe9cb4f49',
    appSecret: '9dba811200ddd73da9a24d7f36762485',
    encodingAESKey: 'HX2DzbFRh9qY4toNv9XVL1kYxgoYCTwoZ3haN92kAzl',
    getAccessToken() {
      return util.readFileAsync(wechat_file);
    },
    saveAccessToken(data) {
      data = JSON.stringify(data);
      return util.writeFileAsync(wechat_file, data);
    },
  };

  exports.middleware = [
    'access'
  ];

  return exports;
};
