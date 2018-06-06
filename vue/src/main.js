import Vue from 'vue'
import DefaultFooter from './DefaultFooter.vue'
import LoggedInFooter from './LoggedInFooter.vue'
import AuthApi from './AuthApi.js'

Vue.component('DefaultFooter', DefaultFooter);
Vue.component('LoggedInFooter', LoggedInFooter);


new Vue({
  el: '#site-footer',
  //render: h => h(Footer),
  template: `
  	<div id="site-footer" class="columns medium-12">
  		<LoggedInFooter v-if="logged_in" v-bind="{logout}" @logout="logout"></LoggedInFooter>
  		<DefaultFooter v-else v-bind="{login}" @login="login"></DefaultFooter>
  	</div>
  `,
  data: {email: '', password: '', logged_in: false},
  components: {DefaultFooter, LoggedInFooter},
  created: function () {
  	/*
  	let token = AuthApi.tokenExists(localStorage);
    console.log('token exists?: ' + token)
    if (token) {
    	this.verify(token);
    } else {
    	this.login();
    }
    */
  },
  methods: {
    login (data) { 
    	console.log(data);
    	AuthApi.login(data.email,data.password,localStorage)
			.then((result) => {
				if(!result) {
					console.log('error logging in');
				} else {
					this.logged_in = true;
				}
			})
			.catch((e) => {
				console.log('error logging in');
				return false;
			});
     },
    logout () { 
    	AuthApi.logout(localStorage); 
    	this.logged_in = false;
    },
    verify (token) { 
    	AuthApi.verify(token)
 			.then((result) => {
				if(!result) {
					console.log('error logging in');
					this.logout();
				} else {
					console.log(result);
					this.logged_in = true;
				}
			})
			.catch((e) => {
				console.log('error logging in');
				return false;
			});
   },
    init () {
  		let exists = AuthApi.tokenExists(localStorage);
    	console.log('token exists?: ' + exists)

    }
  }
});



