// components/ui/Hero.tsx
// import Link from 'next/link';
// import Image from 'next/image';

// const Hero = () => {
//   return (
//     <section className="relative h-screen bg-cover bg-center flex items-center justify-center text-white" >
//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black opacity-60"></div>
      
//       <div className="relative z-10 text-center px-4">
//         <p className="text-orange-400 font-semibold tracking-widest mb-4">
//           WEB DESIGNING COMPANY IN INDIA
//         </p>
//         <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 max-w-4xl mx-auto">
//           Where Innovation Meets Imagination
//         </h1>
//         <p className="text-base md:text-lg max-w-2xl mx-auto mb-8 text-gray-300">
//           We deliver smart, scalable, enterprise-ready web & mobile solutions that turn your ideas into a smart digital experience. Trusted by global businesses, we develop high-performing websites and apps built to engage users and scale with your growth.
//         </p>
//         <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
//           <Link href="#" className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-semibold py-3 px-8 rounded-md hover:opacity-90 transition-opacity text-lg">
//             Our Services
//           </Link>
//           <Link href="#" className="border-2 border-orange-400 text-white font-semibold py-3 px-8 rounded-md hover:bg-orange-400 hover:text-black transition-colors text-lg">
//             Talk To Experts
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

// components/ui/Hero.tsx
import Link from 'next/link';

const Hero = () => {
  return (
    // The section is relative to position its children (video, overlay, content)
    <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
      
      {/* Video Background */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <video
          autoPlay
          loop
          muted
          playsInline // Important for iOS devices
          className="w-full h-full object-cover"
        >
          <source src="/zovinity-hero-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
      
      {/* Hero Content */}
      <div className="relative z-20 text-center px-4 pt-12">
        <p className="text-cyan-400 font-semibold tracking-widest mb-4">
          One Stop Solution for Web Designing and Digital Marketing Services in India
        </p>
        <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 max-w-4xl mx-auto">
          Transforming Brands With Technology
        </h1>
        <p className="text-base md:text-lg max-w-2xl mx-auto mb-8 text-gray-300">
          We craft smart, scalable web and mobile solutions that elevate brands, engage users, and drive measurable digital growth. From high-performing websites to strategic social media brand promotions, we help businesses thrive online.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Link href="#" className="bg-gradient-to-r from-cyan-400 to-blue-600 text-white font-semibold py-3 px-8 rounded-md hover:opacity-90 transition-opacity text-lg">
            Our Services
          </Link>
          <Link href="#" className="border-2 border-cyan-400 text-white font-semibold py-3 px-8 rounded-md hover:bg-cyan-400 hover:text-gray-900 transition-colors text-lg">
            Discuss Your Ideas
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;