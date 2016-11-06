import React from 'react';

class SignupForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {username: '', password:'', description:'', profile_image_url:''};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.login = this.login.bind(this);
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
    this.props.signup({user});
  }

  renderErrors(){
    return(
      <ul className="errors">
        {this.props.errors.map((error,i) => <li key={`error-${i}`}>{error}</li>)}
      </ul>
    );
  }

  login(){
    this.props.router.push('login')
  }

  render(){
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form">

          <p>Sign Up</p>

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
								className="login-input" />
          <br/>

          <input type="text"
                value={this.state.description}
                onChange={this.update("description")}
                placeholder="Description(optional)"
                className="login-input" />
          <br/>

          <input type="text"
								value={this.state.profile_image_url}
								onChange={this.update("profile_image_url")}
                placeholder="Profile Picture URL(optional)"
								className="login-input" />
          <br/>

          <input type="submit" value="Sign Up" className="submit-login" />

          <div className="form-text">
            <p>Already have an account? &nbsp;<a onClick={this.login}>Login</a></p>
          </div>

        </form>
      </div>
    );
  }
}

export default SignupForm;
