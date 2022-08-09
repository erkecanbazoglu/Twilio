import React from 'react';


function Title(props) {
    return (
        <button onClick={props.showDropdown} >
            <li>
                <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent hover:text-blue-600 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">{props.title}</a>
            </li>
        </button>
    );
}

export default Title;
