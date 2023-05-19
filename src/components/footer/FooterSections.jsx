import React from 'react';
import FooterSectionItem from './FooterSectionItem';

function FooterSections(props) {
  const footerList = props.footerList;

  function createListItems(footerItem, index) {
    return <FooterSectionItem key={index} title={footerItem} />;
  }

  return (
    <div className="px-4 sm:px-0 sm:w-1/3 md:w-auto mt-20">
      <h5 className="uppercase text-xs text-white font-semibold tracking-wide">
        {props.title}
      </h5>
      <ul className="mt-4 text-sm font-medium">
        {footerList.map(createListItems)}
      </ul>
    </div>
  );
}

export default FooterSections;
