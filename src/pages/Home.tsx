import HeroSlider from '../components/common/HeroSlider';
import ClickableCard from '../components/common/ClickableCard';
import bgImage1 from '../../assets/heroImage1.jpg';
import bgImage2 from '../../assets/heroImage2.jpg';
import bgImage3 from '../../assets/heroImage3.jpg';


const products = [
    {
      id: 1,
      name: 'Product 1',
      color: 'Red',
      price: 100,
      imageUrl: '../../assets/heroImage1.jpg',
      topSeller: true,
    },
    {
      id: 2,
      name: 'Product 2',
      color: 'Blue',
      price: 200,
      imageUrl: '../../assets/heroImage2.jpg',
    },
    {
      id: 3,
      name: 'Product 3',
      color: 'Green',
      price: 300,
      imageUrl: '../../assets/heroImage3.jpg',
    },
  ];

export const Home = () => {
    return (
        <div>
            <HeroSlider/>
            <div className='flex justify-center text-center'>
                {products.map((product) => (
                    <ClickableCard
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    color={product.color}
                    price={product.price}
                    imageUrl={product.imageUrl}
                    topSeller={product.topSeller}
                    />
                ))}
            </div>
        </div>
    );
}
