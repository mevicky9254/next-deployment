// // components/ui/TopBar.tsx
// import { Mail, Phone, Facebook, Linkedin, Instagram, Twitter } from 'lucide-react';
// import Link from 'next/link';

// const TopBar = () => {
//   return (
//     <div className="bg-black text-white text-xs md:text-sm py-2">
//       <div className="container mx-auto px-4 flex justify-between items-center">
//         {/* Contact Info */}
//         <div className="flex items-center space-x-4">
//           <div className="flex items-center space-x-1">
//             <span>🇮🇳</span>
//             <a href="tel:+917292050505" className="hover:text-gray-300">+91 6204853926</a>
//           </div>
//           <div className="hidden md:flex items-center space-x-1">
//             <span>🇺🇸</span>
//             <a href="tel:+12054650505" className="hover:text-gray-300">+1 205 465 0507</a>
//           </div>
//           <div className="flex items-center space-x-1">
//             <Mail size={16} />
//             <a href="mailto:hello@invoidea.com" className="hover:text-gray-300">zovinityofficial@gmail.com</a>
//           </div>
//         </div>

//         {/* Social Icons */}
//         <div className="flex items-center space-x-3">
//           <Link href="#" className="hover:text-gray-300"><Facebook size={16} /></Link>
//           <Link href="#" className="hover:text-gray-300"><Linkedin size={16} /></Link>
//           <Link href="#" className="hover:text-gray-300"><Instagram size={16} /></Link>
//           <Link href="#" className="hover:text-gray-300"><Twitter size={16} /></Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TopBar;




// components/ui/TopBar.tsx
import { Mail, Phone, Facebook, Linkedin, Instagram, Twitter } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const TopBar = () => {
  // This component is now fixed to the very top.
  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-black text-white text-xs md:text-sm py-2">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Contact Info */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1">
            <Image src="/indian-flag.svg" alt="Indian flag" width={20} height={15} />
            <a href="tel:+917292050505" className="hover:text-gray-300">+91 6204853926</a>
          </div>
          
          <div className="flex items-center space-x-1">
            <Mail size={16} />
            <a href="mailto:hello@invoidea.com" className="hover:text-gray-300">zovinityofficial@gmail.com</a>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex items-center space-x-3">
          <Link href="#" className="hover:text-gray-300"><Facebook size={16} /></Link>
          <Link href="#" className="hover:text-gray-300"><Linkedin size={16} /></Link>
          <Link href="#" className="hover:text-gray-300"><Instagram size={16} /></Link>
          <Link href="#" className="hover:text-gray-300"><Twitter size={16} /></Link>
        </div>
      </div>
    </div>
  );
};

export default TopBar;