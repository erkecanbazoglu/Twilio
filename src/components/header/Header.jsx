import React, { useState } from 'react';
import TitleBar from './TitleBar';
import Logo from './Logo';
import SmallHeader from './SmallHeader';
import HeaderButtons from './HeaderButtons';

function Header() {
  let header;

  window.onscroll = function () {
    if (window.pageYOffset > 40) {
      header = document.getElementById('header');
      header.classList.remove('translate-y-0');
      header.classList.add('translate-y-[-40px]');
    } else {
      header.classList.remove('translate-y-[-40px]');
      header.classList.add('translate-y-0');
    }
  };

  return (
    <div id="header" class="sticky top-0 transition duration-300 ease-out z-50">
      <SmallHeader />
      {/* Main Header */}
      <div id="main-header">
        <div id="main-header" class="">
          <nav class="bg-white border-gray-200 dark:border-gray-600 dark:bg-gray-900">
            <div class="container flex items-center justify-between mx-auto">
              {/* Twilio Logo */}
              <Logo />
              {/* Probably the phone version menu */}
              <button
                data-collapse-toggle="mega-menu-full"
                type="button"
                class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="mega-menu-full"
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
              {/* The Header */}
              <TitleBar />
              {/* The last two header buttons */}
              <HeaderButtons />
            </div>
            {/* This is the dropdown section */}
            {false && (
              <div
                id="mega-menu-full-dropdown"
                class="mt-1 bg-gray-50 border-gray-200 shadow-sm md:bg-white border-y dark:bg-gray-800 dark:border-gray-600"
              >
                <div class="grid py-5 px-4 mx-auto max-w-screen-xl text-gray-900 dark:text-white sm:grid-cols-2 md:px-6">
                  <ul>
                    <li>
                      <a
                        href="#"
                        class="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        <div class="font-semibold">Online Stores</div>
                        <span class="text-sm font-light text-gray-500 dark:text-gray-400">
                          Connect with third-party tools that you're already
                          using.
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        <div class="font-semibold">Segmentation</div>
                        <span class="text-sm font-light text-gray-500 dark:text-gray-400">
                          Connect with third-party tools that you're already
                          using.
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        <div class="font-semibold">Marketing CRM</div>
                        <span class="text-sm font-light text-gray-500 dark:text-gray-400">
                          Connect with third-party tools that you're already
                          using.
                        </span>
                      </a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a
                        href="#"
                        class="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        <div class="font-semibold">Online Stores</div>
                        <span class="text-sm font-light text-gray-500 dark:text-gray-400">
                          Connect with third-party tools that you're already
                          using.
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        <div class="font-semibold">Segmentation</div>
                        <span class="text-sm font-light text-gray-500 dark:text-gray-400">
                          Connect with third-party tools that you're already
                          using.
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        <div class="font-semibold">Marketing CRM</div>
                        <span class="text-sm font-light text-gray-500 dark:text-gray-400">
                          Connect with third-party tools that you're already
                          using.
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Header;
