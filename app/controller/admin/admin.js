'use strict';
const Controller = require('egg').Controller;

class AdminController extends Controller {
  async index() {
    let message = 'vue server side render!';
    let replys = [];
    let greetingMsg = '';
    let unknowKeyword = '';

    // fetch data from fierbase
    await this.ctx.service.firebase.getOnce('/list/').then(
      function(snapshot) {
        replys = snapshot.val().autoReply;
        greetingMsg = snapshot.val().greeting;
        unknowKeyword = snapshot.val().unknowKeyword;
      },
      function(errorObject) {
        message = 'The read failed: ' + errorObject.code;
      }
    );

    await this.ctx.render('admin/admin.js', { message, replys, greetingMsg, unknowKeyword });
  }

  async updateGreetingMSG() {
    let payload = this.ctx.request.body;
    if (payload) {
      this.ctx.service.firebase.update('/list/greeting', payload.greeting);
      this.ctx.body = 200;
    }
  }
}

module.exports = AdminController;