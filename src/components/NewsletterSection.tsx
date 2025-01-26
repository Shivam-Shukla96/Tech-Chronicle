import React from 'react';

const NewsletterSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-primary to-secondary py-16 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
        <p className="text-lg mb-8">
          Stay updated with the latest tech trends, insights, and innovations delivered directly to your inbox.
        </p>
        <form className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full md:w-1/2 px-4 py-3 rounded-md text-primary focus:outline-none"
          />
          <button
            type="submit"
            className="bg-white text-secondary font-semibold px-6 py-3 rounded-md hover:bg-opacity-90 transition"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSection;
