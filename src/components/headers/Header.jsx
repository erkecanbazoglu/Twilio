import React, { useState } from 'react';
import TitleBar from './TitleBar'
import Logo from './Logo'
import Dropdown from './Dropdown'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import LanguageIcon from '@mui/icons-material/Language';
import { ChevronDownIcon } from '@heroicons/react/solid'

function Header() {

    const [isHeaderDropdown, setShowHeaderDropdown] = useState(false);
    const [isLanguageDropdown, setShowLanguageDropdown] = useState(false);

    function showHeader() {
        setShowHeaderDropdown(!isHeaderDropdown);
    }

    function showLanguageDropdown() {
        setShowLanguageDropdown(!isLanguageDropdown);
    }

    return (
        // Small Header
        <div>
            <div>
                <nav class="bg-gray-100 dark:bg-gray-800 dark:border-gray-700">
                    <div class="container flex flex-wrap px-2 py-2.5 mx-auto justify-end">
                        <button data-collapse-toggle="navbar-solid-bg" type="button" class="inline-flex justify-center items-center ml-2 text-gray-400 rounded-lg md:hidden hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 dark:text-gray-400 dark:hover:text-white dark:focus:ring-gray-500" aria-controls="navbar-solid-bg" aria-expanded="false">
                            <span class="sr-only">Open main menu</span>
                            <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                        </button>
                        <div class="w-min " id="navbar-solid-bg">
                            <ul class="flex flex-col mt-4 bg-gray-50 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
                                <li>
                                    <button id="dropdownNavbarLink" onClick={showLanguageDropdown} data-dropdown-toggle="dropdownNavbar" class="flex justify-between items-center h-full py-2 pr-4 pl-3 w-full font-medium text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">
                                        <LanguageIcon className="pr-0.5 text-blue-900 " fontSize="small" />
                                        <div class="pr-1"></div>
                                        <p class="text-xs text-blue-900 font-semibold" >English</p>
                                        <KeyboardArrowUpIcon className="text-blue-900 transform rotate-180 transition duration-1000" fontSize="small" />
                                    </button>
                                    <Dropdown condition={isLanguageDropdown} />

                                </li>
                                {/* Hero icon implementation */}
                                {/* <li>
                                    <ChevronDownIcon className="h-5 w-5 text-blue-900" />
                                </li> */}
                                <li>
                                    <button id="dropdownNavbarLink" onClick={showLanguageDropdown} data-dropdown-toggle="dropdownNavbar" class="flex justify-between items-center h-full py-2 pr-4 pl-3 w-full font-medium text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">
                                        <p class="text-xs text-blue-900 font-semibold" >Support</p>
                                        <KeyboardArrowUpIcon className="text-blue-900 transform rotate-180 transition duration-1000" fontSize="small" />
                                    </button>
                                    <Dropdown condition={isLanguageDropdown} />

                                </li>
                                <li>
                                    <button class="flex justify-between items-center h-full py-2 pr-4 pl-3 w-full font-medium text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">
                                        <p class="text-xs text-blue-900 font-semibold whitespace-nowrap items-center" >Log in</p>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            {/* Main Header */}
            <div>
                <nav class="bg-white border-gray-200 dark:border-gray-600 dark:bg-gray-900">
                    <div class="container flex flex-wrap justify-between items-center mx-auto px-2 py-2.5">
                        {/* Twilio Logo */}
                        <Logo />
                        {/* Probably the phone version menu */}
                        <button data-collapse-toggle="mega-menu-full" type="button" class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mega-menu-full" aria-expanded="false">
                            <span class="sr-only">Open main menu</span>
                            <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                        </button>
                        {/* The Header */}
                        <TitleBar showDropdown={showHeader} />
                        {/* The last two buttons */}
                        <div>
                            <button type="button" class="text-blue-600 hover:text-white border-2 border-blue-600 hover:bg-blue-600 ring-offset-2 focus:ring-2 focus:outline-none focus:bg-blue-800 focus:ring-blue-600 font-small focus:text-white rounded-md text-sm px-5 py-1.5 text-center mr-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800">Talk to an expert</button>
                            <button type="button" class="text-white bg-blue-600 hover:bg-blue-800 ring-offset-2 focus:ring-2 focus:bg-blue-800 focus:ring-blue-600 font-medium rounded-md text-sm px-5 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Sign up</button>
                        </div>
                    </div>
                    {/* This is the dropdown section */}
                    {isHeaderDropdown && <div id="mega-menu-full-dropdown" class="mt-1 bg-gray-50 border-gray-200 shadow-sm md:bg-white border-y dark:bg-gray-800 dark:border-gray-600">
                        <div class="grid py-5 px-4 mx-auto max-w-screen-xl text-gray-900 dark:text-white sm:grid-cols-2 md:px-6">
                            <ul>
                                <li>
                                    <a href="#" class="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                                        <div class="font-semibold">Online Stores</div>
                                        <span class="text-sm font-light text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                                        <div class="font-semibold">Segmentation</div>
                                        <span class="text-sm font-light text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                                        <div class="font-semibold">Marketing CRM</div>
                                        <span class="text-sm font-light text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
                                    </a>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <a href="#" class="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                                        <div class="font-semibold">Online Stores</div>
                                        <span class="text-sm font-light text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                                        <div class="font-semibold">Segmentation</div>
                                        <span class="text-sm font-light text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                                        <div class="font-semibold">Marketing CRM</div>
                                        <span class="text-sm font-light text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>}
                </nav>
            </div>
        </div>


    );
}

export default Header;
