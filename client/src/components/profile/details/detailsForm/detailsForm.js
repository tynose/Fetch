import React, { Component } from 'react';
import './detailsForm.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class DetailsForm extends Component {
  render() {

    const { detailsFormOpen, handleClose } = this.props;
   
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
            <div className="detailsForm__content">
              <h3 className="detailsForm__name">Tucker</h3>
              <div className="detailsForm__text" />
              <div className="detailsForm__info">
                <h4 className="detailsForm__infoTitle">Age:</h4>
                <p className="detailsForm__infoText">2</p>
              </div>
              <div className="detailsForm__info">
                <h4 className="detailsForm__infoTitle">Breed:</h4>
                <p className="detailsForm__infoText">Golden retriever</p>
              </div>
              <div className="detailsForm__info">
                <h4 className="detailsForm__infoTitle">Gender:</h4>
                <p className="detailsForm__infoText">Male</p>
              </div>
              <div className="detailsForm__info">
                <h4 className="detailsForm__infoTitle">Good boy Status:</h4>
                <p className="detailsForm__infoText">True</p>
              </div>
              <div className="detailsForm__info">
                <h4 className="detailsForm__infoTitle">Birthday:</h4>
                <p className="detailsForm__infoText">May 25, 2017</p>
              </div>
              <div className="detailsForm__info">
                <h4 className="detailsForm__infoTitle">Owner:</h4>
                <p className="detailsForm__infoText">Tyler Noseworthy</p>
              </div>
            </div>
          </div>
        </div>
      </div>;
  }
}