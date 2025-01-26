'use client';
import React from 'react';
import useFetchNews from '@/hooks/useFetchNews';
import Laptop from "@/../public/Laptop.jpg";


const LatestNewsSection: React.FC = () => {
  const { newsItems, loading, error } = useFetchNews();

  if (loading) {
    return (
      <section className="py-16 text-center">
        <h2 className="text-3xl font-bold text-primary">Loading Latest News...</h2>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-16 text-center">
        <h2 className="text-3xl font-bold text-primary">{error}</h2>
      </section>
    );
  }

  return (
    <section className="bg-background-light py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-primary mb-8 text-center">Latest News</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((news, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg hover:scale-105 ease-in-out transition  duration-300"
            >
              <img
                src={news.urlToImage ||  "@/../public/Laptop.jpg"}
                alt={news.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-secondary mb-2">{news.title}</h3>
                <p className="text-gray-700 text-sm mb-4">{news.description}</p>
                <div className="flex justify-between items-center text-gray-600 text-xs">
                  <span>{new Date(news.publishedAt).toLocaleDateString()}</span>
                  <a
                    href={news.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary font-semibold hover:underline"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestNewsSection;
