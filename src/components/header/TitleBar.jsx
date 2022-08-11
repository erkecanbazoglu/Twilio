import React from 'react';
import Title from './Title'


function TitleBar(props) {
    return (
        <div id="mega-menu-full" class="hidden justify-between items-center md:flex md:w-auto">
            <ul class="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 text-sm font-normal md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <Title showDropdown={props.showDropdown} title={"Products"} />
                <Title showDropdown={props.showDropdown} title={"Developers"} />
                <Title showDropdown={props.showDropdown} title={"Solutions"} />
                <Title showDropdown={props.showDropdown} title={"Services & Support"} />
                <Title showDropdown={props.showDropdown} title={"Pricing"} />
            </ul>
        </div>
    );
}

export default TitleBar;
