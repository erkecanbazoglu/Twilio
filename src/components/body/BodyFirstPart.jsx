import React from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function BodyFirstPart() {
  return (
    <div>
      <section className="flex bg-main-orange w-full py-25 justify-center relative">
        <div className="flex flex-row w-1230px max-w-full h-480px pb-75px text-left items-center justify-center box-border">
          {/* The Left Side */}
          <div className="flex-1 flex-col px-8 w-full box-border">
            <div className="text-lg font-semibold leading-7 text-main-red pb-4">
              Twilio Customer Engagement Platform
            </div>
            <h1 className="text-5xl font-bold text-main-dark-blue pb-4">
              Data-driven customer engagement—at scale
            </h1>
            <div className="pb-4">
              <p className="text-lg font-light leading-7 text-main-dark-blue">
                Twilio powers personalized interactions and trusted global
                communications to connect you with customers.
              </p>
            </div>
            <div>
              <button
                type="button"
                className="text-white bg-blue-600 my-6 hover:bg-blue-800 ring-offset-2 focus:ring-2 focus:bg-blue-800 focus:ring-blue-600 font-medium rounded-md text-tiny px-6 py-3 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Sign up and start building
                <span className="before:ml-4 after:content-[''] after:animation-pulse2">
                  <ArrowForwardIosIcon
                    className="text-white"
                    fontSize="small"
                  />
                  <span className="text-white font-bold text-tiny animation-pulse">
                    _
                  </span>
                </span>
              </button>
              <div className="block">
                <div className="">
                  <a
                    className="text-blue-600 text-base font-light underline"
                    href="/help/sales"
                    role="link"
                  >
                    Talk to sales
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Mobile media  */}
          <div className="flex-1 flex-col w-full items-center justify-center">
            <div className="hidden">
              <picture>
                <source
                  srcSet="https://twilio-cms-prod.s3.amazonaws.com/images/mobile2x_Sgpqmgp.width-600.format-webp.webpquality-75.webp, https://twilio-cms-prod.s3.amazonaws.com/images/mobile2x_Sgpqmgp.width-1200.format-webp.webpquality-75.webp 2x"
                  type="image/webp"
                  alt="image"
                ></source>
                <source
                  srcSet="https://twilio-cms-prod.s3.amazonaws.com/images/mobile2x_Sgpqmgp.width-600.format-jpeg.jpegquality-85.jpg, https://twilio-cms-prod.s3.amazonaws.com/images/mobile2x_Sgpqmgp.width-1200.format-jpeg.jpegquality-85.jpg 2x"
                  type="image/jpeg"
                  alt="image"
                ></source>
                <img
                  src="https://twilio-cms-prod.s3.amazonaws.com/images/mobile2x_Sgpqmgp.width-600.format-jpeg.jpegquality-85.jpg"
                  alt="mobile@2x.png"
                  width="600"
                  loading="lazy"
                ></img>
              </picture>
            </div>
          </div>
        </div>
        {/* The background image */}
        <div className="absolute top-0 right-0 h-full w-auto max-w-7/12 block ">
          <picture className="overflow-auto">
            <source
              srcSet="https://twilio-cms-prod.s3.amazonaws.com/images/a7c14300-2e1e-11ec.width-800.format-webp.webpquality-95.webp, https://twilio-cms-prod.s3.amazonaws.com/images/a7c14300-2e1e-11e.width-1600.format-webp.webpquality-95.webp 2x"
              type="image/webp"
            ></source>
            <source
              srcSet="https://twilio-cms-prod.s3.amazonaws.com/images/a7c14300-2e1e-11ec-.width-800.format-jpeg.jpegquality-90.jpg, https://twilio-cms-prod.s3.amazonaws.com/images/a7c14300-2e1e-11ec.width-1600.format-jpeg.jpegquality-90.jpg 2x"
              type="image/jpeg"
            ></source>
            <img
              src="https://twilio-cms-prod.s3.amazonaws.com/images/a7c14300-2e1e-11ec-.width-800.format-jpeg.jpegquality-90.jpg"
              alt="a7c14300-2e1e-11ec-9da6-1c00cbe09818.png"
              loading="eager"
            ></img>
          </picture>
        </div>
      </section>

      {/* Bottom Box */}
      <section className="flex justify-center pb-75px bg-white">
        <div className="flex flex-col w-1230px max-w-full items-center fixed z-10 px-7.5">
          <div className="block">
            <div className="overflow-hidden m-[-15px] translate-y-[-50%] shadow-sm rounded-lg block">
              <div className="relative block">
                <div
                  className="flex flex-row px-28 box-border items-center justify-center box-border"
                  style={{
                    backgroundImage:
                      'url("https://twilio-cms-prod.s3.amazonaws.com/images/Signal_Bkground_2022.max-1350x1500.png")',
                  }}
                >
                  <img
                    className="flex-1 w-[250px] h-[200px] my-[-1.75rem] border-0 max-w-full object-contain"
                    alt="Signal - July 2022 Image"
                    height="300"
                    src="https://twilio-cms-prod.s3.amazonaws.com/images/Signal_-_July_2022_Image.original.png"
                    width="500"
                    data-alli-alt="Signal - July 2022 Image"
                    title="Signal - July 2022 Image"
                    data-alli-alt-title-id="26408831"
                  ></img>
                  <div className="flex-2 flex-col text-left max-w-full py-8 pr-5 pl-12 block">
                    <p className="text-2xl my-0 text-left text-white font-semibold tracking-tight block">
                      Get your free tickets to SIGNAL 2022
                    </p>
                    <p className="text-sm my-0 text-left text-white font-light block">
                      Join us virtually this November to celebrate everything
                      customer engagement at Twilio’s customer and developer
                      conference SIGNAL.
                    </p>
                  </div>
                  <div className="flex-1 flex-col mt-0 items-center block">
                    <div className="flex flex-row flex-wrap w-auto items-center justify-start">
                      <div className="contents">
                        <button
                          type="button"
                          className="flex text-white text-sm m-0 px-5 py-1.5 h-[3rem] text-center items-center mr-2 bg-transparent border-2 border-white font-medium rounded-md whitespace-nowrap hover:text-blue-900 hover:bg-white ring-offset-2 focus:ring-2 focus:outline-none focus:bg-white focus:ring-white focus:text-blue-900 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800"
                        >
                          Register today
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BodyFirstPart;
