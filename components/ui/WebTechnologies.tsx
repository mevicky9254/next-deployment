// app/components/WebTechnologies.tsx
"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion"; // Import Variants type

const technologies = [
  { name: "Codeigniter", logo: "/logos/codeigniter.svg" },
  { name: "NestJs", logo: "/logos/nestjs.svg" },
  { name: "ExpressJS", logo: "/logos/expressjs.svg" },
  { name: "PHP", logo: "/logos/php.png" },
  { name: "Node", logo: "/logos/node-js.png" },
  { name: "Python", logo: "/logos/python.svg" },
  { name: "Wordpress", logo: "/logos/wordpress.png" },
  { name: "Shopify", logo: "/logos/shopify.png" },
  { name: "Woocommerce", logo: "/logos/woocommerce.svg" },
  { name: "Android", logo: "/logos/android.svg" },
  { name: "iOS", logo: "/logos/ios.svg" },
  { name: "MySQL", logo: "/logos/mysql.svg" },
  { name: "MongoDB", logo: "/logos/mongo-db.png" },
  { name: "MariaDB", logo: "/logos/mariadb.svg" },
  { name: "PostgreSQL", logo: "/logos/postgresql.svg" },
  { name: "Git hub", logo: "/logos/github.png" },
  { name: "Bit Bucket", logo: "/logos/bitbucket.png" },
  { name: "Git Lab", logo: "/logos/gitlab.png" },
  { name: "Figma", logo: "/logos/figma.png" },
];

const WebTechnologies = () => {
  const duplicatedTechnologies = [...technologies, ...technologies];

  // Corrected marqueeVariants structure
  const marqueeVariants: Variants = {
    animate: {
      x: [0, -192 * technologies.length], // Adjusted calculation for width (w-48)
      transition: {
        // Removed the unnecessary nesting under 'x'
        repeat: Infinity,
        repeatType: "loop",
        duration: 40, // You can adjust duration for speed
        ease: "linear",
      },
    },
  };

  return (
    <section className="py-12 bg-white sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-sm font-bold tracking-widest text-gray-500 uppercase">
            Expertise in Leading Technologies
          </h2>
          <p className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Accelerate Digital Growth with Our Web Expertise
          </p>
          <p className="max-w-2xl mx-auto mt-6 text-lg font-normal text-gray-600">
           From dynamic websites to feature-rich applications, we leverage cutting-edge technologies to create digital experiences that are powerful, functional, and effortlessly user-friendly.
          </p>
        </div>

        <div className="relative mt-12 overflow-x-hidden"> {/* Use overflow-x-hidden */}
          <motion.div
            className="flex"
            variants={marqueeVariants}
            animate="animate"
          >
            {duplicatedTechnologies.map((tech, index) => (
              <div key={index} className="flex-shrink-0 w-48 px-4"> {/* Use px-4 for spacing */}
                <div className="flex flex-col items-center justify-center h-32 p-4 border border-gray-200 rounded-lg shadow-sm">
                  <Image
                    src={tech.logo}
                    alt={tech.name}
                    width={64} // Adjusted size
                    height={64} // Adjusted size
                    className="object-contain"
                  />
                   <p className="mt-4 text-sm font-medium text-center text-gray-700">
                    {tech.name}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WebTechnologies;