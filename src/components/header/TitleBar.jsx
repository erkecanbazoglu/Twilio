import React, { useState } from 'react';
import MegaDropdown from './MegaDropdown';
import MegaDropdownInfo from './MegaDropdownInfo';

function TitleBar(props) {
  const titleList = [
    'products',
    'solutions',
    'developers',
    'services-and-support',
    'pricing',
  ];

  const megaDropdownInfo = MegaDropdownInfo;

  const [titleDropdowns, setShowTitleDropdown] = useState({
    products: false,
    developers: false,
    solutions: false,
    'services-and-support': false,
    pricing: false,
  });
  console.log('titleDropdowns: ' + titleDropdowns);

  const [prevDropdown, setPrevDropdown] = useState('null');

  async function closeDropdownTransition(index) {
    let megaDropdown = document.getElementById(
      titleList[index] + '-megadropdown'
    );
    if (megaDropdown.classList.contains('opacity-100')) {
      megaDropdown.classList.remove('opacity-100');
      megaDropdown.classList.add('opacity-0');
    }
    let headerTitle = document.getElementById('header-title');
    if (headerTitle.classList.contains('border-blue-600')) {
      headerTitle.classList.remove('border-blue-600');
      headerTitle.classList.add('border-white');
    }
    await new Promise(resolve => setTimeout(resolve, 300));
    setShowTitleDropdown(prevValue => {
      return {
        //...prevValue,
        products: false,
        developers: false,
        solutions: false,
        'services-and-support': false,
        pricing: false,
      };
    });
    megaDropdown.classList.add('invisible');
  }

  async function openDropdownTransition(index) {
    setShowTitleDropdown(prevValue => {
      return {
        //...prevValue,
        products: false,
        developers: false,
        solutions: false,
        'services-and-support': false,
        pricing: false,
        [titleList[index]]: !prevValue[titleList[index]],
      };
    });
    let megaDropdown = document.getElementById(
      titleList[index] + '-megadropdown'
    );
    if (megaDropdown.classList.contains('opacity-0')) {
      megaDropdown.classList.remove('opacity-0');
      megaDropdown.classList.remove('invisible');
      megaDropdown.classList.add('opacity-100');
    }
    let headerTitle = document.getElementById('header-title');
    if (headerTitle.classList.contains('border-white')) {
      headerTitle.classList.remove('border-white');
      headerTitle.classList.add('border-blue-600');
    }
  }

  async function handleDropdownClick(index) {
    if (prevDropdown === 'null') {
      await closeDropdownTransition(index);
      openDropdownTransition(index);
      setPrevDropdown(index);
    } else if (prevDropdown === index) {
      closeDropdownTransition(index);
      setPrevDropdown('null');
    } else {
      await closeDropdownTransition(prevDropdown);
      openDropdownTransition(index);
      setPrevDropdown(index);
    }
  }

  return (
    <div
      id="mega-menu-full"
      className="flex justify-between items-center inline-flex"
    >
      <ul className="flex bg-white text-sm font-normal md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <div className="px-6">
          <li
            id="header-title"
            className="border-b-2 border-white relative leading-78px transition ease-in duration-300 "
          >
            <a
              href="/Twilio/#"
              onClick={function () {
                handleDropdownClick(0);
              }}
              className="block text-gray-700 rounded px-6 hover:bg-gray-100 md:hover:bg-transparent hover:text-blue-600 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
              aria-current="page"
            >
              Products
            </a>
            <MegaDropdown
              id={titleList[0] + '-megadropdown'}
              megaDropdownInfo={megaDropdownInfo['0']}
            />
          </li>
        </div>
        <div className="px-6">
          <li
            id="header-title"
            className="border-b-2 border-white relative leading-78px transition ease-in duration-300 "
          >
            <a
              href="/Twilio/#"
              onClick={function () {
                handleDropdownClick(1);
              }}
              className="block text-gray-700 rounded px-6 hover:bg-gray-100 md:hover:bg-transparent hover:text-blue-600 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
              aria-current="page"
            >
              Solutions
            </a>
            <MegaDropdown
              id={titleList[1] + '-megadropdown'}
              megaDropdownInfo={megaDropdownInfo['1']}
            />
          </li>
        </div>
        <div className="px-6">
          <li
            id="header-title"
            className="border-b-2 border-white relative leading-78px transition ease-in duration-300 "
          >
            <a
              href="/Twilio/#"
              onClick={function () {
                handleDropdownClick(2);
              }}
              className="block text-gray-700 rounded px-6 hover:bg-gray-100 md:hover:bg-transparent hover:text-blue-600 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
              aria-current="page"
            >
              Developers
            </a>
            <MegaDropdown
              id={titleList[2] + '-megadropdown'}
              megaDropdownInfo={megaDropdownInfo['2']}
            />
          </li>
        </div>
        <div className="px-6">
          <li
            id="header-title"
            className="border-b-2 border-white relative leading-78px transition ease-in duration-300 "
          >
            <a
              href="/Twilio/#"
              onClick={function () {
                handleDropdownClick(3);
              }}
              className="block text-gray-700 rounded px-6 hover:bg-gray-100 md:hover:bg-transparent hover:text-blue-600 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
              aria-current="page"
            >
              Services & Support
            </a>
            <MegaDropdown
              id={titleList[3] + '-megadropdown'}
              megaDropdownInfo={megaDropdownInfo['3']}
            />
          </li>
        </div>
        <div className="px-6">
          <li
            id="header-title"
            className="border-b-2 border-white relative leading-78px transition ease-in duration-300 "
          >
            <a
              href="/Twilio/#"
              onClick={function () {
                handleDropdownClick(4);
              }}
              className="block text-gray-700 rounded px-6 hover:bg-gray-100 md:hover:bg-transparent hover:text-blue-600 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
              aria-current="page"
            >
              Pricing
            </a>
            <MegaDropdown
              id={titleList[4] + '-megadropdown'}
              megaDropdownInfo={megaDropdownInfo['4']}
            />
          </li>
        </div>
      </ul>
    </div>
  );
}

export default TitleBar;
