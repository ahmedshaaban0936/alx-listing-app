import React from 'react';

interface CardProps {
  title: string;
  description: string;
  image: string;
}

const Card: React.FC<CardProps> = ({ title, description, image }) => {
  return (
    <div className="border p-4 rounded-lg shadow-lg">
      <img src={image} alt={title} className="w-full h-64 object-cover rounded-lg" />
      <h2 className="text-xl font-bold mt-4">{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Card;
