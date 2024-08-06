import React from 'react';

const images = [
  'https://via.placeholder.com/1920x1080?text=Image+1',
  'https://via.placeholder.com/1920x1080?text=Image+2',
  'https://via.placeholder.com/1920x1080?text=Image+3',
  'https://via.placeholder.com/1920x1080?text=Image+4',
];

const Home_page = () => {
  return (
    <div className="overflow-hidden whitespace-nowrap w-full h-screen">
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Slide ${index + 1}`}
          className="inline-block w-full h-screen object-cover"
        />
      ))}
    </div>
  );
};

export default Home_page;
