import React, { useState } from 'react';
import Title from './Title'
import MegaDropdown from './MegaDropdown'
import ProductsDropdown from './MegaDropdowns/ProductsDropdown'
import SolutionsDropdown from './MegaDropdowns/SolutionsDropdown'
import DevelopersDropdown from './MegaDropdowns/DevelopersDropdown'
import ServicesAndSupportDropdown from './MegaDropdowns/ServicesAndSupportDropdown'
import PricingDropdown from './MegaDropdowns/PricingDropdown'


function TitleBar(props) {

    const titleList = ["Products", "Solutions", "Developers", "Services & Support", "Pricing"];

    const [titleDropdowns, setShowTitleDropdown] = useState({
        "Products": false,
        "Developers": false,
        "Solutions": false,
        "Services & Support": false,
        "Pricing": false,
    });

    const [prevDropdown, setPrevDropdown] = useState("null");

    async function closeDropdownTransition(index) {
        let megaDropdown = document.getElementById("mega-dropdown");
        if (megaDropdown.classList.contains("opacity-100")) {
            megaDropdown.classList.remove("opacity-100");
            megaDropdown.classList.add("opacity-0");
        }
        let headerTitle = document.getElementById("header-title");
        if (headerTitle.classList.contains("border-blue-600")) {
            headerTitle.classList.remove("border-blue-600");
            headerTitle.classList.add("border-white");
        }
        await new Promise(resolve => setTimeout(resolve, 300));
        setShowTitleDropdown(
            prevValue => {
                return {
                    //...prevValue,
                    "Products": false,
                    "Developers": false,
                    "Solutions": false,
                    "Services & Support": false,
                    "Pricing": false,
                    [titleList[index]]: !prevValue[titleList[index]]
                };
            }
        );
    }

    async function openDropdownTransition(index) {
        setShowTitleDropdown(
            prevValue => {
                return {
                    //...prevValue,
                    "Products": false,
                    "Developers": false,
                    "Solutions": false,
                    "Services & Support": false,
                    "Pricing": false,
                    [titleList[index]]: !prevValue[titleList[index]]
                };
            }
        );
        let megaDropdown = document.getElementById("mega-dropdown");
        if (megaDropdown.classList.contains("opacity-0")) {
            megaDropdown.classList.remove("opacity-0");
            megaDropdown.classList.add("opacity-100");
        }
        let headerTitle = document.getElementById("header-title");
        if (headerTitle.classList.contains("border-white")) {
            headerTitle.classList.remove("border-white");
            headerTitle.classList.add("border-blue-600");
        }
    }

    async function handleDropdownClick(index) {
        console.log(prevDropdown);
        if (prevDropdown === "null") {
            openDropdownTransition(index);
            console.log(prevDropdown);
            setPrevDropdown(titleList[index]);
            console.log(prevDropdown);
        } else if (prevDropdown === titleList[index]) {
            closeDropdownTransition(index);
            setPrevDropdown("null");
            console.log(prevDropdown);
        } else {
            await closeDropdownTransition(index);
            openDropdownTransition(index);
            setPrevDropdown(titleList[index]);
        }
    }

    // function createTitles(title, index) {
    //     return (<Title key={index} id={index} onClick={handleDropdownClick} showDropdown={titleDropdowns[titleList[index]]} title={title} />
    //     );
    // }

    return (
        <div id="mega-menu-full" class="flex justify-between items-center inline-flex">
            <ul class="flex bg-white text-sm font-normal md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <div class="px-6">
                    <li id="header-title" class="border-b-2 border-white relative leading-78px transition ease-in duration-300 ">
                        <a href="#" onClick={handleDropdownClick} class="block text-gray-700 rounded px-6 hover:bg-gray-100 md:hover:bg-transparent hover:text-blue-600 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">
                            Products</a>
                        <MegaDropdown />
                    </li>
                </div>
                <div class="px-6">
                    <li id="header-title" class="border-b-2 border-white relative leading-78px transition ease-in duration-300 ">
                        <a href="#" onClick={function () {
                            handleDropdownClick(1);
                        }} class="block text-gray-700 rounded px-6 hover:bg-gray-100 md:hover:bg-transparent hover:text-blue-600 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">
                            Solutions</a>
                        <SolutionsDropdown />
                    </li>
                </div>
                <div class="px-6">
                    <li id="header-title" class="border-b-2 border-white relative leading-78px transition ease-in duration-300 ">
                        <a href="#" onClick={function () {
                            handleDropdownClick(2);
                        }} class="block text-gray-700 rounded px-6 hover:bg-gray-100 md:hover:bg-transparent hover:text-blue-600 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">
                            Developers</a>
                        <DevelopersDropdown />
                    </li>
                </div>
                <div class="px-6">
                    <li id="header-title" class="border-b-2 border-white relative leading-78px transition ease-in duration-300 ">
                        <a href="#" onClick={function () {
                            handleDropdownClick(3);
                        }} class="block text-gray-700 rounded px-6 hover:bg-gray-100 md:hover:bg-transparent hover:text-blue-600 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">
                            Services & Support</a>
                        <ServicesAndSupportDropdown />
                    </li>
                </div>
                <div class="px-6">
                    <li id="header-title" class="border-b-2 border-white relative leading-78px transition ease-in duration-300 ">
                        <a href="#" onClick={function () {
                            handleDropdownClick(4);
                        }} class="block text-gray-700 rounded px-6 hover:bg-gray-100 md:hover:bg-transparent hover:text-blue-600 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">
                            Pricing</a>
                        <PricingDropdown />
                    </li>
                </div>
            </ul>
        </div>
    );
}

export default TitleBar;
