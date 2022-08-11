import React, { useState } from 'react';
import Dropdown from './Dropdown'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import LanguageIcon from '@mui/icons-material/Language';
import { ChevronDownIcon } from '@heroicons/react/solid'


function LanguageHeaderItem(props) {

    const [isLanguageDropdown, setLanguageDropdown] = useState(false);
    const [isSupportDropdown, setSupportDropdown] = useState(false);

    function showLanguageDropdown() {
        setLanguageDropdown(!isLanguageDropdown);
    }

    function showSupportDropdown() {
        setSupportDropdown(!isSupportDropdown);
    }

    return (
        <li>
            <button id="dropdownNavbarLink" onClick={props.type == "language" ? showLanguageDropdown : props.type == "support" ? showSupportDropdown : props.type == "login" ? null : null} data-dropdown-toggle="dropdownNavbar" class="flex justify-between items-center h-full py-2 pr-4 pl-3 w-full font-medium text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">
                {props.type == "language" && <LanguageIcon className="pr-0.5 text-blue-900 " fontSize="small" />}
                <div class="pr-1"></div>
                <p class="text-xs text-blue-900 font-semibold whitespace-nowrap items-center" >{props.type == "language" ? "English" : props.type == "support" ? "Support" : props.type == "login" ? "Log in" : null}</p>
                {(props.type == "language" || props.type == "support") && <KeyboardArrowUpIcon className="text-blue-900 transform rotate-180 transition duration-1000" fontSize="small" />}
            </button>
            {props.type == "language" ? <Dropdown condition={isLanguageDropdown} /> : props.type == "support" ? <Dropdown condition={isSupportDropdown} /> : null}
        </li>
    );
}

{/* Hero icon implementation */ }
{/* <li>
                                    <ChevronDownIcon className="h-5 w-5 text-blue-900" />
                                </li> */}

export default LanguageHeaderItem;
