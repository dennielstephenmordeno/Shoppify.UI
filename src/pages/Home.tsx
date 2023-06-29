import React from 'react';
import HeroSlider from '../components/common/HeroSlider';
import ClickableCard from '../components/common/ClickableCard';
import bgImage1 from '../assets/heroImage1.jpg';
import bgImage2 from '../assets/heroImage2.jpg';
import bgImage3 from '../assets/heroImage3.jpg';
import product1 from '../assets/product1.avif';
import product1a from '../assets/product2.avif';

const cardData = [
  {
    id: 1,
    name: 'Product 1',
    color: 'Red',
    price: 100,
    imageUrl: bgImage1,
    hoverImageUrl: bgImage2,
    size: 'xl' as const,
    topSeller: true,
  },
  {
    id: 2,
    name: 'Product 2',
    color: 'Red',
    price: 14.99,
    imageUrl: bgImage2,
    hoverImageUrl: bgImage3,
    size: 'small' as const,
  },
  {
    id: 3,
    name: 'Product 3',
    color: 'Red',
    price: 14.99,
    imageUrl: product1,
    hoverImageUrl: product1a,
    size: 'medium' as const,
  },
  {
    id: 4,
    name: 'Product 4',
    color: 'Red',
    price: 14.99,
    imageUrl: bgImage1,
    hoverImageUrl: bgImage2,
    size: 'large' as const,
  },
  // Add more card data objects as needed
];

export const Home = () => {
  return (
    <div>
      <HeroSlider />
      <div className="flex justify-center items-center h-screen">
        <div className="grid grid-cols-4 gap-2 md:gap-4 lg:gap-6">
          <div className="col-span-4 lg:col-span-1 row-span-2">
            <ClickableCard {...cardData[0]} />
          </div>
          <div className="col-span-2 lg:col-span-1 row-span-2">
            <ClickableCard {...cardData[1]} />
          </div>
          <div className="col-span-2 lg:col-span-2 row-span-3">
            <ClickableCard {...cardData[2]} />
          </div>
          <div className="col-span-3 lg:col-span-3 row-span-4">
            <ClickableCard {...cardData[3]} />
          </div>
          {/* Add more card components as needed */}
          {cardData.slice(4).map((card) => (
            <div
              key={card.id}
              className={`col-span-1 lg:col-span-1 ${
                card.size === 'small' ? 'row-span-2 sm:col-span-2 md:col-span-1' : 'row-span-3 sm:col-span-1 md:col-span-1'
              }`}
            >
              <ClickableCard {...card} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
