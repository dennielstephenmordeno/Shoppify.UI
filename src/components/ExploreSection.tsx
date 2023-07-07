import { Link } from 'react-router-dom';
import ClickableCard from './common/ClickableCard';
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
      size: 'xl' as const,
    },
    {
      id: 3,
      name: 'Product 3',
      color: 'Red',
      price: 14.99,
      imageUrl: product1,
      hoverImageUrl: product1a,
      size: 'xl' as const,
    },
    {
      id: 4,
      name: 'Product 4',
      color: 'Red',
      price: 14.99,
      imageUrl: bgImage1,
      hoverImageUrl: bgImage2,
      size: 'xl' as const,
    },
    // Add more card data objects as needed
  ];
const ExploreSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div>
            <ClickableCard {...cardData[0]} />
        </div>
        <div>
            <ClickableCard {...cardData[0]} />
        </div>
        <div>
            <ClickableCard {...cardData[0]} />
        </div>
        <div>
            <ClickableCard {...cardData[0]} />
        </div>
        <div>
            <ClickableCard {...cardData[0]} />
        </div>
        <div>
            <ClickableCard {...cardData[0]} />
        </div>
      </div>
      <div className="flex justify-end mt-4">
        <Link to="/products">
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md">
            Shop Now
          </button>
        </Link>
      </div>
    </section>
  );
};

export default ExploreSection;
