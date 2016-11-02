import React from 'react';

class SignupForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {username: '', password:'', description:'', profile_image_url:''};
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
    this.props.signup({user});
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
      <div className="signup-form-container">
        <form onSubmit={this.handleSubmit} className="signup-form">

          <p>Sign Up</p>

          {this.renderErrors()}

          <input type="text"
								value={this.state.username}
								onChange={this.update("username")}
                placeholder="Username"
								className="signup-input" />
          <br/>
          <input type="password"
								value={this.state.password}
								onChange={this.update("password")}
                placeholder="Password"
								className="signup-input" />
          <br/>

          <input type="text"
                value={this.state.description}
                onChange={this.update("description")}
                placeholder="Description"
                className="signup-input" />
          <br/>

          <input type="text"
								value={this.state.profile_image_url}
								onChange={this.update("profile_image_url")}
                placeholder="Profile Picture URL"
								className="signup-input" />
          <br/>

          <input type="submit" value="Sign Up" />

        </form>
      </div>
    );
  }
}

export default SignupForm;
