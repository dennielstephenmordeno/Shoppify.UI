import HeroSlider from '../components/common/HeroSlider';
import ClickableCard from '../components/common/ClickableCard';
import product1 from '../../assets/product1.avif';
import product2 from '../../assets/product2.avif';

const products = [
    {
      id: 1,
      name: 'Product 1',
      color: 'Red',
      price: 100,
      imageUrl: '../../assets/product1.avif',
      topSeller: true,
    },
    {
      id: 2,
      name: 'Product 2',
      color: 'Blue',
      price: 200,
      imageUrl: '../../assets/product2.avif',
    },
    {
      id: 3,
      name: 'Product 3',
      color: 'Green',
      price: 300,
      imageUrl: '../../assets/product1.avif',
    },
  ];

export const Home = () => {
    return (
        <div>
            <HeroSlider/>
            <div>
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
