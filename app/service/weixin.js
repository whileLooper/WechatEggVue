'use strict';

const Service = require('egg').Service;

class ReplyService extends Service {

  async getFirebaseReplys() {
    let autoReplys = [];
    await this.ctx.service.firebase.getOnce('/list/').then(function(snapshot) {
      autoReplys = snapshot.val();
    });
    return autoReplys;
  }

  async reply(message) {
    // 消息逻辑处理
    const content = message.Content;
    const autoReply = await this.getFirebaseReplys();

    let reply = '无法回复您的内容： ' + content;
    if (message.MsgType === 'event') {
      if (message.Event === 'subscribe') {
        if (message.EventKey) {
          // 扫描二维码事件
          console.log('扫描二维码进入...');
        }

        reply = 'Thanks to subscribe. \r\n';
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
      // 用户输入文本选项
      // switch (content) {
      //   case '1':
      //     reply = autoReply[1];
      //     break;

      //   case '2':
      //     reply = '您当前选项为 2。';
      //     break;

      //   case '3':
      //     reply = '您当前选项为 3。';
      //     break;

      //   case '4':
      //     reply = [
      //       {
      //         title: 'Adidas Futurecraft',
      //         description: 'Adias new release futurecraft 3D',
      //         picUrl:
      //           'https://www.adidas.com/com/apps/futurecraft4dss18/CDN_PATH/img/carousel/01.jpg',
      //         url: 'https://www.adidas.com/futurecraft',
      //       },
      //     ];
      //     break;

      //   default:
      //     break;
      // }
    }
    return reply;
  }

  /**
   * get auto reply config from firebase
   */
  async getAutoReply(ctx, next) {
    const firebase = ctx.service.firebase.init();
    const data = firebase.getOnce('list', 'autoReply');
    console.log(data);
  }
}

module.exports = ReplyService;
