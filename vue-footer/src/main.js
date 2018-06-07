import Vue from 'vue'
import DefaultFooter from './DefaultFooter.vue'
import LoggedInFooter from './LoggedInFooter.vue'

Vue.component('DefaultFooter', DefaultFooter);
Vue.component('LoggedInFooter', LoggedInFooter);

class AuthApi {
	verify(token) {
		let url = '/users/verify';
		console.log(url);
		return fetch(url, {
			body: JSON.stringify({token}), 
			headers: {
				'content-type': 'application/json'
			},
			method: 'POST'
		})
			.then((response) => {
				return response.json();
			})
			.then((token) => {
				return token;
			})
			.catch((e) => {
				console.log('error verifying token');
				return false;
			});
	}
	login(email,password) {
		return fetch('/users/login', {
			body: JSON.stringify({email, password}),    
			headers: {
				'content-type': 'application/json'
			},
			method: 'POST'
		})
		.then((response) => {
			return response.json();
		})
		.then((json) => {
			console.log(json);
			return json.token;
		})
		.catch((e) => {
			console.log('error logging in');
			console.log(e);
			return false;
		});     
	}
}

new Vue({
	el: '#site-footer',
	//render: h => h(Footer),
	template: `
		<div id="site-footer" class="columns medium-12">
			<LoggedInFooter v-if="logged_in" v-bind="{logout}" @logout="logout"></LoggedInFooter>
			<DefaultFooter v-else v-bind="{login}" @login="login"></DefaultFooter>
		</div>
	`,
	data: {email: '', password: '', logged_in: false, token: '', localStore: {}},
	components: {DefaultFooter, LoggedInFooter},
	mounted: function () {
		this.auth = new AuthApi(window);
		let token = this.tokenExists();
		console.log('token exists?: ' + token)
		if (token) {
			this.verify(token);
		} 
	},
	methods: {
		tokenExists() {
			let token = localStorage.getItem('jwt_token');
			return (token===null ? false : token);
		},
		login (data) { 
			console.log(data);
			this.auth.login(data.email,data.password)
			.then((token) => {
				if(!token) {
					console.log('error logging in');
				} else {
					console.log(token);
					localStorage.setItem('jwt_token', token);
					this.logged_in = true;
				}
			})
			.catch((e) => {
				console.log('error logging in');
				console.log(e);
			});
		 },
		logout () { 
			localStorage.removeItem('jwt_token');
			this.logged_in = false;
		},
		verify (token) { 
			this.auth.verify(token)
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
				console.log('error verifying token');
				console.log(e);
				return false;
			});
		}
	}
});
