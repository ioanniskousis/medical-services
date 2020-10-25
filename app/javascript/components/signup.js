/* eslint-disable no-useless-escape */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      fullname: '',
      email: '',
    };
    this.handleUserNameChange = this.handleUserNameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleFullNameChange = this.handleFullNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);

    this.validateForm = this.validateForm.bind(this);
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

  handleFullNameChange(e) {
    e.preventDefault();
    this.setState({
      fullname: e.target.value,
    });
  }

  handleEmailChange(e) {
    e.preventDefault();
    this.setState({
      email: e.target.value,
    });
  }

  validateForm() {
    const {
      username,
      password,
      fullname,
      email,
    } = this.state;
    const validEmail = validateEmail(email);
    return (username.length > 0)
        && (password.length > 0)
        && (fullname.length > 0)
        && validEmail;
  }

  render() {
    const {
      username,
      password,
      fullname,
      email,
    } = this.state;

    return (
      <div className="desktop-right">
        <main className="new-session">
          <div className="medicalServicesPanel">
            <div className="serviceLabel">medical</div>
            <div className="serviceLabel pdL60">services</div>
          </div>

          <div className="new-session-main">
            <h1>Sign Up Credencials</h1>
            <div className="form-div">

              <form action="/users" method="post">
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
                <div>
                  <label>Full Name</label>
                  <input
                    id="fullname"
                    name="fullname"
                    type="text"
                    value={fullname}
                    onChange={this.handleFullNameChange}
                  />
                </div>
                <div>
                  <label>email</label>
                  <input
                    id="email"
                    name="email"
                    type="text"
                    value={email}
                    onChange={this.handleEmailChange}
                  />
                </div>
                <input disabled={!this.validateForm()} type="submit" value="Sign Up" />
              </form>

            </div>
          </div>

        </main>
      </div>
    );
  }
}

export default SignUp;
