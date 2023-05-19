import React from 'react';
import DropdownListItem from './DropdownListItem';

function Dropdown(props) {
  function createDropdownListItems(item, index) {
    return <DropdownListItem key={index} text={item} />;
  }

  return (
    <div>
      {props.condition && (
        <div className="z-50 absolute top-5px border-1 border-gray-200 my-4 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
          <ul role="none">{props.list.map(createDropdownListItems)}</ul>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
