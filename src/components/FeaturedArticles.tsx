import React from "react";
import Link from "next/link";
import Image from "next/image";
import { articles } from "@/utils/data/featuredArticles";

const FeaturedArticles: React.FC = () => {
  return (
    <section className="bg-background-light py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-primary mb-8 text-center">
          Featured Articles
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article: any) => (
            <div
              key={article.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              <Image
                src={article.image}
                className="w-full h-48 object-cover"
                alt="Article Image"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold text-primary">
                  {article.title}
                </h3>
                <p className="text-gray-600 mt-2">{article.description}</p>
                <Link
                  href={`/article/${article.id}`}
                  className="text-secondary mt-4 inline-block hover:underline"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedArticles;
