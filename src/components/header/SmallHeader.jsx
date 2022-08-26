import React, { useState } from 'react';
import DropdownListItem from './DropdownListItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import LanguageIcon from '@mui/icons-material/Language';
import PhoneIcon from '@mui/icons-material/Phone';
import { ChevronDownIcon } from '@heroicons/react/solid';

function SmallHeader() {
  const [isLanguageDropdown, setLanguageDropdown] = useState(false);
  const [isSupportDropdown, setSupportDropdown] = useState(false);

  const languageList = [
    'English',
    'Deutsch',
    'Français',
    'Português',
    'Español',
  ];
  const supportList = [
    'Help Center',
    'Talk to Support',
    'Training',
    'Support Plans',
    'Partner Solutions',
  ];

  function showLanguageDropdown() {
    setLanguageDropdown(!isLanguageDropdown);
  }

  function showSupportDropdown() {
    setSupportDropdown(!isSupportDropdown);
  }

  return (
    <div id="small-header">
      <nav class="bg-gray-100 dark:bg-gray-800 dark:border-gray-700">
        <div class="container flex flex-wrap px-2 py-2.5 mx-auto justify-end">
          <button
            data-collapse-toggle="navbar-solid-bg"
            type="button"
            class="inline-flex justify-center items-center ml-2 text-gray-400 rounded-lg md:hidden hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 dark:text-gray-400 dark:hover:text-white dark:focus:ring-gray-500"
            aria-controls="navbar-solid-bg"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <div class="w-min " id="navbar-solid-bg">
            <ul class="flex flex-col mt-4 bg-gray-50 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
              <li>
                <button
                  id="dropdownNavbarLink"
                  onClick={showLanguageDropdown}
                  data-dropdown-toggle="dropdownNavbar"
                  class="flex justify-between items-center h-full py-2 pr-4 pl-3 w-full font-medium text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                >
                  <LanguageIcon
                    className="pr-0.5 text-blue-900 "
                    fontSize="small"
                  />
                  <div class="pr-1"></div>
                  <p class="text-xs text-blue-900 font-semibold whitespace-nowrap items-center">
                    English
                  </p>
                  <KeyboardArrowUpIcon
                    className="text-blue-900 transform rotate-180 transition duration-1000"
                    fontSize="small"
                  />
                </button>
                {isLanguageDropdown && (
                  <div class="z-50 absolute top-5px border-1 border-gray-200 my-4 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
                    <ul role="none">
                      <DropdownListItem text={'English'} />
                      <DropdownListItem text={'Deutsch'} />
                      <DropdownListItem text={'Français'} />
                      <DropdownListItem text={'Português'} />
                      <DropdownListItem text={'Español'} />
                    </ul>
                  </div>
                )}
              </li>
              <li>
                <button
                  id="dropdownNavbarLink"
                  onClick={function () {
                    console.log('telephone clicked');
                  }}
                  data-dropdown-toggle="dropdownNavbar"
                  class="flex justify-between items-center h-full py-2 pr-4 pl-3 w-full font-medium text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                >
                  <PhoneIcon
                    className="pr-0.5 text-blue-900 "
                    fontSize="extra-small"
                  />
                  <div class="pr-1"></div>
                  <p class="text-2xs text-blue-900 font-semibold tracking-widest whitespace-nowrap items-center">
                    +353 1 592 1002
                  </p>
                </button>
              </li>
              <li>
                <button
                  id="dropdownNavbarLink"
                  onClick={showSupportDropdown}
                  data-dropdown-toggle="dropdownNavbar"
                  class="flex justify-between items-center h-full py-2 pr-4 pl-3 w-full font-medium text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                >
                  <p class="text-xs text-blue-900 font-semibold whitespace-nowrap items-center">
                    Support
                  </p>
                  <KeyboardArrowUpIcon
                    className="text-blue-900 transform rotate-180 transition duration-1000"
                    fontSize="small"
                  />
                </button>
                {isSupportDropdown && (
                  <div class="z-50 absolute top-5px border-1 border-gray-200 my-4 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
                    <ul role="none" class="py-2">
                      <DropdownListItem text={'Help Center'} />
                      <DropdownListItem text={'Talk to Support'} />
                      <DropdownListItem text={'Training'} />
                      <hr class="my-2"></hr>
                      <DropdownListItem text={'Support Plans'} />
                      <DropdownListItem text={'Partner Solutions'} />
                    </ul>
                  </div>
                )}
              </li>
              <li>
                <button
                  id="dropdownNavbarLink"
                  onClick={function () {
                    console.log('login clicked');
                  }}
                  data-dropdown-toggle="dropdownNavbar"
                  class="flex justify-between items-center h-full py-2 pr-4 pl-3 w-full font-medium text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                >
                  <p class="text-xs text-blue-900 font-semibold whitespace-nowrap items-center">
                    Log in
                  </p>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );

  {
    /* Hero icon implementation */
  }
  {
    /* <li>
                                        <ChevronDownIcon className="h-5 w-5 text-blue-900" />
                                    </li> */
  }
}

export default SmallHeader;
