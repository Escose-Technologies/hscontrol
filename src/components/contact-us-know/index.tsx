import React from 'react';

const ContactUsNow = () => {
  return (
    <section className="section relative overflow-hidden before:z-10 after:z-10">
        <div className="container relative z-20">
            <div data-aos="fade-up-sm" className="shadow-default aos-init aos-animate mb-6 flex flex-col overflow-hidden rounded-xl border border-border/50 bg-white !transition-all !duration-300 last-of-type:mb-0 hover:shadow-sm sm:flex-row sm:border-0">
                <div className="px-6 py-12 flex md:flex-row flex-col justify-between w-full gap-10">
                    <div>
                        <h3>Do you have any question</h3>
                        <h3>Feel free to contact us anytime.</h3>
                    </div>
                    <button>Connect Us Know</button>
                </div>
            </div>
        </div>
    </section>
  );
};

export default ContactUsNow;
