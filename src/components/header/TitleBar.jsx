import React, { useState } from 'react';
import Title from './Title'


function TitleBar(props) {

    const titleList = ["Products", "Developers", "Solutions", "Services & Support", "Pricing"];

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

    function createTitles(title, index) {
        return (<Title key={index} id={index} onClick={handleDropdownClick} showDropdown={titleDropdowns[titleList[index]]} title={title} />
        );
    }

    return (
        <div id="mega-menu-full" class="flex justify-between items-center inline-flex">
            <ul class="flex bg-white text-sm font-normal md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                {titleList.map(createTitles)}
            </ul>
        </div>
    );
}

export default TitleBar;
