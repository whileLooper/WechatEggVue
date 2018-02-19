'use strict';
const Controller = require('egg').Controller;

class APIController extends Controller {
  async updateGreetingMSG() {
    console.log(this.ctx.request.body);
    this.ctx.body = 200;
  }
}

module.exports = APIController;