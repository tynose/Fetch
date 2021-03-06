import React, { Component } from 'react';
import './details.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DetailsForm from './detailsForm/detailsForm';

export default class Details extends Component {
  constructor(props) {
    super(props);

    this.handleClose = this.handleClose.bind(this);

    this.state = {
      detailsFormOpen: false
    };
  }

  componentDidMount() {
    const init = {
      method: 'GET',
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`
      }
    };
    fetch('/profile/me', init)
      .then(resp => resp.json())
      .then(data => {
        this.setState({
          userInfo: data,
          isLoading: false
        });
      });
  }

  handleClose() {
    this.setState(prevState => {
      return { detailsFormOpen: !prevState.detailsFormOpen };
    });
  }

  render() {
    const { detailsFormOpen } = this.state;
    const { details } = this.props;

    return (
      <div className="details">
        <FontAwesomeIcon
          className="details__editIcon"
          onClick={this.handleClose}
          icon="edit"
        />
        <label for="profilePicture" className="details__pictureLabel">
          {!details ?
            <img
              className="details__pictureIcon"
              src="/assets/images/profile-picture.svg"
              alt="users animal"
            /> :
            <img
              className="details__picture"
              src="/assets/images/profile-picture.jpg"
              alt="users animal"
            /> 
           } 
        </label>
        <input id="profilePicture" className="details__pictureInput" type="file" />
        {details ? (
          <div className="details__content">
            <h3 className="details__name">{details.name}</h3>
            <div className="details__text" />
            <div className="details__info">
              <h4 className="details__infoTitle">Age</h4>
              <p className="details__infoText">{details.age}</p>
            </div>
            <div className="details__info">
              <h4 className="details__infoTitle">Breed</h4>
              <p className="details__infoText">{details.breed}</p>
            </div>
            <div className="details__info">
              <h4 className="details__infoTitle">Sex</h4>
              <p className="details__infoText">{details.gender}</p>
            </div>
            <div className="details__info">
              <h4 className="details__infoTitle">Birthday</h4>
              <p className="details__infoText">{details.date_of_birth}</p>
            </div>
            <div className="details__info">
              <h4 className="details__infoTitle">Owner</h4>
              <p className="details__infoText">{details.owner}</p>
            </div>
          </div>
        ) : (
          <div className="details__content">
            <h4 className="details__name">Add some details</h4>
            <div className="details__text" />
            <div className="details__info">
              <h4 className="details__infoTitle">Age</h4>
              <p className="details__infoText" />
            </div>
            <div className="details__info">
              <h4 className="details__infoTitle">Breed</h4>
              <p className="details__infoText" />
            </div>
            <div className="details__info">
              <h4 className="details__infoTitle">Gender</h4>
              <p className="details__infoText" />
            </div>
            <div className="details__info">
              <h4 className="details__infoTitle">Birthday</h4>
              <p className="details__infoText" />
            </div>
            <div className="details__info">
              <h4 className="details__infoTitle">Owner</h4>
              <p className="details__infoText" />
            </div>
          </div>
        )}
        <DetailsForm
          handleClose={this.handleClose}
          {...this.props}
          getData={this.props.getData}
          detailsFormOpen={detailsFormOpen}
        />
      </div>
    );
  }
}
