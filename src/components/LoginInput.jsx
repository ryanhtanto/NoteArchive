import React from 'react';
import PropTypes from 'prop-types';

class LoginInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };

    this.onEmailChangeHandler = this.onEmailChangeHandler.bind(this);
    this.onPasswordChangeHandler = this.onPasswordChangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onEmailChangeHandler(event) {
    this.setState(() => {
      return {
        email: event.target.value
      }
    })
  }

  onPasswordChangeHandler(event) {
    this.setState(() => {
      return {
        password: event.target.value
      };
    });
  }

  onSubmitHandler(event) {
    event.preventDefault();

    this.props.login({
      email: this.state.email,
      password: this.state.password,
    });
  }

  render() {
    return (
        <form onSubmit={this.onSubmitHandler}>
                <div className="form-group">
                        <label htmlFor="loginEmail">Email address</label>
                        <input type="email" className="form-control" id="loginEmail" value={this.state.email} onChange={this.onEmailChangeHandler} />
                </div>
                <div className="form-group">
                        <label htmlFor="loginPassword">Password</label>
                        <input type="password" className="form-control" id="loginPassword" value={this.state.password} onChange={this.onPasswordChangeHandler} />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
        </form>
    );
  }
}

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
}

export default LoginInput;