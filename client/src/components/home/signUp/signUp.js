import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './signUp.scss';

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
    },
    email: {
      value: '',
      isValid: false
    }
  }
}

export default class SignUp extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.state = defaultState;
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

  signUp = (event) => {
    event.preventDefault();
    const { enabled, fields } = this.state;

    const data = {
      username: fields.username.value,
      password: fields.password.value,
      email:  fields.email.value
    }

    if (enabled) {
      this.setState(defaultState);
      this.props.handleClose();
    
    const init = {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        'content-type': 'application/json'
      }
    };

    fetch('http://localhost:8080/profile/signup', init)
      .catch(err => {
        console.log(err);
      })
    }
  }
 
  render() {
    const { isOpen } = this.props;
    const { submited, fields } = this.state;
    const { username, password, email } = fields;
    
    const display = isOpen => {
      return {
        position: 'fixed',
        display: isOpen ? 'flex' : 'none',
        top: 0,
        left: 0,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100vw',
        height: '100vh',
        zIndex: 1,
        overflow: 'hidden',
        backgroundColor: 'rgba(57,57,57,0.6)',
      }
    }

    return <div style={{ ...display(isOpen) }}>
        <div className="modal-layer" onClick={this.props.handleClose} />
        <div className="form-container">
          <button onClick={this.props.handleClose} className="form-container__close-button">
            <FontAwesomeIcon className="form-container__close-icon" icon="bone" />
            <span className="form-container__close-text">close</span>
          </button>
        <form className="signUp__form" onSubmit={(event) => this.signUp(event)}>
            <div className="signUp__inputFields">
              <label className="signUp__label">
                <FontAwesomeIcon className="signUp__icon" icon="user" />
                <input className="signUp__input" type="text" name="username" value={username.value} onChange={this.handleChange} placeholder="username" pattern="^(?!\s*$).+" />
                {!username.isValid && submited && <span className="signUp__input-error">
                    a username is required
                  </span>}
              </label>
              <label className="signUp__label">
                <FontAwesomeIcon className="signUp__icon" icon="key" />
                <input className="signUp__input" type="password" name="password" value={password.value} onChange={this.handleChange} placeholder="password" pattern="^(?!\s*$).+" />
                {!password.isValid && submited && <span className="signUp__input-error">
                    a password is required
                  </span>}
              </label>
              <label className="signUp__label">
                <FontAwesomeIcon className="signUp__icon" icon="envelope" />
                <input className="signUp__input" type="text" name="email" value={email.value} onChange={this.handleChange} placeholder="fetch@gmail.com" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" />
                {!email.isValid && submited && <span className="signUp__input-error">
                    a valid email is required
                  </span>}
              </label>
            </div>
            <button className="signUp__btn" onClick={() => this.submited()} type="submit">
              Sign Up
            </button>
          </form>
        </div>
      </div>;
  }
}

