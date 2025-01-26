import React from 'react';
import { FaRobot, FaShieldAlt, FaBitcoin, FaCode, FaMobileAlt, FaCloud } from 'react-icons/fa';

const CategoriesSection: React.FC = () => {
  // Categories Data
  const categories = [
    { id: 1, name: 'Artificial Intelligence', icon: <FaRobot size={30} /> },
    { id: 2, name: 'Cybersecurity', icon: <FaShieldAlt size={30} /> },
    { id: 3, name: 'Blockchain', icon: <FaBitcoin size={30} /> },
    { id: 4, name: 'Programming', icon: <FaCode size={30} /> },
    { id: 5, name: 'Mobile Tech', icon: <FaMobileAlt size={30} /> },
    { id: 6, name: 'Cloud Computing', icon: <FaCloud size={30} /> },

  ];

  return (
    <section className="bg-background py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-primary mb-8 text-center">
          Explore Categories
        </h2>

       <div className="flex justify-center"> <div className="flex overflow-x-auto space-x-4 no-scrollbar">
          {categories.map((category) => (
            <div
              key={category.id}
              className="min-w-[150px] bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center hover:bg-secondary hover:text-white transition-all duration-300"
            >
              <div className="text-primary mb-3">{category.icon}</div>
              <h3 className="text-lg font-semibold">{category.name}</h3>
            </div>
          ))}
        </div></div>
      </div>
    </section>
  );
};

export default CategoriesSection;
