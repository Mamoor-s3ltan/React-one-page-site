import React from 'react'
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import slide1 from '../assets/slide1.jpg'
import slide2 from '../assets/slide2.jpg'
import slide3 from '../assets/slide3.jpg'

const Hero = () => {

    const {t} = useTranslation();

    const images = [
  {
    src: slide1,
    text:  `${t('hero.title1')}`,
  },
  {
    src: slide2,
    text:  `${t('hero.title2')}`,
  },
  {
    src: slide3,
    text: `${t('hero.title3')}`,
  },
];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

 
    return (
        <section id="hero" className="relative w-full h-[90vh] overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100 z-20' : 'opacity-0 z-10'
          }`}
        >
          <img
            src={image.src}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
        
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <h1 className="text-white text-3xl md:text-5xl font-bold text-center px-4">
              {image.text}
            </h1>
          </div>
        </div>
      ))}
    </section>
  )
}

export default Hero