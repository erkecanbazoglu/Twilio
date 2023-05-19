import React from 'react';

function HeaderButtons(props) {
  return (
    <div className="flex-1 grow shrink box-border static top-16 right-3 self-center text-right">
      <button
        type="button"
        className="text-blue-600 hover:text-white border-2 border-blue-600 hover:bg-blue-600 ring-offset-2 focus:ring-2 focus:outline-none focus:bg-blue-800 focus:ring-blue-600 font-small focus:text-white rounded-md text-sm px-5 py-1.5 text-center mr-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800"
      >
        Talk to an expert
      </button>
      <button
        type="button"
        className="text-white bg-blue-600 hover:bg-blue-800 ring-offset-2 focus:ring-2 focus:bg-blue-800 focus:ring-blue-600 font-medium rounded-md text-sm px-5 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        Sign up
      </button>
    </div>
  );
}

export default HeaderButtons;
