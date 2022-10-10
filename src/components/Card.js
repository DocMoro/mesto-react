import React from "react";

export default class Card extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onCardClick(this.props.card);
  }

  render() {
    return (
      <li className="card">
        <img className="card__image" src={this.props.card.link} alt={this.props.card.name} onClick={this.handleClick}/>
        <div className="card__group">
          <h2 className="card__title">{this.props.card.name}</h2>
          <div className="card__like">
            <button type="button" className="card__button button" aria-label="Мне нравится"></button>
            <p className="card__counter-like">{this.props.card.likes.length}</p>
          </div>
        </div>
      </li>
    )
  }
}