'use strict';

const Service = require('egg').Service;

class ReplyService extends Service {

  async getFirebaseReplys() {
    let autoReply = [];
    let greetingMsg = '';
    let unknowKeyword = '';
    await this.ctx.service.firebase.getOnce('/list/').then(function(snapshot) {
      autoReply = snapshot.val().autoReply;
      greetingMsg = snapshot.val().greeting;
      unknowKeyword = snapshot.val().unknowKeyword;
    });
    return { autoReply, greetingMsg, unknowKeyword };
  }

  async reply(message) {
    // 消息逻辑处理
    const content = message.Content;
    const firebaseData = await this.getFirebaseReplys();
    console.log(firebaseData);
    const autoReply = firebaseData.autoReply;
    const greetingMsg = firebaseData.greeting;
    const unknowKeyword = firebaseData.unknowKeyword;

    let reply = unknowKeyword + content;
    if (message.MsgType === 'event') {
      if (message.Event === 'subscribe') {
        if (message.EventKey) {
          // 扫描二维码事件
          console.log('扫描二维码进入...');
        }

        reply = greetingMsg + ' \r\n';
      } else if (message.Event === 'unsubscribe') {
        // 取消关注
        console.log('取消关注。。。');
        reply = '';
      } else if (message.Event === 'LOCATION') {
        // 地理位置
        reply =
          '您当前的地理位置： ' +
          message.Latitude +
          '/' +
          message.Longtidue +
          '-' +
          message.Precision;
      } else if (message.Event === 'CLICK') {
        // 点击菜单
        reply = '您点击了菜单' + message.EventKey;
      } else if (message.Event === 'SCAN') {
        // 点击菜单
        reply = '您扫描了二维码' + message.EventKey;
      } else if (message.Event === 'VIEW') {
        // 点击菜单
        reply = '您点击了菜单中的链接' + message.EventKey;
      }
    } else if (message.MsgType === 'text' && autoReply.length > 0) {
      for (let i = 0; i < autoReply.length; i++) {
        if (content === i.toString()) {
          reply = autoReply[i];
        }
      }
    }
    return reply;
  }

  /**
   * get auto reply config from firebase
   */
  async getAutoReply(ctx, next) {
    const firebase = ctx.service.firebase.init();
    const data = firebase.getOnce('list', 'autoReply');
  }
}

module.exports = ReplyService;
