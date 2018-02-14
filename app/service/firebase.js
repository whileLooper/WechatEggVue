'use strict';

const Service = require('egg').Service;
const firebase = require('firebase');

class FirebaseService extends Service {

  /**
   * connect to firebase
   */
  init() {
    if (!firebase.apps.length) {
      firebase.initializeApp(this.config.firebase);
    }
  }

  /**
   * snapshot of data without listening for changes
   * @param {*} path string
   */
  getOnce(path, value = 'value') {
    this.init();
    return firebase.database().ref(path).once(value);
  }

  fetch(path) {

  }

  push() {

  }
}

module.exports = FirebaseService;