import Vue from 'vue'
import App from './App.vue'
import firebase from 'firebase'

Vue.config.productionTip = false

var firebaseConfig = {
  apiKey: "AIzaSyCBmTdh3gfy4SRrNxDXOmV53rpk43NtQ90",
  authDomain: "enredes-f8244.firebaseapp.com",
  databaseURL: "https://enredes-f8244.firebaseio.com",
  projectId: "enredes-f8244",
  storageBucket: "enredes-f8244.appspot.com",
  messagingSenderId: "870210169558",
  appId: "1:870210169558:web:c00d560fe89e55f8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


new Vue({
  render: h => h(App),
}).$mount('#app')
