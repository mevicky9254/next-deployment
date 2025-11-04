// app/components/ui/ContactSection.tsx
"use client";

import { useState } from "react";
import CustomDropdown from "./CustomDropdown";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    service: "", // This will be managed by the CustomDropdown
    message: "",
  });

  const serviceOptions = [
    { value: "web_development", label: "Web Development" },
    { value: "app_development", label: "App Development" },
    { value: "ai_integration", label: "AI Integration" },
    { value: "brand_promotion", label: "Brand Promotion" },
    { value: "other", label: "Other" },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleServiceChange = (value: string) => {
    setFormData((prev) => ({ ...prev, service: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.service) {
      alert("Please select a service.");
      return;
    }
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We will get in touch soon.");
    setFormData({ fullName: "", email: "", phone: "", service: "", message: "" });
  };

  return (
    <section className="relative w-full overflow-hidden bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[700px]">
          
          {/* Left Column: Blue Background with Text */}
          <div className="relative text-white p-8 md:p-12 lg:p-16 flex flex-col justify-center">
            {/* 
              BACKGROUND IMAGE PLACEHOLDER:
              Replace the bg-cyan-600 with your image. 
              Example: style={{ backgroundImage: 'url(/your-background-image.jpg)' }}
              Make sure to use a container div for the image to apply overlay effects.
            */}
            <div className="absolute inset-0 bg-cyan-600">
                {/* Optional: Add your background image here as an <Image> component with z-index */}
                {/* <Image src="/your-bg.jpg" layout="fill" objectFit="cover" alt="background" className="-z-10" /> */}
            </div>
            <div className="absolute inset-0 bg-black opacity-20"></div> {/* Optional overlay */}
            
            <div className="relative z-10">
                <p className="font-semibold tracking-widest uppercase mb-4 text-cyan-200">REACH OUT</p>
                <h2 className="text-4xl md:text-5xl font-bold font-serif leading-tight">
                    Partnering for Business Success - Let Our Experts Discover the Right Solutions!
                </h2>
                <p className="mt-6 text-cyan-100 max-w-lg">
                    Let's get started on your digital transformation journey. Submit your inquiry today and our experts will be in touch with you soon.
                </p>
                <div className="mt-12 flex space-x-8 text-2xl font-bold text-white/40">
                    <span>IND</span>
                    <span>AUS</span>
                    <span>USA</span>
                    <span>DXB</span>
                </div>
            </div>
          </div>
          
          {/* Right Column: White Form Card */}
          <div className="bg-white flex items-center justify-start p-8 md:p-12 lg:p-0">
            <div className="w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-gray-100 p-8 md:p-12 transform lg:-translate-x-24">
              <h3 className="text-3xl font-bold text-gray-800">
                Speak with our <span className="text-black">Digital</span> <span className="text-amber-500">Professionals</span>
              </h3>
              
              <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                <div>
                  <label htmlFor="fullName" className="sr-only">Full Name</label>
                  <input type="text" name="fullName" id="fullName" required placeholder="Full Name *" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500" value={formData.fullName} onChange={handleInputChange} />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="sr-only">Email</label>
                    <input type="email" name="email" id="email" required placeholder="Enter Your Email *" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500" value={formData.email} onChange={handleInputChange} />
                  </div>
                  <div>
                    <label htmlFor="phone" className="sr-only">Phone Number</label>
                    <input type="tel" name="phone" id="phone" required placeholder="Enter phone number *" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500" value={formData.phone} onChange={handleInputChange} />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="service" className="sr-only">Select Service</label>
                  <CustomDropdown
                    options={serviceOptions}
                    value={formData.service}
                    onChange={handleServiceChange}
                    placeholder="Select Service looking for *"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="sr-only">Message</label>
                  <textarea name="message" id="message" rows={4} placeholder="Leave a message" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500" value={formData.message} onChange={handleInputChange}></textarea>
                </div>
                
                <div>
                  <button type="submit" className="w-full bg-cyan-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-cyan-600 transition-colors duration-300">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default ContactSection;