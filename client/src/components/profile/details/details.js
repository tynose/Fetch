import React, { Component } from 'react';
import './details.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DetailsForm from "./detailsForm/detailsForm";

export default class Details extends Component {
  constructor(props) {
    super(props);

    this.handleClose = this.handleClose.bind(this);

    this.state = {
      detailsFormOpen: false,
    };
  }

  componentDidMount() {
    const init = {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`
      }
    }
    fetch('http://localhost:8080/profile/me', init)
      .then(resp => resp.json())
      .then(data => {
        this.setState({
          userInfo: data,
          isLoading: false
        });
      })
  }

  handleClose() {
    this.setState((prevState) => {
      return { detailsFormOpen: !prevState.detailsFormOpen };
    });
  }

  render() {
    const { detailsFormOpen } = this.state;

    return (
      <div className="details">
        <FontAwesomeIcon className="details__editIcon" onClick={this.handleClose} icon="edit" />
        <img className="details__picture" src="/assets/images/profile-picture.jpg" alt="users animal" />
        <div className="details__content">
          <h3 className="details__name">Tucker</h3>
          <div className="details__text" />
          <div className="details__info">
            <h4 className="details__infoTitle">Age</h4>
            <p className="details__infoText">2</p>
          </div>
          <div className="details__info">
            <h4 className="details__infoTitle">Breed</h4>
            <p className="details__infoText">Golden retriever</p>
          </div>
          <div className="details__info">
            <h4 className="details__infoTitle">Gender</h4>
            <p className="details__infoText">Male</p>
          </div>
          <div className="details__info">
            <h4 className="details__infoTitle">Good boy Status</h4>
            <p className="details__infoText">True</p>
          </div>
          <div className="details__info">
            <h4 className="details__infoTitle">Birthday</h4>
            <p className="details__infoText">May 25, 2017</p>
          </div>
          <div className="details__info">
            <h4 className="details__infoTitle">Owner</h4>
            <p className="details__infoText">Tyler Noseworthy</p>
          </div>
        </div>
        <DetailsForm handleClose={this.handleClose} detailsFormOpen={detailsFormOpen} />
      </div>
    )
  }
}
