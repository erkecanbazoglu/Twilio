import React from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function BodyFirstPart() {
  return (
    <section class="flex flex-row w-full h-400 bg-main-orange ">
      <div class="flex flex-row w-full py-28 px-16">
        {/* The Left Side */}
        <div class="box-border px-8 w-6/12 pb-20">
          <div class="text-lg font-semibold leading-7 text-main-red pb-4">
            Twilio Customer Engagement Platform
          </div>
          <h1 class="text-4xl font-bold text-main-dark-blue pb-4">
            Data-driven customer engagement—at scale
          </h1>
          <div class="pb-4">
            <p class="text-lg font-light leading-7 text-main-dark-blue">
              Twilio powers personalized interactions and trusted global
              communications to connect you with customers.
            </p>
          </div>
          <div>
            <button
              type="button"
              class="text-white bg-blue-600 my-6 hover:bg-blue-800 ring-offset-2 focus:ring-2 focus:bg-blue-800 focus:ring-blue-600 font-medium rounded-md text-tiny px-6 py-3 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Sign up and start building
              <span class="before:ml-4 after:content-[''] after:animation-pulse2">
                <ArrowForwardIosIcon className="text-white" fontSize="small" />
                <span class="text-white font-bold text-tiny animation-pulse">
                  _
                </span>
              </span>
            </button>
            <div class="block">
              <div class="">
                <a
                  class="text-blue-600 text-base font-light underline"
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
        <div class=" w-6/12 pb-20">
          <div class="hidden">
            <picture>
              <source
                srcset="https://twilio-cms-prod.s3.amazonaws.com/images/mobile2x_Sgpqmgp.width-600.format-webp.webpquality-75.webp, https://twilio-cms-prod.s3.amazonaws.com/images/mobile2x_Sgpqmgp.width-1200.format-webp.webpquality-75.webp 2x"
                type="image/webp"
              ></source>
              <source
                srcset="https://twilio-cms-prod.s3.amazonaws.com/images/mobile2x_Sgpqmgp.width-600.format-jpeg.jpegquality-85.jpg, https://twilio-cms-prod.s3.amazonaws.com/images/mobile2x_Sgpqmgp.width-1200.format-jpeg.jpegquality-85.jpg 2x"
                type="image/jpeg"
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
      <div class="absolute right-0">
        <picture class="h-full w-auto max-w-7/12 overflow-visible">
          <source
            srcset="https://twilio-cms-prod.s3.amazonaws.com/images/a7c14300-2e1e-11ec.width-800.format-webp.webpquality-95.webp, https://twilio-cms-prod.s3.amazonaws.com/images/a7c14300-2e1e-11e.width-1600.format-webp.webpquality-95.webp 2x"
            type="image/webp"
          ></source>
          <source
            srcset="https://twilio-cms-prod.s3.amazonaws.com/images/a7c14300-2e1e-11ec-.width-800.format-jpeg.jpegquality-90.jpg, https://twilio-cms-prod.s3.amazonaws.com/images/a7c14300-2e1e-11ec.width-1600.format-jpeg.jpegquality-90.jpg 2x"
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
  );
}

export default BodyFirstPart;
