import React from 'react';

export default class PopupWithForm extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className={`popup page__${this.props.name}-popup ${this.props.isOpen && "popup_active"}`}  >
        <div className="popup__container">
          <button type="button" className="popup__button-close button" aria-label="Закрыть" onClick={this.props.onClose}></button>
          <form name={`${this.props.name}-form`} className="popup__form">
            <h2 className="popup__title">{this.props.title}</h2>
            {this.props.children}
            <span className="popup__input-error cardLink-error"></span>
            <button type="submit" className="popup__button button">{this.props.buttonText}</button>
          </form>
        </div>
      </div>
    )
  }
}