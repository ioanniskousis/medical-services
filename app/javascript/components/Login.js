/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import { gel } from '../utils';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
    this.handleUserNameChange = this.handleUserNameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.validateForm = this.validateForm.bind(this);
  }

  componentDidMount() {
    // alert(JSON.stringify(this.props));
    const { location } = this.props;
    if (location) {
      const { search } = location;
      if (search) {
        if (search.includes('login_error')) {
          gel('error_message_top').innerHTML = 'Invalid UserName or PassWord';
        }
      }
    }
  }

  handleUserNameChange(e) {
    e.preventDefault();
    this.setState({
      username: e.target.value,
    });
  }

  handlePasswordChange(e) {
    e.preventDefault();
    this.setState({
      password: e.target.value,
    });
  }

  validateForm() {
    const { username, password } = this.state;
    return username.length > 0 && password.length > 0;
  }

  render() {
    const { username, password } = this.state;

    return (
      <div className="desktop-right">
        <main className="new-session">
          <div className="medicalServicesPanel">
            <div className="serviceLabel">medical</div>
            <div className="serviceLabel pdL60">services</div>
          </div>
          <p id="error_message_top" />

          <div className="new-session-main">
            <h1>Log In To Access Services</h1>
            <div className="form-div">

              <form action="/sessions" method="post">
                <div>
                  <label>User Name</label>
                  <input
                    id="username"
                    name="username"
                    type="text"
                    value={username}
                    onChange={this.handleUserNameChange}
                  />
                </div>
                <div>
                  <label>Password</label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    value={password}
                    onChange={this.handlePasswordChange}
                  />
                </div>
                <input disabled={!this.validateForm()} type="submit" value="Login" />
              </form>

            </div>
          </div>

        </main>
      </div>
    );
  }
}

Login.propTypes = {
  location: PropTypes.objectOf(PropTypes.any),
};

Login.defaultProps = {
  location: null,
};

export default Login;
