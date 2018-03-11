// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'
import 'normalize.css'

// Import component
import TheHeader from './components/TheHeader'

// Register component
Vue.component('the-header', TheHeader)

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

  // if (!app) {
    /* eslint-disable no-new */

    // Re-render app whenever auth state changes
    app = new Vue({
      el: '#app',

      // Store current user
      data: function() {
        return {
          user
        }
      },
      // Pass 'user' prop into App component
      template: '<App :currentUser="user"/>',
      components: { 
        App,
        'the-header': TheHeader
      },
      // Store current user on the root vue instance?
      router
    })
  // }
});
