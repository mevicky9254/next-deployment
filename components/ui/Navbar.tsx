// // components/ui/Navbar.tsx
// 'use client';

// import { useState, useEffect } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { Menu, X, ChevronDown } from 'lucide-react';

// const navLinks = [
//   {
//     name: 'Services',
//     href: '#',
//     submenu: [
//       { name: 'Application Solution', href: '#' },
//       { name: 'Digital Marketing', href: '#' },
//       { name: 'Design Solution', href: '#' },
//     ],
//   },
//   {
//     name: 'Solutions',
//     href: '#',
//     submenu: [
//         { name: 'E-commerce', href: '#' },
//         { name: 'Healthcare', href: '#' },
//         { name: 'Fintech', href: '#' },
//     ],
//   },
//   { name: 'Industries', href: '#' },
//   { name: 'Insights', href: '#' },
//   { name: 'Technologies', href: '#' },
// ];

// const Navbar = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 10);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const navbarClasses = isScrolled
//     ? 'bg-white text-black shadow-md'
//     : 'bg-transparent text-white';

//   return (
//     <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${navbarClasses}`}>
//       <div className="container mx-auto px-4 flex justify-between items-center h-20">
//         {/* Logo */}
//         <Link href="/">
//           {/* Replace with your actual logo files */}
//           {isScrolled ? (
//              <Image src="/logo-dark.png" alt="Invoidea Logo" width={150} height={40} />
//           ) : (
//              <Image src="/logo-light.png" alt="Invoidea Logo" width={150} height={40} />
//           )}
//         </Link>

//         {/* Desktop Navigation */}
//         <nav className="hidden lg:flex items-center space-x-8">
//           {navLinks.map((link) => (
//             <div key={link.name} className="relative group">
//               <Link href={link.href} className="flex items-center hover:text-orange-500">
//                 {link.name}
//                 {link.submenu && <ChevronDown size={16} className="ml-1" />}
//               </Link>
//               {link.submenu && (
//                 <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 invisible group-hover:visible">
//                   <div className="py-1">
//                     {link.submenu.map((item) => (
//                       <Link key={item.name} href={item.href} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-orange-500">
//                         {item.name}
//                       </Link>
//                     ))}
//                   </div>
//                 </div>
//               )}
//             </div>
//           ))}
//         </nav>

//         {/* CTA and Mobile Menu Toggle */}
//         <div className="flex items-center space-x-4">
//            <Link href="#" className="hidden md:inline-block bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-semibold py-2 px-6 rounded-md hover:opacity-90 transition-opacity">
//             Get a Free Consultation!
//           </Link>
//           <button
//             className="lg:hidden"
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//           >
//             {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
//           </button>
//         </div>
//       </div>
      
//       {/* Mobile Menu */}
//       {isMobileMenuOpen && (
//          <div className="lg:hidden bg-white text-black w-full absolute top-20 left-0 shadow-md">
//             <nav className="flex flex-col p-4 space-y-4">
//                  {navLinks.map((link) => (
//                     // Basic mobile menu - can be enhanced with accordions for submenus
//                     <Link key={link.name} href={link.href} className="hover:text-orange-500">{link.name}</Link>
//                  ))}
//                  <Link href="#" className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white text-center font-semibold py-2 px-6 rounded-md hover:opacity-90 transition-opacity">
//                     Get a Free Consultation!
//                 </Link>
//             </nav>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Navbar;


// components/ui/Navbar.tsx
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';

// (navLinks array remains the same as before)
const navLinks = [
    {
      name: 'Services',
      href: '#',
      submenu: [
        { name: 'Application Solution', href: '#' },
        { name: 'Digital Marketing', href: '#' },
        { name: 'Design Solution', href: '#' },
      ],
    },
    {
      name: 'Solutions',
      href: '#',
      submenu: [
          { name: 'E-commerce', href: '#' },
          { name: 'Healthcare', href: '#' },
          { name: 'Fintech', href: '#' },
      ],
    },
    { name: 'Industries', href: '#' },
    { name: 'Insights', href: '#' },
    { name: 'Technologies', href: '#' },
  ];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // The background now changes after just a few pixels of scrolling
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navbarClasses = isScrolled
    ? 'bg-white text-black shadow-lg' // Use shadow-lg for more definition
    : 'bg-transparent text-white';

  return (
    // This header is now fixed below the TopBar (approx. 36px height)
    <header 
      className={`fixed left-0 w-full z-40 transition-all duration-300 ${navbarClasses}`}
      style={{ top: '36px' }} // Positioned below the TopBar
    >
      <div className="container mx-auto px-4 flex justify-between items-center h-20">
        {/* Logo */}
        <Link href="/">
          {isScrolled ? (
             <Image src="/zovinity-logo-dark.png" alt="Zovinity Logo" width={300} height={50} />
          ) : (
             <Image src="/zovinity-logo-dark.png" alt="Zovinity Logo" width={300} height={50} />
          )}
        </Link>

        {/* Desktop Navigation (same as before) */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group">
              <Link href={link.href} className="flex items-center hover:text-cyan-400 transition-colors">
                {link.name}
                {link.submenu && <ChevronDown size={16} className="ml-1" />}
              </Link>
              {link.submenu && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 invisible group-hover:visible">
                  <div className="py-1">
                    {link.submenu.map((item) => (
                      <Link key={item.name} href={item.href} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-cyan-500">
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* CTA and Mobile Menu Toggle (same as before) */}
        <div className="flex items-center space-x-4">
           <Link href="#" className="hidden md:inline-block bg-gradient-to-r from-cyan-400 to-blue-600 text-white font-semibold py-2 px-6 rounded-md hover:opacity-90 transition-opacity">
            Book a Free Consultation!
          </Link>
          <button
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu (same as before) */}
      {isMobileMenuOpen && (
         <div className="lg:hidden bg-white text-black w-full absolute left-0 shadow-md">
            <nav className="flex flex-col p-4 space-y-4">
                 {navLinks.map((link) => (
                    <Link key={link.name} href={link.href} className="hover:text-orange-500">{link.name}</Link>
                 ))}
                 <Link href="#" className="bg-gradient-to-r from-cyan-400 to-blue-600 text-white text-center font-semibold py-2 px-6 rounded-md hover:opacity-90 transition-opacity">
                    Book a Free Consultation!
                </Link>
            </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;