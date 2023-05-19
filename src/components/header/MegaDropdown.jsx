import React from 'react';

function MegaDropdown(props) {
  const { isBlueArea, blueArea, isWhiteArea, whiteArea, isGrayArea, grayArea } =
    props.megaDropdownInfo;

  function createBottomLinks(bottomLink, index, color) {
    return (
      <a
        key={index}
        className="text-xs text-blue-600 text-left font-light underline leading-5 inline-block after:px-2 after:content-['→'] after:text-gray-900 after:inline-block"
        href="/Twilio/messaging/sms"
        title="SMS"
      >
        {bottomLink}
      </a>
    );
  }

  function createSubtitles(subtitleItem, index, color) {
    const {
      containsLogo,
      logoInfo,
      subtitle,
      subTitleInfo,
      containsFollowupIcon,
      followupIconInfo,
      containsBottomLinks,
      bottomLinksInfo,
    } = subtitleItem;

    return (
      <li className="my-6">
        <a
          className="flex flex-row items-start leading-6"
          href="/Twilio/messaging"
        >
          {containsLogo && logoInfo}
          <div>
            <div className="flex flex-row pb-1 text-base font-normal justifyt-start items-start hover:text-blue-600 hover:underline">
              {subtitle}
              {containsFollowupIcon && followupIconInfo}
            </div>
            <p className="text-xs text-gray-900 font-light leading-5">
              {subTitleInfo}
            </p>
            {containsBottomLinks && (
              <div className="ml-0">
                {bottomLinksInfo.map(function (item, index) {
                  return createBottomLinks(item, index, color);
                })}
              </div>
            )}
          </div>
        </a>
      </li>
    );
  }

  function createDropdownSections(sectionItem, index, color) {
    const {
      title,
      containsTitleLogo,
      titleLogoInfo,
      containsBottomButton,
      bottomButtonInfo,
      subTitles,
    } = sectionItem;

    return (
      <div className="py-10 pl-12 pr-8 ">
        <header className="flex flex-row mb-8 pb-4 w-64 border-b-1 border-gray-200 text-tiny font-bold inline-block">
          {containsTitleLogo && titleLogoInfo}
          {title}
        </header>
        <ul className="w-64 ">
          {subTitles.map(function (item, index) {
            return createSubtitles(item, index, color);
          })}
        </ul>
        {containsBottomButton && bottomButtonInfo}
      </div>
    );
  }

  return (
    <div
      id={props.id}
      className="flex flex-row fixed w-full flex left-0 justify-center invisible opacity-0 transition ease-in duration-300 "
    >
      {isWhiteArea && (
        <div className="flex flex-row z-50 absolute top-5px border-1 border-gray-200 text-base list-none divide-y divide-gray-100 shadow inline-block">
          <div className="flex flex-row bg-dark-blue text-white dark:bg-gray-700 inline-block">
            {isBlueArea &&
              blueArea.map(function (item, index) {
                return createDropdownSections(item, index, 'blue');
              })}
          </div>
          <div className="flex flex-row bg-white text-gray-text dark:bg-gray-700 inline-block">
            {isWhiteArea &&
              whiteArea.map(function (item, index) {
                return createDropdownSections(item, index, 'white');
              })}
          </div>
          <div className="flex flex-row bg-gray-100 text-gray-text dark:bg-gray-700 inline-block">
            {isGrayArea &&
              grayArea.map(function (item, index) {
                return createDropdownSections(item, index, 'gray');
              })}
          </div>
        </div>
      )}
    </div>
  );
}

export default MegaDropdown;
