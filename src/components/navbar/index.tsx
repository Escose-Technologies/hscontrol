import Link from 'next/link';
import Image from "next/image";

{/* <header>
<nav
   className="
     flex flex-wrap
     items-center
     justify-between
     w-full
     py-4
     md:py-0
     px-4
     text-lg text-gray-700
     bg-white
   "
 >
  <div>
  <Link href="/">
     <Image
        src="/hscontrol.png"
        alt="HS Control Logo"
        width={170}
        height={30}
        priority
      />
   </Link>
   </div>
  
    <svg
       xmlns="http://www.w3.org/2000/svg"
       id="menu-button"
       className="h-6 w-6 cursor-pointer md:hidden block"
       fill="none"
       viewBox="0 0 24 24"
       stroke="currentColor"
     >
       <path
         stroke-linecap="round"
         stroke-linejoin="round"
         stroke-width="2"
         d="M4 6h16M4 12h16M4 18h16"
       />
     </svg>
  
  <div className="hidden w-full md:flex md:items-center md:w-auto" id="menu">
     <ul
       className="
         pt-4
         text-base text-gray-700
         md:flex
         md:justify-between 
         md:pt-0"
     >
       <li>
         <a className="md:p-4 py-2 block hover:text-purple-400" href="#">
           Home
          </a>
       </li>
       <li>
         <a className="md:p-4 py-2 block hover:text-purple-400" href="#">
          Pricing
          </a>
       </li>
       <li>
         <a className="md:p-4 py-2 block hover:text-purple-400" href="#">
          Customers
         </a>
       </li>
       <li>
         <a className="md:p-4 py-2 block hover:text-purple-400" href="#">
          Blog
         </a>
       </li>
       <li>
         <a
           className="md:p-4 py-2 block hover:text-purple-400 text-purple-500"
           href="#">
            Sign Up
          </a>
       </li>
     </ul>
   </div>
</nav>
</header> */}

const Navbar = () => {
  return (

<header className="main-header clearfix  flex flex-wrap
     items-center
     justify-between
     w-full
     py-4
     md:py-0
     px-4 z-100" 
    role="header"
>
<div className="logo">
  <Link href="/">
     <Image
        src="/hscontrol.png"
        alt="HS Control Logo"
        width={170}
        height={30}
        priority
      />
  </Link>
</div>
<a href="#menu" className="menu-link"><i className="fa fa-bars"></i></a>
<nav id="menu" className="main-nav" role="navigation">
  <ul className="main-menu">
    <li><a href="#section1">Home</a></li>
    <li className="has-submenu"><a href="#section2">About Us</a>
      <ul className="sub-menu">
        <li><a href="#section2">Who we are?</a></li>
        <li><a href="#section3">What we do?</a></li>
        <li><a href="#section3">How it works?</a></li>
        <li><a href="https://templatemo.com/about" rel="sponsored" className="external">External URL</a></li>
      </ul>
    </li>
    <li><a href="#section4">Courses</a></li>
    <li><a href="#section6">Contact</a></li>
    <li><a href="https://templatemo.com" className="external">External</a></li>
  </ul>
</nav>
</header>
  );
};

export default Navbar;
