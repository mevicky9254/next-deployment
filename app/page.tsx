

import Hero from '@/components/ui/Hero';
import PortfolioSlider from "@/components/ui/PortfolioSlider";
import WebTechnologies from "@/components/ui/WebTechnologies";
import { Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import FaqSection from "@/components/ui/FaqSection";
import ContactSection from '@/components/ui/ContactSection';
import {
  ShoppingCart,
  Plane,
  HeartHandshake,
  Building2,
  GraduationCap,
  Truck,
  Lightbulb,
  Umbrella,
  FolderKanban,
  Factory,
} from "lucide-react";

export default function Home() {
  return (
    <>
      <Hero />
      {/* ============== START: THEME-UPDATED EMPOWERING BUSINESS SECTION ============== */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* --- Left Column: Text Content --- */}
            <div>
              {/* THEME UPDATE: Color changed to cyan */}
              <p className="text-cyan-500 font-semibold tracking-wider mb-4">
                YOUR BEST PARTNER IN DIGITAL GROWTH
              </p>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 leading-tight">
                Empowering Businesses with Zovinity’s Digital Excellence
              </h2>
              <p className="text-gray-600 mt-6 text-base leading-relaxed">
                At Zovinity, we help businesses grow through innovative web, mobile, and digital solutions. As a leading web designing company in India, we blend creativity, technology, and strategy to deliver scalable websites, apps, and digital marketing that drive success.
              </p>
            </div>

            {/* --- Right Column: Stats Grid --- */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Stat Card 1 */}
              <div className="bg-gray-100 rounded-2xl p-8 text-center shadow-sm">
                {/* THEME UPDATE: Color changed to cyan */}
                <span className="text-5xl font-bold text-cyan-500">100+</span>
                <p className="text-gray-700 mt-2 font-medium">Project Delivered</p>
              </div>

              {/* Stat Card 2 */}
              <div className="bg-white border border-gray-200 rounded-2xl p-8 text-center">
                {/* THEME UPDATE: Color changed to cyan */}
                <span className="text-5xl font-bold text-cyan-500">10+</span>
                <p className="text-gray-700 mt-2 font-medium">Countries Served</p>
              </div>

              {/* Stat Card 3 */}
              <div className="bg-white border border-gray-200 rounded-2xl p-8 text-center">
                {/* THEME UPDATE: Color changed to cyan */}
                <span className="text-5xl font-bold text-cyan-500">98%</span>
                <p className="text-gray-700 mt-2 font-medium">Customer Retention</p>
              </div>

              {/* Stat Card 4 */}
              <div className="bg-gray-100 rounded-2xl p-8 text-center shadow-sm">
                {/* THEME UPDATE: Color changed to cyan */}
                <span className="text-5xl font-bold text-cyan-500">2+ Yrs</span>
                <p className="text-gray-700 mt-2 font-medium">In Industry</p>
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* ============== END: THEME-UPDATED EMPOWERING BUSINESS SECTION ============== */}


      {/* ============== START: NEW CORE SERVICES SECTION ============== */}
      <section className="bg-[#0f172a] text-white py-16 md:py-24">
        <div className="container mx-auto px-4">

          {/* --- Section Header --- */}
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight">
              Our Core Services
            </h2>
          </div>

          {/* --- Main Services Grid --- */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

            {/* Card 1: App Development */}
            <div className="bg-slate-800/60 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 flex flex-col hover:border-cyan-400 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-4">App Development</h3>
              <p className="text-gray-400 mb-6 flex-grow">Native and cross-platform mobile applications that deliver exceptional user experiences across all devices.</p>
              <ul className="space-y-3 mb-8 text-gray-300">
                <li className="flex items-center"><CheckCircle2 size={20} className="text-cyan-400 mr-3" /> iOS Development</li>
                <li className="flex items-center"><CheckCircle2 size={20} className="text-cyan-400 mr-3" /> Android Development</li>
                <li className="flex items-center"><CheckCircle2 size={20} className="text-cyan-400 mr-3" /> Cross-Platform Apps</li>
              </ul>
              <a href="#" className="mt-auto block text-center w-full bg-slate-700 hover:bg-cyan-500 text-white font-semibold py-3 px-6 rounded-lg transition-colors">Learn More</a>
            </div>

            {/* Card 2: Web Development */}
            <div className="relative bg-slate-800/60 backdrop-blur-sm border-2 border-cyan-500 rounded-2xl p-8 flex flex-col shadow-lg shadow-cyan-500/10">
              <div className="absolute top-0 right-0 bg-gradient-to-r from-cyan-400 to-blue-600 text-white text-xs font-bold py-1 px-4 rounded-tr-2xl rounded-bl-2xl">Most Popular</div>
              <h3 className="text-2xl font-bold mb-4">Web Development</h3>
              <p className="text-gray-400 mb-6 flex-grow">Modern, responsive websites built with cutting-edge tech for optimal performance and user experience.</p>
              <ul className="space-y-3 mb-8 text-gray-300">
                <li className="flex items-center"><CheckCircle2 size={20} className="text-cyan-400 mr-3" /> Frontend Development</li>
                <li className="flex items-center"><CheckCircle2 size={20} className="text-cyan-400 mr-3" /> Backend Development</li>
                <li className="flex items-center"><CheckCircle2 size={20} className="text-cyan-400 mr-3" /> Full-Stack Solutions</li>
              </ul>
              <a href="#" className="mt-auto block text-center w-full bg-gradient-to-r from-cyan-400 to-blue-600 hover:opacity-90 text-white font-semibold py-3 px-6 rounded-lg transition-opacity">Get Started Now</a>
            </div>

            {/* Card 3: AI Integrations */}
            <div className="bg-slate-800/60 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 flex flex-col hover:border-cyan-400 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-4">AI Integrations</h3>
              <p className="text-gray-400 mb-6 flex-grow">Professional UI/UX design services to create stunning, user-centered digital products.</p>
              <ul className="space-y-3 mb-8 text-gray-300">
                <li className="flex items-center"><CheckCircle2 size={20} className="text-cyan-400 mr-3" /> AI Agent Creation</li>
                <li className="flex items-center"><CheckCircle2 size={20} className="text-cyan-400 mr-3" /> Workflow Automation</li>
                <li className="flex items-center"><CheckCircle2 size={20} className="text-cyan-400 mr-3" /> API Integration</li>
              </ul>
              <a href="#" className="mt-auto block text-center w-full bg-slate-700 hover:bg-cyan-500 text-white font-semibold py-3 px-6 rounded-lg transition-colors">Learn More</a>
            </div>
          </div>

          {/* --- Brand Promotion Sub-section --- */}
          <div className="text-center max-w-3xl mx-auto mt-24">
            <h3 className="text-3xl font-serif font-bold leading-tight">
              Brand Promotion Services
            </h3>
          </div>

          {/* --- Promotion Services Grid --- */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">

            {/* Card 4: Instagram */}
            <div className="bg-slate-800/60 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 flex flex-col hover:border-pink-500 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-4">Instagram Promotions</h3>
              <p className="text-gray-400 mb-6 flex-grow">Boost your brand visibility with strategic Instagram campaigns, reels, and stories.</p>
              <ul className="space-y-3 mb-8 text-gray-300">
                <li className="flex items-center"><CheckCircle2 size={20} className="text-pink-500 mr-3" /> Targeted Ads</li>
                <li className="flex items-center"><CheckCircle2 size={20} className="text-pink-500 mr-3" /> Influencer Collaborations</li>
                <li className="flex items-center"><CheckCircle2 size={20} className="text-pink-500 mr-3" /> Content Strategy</li>
              </ul>
              <a href="#" className="mt-auto block text-center w-full bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">Promote on Instagram</a>
            </div>

            {/* Card 5: Facebook */}
            <div className="bg-slate-800/60 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 flex flex-col hover:border-blue-500 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-4">Facebook Marketing</h3>
              <p className="text-gray-400 mb-6 flex-grow">Reach a global audience with data-driven Facebook ads and engagement tactics.</p>
              <ul className="space-y-3 mb-8 text-gray-300">
                <li className="flex items-center"><CheckCircle2 size={20} className="text-blue-500 mr-3" /> Page Management</li>
                <li className="flex items-center"><CheckCircle2 size={20} className="text-blue-500 mr-3" /> Lead Generation</li>
                <li className="flex items-center"><CheckCircle2 size={20} className="text-blue-500 mr-3" /> Audience Retargeting</li>
              </ul>
              <a href="#" className="mt-auto block text-center w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">Promote on Facebook</a>
            </div>

            {/* Card 6: YouTube */}
            <div className="bg-slate-800/60 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 flex flex-col hover:border-red-500 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-4">YouTube Campaigns</h3>
              <p className="text-gray-400 mb-6 flex-grow">Create high-conversion YouTube campaigns with captivating video content.</p>
              <ul className="space-y-3 mb-8 text-gray-300">
                <li className="flex items-center"><CheckCircle2 size={20} className="text-red-500 mr-3" /> Video Ads</li>
                <li className="flex items-center"><CheckCircle2 size={20} className="text-red-500 mr-3" /> SEO Optimization</li>
                <li className="flex items-center"><CheckCircle2 size={20} className="text-red-500 mr-3" /> Channel Growth</li>
              </ul>
              <a href="#" className="mt-auto block text-center w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">Boost on YouTube</a>
            </div>
          </div>

        </div>
      </section>
      {/* ============== END: NEW CORE SERVICES SECTION ============== */}

      <WebTechnologies />

      <PortfolioSlider />

      {/* ================================================================== */}
      {/* START: MODIFIED Let's Build Your Next Project (CTA Section)      */}
      {/* ================================================================== */}
      <section className="bg-gradient-to-r from-cyan-400 to-blue-600 text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">

            {/* Left Column: Video */}
            <div className="py-12 lg:py-0">
              <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-2xl shadow-2xl">
                <video
                  className="h-full w-full object-cover"
                  src="/contact-us-video.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>

            {/* Right Column: Text Content */}
            <div className="py-12 text-center text-white lg:py-20 lg:text-left">
              <h1 className="text-4xl font-bold leading-tight sm:text-3xl lg:text-5xl">
                Let&apos;s Build Your Next Project With Us
              </h1>
              <p className="mt-4 text-m text-gray-100">
                Need a new website or want to upgrade your existing one? Share
                your idea with us. We are here to guide you thoroughly.
                Let&apos;s connect & get started.
              </p>
              <div className="mt-6">
                <Link href="/contact">
                  <button className="rounded-lg bg-white px-8 py-3.5 font-semibold text-cyan-600 transition hover:bg-gray-200">
                    Contact Now
                  </button>
                </Link>
              </div>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-4 lg:justify-start">
                <div className="flex items-center gap-2">
                  <Image src="/indian-flag.svg" alt="India flag" width={24} height={24} />
                  <span className="font-medium">+91 6204853926</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  <a href="mailto:zovinityofficial@gmail.com" className="font-medium hover:underline">
                    zovinityofficial@gmail.com
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* ================================================================== */}
      {/* END: CTA Section                                                   */}
      {/* ================================================================== */}



      {
        /* ============== START: INDUSTRIES WE SERVE SECTION ============== */
      }
      <section className="bg-black text-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* --- Section Header --- */}
          <div className="text-center max-w-5xl mx-auto">
            <p className="font-semibold text-cyan-400 tracking-widest mb-4">
              INDUSTRIES WE PROUDLY SERVE
            </p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight">
              Smart Digital Solutions for Every Sector
            </h2>
            <p className="text-gray-400 mt-6 text-base leading-relaxed">
              We believe every industry is unique and deserves tailored digital solutions to thrive. At Zovinity, our web design and development services in India help businesses across sectors overcome challenges, drive growth, and achieve their goals.
            </p>
          </div>

          {/* --- Industries Grid --- */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-16">
            {/* Card 1: Ecommerce */}
            <div className="group bg-gray-900/50 border border-gray-800 rounded-2xl p-6 flex flex-col items-center justify-center text-center transition-all duration-300 hover:bg-gray-800 hover:border-cyan-500">
              <ShoppingCart
                size={48}
                className="text-gray-500 transition-colors group-hover:text-cyan-400"
              />
              <p className="mt-4 font-semibold text-gray-300">Ecommerce</p>
            </div>

            {/* Card 2: Travel & Hospitality */}
            <div className="group bg-gray-900/50 border border-gray-800 rounded-2xl p-6 flex flex-col items-center justify-center text-center transition-all duration-300 hover:bg-gray-800 hover:border-cyan-500">
              <Plane
                size={48}
                className="text-gray-500 transition-colors group-hover:text-cyan-400"
              />
              <p className="mt-4 font-semibold text-gray-300">
                Travel & Hospitality
              </p>
            </div>

            {/* Card 3: Media */}
            <div className="group bg-gray-900/50 border border-gray-800 rounded-2xl p-6 flex flex-col items-center justify-center text-center transition-all duration-300 hover:bg-gray-800 hover:border-cyan-500">
              <FolderKanban
                size={48}
                className="text-gray-500 transition-colors group-hover:text-cyan-400"
              />
              <p className="mt-4 font-semibold text-gray-300">Media</p>
            </div>

            {/* Card 4: Real Estate & Construction */}
            <div className="group bg-gray-900/50 border border-gray-800 rounded-2xl p-6 flex flex-col items-center justify-center text-center transition-all duration-300 hover:bg-gray-800 hover:border-cyan-500">
              <Building2
                size={48}
                className="text-gray-500 transition-colors group-hover:text-cyan-400"
              />
              <p className="mt-4 font-semibold text-gray-300">
                Real Estate & Construction
              </p>
            </div>

            {/* Card 5: Education */}
            <div className="group bg-gray-900/50 border border-gray-800 rounded-2xl p-6 flex flex-col items-center justify-center text-center transition-all duration-300 hover:bg-gray-800 hover:border-cyan-500">
              <GraduationCap
                size={48}
                className="text-gray-500 transition-colors group-hover:text-cyan-400"
              />
              <p className="mt-4 font-semibold text-gray-300">Education</p>
            </div>

            {/* Card 6: Logistics */}
            <div className="group bg-gray-900/50 border border-gray-800 rounded-2xl p-6 flex flex-col items-center justify-center text-center transition-all duration-300 hover:bg-gray-800 hover:border-cyan-500">
              <Truck
                size={48}
                className="text-gray-500 transition-colors group-hover:text-cyan-400"
              />
              <p className="mt-4 font-semibold text-gray-300">Logistics</p>
            </div>

            {/* Card 7: Fintech */}
            <div className="group bg-gray-900/50 border border-gray-800 rounded-2xl p-6 flex flex-col items-center justify-center text-center transition-all duration-300 hover:bg-gray-800 hover:border-cyan-500">
              <Lightbulb
                size={48}
                className="text-gray-500 transition-colors group-hover:text-cyan-400"
              />
              <p className="mt-4 font-semibold text-gray-300">Fintech</p>
            </div>

            {/* Card 8: Insurance */}
            <div className="group bg-gray-900/50 border border-gray-800 rounded-2xl p-6 flex flex-col items-center justify-center text-center transition-all duration-300 hover:bg-gray-800 hover:border-cyan-500">
              <Umbrella
                size={48}
                className="text-gray-500 transition-colors group-hover:text-cyan-400"
              />
              <p className="mt-4 font-semibold text-gray-300">Insurance</p>
            </div>


            {/* Card 9: Healthcare */}
            <div className="group bg-gray-900/50 border border-gray-800 rounded-2xl p-6 flex flex-col items-center justify-center text-center transition-all duration-300 hover:bg-gray-800 hover:border-cyan-500">
              <HeartHandshake
                size={48}
                className="text-gray-500 transition-colors group-hover:text-cyan-400"
              />
              <p className="mt-4 font-semibold text-gray-300">Fitness & Healthcare Sector</p>
            </div>

            {/* Card 10: Manufacturing */}
            <div className="group bg-gray-900/50 border border-gray-800 rounded-2xl p-6 flex flex-col items-center justify-center text-center transition-all duration-300 hover:bg-gray-800 hover:border-cyan-500">
              <Factory
                size={48}
                className="text-gray-500 transition-colors group-hover:text-cyan-400"
              />
              <p className="mt-4 font-semibold text-gray-300">Manufacturing</p>
            </div>
          </div>
        </div>
      </section>;

      <FaqSection />
      <ContactSection />
    </>
  );
}

