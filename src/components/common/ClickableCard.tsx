import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, Typography } from '@mui/material';

interface Props {
  id: number;
  name: string;
  color: string;
  price: number;
  imageUrl: string;
  hoverImageUrl: string;
  topSeller?: boolean;
  size?: 'small' | 'medium' | 'large' | 'xl';
}

const ClickableCard: React.FC<Props> = ({
  id,
  name,
  color,
  price,
  imageUrl,
  hoverImageUrl,
  topSeller = false,
  size = 'large',
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product/${id}`);
  };

  const getSizeDimensions = (size: Props['size']) => {
    switch (size) {
      case 'small':
        return { width: '200px', height: '300px', gridColumn: 'span 1', gridRow: 'span 2' };
      case 'medium':
        return { width: '250px', height: '350px', gridColumn: 'span 2', gridRow: 'span 3' };
      case 'large':
        return { width: '300px', height: '400px', gridColumn: 'span 3', gridRow: 'span 4' };
      case 'xl':
        return { width: '350px', height: '450px', gridColumn: 'span 4', gridRow: 'span 5' };
      default:
        return { width: '250px', height: '350px' };
    }
  };

  const cardStyle = {
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderRadius: '10px',
    ...getSizeDimensions(size),
  };

  const cardHoverStyle = {
    backgroundImage: `url(${hoverImageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderRadius: '10px',
    ...getSizeDimensions(size),
  };

  const cardContentClassName = `bg-gray-100/50 p-3 ${
    size === 'small' ? 'w-40' : size === 'medium' ? 'w-64' : size === 'large' ? 'w-80' : 'w-96'
  }`;

  return (
    <Card
      className={`cursor-pointer transform hover:scale-105 transition duration-300 ease-in-out ${
        size === 'small' ? 'col-span-1 row-span-2' : size === 'medium' ? 'col-span-2 row-span-3' : size === 'large' ? 'col-span-3 row-span-4' : 'col-span-4 row-span-5'
      }`}
      onClick={handleClick}
      style={cardStyle}
      elevation={3}
    >
      {topSeller && (
        <Typography
          variant="subtitle1"
          className="absolute top-2 right-2 bg-yellow-500 text-white font-bold py-1 px-2 rounded-md"
        >
          Top Seller
        </Typography>
      )}
      <CardContent
        className={cardContentClassName}
        style={cardStyle}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundImage = `url(${hoverImageUrl})`;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundImage = `url(${imageUrl})`;
        }}
      >
        <Typography variant="h5" component="h2" className="text-lg font-medium">
          {name}
        </Typography>
        <Typography variant="subtitle2" color="textSecondary" className="text-sm font-medium text-gray-600">
          Color: {color}
        </Typography>
        <Typography variant="subtitle2" color="textSecondary" className="text-sm font-medium text-gray-600">
          ${price}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ClickableCard;
