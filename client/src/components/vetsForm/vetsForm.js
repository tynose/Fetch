import React, { Component } from 'react';
import './vetsForm.scss';

export default class VetsForm extends Component {
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
    if (validation === 9) {
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

  record = (event) => {
    event.preventDefault();
    
    const { enabled, fields } = this.state;
    
    const data = {
      vet_clinic: fields.vet_clinic.value,
      vet_name: fields.vet_name.value,
      microchip: fields.microchip.value,
      pet_name: fields.pet_name.value,
      profile: this.props.match.params.id,
      species: fields.species.value,
      date_of_visit: fields.date_of_visit.value,
      weight: fields.weight.value,
      shots: fields.shots.value,
      misc: fields.misc.value
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

      fetch("http://localhost:8080/record/create", init)
      .catch(err => {
        console.log(err);
      });     
    }
  }

  render() {
    console.log(this.props);
    
    const { submited, fields } = this.state;
    const { 
      vet_clinic,
      vet_name,
      microchip,
      pet_name,
      species,
      date_of_visit,
      weight,
      shots,
      misc
     } = fields;


    return <div className="vetsForm">
        <img className="vetsForm__icon" src="/assets/icons/logo/logo_transparent.png" alt="logo" />
        <form className="vetsForm__form" onSubmit={event => this.record(event)}>
          <div className="vetsForm__inputFields">
            <label className="vetsForm__label">
              <input className="vetsForm__input" type="text" name="vet_clinic" value={vet_clinic.value} onChange={this.handleChange} placeholder="Vet Clinic" pattern="^(?!\s*$).+" />
              {!vet_clinic.isValid && submited && <span className="vetsForm__input-error">
                  a a clinic name is required
                </span>}
            </label>
            <label className="vetsForm__label">
              <input className="vetsForm__input" type="text" name="vet_name" value={vet_name.value} onChange={this.handleChange} placeholder="Vets Name" pattern="^(?!\s*$).+" />
              {!vet_name.isValid && submited && <span className="vetsForm__input-error">
                  a vets name is required
                </span>}
            </label>
            <label className="vetsForm__label">
              <input className="vetsForm__input" type="text" name="pet_name" value={pet_name.value} onChange={this.handleChange} placeholder="Pets name" pattern="^(?!\s*$).+" />
              {!pet_name.isValid && submited && <span className="vetsForm__input-error">
                  a pet name is required
                </span>}
            </label>
            <label className="vetsForm__label">
              <input className="vetsForm__input" type="text" name="microchip" value={microchip.value} onChange={this.handleChange} placeholder="microchip" pattern="^(?!\s*$).+" />
              {!microchip.isValid && submited && <span className="vetsForm__input-error">
                  a pet name is required
                </span>}
            </label>
            <label className="vetsForm__label">
              <input className="vetsForm__input" type="text" name="species" value={species.value} onChange={this.handleChange} placeholder="Species of Animal" pattern="^(?!\s*$).+" />
              {!species.isValid && submited && <span className="vetsForm__input-error">
                  a username is required
                </span>}
            </label>
            <label className="vetsForm__label">
              <input className="vetsForm__input" type="text" name="date_of_visit" value={date_of_visit.value} onChange={this.handleChange} placeholder="Date of visit" pattern="^(?!\s*$).+" />
              {!date_of_visit.isValid && submited && <span className="vetsForm__input-error">
                  a date is required
                </span>}
            </label>
            <label className="vetsForm__label">
              <input className="vetsForm__input" type="text" name="weight" value={weight.value} onChange={this.handleChange} placeholder="weight" pattern="^(?!\s*$).+" />
              {!weight.isValid && submited && <span className="vetsForm__input-error">
                  weight is required
                </span>}
            </label>
            <label className="vetsForm__label">
              <input className="vetsForm__input" type="text" name="shots" value={shots.value} onChange={this.handleChange} placeholder="shots given to pet" pattern="^(?!\s*$).+" />
              {!shots.isValid && submited && <span className="vetsForm__input-error">
                  shots are required
                </span>}
            </label>
            <label className="vetsForm__label">
            <input className="vetsForm__input" type="text" name="misc" value={misc.value} onChange={this.handleChange} placeholder="misc. information" pattern="^(?!\s*$).+" />
              {!misc.isValid && submited && <span className="vetsForm__input-error">
                  password is required
                </span>}
            </label>
          </div>
          <button className="vetsForm__btn" onClick={() => this.submited()} type="submit">
            Submit Records
          </button>
        </form>
      </div>;
  }
}

const defaultState = {
  enabled: false,
  submited: false,
  fields: {
    vet_clinic: {
      value: "",
      isValid: false
    },
    vet_name: {
      value: "",
      isValid: false
    },
    pet_name: {
      value: "",
      isValid: false
    },
    microchip: {
      value: "",
      isValid: false
    },
    species: {
      value: "",
      isValid: false
    },
    date_of_visit: {
      value: "",
      isValid: false
    },
    weight: {
      value: "",
      isValid: false
    },
    shots: {
      value: "",
      isValid: false
    },
    misc: {
      value: "",
      isValid: false
    }
  }
};