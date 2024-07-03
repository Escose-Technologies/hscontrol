// components/SignUpCTA.js

import React from "react";
import Image from "next/image";

const SignUpCTA = () => {
  return (
    <div className="container relative z-30 mx-auto px-6 py-6 md:px-12 lg:px-24 h-96">
      <div className="flex align-middle justify-center shadow-lg h-96 relative z-20 overflow-hidden rounded-lg bg-white px-8 py-10 sm:px-14 text-black bg-[url('/patner.jpeg')]">
        <span className="text-white text-3xl">Over Tech Patner</span>
         <Image
              src="/lsi.png"
              alt="HS Control Logo"
              layout="fill"
            />
      </div>
    </div>
  );
};

export default SignUpCTA;
