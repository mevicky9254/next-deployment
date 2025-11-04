

import Hero from '@/components/ui/Hero';
import PortfolioSlider from "@/components/ui/PortfolioSlider";
import { CheckCircle2 } from "lucide-react";

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


      <PortfolioSlider />
    </>
  );
}

