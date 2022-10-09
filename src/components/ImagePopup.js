import React from "react";

export default class ImagePopup extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={`popup popup_card page__card-popup ${this.props.card && "popup_active"}`}>
        <div className="popup__card-container">
          <button type="button" className="popup__button-close button" aria-label="Закрыть" onClick={this.props.onClose}></button>
          <img className="popup__image" src={this.props.card.link} alt={this.props.card.name} />
          <h2 className="popup__subtitle">{this.props.card.name}</h2>
        </div>
      </div>
    )
  }
}