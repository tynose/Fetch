import React, { Component } from 'react';
import './detailsForm.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class DetailsForm extends Component {
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
  };

  formSubmit = (event) => {
    event.preventDefault();

    const { _id } = this.props.userInfo;
    const { enabled, fields } = this.state;

    const data = {
      profile: _id,
      date_created: Date(),
      name: fields.name.value,
      age: fields.age.value,
      breed: fields.breed.value,
      gender: fields.gender.value,
      date_of_birth: fields.date_of_birth.value,
      owner: fields.owner.value,
    }

    if (enabled) {
      const init = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          'content-type': 'application/json'
        }
      };

      fetch("/details/create", init)
        .then(() => this.props.getData())
        .catch(err => {
          console.log(err);
        });
      this.setState(
        defaultState,
      );
      this.props.handleClose()
    }
  }
  render() {

    const { detailsFormOpen, handleClose } = this.props;
    const { submited, fields } = this.state;
    const { 
      name,
      age,
      breed,
      gender,
      date_of_birth,
      owner 
    } = fields;
   
    const display = detailsFormOpen => {
      return {
        position: 'fixed',
        display: detailsFormOpen ? 'flex' : 'none',
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
    
    return <div style={{ ...display(detailsFormOpen) }}>
        <div className="modalLayer" onClick={handleClose} />
        <div className="detailsFormContainer">
          <div className="detailsForm">
            <FontAwesomeIcon className="detailsForm__closeIcon" onClick={handleClose} icon="times" />
            <img className="detailsForm__picture" src="/assets/images/profile-picture.jpg" alt="users animal" />
            <form className="detailsForm__form" onSubmit={event => this.formSubmit(event)}>
              <div className="detailsForm__inputFields">
                <label className="detailsForm__label">
                  <input className="detailsForm__input" type="text" name="name" value={name.value} onChange={this.handleChange} placeholder="name" pattern="^(?!\s*$).+" />
                  {!name.isValid && submited && <span className="detailsForm__input-error">
                      a name is required
                    </span>}
                </label>
                <label className="detailsForm__label">
                <input className="detailsForm__input" type="text" name="age" value={age.value} onChange={this.handleChange} placeholder="age" pattern="^(?!\s*$).+" />
                  {!age.isValid && submited && <span className="detailsForm__input-error">
                      a age is required
                    </span>}
                </label>
                <label className="detailsForm__label">
                  <input className="detailsForm__input" type="text" name="breed" value={breed.value} onChange={this.handleChange} placeholder="breed" pattern="^(?!\s*$).+" />
                  {!breed.isValid && submited && <span className="detailsForm__input-error">
                      a breed is required
                    </span>}
                </label>
                <label className="detailsForm__label">
                  <input className="detailsForm__input" type="text" name="gender" value={gender.value} onChange={this.handleChange} placeholder="sex" pattern="^(?!\s*$).+" />
                  {!gender.isValid && submited && <span className="detailsForm__input-error">
                      a sex is required
                    </span>}
                </label>
                <label className="detailsForm__label">
                  <input className="detailsForm__input" type="text" name="date_of_birth" value={date_of_birth.value} onChange={this.handleChange} placeholder="birthday" pattern="^(?!\s*$).+" />
                  {!date_of_birth.isValid && submited && <span className="detailsForm__input-error">
                      a birthday is required
                    </span>}
                </label>
                <label className="detailsForm__label">
                  <input className="detailsForm__input" type="text" name="owner" value={owner.value} onChange={this.handleChange} placeholder="owner" pattern="^(?!\s*$).+" />
                  {!owner.isValid && submited && <span className="detailsForm__input-error">
                      an owner is required
                    </span>}
                </label>
              </div>
              <button className="detailsForm__btn detailsForm__btn--submit" onClick={() => this.submited()} type="submit">
                Add Details
              </button>
            </form>
          </div>
        </div>
      </div>;
  }
}

const defaultState = {
  enabled: false,
  submited: false,
  fields: {
    name: {
      value: "",
      isValid: false
    },
    age: {
      value: "",
      isValid: false
    },
    breed: {
      value: "",
      isValid: false
    },
    gender: {
      value: "",
      isValid: false
    },
    date_of_birth: {
      value: "",
      isValid: false
    },
    owner: {
      value: "",
      isValid: false
    }
  }
};