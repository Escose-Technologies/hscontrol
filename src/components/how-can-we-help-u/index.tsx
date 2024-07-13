import React, { FC } from "react";
import Image from "next/image";

const HowCanIHelpYou: FC = () => {
    return (
        <section className="section relative z-20 overflow-hidden">
        <div className="container m-auto ">
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl" data-aos="fade-up">
                <Image className="max-w-full mx-auto md:max-w-none h-auto rounded-xl" src={"/how-can-we-help-you.jpg"} width={540} height={405} alt="Features 02" />
              </div>
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">
                <div>
                  <h3 className="mb-6 text-5xl">How Can We Help You?</h3>
                  <ul className="text-lg text-gray-400">
                    <li className="mb-5 rounded-lg bg-white px-3 py-5 transition-all duration-300 hover:shadow-xl">
                      <h4 className="mb-2 text-xl font-semibold sm:text-2xl">Technical Support</h4>
                      <p className="text-slate-500 text-sm">Need technical support? No problem! Just fill the form to be contacted by one of our technical experts.</p>
                    </li>
                    <li className="mb-2 rounded-lg bg-white px-3 py-5 transition-all duration-300 hover:shadow-xl">
                      <h4 className="mb-2 text-xl font-semibold sm:text-2xl">Commercial Support</h4>
                      <p className="text-slate-500 text-sm">Need commercial support? Just fill the form to be contacted by one of our sales agents.</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
    )
}

export default HowCanIHelpYou;