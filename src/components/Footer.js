import React from 'react';

export const Footer = () => (
  <footer className="footer">
    <div className="container">
      <p className="footer-rights">2018 POA &amp; lab10. All rights reserved.</p>
      <a href="/"><i className="footer-logo" /></a>
      <a href="/" className="footer-app-name"  style={{textDecoration: 'none'}}>Bridge UI App</a>
      <div className="socials">
        <a href="https://t.me/joinchat/JEYz2EsBddOZr1pXVkpK8g" target="_blank" className="socials-item" rel="noopener noreferrer"><i className="socials-i socials-i_telegram" /></a>
        <a href="https://medium.com/lab10-collective" target="_blank" className="socials-item" rel="noopener noreferrer"><i className="socials-i socials-i_medium" /></a>
        <a href="https://github.com/lab10-coop/" target="_blank" className="socials-item" rel="noopener noreferrer"><i className="socials-i socials-i_github" /></a>
        <a href="https://www.linkedin.com/company/lab10-coop/" target="_blank" className="socials-item" rel="noopener noreferrer"><i className="socials-i socials-i_linkedin" /></a>
        <a href="https://twitter.com/poanetwork" target="_blank" className="socials-item" rel="noopener noreferrer"><i className="socials-i socials-i_twitter" /></a>
      </div>
    </div>
  </footer>
);
