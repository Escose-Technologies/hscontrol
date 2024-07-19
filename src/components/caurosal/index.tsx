"use client"
import { useEffect, useState, useRef } from 'react';
import styles from './Carousel.module.css'
import "./styles.css"

interface CarouselItem {
  image: string;
  title: string;
}

interface CarouselProps {
  items: CarouselItem[];
}

const Carousel : React.FC<CarouselProps> = ({ items }) => {
  const cCarouselInnerRef = useRef(null);
  const [leftValue, setLeftValue] = useState(0);
  const [totalMovementSize, setTotalMovementSize] = useState(0);
  const [carouselInnerWidth, setCarouselInnerWidth] = useState(0);

  useEffect(() => {
    const updateSizes = () => {
      const totalMovement =
        parseFloat(
          document.querySelector('.cCarousel-item').getBoundingClientRect().width,
          10
        ) +
        parseFloat(
          window.getComputedStyle(cCarouselInnerRef.current).getPropertyValue('gap'),
          10
        );
      setTotalMovementSize(totalMovement);
      setCarouselInnerWidth(cCarouselInnerRef.current.getBoundingClientRect().width);
    };

    updateSizes();
    window.addEventListener('resize', updateSizes);

    return () => {
      window.removeEventListener('resize', updateSizes);
    };
  }, []);

  const handlePrevClick = () => {
    if (leftValue !== 0) {
      setLeftValue(leftValue + totalMovementSize);
    }
  };

  const handleNextClick = () => {
    const carouselVpWidth = document.querySelector('#carousel-vp').getBoundingClientRect().width;
    if (carouselInnerWidth - Math.abs(leftValue) > carouselVpWidth) {
      setLeftValue(leftValue - totalMovementSize);
    }
  };

  useEffect(() => {
    const handleMediaChange = () => {
      const newViewportWidth = window.innerWidth;
      const oldViewportWidth = useRef(window.innerWidth);

      if (leftValue <= -totalMovementSize && oldViewportWidth.current < newViewportWidth) {
        setLeftValue(leftValue + totalMovementSize);
      } else if (
        leftValue <= -totalMovementSize &&
        oldViewportWidth.current > newViewportWidth
      ) {
        setLeftValue(leftValue - totalMovementSize);
      }

      oldViewportWidth.current = newViewportWidth;
    };

    const mediaQuery510 = window.matchMedia('(max-width: 510px)');
    const mediaQuery770 = window.matchMedia('(max-width: 770px)');

    mediaQuery510.addEventListener('change', handleMediaChange);
    mediaQuery770.addEventListener('change', handleMediaChange);

    return () => {
      mediaQuery510.removeEventListener('change', handleMediaChange);
      mediaQuery770.removeEventListener('change', handleMediaChange);
    };
  }, [leftValue, totalMovementSize]);

  useEffect(() => {
    cCarouselInnerRef.current.style.left = `${leftValue}px`;
  }, [leftValue]);

  return (
    <section className='.caurosal-container'>
      <div id="cCarousel">
        <div className="arrow" id="prev" onClick={handlePrevClick}>
          <i className="fa-solid fa-chevron-left"></i>
        </div>
        <div className="arrow" id="next" onClick={handleNextClick}>
          <i className="fa-solid fa-chevron-right"></i>
        </div>

        <div id="carousel-vp">
          <div id="cCarousel-inner" ref={cCarouselInnerRef} className={styles.carouselInner}>
            {items.map((card, index) => (
              <article className="cCarousel-item" key={index}>
                <img
                  src={card.image}
                  alt="Moon"
                />
                <div className="infos">
                  <h4 className='text-sm '>{card.title}</h4>
                  <button className='mb-2' type="button">See</button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Carousel;


