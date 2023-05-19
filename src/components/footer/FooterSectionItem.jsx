import React from 'react';

function FooterSectionItem(props) {
  return (
    <li className="mt-3">
      <a
        className="text-tiny text-gray-300 font-light tracking-wide hover:text-white border-b-2 border-transparent pb-1 transition duration-300"
        href="/#"
      >
        {props.title}
      </a>
    </li>
  );
}

export default FooterSectionItem;
