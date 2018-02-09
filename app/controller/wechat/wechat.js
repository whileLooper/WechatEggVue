'use strict';

const Controller = require('egg').Controller;
const contentType = require('content-type');
const sha1 = require('sha1');
const getRowBody = require('raw-body');
const Wechat = require('../../wechat/wechat');
const util = require('../../wechat/util');

class WechatController extends Controller {
  async index(ctx, next) {
    // this.app.use(wechat(this.config.initWechat, weixin.reply, this.ctx));
    const wechat = new Wechat(this.config.initWechat);

    const that = this.ctx;
    const token = this.config.initWechat.token;
    const signature = that.query.signature;
    const nonce = that.query.nonce;
    const timestamp = that.query.timestamp;
    const echostr = that.query.echostr;
    const str = [ token, timestamp, nonce ].sort().join('');
    const sha = sha1(str);

    if (that.method === 'GET') {

      if (sha === signature) {
        that.body = echostr + '';
      } else {
        that.body = 'Invalid Signature';
      }
    } else if (that.method === 'POST') {

      if (sha !== signature) {
        that.body = 'wrong';
        return false;
      }

      const data = await getRowBody(that.req, {
        length: that.req.headers['content-length'],
        limit: '1mb',
        encoding: contentType.parse(that.req).parameters.charset,
      });

      const content = await util.parseXMLAsync(data);
      const message = await util.formatMessage(content.xml);

      this.weixin = message;
      this.body = await ctx.service.weixin.reply(message);

      wechat.reply.call(this);
    }
  }
}

module.exports = WechatController;
