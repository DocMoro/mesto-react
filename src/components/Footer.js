import React from 'react';

export default class Footer extends React.Component {
  render() {
    return (
      <footer className="footer page__section ">
        <p className="footer__copyright">{`© ${new Date().getFullYear()} Mesto Russia`}</p>
      </footer>
    )
  }
}