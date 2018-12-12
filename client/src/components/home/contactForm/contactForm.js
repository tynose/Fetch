import React, { Component } from 'react';
import './contactForm.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class ContactForm extends Component {
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

  contact = (event) => {
    event.preventDefault();
    const { enabled, fields } = this.state;

    const data = {
      username: fields.username.value,
      password: fields.password.value,
    }

    if (enabled) {
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
    const { submited, fields } = this.state;
    const { name, email, message } = fields;

    return (
      <div className="contactForm">
        <h3 className="contactForm__header">Contact Us</h3>
        <form className="contactForm__form" onSubmit={event => this.contactForm(event)}>
          <div className="contactForm__inputFields">
            <label className="contactForm__label">
              <FontAwesomeIcon className="contactForm__icon" icon="user" />
              <input className="contactForm__input" type="text" name="name" value={name.value} onChange={this.handleChange} placeholder="name" pattern="^(?!\s*$).+" />
              {!name.isValid && submited &&
                <span className="contactForm__input-error">
                  a name is required
              </span>}
            </label>
            <label className="contactForm__label">
              <FontAwesomeIcon className="contactForm__icon" icon="envelope" />
              <input className="contactForm__input" type="email" name="email" value={email.value} onChange={this.handleChange} placeholder="fetch@gmail.com" pattern="^(?!\s*$).+" />
              {!email.isValid && submited &&
                <span className="contactForm__input-error">
                  an email is required
                </span>}
            </label>
            <label className="contactForm__label">
              <FontAwesomeIcon className="contactForm__icon" icon="comment" />
              <textarea className="contactForm__input" type="text" name="message" value={message.value} onChange={this.handleChange} placeholder="enter message here" pattern="^(?!\s*$).+" />
              {!message.isValid && submited &&
                <span className="contactForm__input-error">
                  a message is required
                </span>}
            </label>
          </div>
          <button className="contactForm__btn" onClick={() => this.submited()} type="submit">
            Contact
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
    name: {
      value: '',
      isValid: false
    },
    email: {
      value: '',
      isValid: false
    },
    message: {
      value: '',
      isValid: false
    }
  }
}