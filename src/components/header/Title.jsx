import React from 'react';
import MegaDropdown from './MegaDropdown'


function Title(props) {

    function handleDropdownClick() {
        props.onClick(props.id);
    }

    return (
        <div class="px-6">
            <li id="header-title" class="border-b-2 border-white relative leading-78px transition ease-in duration-300 ">
                <a href="#" onClick={handleDropdownClick} class="block text-gray-700 rounded px-6 hover:bg-gray-100 md:hover:bg-transparent hover:text-blue-600 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">{props.title}</a>
                <MegaDropdown condition={props.showDropdown} />
            </li>
        </div>
    );
}

export default Title;
