class AuthApi {
	constructor(wnd) {
		this.localStorage = wnd.localStorage;
	}
	tokenExists() {
		let token = this.localStorage.getItem('jwt_token');
		return (token===null ? false : token);
	}
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
	
	logout(localStorage) {
		this.localStorage.remove_item('jwt_token');
	}
	login(email,password,localStorage) {
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
			console.log(json.token);
			this.localStorage.setItem('jwt_token', json.token);
			return json.token;
		})
		.catch((e) => {
			console.log('error logging in');
			return false;
		});     
	}
}

module.export = AuthApi;