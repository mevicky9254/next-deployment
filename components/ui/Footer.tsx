// components/ui/Footer.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Instagram, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#000] text-gray-300 pt-16 md:pt-24">
      <div className="container mx-auto px-4">
        {/* --- Main Footer Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-16">

          {/* Column 1: Company Info */}
          <div className="space-y-6">
            <Link href="/">
              <Image 
                src="/zovinity-logo-dark.png" // 
                alt="Zovinity Logo" 
                width={160} 
                height={45} 
              />
            </Link>
            <p className="text-sm leading-relaxed">
              We are a leading digital agency dedicated to empowering businesses by creating innovative, scalable, and impactful digital solutions that drive growth and success.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="p-2 bg-slate-800 hover:bg-cyan-500 rounded-full transition-colors"><Facebook size={20} /></Link>
              <Link href="#" className="p-2 bg-slate-800 hover:bg-cyan-500 rounded-full transition-colors"><Twitter size={20} /></Link>
              <Link href="#" className="p-2 bg-slate-800 hover:bg-cyan-500 rounded-full transition-colors"><Linkedin size={20} /></Link>
              <Link href="#" className="p-2 bg-slate-800 hover:bg-cyan-500 rounded-full transition-colors"><Instagram size={20} /></Link>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="#" className="hover:text-cyan-400 transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-cyan-400 transition-colors">Our Services</Link></li>
              <li><Link href="#" className="hover:text-cyan-400 transition-colors">Portfolio</Link></li>
              <li><Link href="#" className="hover:text-cyan-400 transition-colors">Insights (Blog)</Link></li>
              <li><Link href="#" className="hover:text-cyan-400 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 3: Our Services */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">Our Services</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="#" className="hover:text-cyan-400 transition-colors">Web Development</Link></li>
              <li><Link href="#" className="hover:text-cyan-400 transition-colors">App Development</Link></li>
              <li><Link href="#" className="hover:text-cyan-400 transition-colors">AI Integrations</Link></li>
              <li><Link href="#" className="hover:text-cyan-400 transition-colors">Brand Promotion</Link></li>
              <li><Link href="#" className="hover:text-cyan-400 transition-colors">UI/UX Design</Link></li>
            </ul>
          </div>

          {/* Column 4: Get in Touch */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">Get in Touch</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <MapPin size={20} className="text-cyan-400 mr-3 mt-1 flex-shrink-0" />
                <span>Gurugram, Haryana, India</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-cyan-400 mr-3" />
                <span>+91 6204853926</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-cyan-400 mr-3" />
                <a href="zovinityofficial@gmail.com" className="hover:text-cyan-400 transition-colors">zovinityofficial@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* --- Bottom Bar --- */}
        <div className="border-t border-slate-800 py-6">
          <p className="text-center text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Zovinity. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;