import React from "react";
import Link from "next/link";
import Image from "next/image";
import VR from "@/../public/VR.jpg";

const HeroSection: React.FC = () => {
  return (
    <section className="bg-primary text-white">
      <div className="container mx-auto px-4 py-20 flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Stay Ahead with <span className="text-secondary">Tech Chronicle</span>
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            Your daily dose of technology, innovations, and insights. Discover
            what's trending in the tech world today.
          </p>
          <div className="mt-6 flex justify-center lg:justify-start space-x-4">
            <Link
              href="/"
              className="bg-secondary text-white py-3 px-6 rounded hover:bg-opacity-90"
            >
              Explore Now
            </Link>
            <Link
              href="/"
              className="bg-accent text-white py-3 px-6 rounded hover:bg-opacity-90"
            >
              Subscribe
            </Link>
          </div>
        </div>

        <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center">
          <div className="w-full max-w-md">
            <div className="bg-background-light rounded-lg overflow-hidden shadow-lg">
              <Image
                height={250}
                width={400}
                src={VR}
                alt="Trending"
                className="w-full"
              />

              <div className="p-4">
                <h3 className="text-xl font-bold text-primary">
                  Latest Tech Innovations in 2025
                </h3>
                <p className="text-gray-600 mt-2">
                  Explore the cutting-edge advancements shaping the future of
                  technology. AI, quantum computing, and more...
                </p>
                <Link
                  href="/"
                  className="text-secondary mt-4 inline-block hover:underline"
                >
                  Read More →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
