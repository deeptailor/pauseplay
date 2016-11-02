import React from 'react';

class LoginForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {username: '', password:''};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate(){
    this.redirectIfLoggedIn();
  }

  redirectIfLoggedIn(){
    if (this.props.loggedIn){
      this.props.router.push('/');
    }
  }

  update(field){
    return e => this.setState({
      [field]:e.currentTarget.value
    });
  }

  handleSubmit(e){
    e.preventDefault();
    const user = this.state;
    this.props.login({user});
  }

  renderErrors(){
    return(
      <ul className="errors">
        {this.props.errors.map((error,i) => <li key={`error-${i}`}>{error}</li>)}
      </ul>
    );
  }

  render(){
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form">
          <p>Login</p>
          {this.renderErrors()}
          <input type="text"
								value={this.state.username}
								onChange={this.update("username")}
								className="login-input" />
          <br/>
          <input type="password"
								value={this.state.password}
								onChange={this.update("password")}
								className="login-input" />
          <br/>
          <input type="submit" value="Login" />
        </form>
      </div>
    );
  }
}

export default LoginForm;
