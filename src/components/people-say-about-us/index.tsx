import React, { FC } from "react";
import Image from "next/image";
import Link from 'next/link';

const Replays = [
    {
        name: "Vaibhav Sharma",
        desigunation: "Senior Manager",
        comment: 'Dedicated professionals We’ve worked with and always willing to put that extra help whenever you need it. They helped our team come up with more efficient solutions on different projects and would love to work with them again.'
    },
    {
        name: "Rajeev Ranjan",
        desigunation: "Senior Engineer",
        comment: 'We worked together on multiple projects. They are creative,energetic, solutions oriented, technically sound and driving for results all the time. They sees and can address everything from the big picture to the details.'
    },
    {
        name: "Anurag Saxena",
        desigunation: "Manager",
        comment: 'They are very ambitious and trustworthy. They love to work smartly rather than to work hard and this is what makes them different from others. They are experienced and technically sound in their respective fields.'
    }
]

const PeopleSayAboutUs = () => {
    return (
    <section className="section section-lg feature triangle-up pb-0 relative z-20 overflow-hidden">
        <div className="container relative z-20">
            <div className="colored-box-bg items-start lg:columns-2">
                <div className="mb-16">
                  <span className="mb-6 inline-block font-medium uppercase text-red-400 aos-init aos-animate" data-aos="fade-up-sm">INSPIRING TESTIMONIALS</span>
                  <div data-aos="fade-up-sm" className="border-l-2 border-dark border-opacity-50 py-2 pl-6 aos-init aos-animate">
                     <h2 className="font-semibold" data-aos-delay="50">Take an Look at Our Customers Stories</h2>
                  </div>
                </div>
                <div data-aos="fade-up-sm" className="shadow-default aos-init aos-animate mb-6 flex flex-col overflow-hidden rounded-xl border border-border/50 bg-white !transition-all !duration-300 last-of-type:mb-0 hover:shadow-sm sm:flex-row sm:border-0">
                   <div className="box-bg">
                     <Image
                        alt="logo"
                        loading="lazy"
                        width={265}
                        height={94}
                        decoding="async"
                        data-nimg="1"
                        className="!max-w-[140px] sm:min-w-[40px] sm:-rotate-90 sm:transform"
                        style={{ color: 'transparent' }}
                        src="/idea.webp"
                    />
                    </div>
                    <div className="px-6 py-12">
                      <h3 className="mb-5 text-xl font-semibold sm:text-2xl">Efficient Experience with Superb Customer Support</h3>
                      <p className="mb-6 sm:text-lg">elementum sed sit amet. Nulla port titor accumsan tincidunt. Proin eget tortor risus. Vestibulum ac diam sit amet quam</p>
                      <div className="flex items-center gap-4">
                        <div className="items-start rounded-full">
                          <div className="flex flex-col justify-center">
                            <h4 className="mb-1 font-primary text-lg">Devon Lane</h4>
                            <p>VP growth at Facebook</p>
                          </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div data-aos="fade-up-sm" className="shadow-default aos-init aos-animate mb-6 flex flex-col overflow-hidden rounded-xl border border-border/50 bg-white !transition-all !duration-300 last-of-type:mb-0 hover:shadow-sm sm:flex-row sm:border-0"><div className="box-bg">
                   <Image
                        alt="logo"
                        loading="lazy"
                        width={265}
                        height={94}
                        decoding="async"
                        data-nimg="1"
                        className="!max-w-[140px] sm:min-w-[40px] sm:-rotate-90 sm:transform"
                        style={{ color: 'transparent' }}
                        src="/idea.webp"
                    />
                    </div>
                    <div className="px-6 py-12">
                        <h3 className="mb-5 text-xl font-semibold sm:text-2xl">Seamless Integration and Powerful Functionality</h3>
                        <p className="mb-6 sm:text-lg">elementum sed sit amet. Nulla port titor accumsan tincidunt. Proin eget tortor risus. Vestibulum ac diam sit amet quam</p>
                        <div className="flex items-center gap-4">
                        <div className="items-start rounded-full">
                        <div className="flex flex-col justify-center">
                            <h4 className="mb-1 font-primary text-lg">Guy Hawkins</h4>
                            <p>VP growth at Facebook</p>
                        </div>
                    </div>
                    </div>
                    </div>
                </div>
                <div data-aos="fade-up-sm" className="shadow-default aos-init aos-animate mb-6 flex flex-col overflow-hidden rounded-xl border border-border/50 bg-white !transition-all !duration-300 last-of-type:mb-0 hover:shadow-sm sm:flex-row sm:border-0">
                  <div className="box-bg">
                    <Image
                        alt="logo"
                        loading="lazy"
                        width={265}
                        height={94}
                        decoding="async"
                        data-nimg="1"
                        className="!max-w-[140px] sm:min-w-[40px] sm:-rotate-90 sm:transform"
                        style={{ color: 'transparent' }}
                        src="/idea.webp"
                    />
                  </div>
                  <div className="px-6 py-12">
                     <h3 className="mb-5 text-xl font-semibold sm:text-2xl">Empowering Businesses with Cutting-Edge Solutions</h3>
                     <p className="mb-6 sm:text-lg">elementum sed sit amet. Nulla port titor accumsan tincidunt. Proin eget tortor risus. Vestibulum ac diam sit amet quam</p>
                  <div className="flex items-center gap-4">
                     <div className="items-start rounded-full">
                       <div className="flex flex-col justify-center">
                          <h4 className="mb-1 font-primary text-lg">Savannah Nguyen</h4>
                          <p>VP growth at Facebook</p>
                        </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    <div data-aos="fade-up-sm" className="shadow-default aos-init aos-animate mb-6 flex flex-col overflow-hidden rounded-xl border border-border/50 bg-white !transition-all !duration-300 last-of-type:mb-0 hover:shadow-sm sm:flex-row sm:border-0"><div className="box-bg">
                      <Image
                        alt="logo"
                        loading="lazy"
                        width={265}
                        height={94}
                        decoding="async"
                        data-nimg="1"
                        className="!max-w-[140px] sm:min-w-[40px] sm:-rotate-90 sm:transform"
                        style={{ color: 'transparent' }}
                        src="/idea.webp"
                    />
                    </div>
                <div className="px-6 py-12"><h3 className="mb-5 text-xl font-semibold sm:text-2xl">Revolutionizing Business with Scalable Solutions</h3>
                  <p className="mb-6 sm:text-lg">elementum sed sit amet. Nulla port titor accumsan tincidunt. Proin eget tortor risus. Vestibulum ac diam sit amet quam</p><div className="flex items-center gap-4">
                   <div className="items-start rounded-full" />
                   <div className="flex flex-col justify-center">
      <h4 className="mb-1 font-primary text-lg">Ronald Richards</h4>
      <p>VP growth at Facebook</p>
      
      <div data-aos="fade-right-sm" className="pointer-events-none absolute left-[-8%] top-[28%] -z-10 hidden select-none lg:block aos-init aos-animate">
        <svg
          className="text-quaternary"
          width="225"
          height="242"
          viewBox="0 0 225 242"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M67.6131 84.6414C67.521 83.5647 66.4959 82.4477 65.315 82.8837C60.8175 84.5157 56.9907 88.2049 54.4206 92.6331C53.9646 93.3529 53.5734 94.1236 53.2386 94.9135C51.6507 98.3869 50.8021 102.166 50.9715 105.698C51.0156 106.531 51.5065 107.057 52.1087 107.297C52.4961 108.329 53.5839 109.011 54.7151 108.358C58.9965 105.887 63.556 103.658 65.9055 99.0753C68.1834 94.64 68.0024 89.4719 67.6131 84.6414Z"
            fill="currentColor"
          ></path>
          <path
            d="M91.7392 119.875C96.0206 117.405 100.58 115.176 102.93 110.593C105.213 106.148 105.042 100.985 104.653 96.155C104.561 95.0783 103.536 93.9612 102.355 94.3972C97.8575 96.0292 94.0307 99.7184 91.4606 104.147C91.0046 104.866 90.6135 105.637 90.2787 106.427C88.6908 109.9 87.8421 113.68 88.0116 117.212C88.0556 118.045 88.5466 118.571 89.1487 118.811C89.5304 119.853 90.608 120.529 91.7392 119.875Z"
            fill="currentColor"
          ></path>
          <path
            d="M120.64 39.1674C120.558 38.0966 119.523 36.9737 118.342 37.4097C113.844 39.0417 110.018 42.7309 107.447 47.1591C106.991 47.8789 106.6 48.6496 106.266 49.4395C104.678 52.9129 103.829 56.692 103.998 60.224C104.042 61.0574 104.533 61.5833 105.136 61.8232C105.523 62.8549 106.611 63.5368 107.742 62.8836C112.023 60.413 116.583 58.1839 118.932 53.6013C121.21 49.166 121.029 43.9979 120.64 39.1674Z"
            fill="currentColor"
          ></path>
          <path
            d="M115.19 82.7787C113.603 86.2522 112.754 90.0313 112.923 93.5633C112.967 94.3967 113.458 94.9226 114.061 95.1625C114.448 96.1942 115.536 96.8761 116.667 96.2229C120.948 93.7524 125.508 91.5232 127.857 86.9406C130.141 82.4952 129.97 77.333 129.581 72.5025C129.489 71.4258 128.464 70.3087 127.283 70.7447C122.785 72.3767 118.958 76.0659 116.388 80.4941C115.921 81.2341 115.525 81.9889 115.19 82.7787Z"
            fill="currentColor"
          ></path>
          <path
            d="M74.484 60.0985C74.528 60.9319 75.0189 61.4578 75.6211 61.6977C76.0085 62.7294 77.0962 63.4113 78.2275 62.7581C82.5089 60.2876 87.0684 58.0584 89.4179 53.4759C91.7016 49.0305 91.5308 43.8682 91.1414 39.0376C91.0493 37.9609 90.0243 36.844 88.8434 37.2799C84.3458 38.9119 80.519 42.6011 77.9489 47.0293C77.4929 47.7491 77.1018 48.5199 76.767 49.3097C75.1472 52.7917 74.3044 56.5607 74.484 60.0985Z"
            fill="currentColor"
          ></path>
          <path
            d="M40.2479 112.516C40.1557 111.439 39.1307 110.322 37.9498 110.758C33.4522 112.39 29.6255 116.079 27.0554 120.507C26.5994 121.227 26.2082 121.998 25.8734 122.788C24.2855 126.261 23.4369 130.04 23.6063 133.572C23.6503 134.406 24.1413 134.932 24.7435 135.172C25.1309 136.203 26.2186 136.885 27.3498 136.232C31.6312 133.761 36.1908 131.532 38.5402 126.95C40.8181 122.514 40.6372 117.346 40.2479 112.516Z"
            fill="currentColor"
          ></path>
          <path
            d="M84.6488 138.245C84.5566 137.168 83.5316 136.051 82.3506 136.487C77.8531 138.119 74.0263 141.808 71.4562 146.236C71.0002 146.956 70.6091 147.727 70.2743 148.517C68.6864 151.99 67.8377 155.769 68.0072 159.301C68.0512 160.135 68.5421 160.661 69.1443 160.901C69.5317 161.932 70.6195 162.614 71.7507 161.961C76.0321 159.49 80.5917 157.261 82.9411 152.679C85.219 148.243 85.0381 143.075 84.6488 138.245Z"
            fill="currentColor"
          ></path>
          <path
            d="M53.283 141.185C53.1909 140.108 52.1659 138.991 50.985 139.427C46.4874 141.059 42.6606 144.748 40.0905 149.176C39.6345 149.896 39.2434 150.667 38.9086 151.457C37.3207 154.93 36.4721 158.709 36.6415 162.241C36.6855 163.074 37.1765 163.6 37.7786 163.84C38.166 164.872 39.2538 165.554 40.385 164.901C44.6664 162.43 49.226 160.201 51.5754 155.618C53.8533 151.183 53.6724 146.015 53.283 141.185Z"
            fill="currentColor"
          ></path>
          <path
            d="M176.789 11.6862C172.392 13.2873 168.774 16.8037 166.715 21.3233C166.366 22.094 165.977 22.8648 165.642 23.6546C164.006 27.8184 163.123 32.3566 163.302 36.4884C163.326 37.0866 163.567 37.5252 163.888 37.8476C164.482 38.8518 165.63 39.5001 166.801 38.9451C171.707 36.6072 176.434 34.4061 178.623 29.6063C180.907 24.1609 180.711 18.4433 180.357 12.8272C180.241 11.0594 178.253 10.5084 176.789 11.6862Z"
            fill="currentColor"
          ></path>
          <path
            d="M174.961 58.3175C169.028 60.3433 164.6 66.0891 164.172 72.5673C164.123 73.3415 164.077 74.1157 164.053 74.9C163.878 79.0318 164.757 83.57 166.393 87.7339C166.728 88.5237 167.118 89.2944 167.575 90.0142C169.634 93.4426 172.925 96.3377 176.621 98.1538C178.314 98.9436 179.926 97.7558 179.853 95.877C179.756 93.3871 179.396 90.8329 178.773 88.3238C178.055 85.3664 176.91 82.507 175.274 79.9911C173.527 77.3283 171.27 75.0917 168.537 73.5371C167.055 72.7037 167.52 70.1413 169.202 70.1552C171.376 70.1724 173.466 69.629 175.348 68.5678C177.321 67.4298 178.985 65.7992 180.339 63.9007C182.74 60.2526 181.295 56.0048 174.961 58.3175Z"
            fill="currentColor"
          ></path>
          <path
            d="M198.575 127.189C193.142 129.048 188.631 135.207 187.549 141.864C187.358 143.044 187.192 144.224 187.067 145.42C186.661 149.552 187.755 153.97 189.999 157.789C190.436 158.547 190.916 159.29 191.464 159.995C194.575 163.9 198.932 166.973 203.693 168.111C205.885 168.618 207.189 167.203 206.879 165.331C206.437 162.594 205.558 159.868 204.258 157.265C202.934 154.59 201.161 152.1 198.949 150.019C196.853 148.023 194.384 146.242 191.539 144.886C190.152 144.21 190.675 141.716 192.269 141.92C194.387 142.175 196.468 141.841 198.451 141.064C200.561 140.247 202.417 138.983 204.06 137.35C206.924 134.476 205.553 130.569 198.575 127.189Z"
            fill="currentColor"
          ></path>
          <path
            d="M212.439 89.3202C206.506 91.346 202.078 97.0919 201.65 103.57C201.601 104.344 201.555 105.118 201.531 105.902C201.356 110.034 202.235 114.573 203.871 118.737C204.206 119.527 204.597 120.297 205.053 121.017C207.112 124.445 210.404 127.34 214.099 129.156C215.791 129.946 217.404 128.758 217.331 126.879C217.234 124.389 216.874 121.835 216.251 119.326C215.533 116.368 214.387 113.509 212.751 110.993C211.004 108.33 208.747 106.093 206.014 104.539C204.532 103.706 204.997 101.144 206.679 101.158C208.853 101.175 210.943 100.632 212.825 99.5707C214.798 98.4328 216.462 96.8022 217.816 94.9037C220.217 91.2556 218.773 87.0078 212.439 89.3202Z"
            fill="currentColor"
          ></path>
          <path
            d="M208.582 175.667C207.882 172.14 206.015 168.892 203.402 166.511C200.798 164.139 197.549 162.61 194.022 161.92C192.905 161.694 191.788 162.764 192.095 163.958C193.707 170.143 197.649 175.504 202.933 178.173C204.699 179.028 206.554 179.479 208.439 179.523C209.326 179.545 209.45 177.755 208.582 175.667Z"
            fill="currentColor"
          ></path>
          <path
            d="M149.326 228.048C148.626 224.52 146.759 221.272 144.146 218.891C141.542 216.518 138.293 214.989 134.766 214.299C133.648 214.073 132.531 215.143 132.839 216.336C134.451 222.522 138.393 227.882 143.678 230.551C145.444 231.406 147.299 231.857 149.184 231.901C150.071 231.923 150.195 230.134 149.326 228.048Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
    </div>
    </div>
    </div>
    </div>
            </div>
        </div>
      </section>
    )
}

export default PeopleSayAboutUs;