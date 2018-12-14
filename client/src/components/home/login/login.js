import React, { Component } from 'react';
import './login.scss';
import { Redirect } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.state = defaultState;
  }

  handleChange = async (event) => {
    const { name, value, pattern } = event.target;
    const regex = new RegExp(pattern);
    const isValid = await regex.test(value);
    this.setState({
      fields: {
        ...this.state.fields,
        [name]: { value, isValid }
      }
    })
    this.validate()
  }

 handleChange = (event) => {    
    const { name, value, pattern } = event.target;
    const regex = new RegExp(pattern);
    const isValid = regex.test(value);
    
    this.setState({
      fields: {
        ...this.state.fields,
        [name]: { value, isValid }
      }
    }, this.validate)
  }

  validate = async() => {
    const { fields } = this.state;  

    const validateFields = () => {
      let isAllFieldsValid = true;

      for (const i in fields) {
        if (!fields[i].isValid) {
          isAllFieldsValid = false
          break;
        }
      }

      return isAllFieldsValid;
    }

    await validateFields();
    await this.setState({ enabled: validateFields() });
    
  }

  submited = () => {
    this.setState({
      submited: true
    })
  }

  login = (event) => {
    event.preventDefault();
    const { enabled, fields } = this.state;

    const data = {
      username: fields.username.value,
      password: fields.password.value,
    }

    if(enabled) {
      this.setState({
        defaultState,
      });
      const init = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          'content-type': 'application/json'
        }
      };

      fetch('http://localhost:8080/profile/login', init)
        .then(resp => resp.json())
        .then(data => {
          localStorage.setItem('token', data.token)
          this.setState({
            isLoggedIn: true
          })
        })
        .catch(err => {
          console.log(err)
        })
      }
  }

  render() {
    const { isLoggedIn, submited, fields } = this.state;
    const { username, password } = fields;

  return (
    <div className="login">
      <form className="login__form" onSubmit={event => this.login(event)}>
          <div className="login__inputFields">
            <label className="login__label">
              <FontAwesomeIcon className="login__icon" icon="user" />
            <input className="login__input" type="text" name="username" value={username.value} onChange={this.handleChange} placeholder="username" pattern="^(?!\s*$).+" />
            {!username.isValid && submited && 
              <span className="login__input-error">
                a username is required
              </span>}
            </label>
            <label className="login__label">
              <FontAwesomeIcon className="login__icon" icon="key" />
            <input className="login__input" type="password" name="password" value={password.value} onChange={this.handleChange} placeholder="password" pattern="^(?!\s*$).+" />
            {!password.isValid && submited && 
                <span className="login__input-error">
                  password is required
                </span>}
            </label>
          </div>
          <button className="login__btn" onClick={() => this.submited()} type="submit">
            Login
          </button>
        </form>
        {isLoggedIn ?  <Redirect to='/profile' /> : null}
      </div>
    )
  }
}

const defaultState = {
  isLoggedIn: false,
  enabled: false,
  submited: false,
  fields: {
      username: {
        value: '',
        isValid: false
      },
      password: {
        value: '',
        isValid: false
      }
  }
}

