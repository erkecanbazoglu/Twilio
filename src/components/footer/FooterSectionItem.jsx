import React, { useState } from 'react';

function FooterSectionItem(props) {

    return (
        <li class="mt-3">
            <a class="text-tiny text-gray-300 font-light tracking-wide hover:text-white border-b-2 border-transparent pb-1 transition duration-300" href="#">{props.title}</a>
        </li>
    );
}

export default FooterSectionItem;
