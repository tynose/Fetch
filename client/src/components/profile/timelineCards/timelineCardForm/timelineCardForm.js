import React, { Component } from 'react';
import './timelineCardForm.scss';

export default class TimelineCardForm extends Component {
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
    event.preventDefault();
    
    const { _id } = this.props.userInfo; 
    const { enabled, fields } = this.state;

    const data = {
      profile: _id,
      event: fields.event.value,
      details: fields.details.value
    }

    if (enabled) {      
      const init = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          'content-type': 'application/json'
        }
      };

      fetch("http://localhost:8080/timelinecard/create", init)
        .then(() => this.props.getTimelineCards())
        .catch(err => {
          console.log(err);
        });
        this.setState(
          defaultState,
        );
      }
    }
    
  render() {             
    const { submited, fields } = this.state;
    const { event, details } = fields;

    return (
      <div className="timelineCardForm">
        <h4 className="timelineCardForm__header">
          What's Tucker been up to?
        </h4>
        <form className="timelineCardForm__form" onSubmit={event => this.formSubmit(event)}>
          <div className="timelineCardForm__inputFields">
            <label className="timelineCardForm__label">
              <input className="timelineCardForm__input" type="text" name="event" value={event.value} onChange={this.handleChange} placeholder="event" pattern="^(?!\s*$).+" />
              {!event.isValid && submited && <span className="timelineCardForm__input-error">
                  an event is required
                </span>}
            </label>
            <label className="timelineCardForm__label">
              <textarea className="timelineCardForm__input timelineCardForm__input--text" type="text" name="details" value={details.value} onChange={this.handleChange} placeholder="went for a great walk today" pattern="^(?!\s*$).+" />
              {!details.isValid && submited && <span className="timelineCardForm__input-error">
                  details are required
                </span>}
            </label>
          </div>
          <div className="timelineCardForm__formbtns">
            <button className="timelineCardForm__btn timelineCardForm__btn--clear" onClick={() => this.setState(defaultState)} type="button" >
              Clear
            </button>
            <button className="timelineCardForm__btn timelineCardForm__btn--submit" onClick={() => this.submited()} type="submit">
              Post Event
            </button>
          </div>
        </form>
      </div>
    )
  }
}

const defaultState = {
  enabled: false,
  submited: false,
  fields: {
    event: {
      value: "",
      isValid: false
    },
    details: {
      value: "",
      isValid: false
    }
  }
};
