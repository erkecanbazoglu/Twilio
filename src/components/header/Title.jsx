import React from 'react';
import MegaDropdown from './MegaDropdown';

// THIS FILE IS NOT BEING USED

function Title(props) {
  function handleDropdownClick(index) {
    props.onClick(index);
  }

  return (
    <div
      id="mega-menu-full"
      className="flex justify-between items-center inline-flex"
    >
      <ul className="flex bg-white text-sm font-normal md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <div className="px-6">
          <li
            id="header-title"
            className="border-b-2 border-white relative leading-78px transition ease-in duration-300 "
          >
            <a
              href="/#"
              onClick={handleDropdownClick}
              className="block text-gray-700 rounded px-6 hover:bg-gray-100 md:hover:bg-transparent hover:text-blue-600 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
              aria-current="page"
            >
              {props.title}
            </a>
            <MegaDropdown />
          </li>
        </div>
      </ul>
    </div>
  );
}

export default Title;
