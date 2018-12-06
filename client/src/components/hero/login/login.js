import React, { Component } from 'react';
import './login.scss'
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

  validate = () => {
    const { fields } = this.state;
    const validation = Object.keys(fields).reduce((a, c) => (fields[c].isValid ? ++a : a), 0);
    if (validation === 2) {
      this.setState({
        enabled: true
      });
    } else {
      this.setState({
        enabled: false
      });
    }
  }

  submited = () => {
    this.setState({
      submited: true
    })
  }

  formSubmit = (event) => {
    event.preventDefault();  
    console.log('submited');
    const { enabled } = this.state;
    if(enabled) {
      this.setState(defaultState);
    }    
  }

  render() {
    const { submited, fields } = this.state;
    const { username, password } = fields;

  return (
    <div className="login">
      <form className="login__form" onSubmit={event => this.formSubmit(event)}>
          <div className="login__inputFields">
            <label className="login__label">
              <FontAwesomeIcon className="login__icon" icon="user" />
            <input className="login__input" type="text" name="username" value={this.state.username} onChange={this.handleChange} placeholder="username" pattern="^(?!\s*$).+" />
            {!username.isValid && submited && 
              <span className="login__input-error">
                a username is required
              </span>}
            </label>
            <label className="login__label">
              <FontAwesomeIcon className="login__icon" icon="key" />
            <input className="login__input" type="password" name="password" value={this.state.password} onChange={this.handleChange} placeholder="password" pattern="^(?!\s*$).+" />
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
      </div>
    )
  }
}

const defaultState = {
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

