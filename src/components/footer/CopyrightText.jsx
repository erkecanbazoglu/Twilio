import React from 'react';

function CopyrightText(props) {
  return (
    <p className="text-center text-xs font-medium text-white tracking-wider mt-1">
      {props.text}
    </p>
  );
}

export default CopyrightText;
