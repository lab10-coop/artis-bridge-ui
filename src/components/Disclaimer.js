import React from 'react'
import disclaimerIcon from '../assets/images/disclaimer@2x.png'

export const Disclaimer = ({ onConfirmation }) => (
  <div className="disclaimer-alert">
    <div className="image-container">
      <img className="disclaimer-icon" src={disclaimerIcon} alt="disclaimer icon"/>
    </div>
    <div className="alert-container">
      <span className="disclaimer-title">Welcome to  <br/>  ARTIS Bridge DApp (Beta)</span>
      <p className="disclaimer-description">
      The ARTIS Bridge DApp is built to allow a convenient and fast way to transfer assets between blockchains.
      The development effort is led by POA Network and is currently in beta-testing status and you can find
      further information about this implementation on the&nbsp;
      <a href="https://github.com/poanetwork/token-bridge" target="_blank" rel="noopener noreferrer">POA Github</a>
      . ARTIS Bridge specific changes can be found on the&nbsp; 
      <a  href="https://github.com/lab10-coop/" target="_blank" rel="noopener noreferrer">lab10 collective Github</a>
      .<br /><br />
      Use of this app and the ARTIS Bridge is at your own risk. 
      Users may experience unexpected delays, unexpected visual artifacts, unexpected loss of tokens or funds
      from improper app configuration, or other negative outcomes.
      <br/><br />
      By hitting the “continue” button, 
      you are representing that you’ve read our 
      <a href="https://wiki.lab10.io/display/artisP/ARTIS+Bridge+Legal+Disclaimer" target="_blank" rel="noopener noreferrer"> Terms of Service</a> in full, and that you agree to be legally bound by them.
      </p>

      <div className="disclaimer-buttons">
        <button
          className="disclaimer-confirm"
          onClick={onConfirmation}>
          Continue
        </button>
      </div>
    </div>
  </div>
)
