// app/components/ui/FaqSection.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqData = [
    {
        id: 1,
        question: "What core services does Zovinity provide?",
        answer: "Zovinity specializes in a wide range of digital services, including custom web development, mobile app development (for both iOS and Android), AI integrations and automation, and comprehensive brand promotion services like social media marketing and SEO."
    },
    {
        id: 2,
        question: "How does your web development process work?",
        answer: "Our process is collaborative and transparent. We start with a discovery phase to understand your goals, followed by UI/UX design, development, testing, and deployment. We ensure you are involved at every stage to deliver a product that perfectly matches your vision."
    },
    {
        id: 3,
        question: "Can you build mobile apps for both iOS and Android?",
        answer: "Yes! We have expert teams for both native iOS (Swift) and Android (Kotlin) development. We also offer cross-platform solutions using frameworks like React Native to build apps that run on both platforms from a single codebase, saving time and cost."
    },
    {
        id: 4,
        question: "How can AI integration benefit my business?",
        answer: "AI can revolutionize your business by automating repetitive tasks, providing data-driven insights, personalizing customer experiences with AI agents, and improving overall efficiency. We can help you identify and integrate the best AI solutions for your specific needs."
    },
    {
        id: 5,
        question: "Do you offer support and maintenance after a project is launched?",
        answer: "Absolutely. We believe in building long-term partnerships. We offer various support and maintenance packages to ensure your website or application remains secure, up-to-date, and performs optimally long after the initial launch."
    },
    {
        id: 6,
        question: "How long does it typically take to complete a project?",
        answer: "The timeline for a project varies depending on its complexity, features, and scope. A standard marketing website might take 4-8 weeks, while a complex web application or mobile app could take 3-6 months or more. We provide a detailed project timeline after the initial consultation."
    },
    {
        id: 7,
        question: "What technologies do you specialize in?",
        answer: "We are proficient in a modern tech stack including Next.js, React, Node.js, and Python for web development. For mobile, we use Swift and Kotlin. We also have expertise in databases like PostgreSQL and MongoDB, and various cloud and AI platforms."
    },
    {
        id: 8,
        question: "How do you handle SEO for a new website?",
        answer: "SEO is integrated into our development process from the start. We focus on technical SEO (site speed, mobile-friendliness, crawlability), on-page SEO (keyword research, content optimization), and provide strategies for off-page SEO to ensure your site ranks well on search engines."
    },
    {
        id: 9,
        question: "What is the estimated cost for your services?",
        answer: "Since every project is unique, we provide a custom quote after understanding your specific requirements. We offer a free, no-obligation consultation to discuss your project and provide a detailed proposal with transparent pricing."
    },
    {
        id: 10,
        question: "Why should I choose Zovinity over a freelance developer?",
        answer: "While freelancers can be great, Zovinity offers a dedicated team of experts—designers, developers, project managers, and marketers. This ensures higher quality, comprehensive support, on-time delivery, and a scalable solution that can grow with your business."
    }
];

// Reusable item component with updated styling
const FaqItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  // --- THIS IS THE ONLY PART THAT HAS CHANGED ---
  return (
    // We replaced the border-b with a card-like design: bg-white, rounded corners, padding, and shadow.
    <div className="bg-white rounded-xl shadow-md p-6 transition-shadow duration-300 hover:shadow-lg">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left text-gray-800"
      >
        <h3 className="text-lg font-medium">{question}</h3>
        {isOpen ? <Minus className="h-6 w-6 text-cyan-500" /> : <Plus className="h-6 w-6 text-gray-500" />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, marginTop: 0 }}
            animate={{ opacity: 1, height: 'auto', marginTop: '16px' }}
            exit={{ opacity: 0, height: 0, marginTop: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="text-gray-600 leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Main component (No changes here, but included for completeness)
const FaqSection = () => {
  return (
    <section className="bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-50 via-white to-white py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 mt-4 text-lg">
            Have questions? We've got answers. If you can't find what you're looking for, feel free to contact us.
          </p>
        </div>

        {/* The gap-y-6 here provides the vertical spacing between the new cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-6 max-w-6xl mx-auto mt-16">
          <div className="space-y-6"> {/* Increased spacing for the card design */}
            {faqData.slice(0, 5).map((faq) => (
              <FaqItem key={faq.id} question={faq.question} answer={faq.answer} />
            ))}
          </div>
          <div className="space-y-6"> {/* Increased spacing for the card design */}
            {faqData.slice(5, 10).map((faq) => (
              <FaqItem key={faq.id} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;