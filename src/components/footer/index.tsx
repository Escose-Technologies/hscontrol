import Image from "next/image";
import SignUpCTA from "../sign-up-cta";

const Footer = () => {
    
    return (
        <>
        <section className="relative text-white py-10 w-full">
        {/* Triangular shape */}
        <div className="absolute inset-0">
          <div className="absolute left-0 bottom-0 w-0 h-0 border-l-[150vw] border-l-black border-t-[230px] border-t-transparent"></div>
        </div>
         <SignUpCTA />
      </section>
      <footer className="bg-black text-white py-10 w-full">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:justify-between">
            <div className="mb-6 md:mb-0 flex justify-center items-center md:items-start">
                <Image
                src="/hscontrol.png"
                alt="HS Control Logo"
                width={170}
                height={30}
                priority
                />
            </div>
            <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-10">
              <div className="flex flex-col justify-center items-center md:items-start">
                <h3 className="font-bold mb-2">Company</h3>
                <ul className="space-y-1 flex flex-col items-center md:items-start">
                  <li><a href="#" className="text-gray-400">About us</a></li>
                  <li><a href="#" className="text-gray-400">Contact us</a></li>
                  <li><a href="#" className="text-gray-400">Pricing</a></li>
                </ul>
              </div>
              <div className="flex flex-col justify-center items-center md:items-start">
                <h3 className="font-bold mb-2">Resources</h3>
                <ul className="space-y-1 flex flex-col items-center md:items-start">
                  <li><a href="#" className="text-gray-400">Blog</a></li>
                  <li><a href="#" className="text-gray-400">Career</a></li>
                  <li><a href="#" className="text-gray-400">Terms & Conditions</a></li>
                </ul>
              </div>
              <div className="flex flex-col justify-center items-center md:items-start">
                <h3 className="font-bold mb-2">Contact</h3>
                <p>Email: <a href="mailto:hello@themefisher.com" className="text-yellow-500">hello@themefisher.com</a></p>
                <p>Call Us: <span className="text-yellow-500">+91-9772766137</span></p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      </>
    );
  };
  
  export default Footer;
  