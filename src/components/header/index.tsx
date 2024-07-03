// 'use client'

// import Link from 'next/link';
// import { useState } from 'react';
// // import { FaBars, FaTimes } from 'react-icons/fa';

// export default function Header() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <header className="bg-white shadow-md fixed w-full z-10">
//       <div className="container mx-auto px-4 py-2 flex justify-between items-center">
//         <div className="flex items-center space-x-4">
//           <img src="/images/logo.png" alt="Spydea Logo" className="h-8" />
//           <h1 className="text-2xl font-bold text-gray-800">Spydea</h1>
//         </div>
//         <nav className="hidden md:flex space-x-6">
//           <Link href="/" className="text-gray-800 hover:text-blue-500">Home</Link>
//           <Link href="/about" className="text-gray-800 hover:text-blue-500">About</Link>
//           {/* <Link href="/services"><a className="text-gray-800 hover:text-blue-500">Services</a></Link>
//           <Link href="/contact"><a className="text-gray-800 hover:text-blue-500">Contact</a></Link> */}
//         </nav>
//         <div className="md:hidden">
//           <button onClick={() => setMenuOpen(!menuOpen)}>
//             {/* {menuOpen ? <FaTimes className="text-gray-800" /> : <FaBars className="text-gray-800" />} */}
//           </button>
//         </div>
//       </div>
//       {menuOpen && (
//         <div className="md:hidden bg-white shadow-md">
//           <nav className="px-4 py-2 space-y-2">
//             <Link href="/"><a className="block text-gray-800 hover:text-blue-500">Home</a></Link>
//             <Link href="/about"><a className="block text-gray-800 hover:text-blue-500">About</a></Link>
//             <Link href="/services"><a className="block text-gray-800 hover:text-blue-500">Services</a></Link>
//             <Link href="/contact"><a className="block text-gray-800 hover:text-blue-500">Contact</a></Link>
//           </nav>
//         </div>
//       )}
//     </header>
//   );
// }

// components/Header.js
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">Spydea</div>
        <nav className="space-x-4">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/pages">Pages</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <div className="space-x-4">
          <button className="px-4 py-2 border border-black rounded">Login</button>
          <button className="px-4 py-2 bg-black text-white rounded">Get Started</button>
        </div>
      </div>
    </header>
  );
}

