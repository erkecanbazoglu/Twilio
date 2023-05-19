import React from 'react';
import FooterSection from './FooterSections';
import CopyrightText from './CopyrightText';
import LegalButton from './LegalButtons';
// import { ReactComponent as SvgDecoratorBlob1 } from '../../images/svg-decorator-blob-9.svg';

function Footer() {
  const currentYear = new Date().getFullYear();

  const footerProductsList = [
    'Voice',
    'Video',
    'Messaging',
    'Authentication',
    'IoT',
  ];
  const footerSolutionsList = [
    'Customer Data Platform',
    'Account Security',
    'Text Marketing',
    'Commerce Communications',
    'Contact Center',
  ];
  const footerDocsList = [
    'Quickstart',
    'Tutorials',
    'API Reference',
    'Helper Libraries',
    'API Status',
  ];
  const footerCompanyList = [
    'About Twilio',
    'Why Twilio',
    'Customer Engagement Platform',
    'Trusted Communications',
    'Customers',
    'Get Help',
    'Talk to an expert',
    'Press & Media',
    'Events',
    'Jobs at Twilio',
  ];

  const footerLegalList = [
    'LEGAL',
    'PRIVACY',
    'TWILIO.ORG',
    'PRESS & MEDIA',
    'SIGNAL',
    'INVESTORS',
    'JOBS',
  ];

  return (
    <div className="bg-footer-blue text-gray-100 px-40 py-16">
      <div className="ax-w-screen-xl mx-auto">
        <div className="text-center text-5xl text-gray-400 font-light font-ibm italic tracking-wider">
          We can’t wait to see what you build.
        </div>

        <div className="flex flex-wrap text-center sm:text-left justify-center sm:justify-start md:justify-between">
          <FooterSection title="Products" footerList={footerProductsList} />
          <FooterSection title="Solutions" footerList={footerSolutionsList} />
          <FooterSection title="Docs" footerList={footerDocsList} />
          <FooterSection title="Company" footerList={footerCompanyList} />
        </div>
        <div className="container h-16"></div>
        <div className="flex flex-col items-center justify-between">
          <div className="flex flex-col items-center">
            <div className="flex flex-row items-center mb-4">
              {footerLegalList.map((legalButton, index) => {
                return (
                  <LegalButton key={index} text={footerLegalList[index]} />
                );
              })}
            </div>
            <CopyrightText
              text={'COPYRIGHT © ' + currentYear + ' TWILIO INC.'}
            />
            <CopyrightText text={'ALL RIGHT RESERVED.'} />
          </div>
        </div>
      </div>
      {/* The background balloons */}
      {/* <div className="absolute inset-0 overflow-hidden rounded-lg">
                <SvgDecoratorBlob1 className="absolute top-0 left-0 w-80 h-80 transform -translate-x-20 -translate-y-32 text-primary-700 opacity-50" />
                <SvgDecoratorBlob1 className="absolute bottom-0 right-0 w-80 h-80 transform  translate-x-32 translate-y-48 text-primary-700 opacity-50" />
            </div> */}
    </div>
  );
}

export default Footer;
