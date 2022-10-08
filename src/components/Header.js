import logo from '../images/logo.svg';
import React from 'react';

export default class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <img className="header__logo" src={logo} alt="Логотип место" />
      </header>
    )
  }
}