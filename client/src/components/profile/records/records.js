import React, { Component } from 'react';
import "./records.scss";
import RecordsEmail from "./recordsEmail/recordsEmail";
import Record from "./record/record";

export default class Records extends Component {
  constructor(props) {
    super(props);

    this.emailDropDown = this.emailDropDown.bind(this)
    this.state = {
      emailOpen: false
    }
  }

  emailDropDown() {
    this.setState((prevState) => {
      return { emailOpen: !prevState.emailOpen };
    });
  }

  
  render() {
    const { emailOpen } = this.state;
    const { record } = this.props;
    console.log(record);
    
    
    const display = emailOpen => {
      return {
        display: emailOpen ? 'none' : 'flex',
      }
    }
    
    return <div className="records">
        <h5 className="records__header">Records</h5>
        <div className="records__content">
          {emailOpen ? <RecordsEmail emailDropDown={this.emailDropDown} {...this.state} {...this.props} /> : <button className="records__btn" onClick={() => this.emailDropDown()}>
              Request Records
            </button>}
          <div className="records__record" />
            {record.length > 0 ? record.map((obj, index) => 
              <Record 
                key={index}
                vet_clinic={obj.vet_clinic}
                vet_name={obj.vet_name}
                date_of_visit={obj.date_of_visit}
                microchip={obj.microchip}
                species={obj.species}
                weight={obj.weight}
                shots={obj.shots}
                misc={obj.misc}
              />
            )
            :
            <h4 style={{...display(emailOpen)}}>
              There are currently no records. Send a request to a vet to
              recieve some.
            </h4>}
        </div>
      </div>;
  }
}
