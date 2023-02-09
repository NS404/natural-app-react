import  React,{Component} from 'react';
import fetch from 'node-fetch';

class Login extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			nome: '',
			password: '',
		};
	}

	async postData(url = '', data = {}) {
		const response = await fetch(url, {
		  method: 'POST', 
		  mode: 'no-cors', 
		  headers: {'Content-Type': 'multipart/form-data'},
		  body: JSON.stringify(data)
		});
		return response;
	  }
	  

	
	handleSubmit(e) {
		e.preventDefault();
		this.postData('http://localhost:8080/controller/login',this.state).then((response)=> console.log(response))
		.catch((error)=> console.log(error));
    }
		
	
		

render() {
  return (
    <div className="auth-form-container">
			<h2>Login</h2>
			<form className="login-form" onSubmit={this.handleSubmit.bind(this)}>
				<label>nome utente</label>
				<input onChange={e => this.setState({nome: e.target.value})} type="text"/>
				<label>password</label>
				<input onChange={e => this.setState({password: e.target.value})} type="password"/>
				<button type="submit">Log In</button>
			</form>
			<button className="link-btn" onClick={() => this.props.onFormSwitch('register')}>Don't have an account? Register here.</button>
		</div>
  );
	}
}

export default Login