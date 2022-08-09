import React from 'react';
import DropdownListItem from './DropdownListItem'


function Dropdown(props) {
    return (
        <div>
            {props.condition && <div class="z-50 absolute top-5px border-1 border-gray-200 my-4 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700" id="language-dropdown-menu">
                <ul role="none">
                    <DropdownListItem text={"English"} />
                    <DropdownListItem text={"Deutsch"} />
                    <DropdownListItem text={"Français"} />
                    <DropdownListItem text={"Português"} />
                    <DropdownListItem text={"Español"} />
                </ul>
            </div>}
        </div>
    );
}

export default Dropdown;
