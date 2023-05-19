import React from 'react';

function LegalButton(props) {
  function click() {
    console.log('clicked to ' + props.text);
  }

  return (
    <button onClick={click}>
      <div className="flex flex-row">
        <p className="text-center text-xs font-medium text-white tracking-wider mt-1 px-2 hover:text-gray-400">
          {props.text}
        </p>
        <p className="text-center text-xs font-medium text-white tracking-wider mt-1 hover:text-gray-400">
          {props.text !== 'JOBS' && '|'}
        </p>
      </div>
    </button>
  );
}

export default LegalButton;
