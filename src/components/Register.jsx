import  React,{Component} from 'react';
import fetch from 'node-fetch';

class Register extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			nome: '',
			password: '',
			displayName: '',
		};
	}

	async postData(url = '', data = {}) {
		const response = await fetch(url, {
		  method: 'POST',  
		  headers: {'Content-Type': 'application/json','Access-Control-Allow-Origin': '*'},
		  body: JSON.stringify(data)
			});
		return response;
	  }

		
	  

	
	handleSubmit(e) {
		e.preventDefault();
		this.postData('http://localhost:8080/controller/register',this.state)
		.catch((error)=> console.log(error));
    }
		
	
		

	render() {
		return (
			<div className="auth-form-container">
				<h2>Register</h2>
				<form className="register-form" onSubmit={this.handleSubmit.bind(this)}>
					<label>nome e conome</label>
					<input  onChange={e => this.setState({displayName: e.target.value})} name="fullName" type="text"/>
					<label>nome</label>
					<input onChange={e => this.setState({nome: e.target.value})} type="text"/>
					<label>password</label>
					<input  onChange={e => this.setState({password: e.target.value})} type="password"/>
					<button type="submit">Register</button>
				</form>
				<button className="link-btn" onClick={() => this.props.onFormSwitch('login')}>Already have an account? Login here.</button>
			</div>
		);
		}
}

export default Register