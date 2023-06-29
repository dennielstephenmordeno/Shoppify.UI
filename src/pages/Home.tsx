import HeroSlider from '../components/common/HeroSlider'
import ClickableCard from '../components/common/ClickableCard'
import bgImage1 from '../assets/heroImage1.jpg'
import bgImage2 from '../assets/heroImage2.jpg'
import bgImage3 from '../assets/heroImage3.jpg'
import product1 from '../assets/product1.avif'
import product1a from '../assets/product2.avif'
import shoe1 from '../assets/shoe1.jpg'
import shoe2 from '../assets/shoe2.jpg'
import shoe3 from '../assets/shoe3.jpg'
import shoe4 from '../assets/shoe4.jpg'
import shoe5 from '../assets/shoe5.jpg'

// const products = [
//     {
//       id: 1,
//       name: 'Product 1',
//       color: 'Red',
//       price: 100,
//       imageUrl: '../assets/heroImage1.jpg',
//       topSeller: true,
//     },
//     {
//       id: 2,
//       name: 'Product 2',
//       color: 'Blue',
//       price: 200,
//       imageUrl: '../assets/heroImage2.jpg',
//     },
//     {
//       id: 3,
//       name: 'Product 3',
//       color: 'Green',
//       price: 300,
//       imageUrl: '../assets/heroImage3.jpg',
//     },
//   ];

export const Home = () => {
    return (
        <div>
            <HeroSlider />
            <div className='flex justify-center items-center h-screen gap-3'>
                {/* {products.map((product) => (
                    <ClickableCard
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    color={product.color}
                    price={product.price}
                    imageUrl={product.imageUrl}
                    topSeller={product.topSeller}
                    />
                ))} */}
                <ClickableCard
                    id={2}
                    name='Product 2'
                    color='Red'
                    price={14.99}
                    imageUrl={shoe1}
                    hoverImageUrl={shoe1}
                    size='xl'
                />
                <ClickableCard
                    id={2}
                    name='Product 2'
                    color='Red'
                    price={14.99}
                    imageUrl={shoe3}
                    hoverImageUrl={shoe2}
                    size='small'
                />
                <ClickableCard
                    id={2}
                    name='Product 2'
                    color='Red'
                    price={14.99}
                    imageUrl={shoe4}
                    hoverImageUrl={shoe5}
                    size='large'
                />
                <ClickableCard
                    id={2}
                    name='Product 2'
                    color='Red'
                    price={14.99}
                    imageUrl={product1}
                    hoverImageUrl={product1a}
                    size='medium'
                />
            </div>
        </div>
    )
}
