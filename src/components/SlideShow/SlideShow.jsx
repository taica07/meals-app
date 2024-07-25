'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

import burgerImg from '@/src/assets/burger.jpg';
import curryImg from '@/src/assets/curry.jpg';
import dumplingsImg from '@/src/assets/dumplings.jpg';
import macncheeseImg from '@/src/assets/macncheese.jpg';
import pizzaImg from '@/src/assets/pizza.jpg';
import schnitzelImg from '@/src/assets/schnitzel.jpg';
import tomatoSaladImg from '@/src/assets/tomato-salad.jpg';
import styles from './SlideShow.module.css';

const images = [
  { image: burgerImg, alt: 'A delicious, juicy burger' },
  { image: curryImg, alt: 'A delicious, spicy curry' },
  { image: dumplingsImg, alt: 'Steamed dumplings' },
  { image: macncheeseImg, alt: 'Mac and cheese' },
  { image: pizzaImg, alt: 'A delicious pizza' },
  { image: schnitzelImg, alt: 'A delicious schnitzel' },
  { image: tomatoSaladImg, alt: 'A delicious tomato salad' },
];

const SlideShow = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.slideshow}>
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.image}
          className={index === currentImageIndex ? styles.active : ''}
          alt={image.alt}
        />
      ))}
    </div>
  );
};

export default SlideShow;
