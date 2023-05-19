import React from 'react';
import logo from '../../images/twilio.png';

function Logo(props) {
  return (
    <div className="flex-1 box-border">
      <a href="/Twilio/" className="flex box-border items-center">
        <img src={logo} alt="Twilio" width="100" height="25" />
      </a>
    </div>
  );
}

export default Logo;
