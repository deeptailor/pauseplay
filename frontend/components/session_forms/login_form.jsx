import React from 'react';

class LoginForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {username: '', password:''};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.guestLogin = this.guestLogin.bind(this);
    this.signup = this.signup.bind(this);
  }

  componentDidUpdate(){
    this.redirectIfLoggedIn();
  }

  componentWillUnmount(){
    this.props.clearErrors();
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

  guestLogin(e){
    e.preventDefault;
    const guest = {user:{username:'guest',password:'password'}}
    this.props.login(guest);
  }

  renderErrors(){
    return(
      <ul className="errors">
        {this.props.errors.map((error,i) => <li
          className="errors"key={`error-${i}`}>{error}</li>)}
      </ul>
    );
  }

  signup(){
    this.props.router.push('signup')
  }

  render(){
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form">
          <p>Log In</p>
          {this.renderErrors()}
          <input type="text"
								value={this.state.username}
								onChange={this.update("username")}
                placeholder="Username"
								className="login-input" />
          <br/>

          <input type="password"
								value={this.state.password}
								onChange={this.update("password")}
                placeholder="Password"
								className="password-input"/>
          <br/>

          <div className="login-buttons">
            <input type="submit" value="Log In" className="submit-login" />
            <input type="button" value="Guest" className="submit-guest" onClick={this.guestLogin} />
          </div>
          <div className="form-text">
            <p>Don't have an account? &nbsp;<a onClick={this.signup}>Signup</a></p>
          </div>
        </form>
      </div>
    );
  }
}

export default LoginForm;
