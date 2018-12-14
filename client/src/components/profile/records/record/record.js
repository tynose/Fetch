import React, { Component } from 'react';
import './record.scss';

export default class record extends Component {
  render() {
    return <div className="record">
        <div className="record__content">
          <div className="record__text" />
          <div className="record__info">
            <h4 className="record__infoTitle">Vet Clinic</h4>
            <p className="record__infoText">{this.props.vet_clinic}</p>
          </div>
          <div className="record__info">
            <h4 className="record__infoTitle">Vet Name</h4>
            <p className="record__infoText">{this.props.vet_name}</p>
          </div>
          <div className="record__info">
            <h4 className="record__infoTitle">Date of Visit</h4>
          <p className="record__infoText">{this.props.date_of_visit}</p>
          </div>
          <div className="record__info">
            <h4 className="record__infoTitle">MicroChip</h4>
          <p className="record__infoText">{this.props.microchip}</p>
          </div>
          <div className="record__info">
            <h4 className="record__infoTitle">Species</h4>
          <p className="record__infoText">{this.props.species}</p>
          </div>
          <div className="record__info">
            <h4 className="record__infoTitle">Weight</h4>
          <p className="record__infoText">{this.props.weight}</p>
          </div>
          <div className="record__info">
            <h4 className="record__infoTitle">Shots</h4>
          <p className="record__infoText">{this.props.shots}</p>
          </div>
          <div className="record__info">
            <h4 className="record__infoTitle">Misc</h4>
          <p className="record__infoText">{this.props.misc}</p>
          </div>
        </div>
      </div>;
  }
}
