// app/components/contact/ContactForm.tsx
"use client";

import { useState } from 'react';
import CustomDropdown from '../ui/CustomDropdown';
import { Phone, Mail, User, MessageSquare } from 'lucide-react';

const serviceOptions = [
  { value: 'web_development', label: 'Web Development' },
  { value: 'mobile_app_development', label: 'Mobile App Development' },
  { value: 'digital_marketing', label: 'Digital Marketing' },
  { value: 'ui_ux_design', label: 'UI/UX Design' },
  { value: 'cloud_solutions', label: 'Cloud Solutions' },
];

const ContactSection = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedService, setSelectedService] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({
      fullName,
      email,
      phone,
      selectedService,
      message,
    });
    alert('Form submitted! Check the console for data.');
  };

  return (
    <>
      {/* Add keyframes and styles for the WhatsApp button to your global CSS */}
      <style jsx global>{`
        .whatsapp-button {
          position: fixed;
          width: 50px;
          height: 50px;
          bottom: 20px;
          right: 20px;
          background-color: #25D366;
          color: #FFF;
          border-radius: 50px;
          text-align: center;
          font-size: 30px;
          box-shadow: 2px 2px 6px rgba(0,0,0,0.4);
          z-index: 100;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.3s ease;
        }

        .whatsapp-button:hover {
            transform: scale(1.1);
        }

        .whatsapp-button::before,
        .whatsapp-button::after {
          content: '';
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          border-radius: 50%;
          background-color: #25D366;
          z-index: -1;
          animation: pulse-wave 2.2s infinite ease-out;
        }

        .whatsapp-button::after {
          animation-delay: 1.1s;
        }
        
        @keyframes pulse-wave {
          0% {
            width: 100%;
            height: 100%;
            opacity: 0.8;
          }
          100% {
            width: 200%;
            height: 200%;
            opacity: 0;
          }
        }
      `}</style>
      
      <div className="relative bg-white font-sans">
        <div className="container mx-auto px-4 py-12 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
            
            {/* Left Section */}
            <div className="bg-cyan-600 text-white p-8 md:p-16 rounded-t-xl lg:rounded-l-xl lg:rounded-t-none relative overflow-hidden">
                <div className="absolute top-8 left-8">
                    <svg width="60" height="60" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M80 20C70 20 60 30 60 40C60 50 50 60 40 60H20" stroke="white" strokeWidth="2" strokeDasharray="4 4"/>
                    <path d="M25 55L20 60L15 55" stroke="white" strokeWidth="2"/>
                    </svg>
                </div>
                
                <div className="relative z-10">
                    <p className="text-sm font-semibold tracking-widest uppercase mb-4">REACH OUT</p>
                    <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                    Success Starts Here – Partner with Zovinity’s Experts
                    </h2>
                    <p className="text-cyan-100">
                    Ready to transform your business? Send us your inquiry, and our experts will reach out soon to craft the perfect digital solution for you.
                    </p>
                </div>

                <div className="absolute bottom-0  flex justify-between items-center px-8 pb-4 opacity-10 font-bold text-3xl select-none">
                    <span>YOUR  VISION,  OUR  EXPERTISE</span>
                    
                </div>
            </div>

            {/* Right Section - Form */}
            <div className="bg-white p-8 md:p-12 shadow-2xl rounded-b-xl lg:rounded-r-xl lg:rounded-b-none relative">
              <h3 className="text-3xl font-bold mb-8">
                Connect with our <span className="text-black">Digital</span> <br />
                <span className="text-cyan-500">Professionals</span>
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input type="text" placeholder="Full Name *" value={fullName} onChange={(e) => setFullName(e.target.value)} required className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"/>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <input type="email" placeholder="Enter Your Email *" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"/>
                  </div>
                  <div>
                    <input type="tel" placeholder="Enter phone number *" value={phone} onChange={(e) => setPhone(e.target.value)} required className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"/>
                  </div>
                </div>
                <div>
                  <CustomDropdown options={serviceOptions} value={selectedService} onChange={setSelectedService} placeholder="Select Service looking for"/>
                </div>
                <div>
                  <textarea placeholder="Leave a message" value={message} onChange={(e) => setMessage(e.target.value)} rows={4} className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"></textarea>
                </div>
                <div>
                  <button type="submit" className="w-full bg-cyan-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-cyan-600 transition-colors duration-300">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Animated WhatsApp Button */}
        <a 
          href="https://wa.me/6204853926" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="whatsapp-button"
          aria-label="Chat on WhatsApp"
        >
          <img 
            src="/whatsapp-icon.svg" 
            alt="Chat on WhatsApp"
            className="w-8 h-8"
          />
        </a>
      </div>
    </>
  );
};

export default ContactSection;