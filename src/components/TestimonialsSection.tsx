import React from 'react';
import Image from 'next/image';
import { testimonials } from '@/utils/data/testimonials';

const TestimonialsSection: React.FC = () => {  
  return (
    <section className="bg-background-light py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-primary mb-8">What Our Readers Say</h2>

        <div className="flex py-3 overflow-x-auto space-x-4 no-scrollbar">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center space-y-4 min-w-[300px] hover:scale-105 transition-transform ease-in-out  duration-300 "
            >
              <Image
                src={testimonial.avatar}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full border-4 border-primary"
              />
              <div className="text-primary text-lg font-bold">{testimonial.name}</div>
              <div className="text-gray-600 text-sm italic">{testimonial.title}</div>
              <p className="text-gray-700 text-center">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
