import React, { useState } from 'react';
import FooterSectionItem from "./FooterSectionItem";

function FooterSections(props) {

    const footerList = props.footerList;

    function createListItems(footerItem) {
        return (
            <FooterSectionItem title={footerItem} />
        );
    }

    return (
        <div class="px-4 sm:px-0 sm:w-1/3 md:w-auto mt-20">
            <h5 class="uppercase text-xs text-white font-semibold tracking-wide">{props.title}</h5>
            <ul class="mt-4 text-sm font-medium">
                {footerList.map(createListItems)}
            </ul>
        </div>
    );
}

export default FooterSections;
