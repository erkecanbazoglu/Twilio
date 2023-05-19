import React from 'react';

function DropdownListItem(props) {
  return (
    <li>
      <a
        href="/#"
        className="block py-2 px-4 text-tiny font-light text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
        role="menuitem"
      >
        <div className="inline-flex items-center">{props.text}</div>
      </a>
    </li>
  );
}

export default DropdownListItem;
