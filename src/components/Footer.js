import React from 'react';

export default function Footer() {
  return (
    <footer className="footer page__section ">
      <p className="footer__copyright">{`© ${new Date().getFullYear()} Mesto Russia`}</p>
    </footer>
  )
}