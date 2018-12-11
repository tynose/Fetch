import React, { Component } from 'react';
import './recordsEmail.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const defaultState = {
  enabled: false,
  submited: false,
  fields: {
    email: {
      value: "",
      isValid: false
    },
    subject: {
      value: "",
      isValid: false
    },
    text: {
      value: "",
      isValid: false
    }
  }
};

export default class RecordsEmail extends Component {
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
  };

  formSubmit = (event) => {
    const { emailDropDown, userInfo } = this.props;    
    const { enabled, fields } = this.state;
    event.preventDefault();
    const msg = { 
      to: fields.email.value, 
      from: "tylernoseworthy21@gmail.com", 
      subject: fields.subject.value, 
      html: `${fields.text.value}. <br><strong> visit this link to fill out their <a href='http://localhost:3006/vetsform/${userInfo._id}'>form</a></strong>` };
    const init = {
      method: 'POST',
      body: JSON.stringify(msg),
      headers: {
        'content-type': 'application/json'
      }
    };

    fetch('http://localhost:8080/record/request', init)
      .catch(err => {
        console.log(err)
      })

    if (enabled) {
      this.setState(defaultState);
    }
    emailDropDown();
  }

  render() {
    const { emailDropDown } = this.props;    
    const { submited, fields } = this.state;
    const { email, subject, text } = fields;

    return ( 
      <div className="recordsEmail">
        <FontAwesomeIcon className="recordsEmail__close-icon" onClick={() => emailDropDown()} icon="times" />
        <h4 className="recordsEmail__header">
          Send an email to your vet to recieve your records?
        </h4>
        <form className="recordsEmail__form" onSubmit={event => this.formSubmit(event)}>
          <div className="recordsEmail__inputFields">
            <label className="recordsEmail__label">
              <input className="recordsEmail__input" type="email" name="email" value={email.value} onChange={this.handleChange} placeholder="fetch@gmail.com" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" />
              {!email.isValid && submited && <span className="recordsEmail__input-error">
                  a valid Email is required
                </span>}
            </label>
            <label className="recordsEmail__label">
              <input className="recordsEmail__input" type="text" name="subject" value={subject.value} onChange={this.handleChange} placeholder="Subject line" pattern="^(?!\s*$).+" />
            </label>
            <label className="recordsEmail__label">
              <textarea className="recordsEmail__input recordsEmail__input--text" type="text" name="text" value={text.value} onChange={this.handleChange} placeholder="my animal requires its vet records" pattern="^(?!\s*$).+" />
              {!text.isValid && submited && <span className="recordsEmail__input-error">
                  text is required
                </span>}
            </label>
          </div>
          <div className="recordsEmail__formbtns">
            <button className="recordsEmail__btn recordsEmail__btn--submit" onClick={() => this.submited()} type="submit">
              Send Email
            </button>
          </div>
        </form>
      </div>
    )
  }
}
