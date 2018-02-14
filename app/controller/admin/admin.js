'use strict';
const Controller = require('egg').Controller;

class AdminController extends Controller {
  async index() {
    let message = 'vue server side render!';
    let replys = [];

    // fetch data from fierbase
    await this.ctx.service.firebase.getOnce('/list/').then(
      function(snapshot) {
        replys = snapshot.val();
      },
      function(errorObject) {
        message = 'The read failed: ' + errorObject.code;
      }
    );

    await this.ctx.render('admin/admin.js', { message, replys });
  }
}

module.exports = AdminController;