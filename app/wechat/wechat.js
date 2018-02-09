'use strict';

const Promise = require('bluebird');
const request = Promise.promisify(require('request'));
const util = require('./util');

const prefix = 'https://api.weixin.qq.com/cgi-bin/token';
const api = {
  accessToken: prefix + '?grant_type=client_credential',
};

function Wechat(opts) {
  const that = this;
  this.appID = opts.appID;
  this.appSecret = opts.appSecret;
  this.getAccessToken = opts.getAccessToken;
  this.saveAccessToken = opts.saveAccessToken;
  this.getAccessToken()
    .then(function(data) {
      try {
        data = JSON.parse(data);
      } catch (e) {
        return that.updateAccessToken(data);
      }
      if (that.isValidAccessToken(data)) {
        return Promise.resolve(data);
      }
      return that.updateAccessToken();

    })
    .then(function(data) {
      that.access_token = data.access_token;
      that.expires_in = data.expires_in;
      that.saveAccessToken(data);
    });
}

Wechat.prototype.isValidAccessToken = function(data) {
  if (!data || !data.access_token || !data.expires_in) {
    return false;
  }

  // const access_token = data.access_token;
  const expires_in = data.expires_in;
  const now = (new Date().getTime());
  // 检查时间是否过期
  if (now < expires_in) {
    return true;
  }
  return false;

};

Wechat.prototype.updateAccessToken = function() {
  const appID = this.appID;
  const appSecret = this.appSecret;

  const url = api.accessToken + '&appid=' + appID + '&secret=' + appSecret;
  return new Promise(function(resolve) {
    request({ url, json: true }).then(function(response) {
      const data = response.body;
      const now = (new Date().getTime());
      const expires_in = now + (data.expires_in - 20) * 1000;
      data.expires_in = expires_in;
      resolve(data);
    });
  });
};

Wechat.prototype.reply = function() {
  const content = this.body;
  const message = this.weixin;
  const xml = util.tpl(content, message);

  // assign value into ctx, so client side can get proper respnse
  this.ctx.status = 200;
  this.ctx.type = 'application/xml';
  this.ctx.body = xml;
};

module.exports = Wechat;
