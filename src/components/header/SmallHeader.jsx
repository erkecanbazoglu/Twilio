import React, { useState } from 'react';
import LanguageHeaderItem from './LanguageHeaderItem'

function SmallHeader() {

    return (
        <div id="small-header">
            <nav class="bg-gray-100 dark:bg-gray-800 dark:border-gray-700">
                <div class="container flex flex-wrap px-2 py-2.5 mx-auto justify-end">
                    <button data-collapse-toggle="navbar-solid-bg" type="button" class="inline-flex justify-center items-center ml-2 text-gray-400 rounded-lg md:hidden hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 dark:text-gray-400 dark:hover:text-white dark:focus:ring-gray-500" aria-controls="navbar-solid-bg" aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                    </button>
                    <div class="w-min " id="navbar-solid-bg">
                        <ul class="flex flex-col mt-4 bg-gray-50 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
                            <LanguageHeaderItem type={"language"} />
                            <LanguageHeaderItem type={"support"} />
                            <LanguageHeaderItem type={"login"} />
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default SmallHeader;
