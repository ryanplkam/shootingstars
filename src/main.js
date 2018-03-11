// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

let app;
let config = {
  apiKey: "AIzaSyDY7pjpV23jxfRgeCMCxr9JWDqDf3LOFYI",
  authDomain: "vue-firebase-tutorial-ae26a.firebaseapp.com",
  databaseURL: "https://vue-firebase-tutorial-ae26a.firebaseio.com",
  projectId: "vue-firebase-tutorial-ae26a",
  storageBucket: "",
  messagingSenderId: "510279037765"
};

firebase.initializeApp(config)
firebase.auth().onAuthStateChanged(function(user) {
  if (!app) {
    /* eslint-disable no-new */
    app = new Vue({
      el: '#app',
      template: '<App/>',
      components: { App },
      router
    })
  }
});
