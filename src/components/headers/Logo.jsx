import React from 'react';
import logo from '../../images/twilio.png';


function Logo(props) {
    return (
        <a href="/" class="flex items-center">
            <img src={logo} alt="Twilio" width="100" height="25" />
        </a>
    );
}

export default Logo;
