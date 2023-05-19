import React from 'react';
import './BodySecondPart.css';

function BodySecondPart() {
  return (
    <div>
      <section className="flex justify-center py-[110px] h-[1200px] bg-gradient-to-b from-white via-main-orange to-main-orange">
        <div className="flex flex-col relative z-10 items-center w-1230px max-w-full px-[30px]">
          <div className="grid grid-cols-2 w-full h-full">
            {/* The left side */}
            <div className="block">
              <div className="sticky top-1/2 w-full block">
                <div className="flex flex-row items-center justify-start my-6 w-full">
                  <div className="w-3 h-3 mx-3 bg-red-500 rounded-2xl opacity-100"></div>
                  <div className="text-base text-main-dark-blue font-bold mx-3 block">
                    Overview
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start my-6 w-full">
                  <div className="w-3 h-3 mx-3 bg-red-500 rounded-2xl opacity-20"></div>
                  <div className="text-base text-main-dark-blue font-bold mx-3 block">
                    Personalize
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start my-6 w-full">
                  <div className="w-3 h-3 mx-3 bg-red-500 rounded-2xl opacity-20"></div>
                  <div className="text-base text-main-dark-blue font-bold mx-3 block">
                    Connect
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start my-6 w-full">
                  <div className="w-3 h-3 mx-3 bg-red-500 rounded-2xl opacity-20"></div>
                  <div className="text-base text-main-dark-blue font-bold mx-3 block">
                    Engagae
                  </div>
                </div>
              </div>
            </div>
            {/* The right side */}
            <div className="max-w-full">
              <p></p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BodySecondPart;
