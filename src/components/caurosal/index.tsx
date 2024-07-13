

// // // import React, { FC } from "react";
// // // import Image from "next/image";
// // // import Link from 'next/link';


// // // const Caurosal = () => {
// // //     return (<section className="flex ">
// // //         <div className="relative flex min-h-screen flex-col items-center justify-center">
// // //   <div className="carousel scrollbar-hide flex w-full snap-x snap-mandatory gap-4 overflow-x-scroll scroll-smooth">
// // //     <div className="relative aspect-[1/1] w-[85%] shrink-0 snap-start snap-always rounded-xl bg-blue-200 md:w-[calc(33.33%-(32px/3))]">
// // //       <div className="absolute inset-0 flex items-center justify-center">
// // //         <div className="text-8xl font-bold text-white">1</div>
// // //       </div>
// // //     </div>

// // //     <div className="relative aspect-[1/1] w-[85%] shrink-0 snap-start snap-always rounded-xl bg-purple-200 md:w-[calc(33.33%-(32px/3))]">
// // //       <div className="absolute inset-0 flex items-center justify-center">
// // //         <div className="text-8xl font-bold text-white">2</div>
// // //       </div>
// // //     </div>

// // //     <div className="relative aspect-[1/1] w-[85%] shrink-0 snap-start snap-always rounded-xl bg-green-200 md:w-[calc(33.33%-(32px/3))]">
// // //       <div className="absolute inset-0 flex items-center justify-center">
// // //         <div className="text-8xl font-bold text-white">3</div>
// // //       </div>
// // //     </div>

// // //     <div className="relative aspect-[1/1] w-[85%] shrink-0 snap-start snap-always rounded-xl bg-yellow-200 md:w-[calc(33.33%-(32px/3))]">
// // //       <div className="absolute inset-0 flex items-center justify-center">
// // //         <div className="text-8xl font-bold text-white">4</div>
// // //       </div>
// // //     </div>

// // //     <div className="relative aspect-[1/1] w-[85%] shrink-0 snap-start snap-always rounded-xl bg-red-200 md:w-[calc(33.33%-(32px/3))]">
// // //       <div className="absolute inset-0 flex items-center justify-center">
// // //         <div className="text-8xl font-bold text-white">5</div>
// // //       </div>
// // //     </div>

// // //     <div className="relative aspect-[1/1] w-[85%] shrink-0 snap-start snap-always rounded-xl bg-orange-200 md:w-[calc(33.33%-(32px/3))]">
// // //       <div className="absolute inset-0 flex items-center justify-center">
// // //         <div className="text-8xl font-bold text-white">6</div>
// // //       </div>
// // //     </div>

// // //     <div className="relative aspect-[1/1] w-[85%] shrink-0 snap-start snap-always rounded-xl bg-teal-200 md:w-[calc(33.33%-(32px/3))]">
// // //       <div className="absolute inset-0 flex items-center justify-center">
// // //         <div className="text-8xl font-bold text-white">7</div>
// // //       </div>
// // //     </div>
// // //   </div>
  
// // //   <div className="pagination my-4 flex gap-2">
// // //     <span className="h-3 w-3 ease-out duration-300 rounded-full bg-black w-8"></span>
// // //     <span className="h-3 w-3 ease-out duration-300 rounded-full bg-black"></span>
// // //     <span className="h-3 w-3 ease-out duration-300 rounded-full bg-black"></span>
// // //     <span className="h-3 w-3 ease-out duration-300 rounded-full bg-black"></span>
// // //     <span className="h-3 w-3 ease-out duration-300 rounded-full bg-black"></span>
// // //     <span className="h-3 w-3 ease-out duration-300 rounded-full bg-black md:hidden"></span>
// // //     <span className="h-3 w-3 ease-out duration-300 rounded-full bg-black md:hidden"></span>
// // //   </div>
  
// // //   <div>
// // //     <button className="prev-btn bg-gray-200 p-2">Prev</button>
// // //     <button className="next-btn bg-gray-200 p-2">Next</button>
// // //   </div>
// // // </div> 
// // //     </section>)
// // // }

// // // export default Caurosal;

// // "use client"
// // import React, { useEffect, useRef } from 'react';

// // const testimonials = [
// //   {
// //     id: 1,
// //     name: 'Cleibert Mora',
// //     text: 'method of the Element interface parses the specified text as HTML or XML and inserts the resulting nodes into the DOM tree at a specified position. It does not reparse the element it is being used on, and thus it does not corrupt the existing elements',
// //     img: 'http://localhost:8888/wordpress/smartmedic/wp-content/uploads/2019/12/DSC_0188.jpg',
// //     company: 'BPA Directores',
// //   },
// //   // Repeat for other testimonials...
// // ];

// // const CarouselComponent = () => {
// //   const carouselRef = useRef(null);

// //   useEffect(() => {
// //     const elem = carouselRef.current;

// //     let cards = '';
// //     testimonials.forEach((el) => {
// //       let template = `
// //         <div class="card flex flex-col items-center shadow-lg w-2/3 bg-white p-5 m-3 text-center">
// //         <img src="${el.img}" class="rounded-full w-2/4 mb-6">
// //         <p>${el.text}</p>
// //         <p class="font-bold mt-4">${el.name} - ${el.company}</p>
// //         </div>
// //       `;
// //       cards += template;
// //     });

// //     elem.insertAdjacentHTML('beforeend', cards);

// //     const right = document.getElementById('carrousel-right');
// //     const left = document.getElementById('carrousel-left');

// //     right.addEventListener('click', () => {
// //       elem.scrollLeft += 800;
// //     });

// //     left.addEventListener('click', () => {
// //       elem.scrollLeft -= 800;
// //     });

// //     return () => {
// //       right.removeEventListener('click', () => {
// //         elem.scrollLeft += 800;
// //       });

// //       left.removeEventListener('click', () => {
// //         elem.scrollLeft -= 800;
// //       });
// //     };
// //   }, []);

// //   return (
// //     <div className="relative">
// //       <div ref={carouselRef} id="carrusel" className="flex flex-row overflow-x-auto mx-6"></div>

// //       <div
// //         id="carrousel-left"
// //         className="arrow absolute bg-blue-700 text-white p-3 shadow cursor-pointer hover:bg-blue-600"
// //       >
// //         <span className="lnr lnr-chevron-left"></span>
// //       </div>
// //       <div
// //         id="carrousel-right"
// //         className="arrow absolute right-0 bg-blue-700 text-white p-3 shadow cursor-pointer hover:bg-blue-600"
// //       >
// //         <span className="lnr lnr-chevron-right"></span>
// //       </div>
// //     </div>
// //   );
// // };

// // export default CarouselComponent;

// "use client"
// import { useState, useEffect, useRef } from 'react';
// import Image from 'next/image';
// // import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';

// interface CarouselItem {
//   image: string;
//   alt: string;
//   title: string;
//   description: string;
// }

// interface CarouselProps {
//   items: CarouselItem[];
// }

// const Carousel: React.FC<CarouselProps> = ({ items }) => {
//   const [current, setCurrent] = useState(0);
//   const length = items.length;
//   const timeoutRef = useRef<NodeJS.Timeout | null>(null);

//   useEffect(() => {
//     const nextSlide = () => {
//       setCurrent((current) => (current === length - 1 ? 0 : current + 1));
//     };

//     timeoutRef.current = setTimeout(nextSlide, 3000);

//     return () => {
//       if (timeoutRef.current) {
//         clearTimeout(timeoutRef.current);
//       }
//     };
//   }, [current, length]);

//   const nextSlide = () => {
//     if (timeoutRef.current) {
//       clearTimeout(timeoutRef.current);
//     }
//     setCurrent(current === length - 1 ? 0 : current + 1);
//   };

//   const prevSlide = () => {
//     if (timeoutRef.current) {
//       clearTimeout(timeoutRef.current);
//     }
//     setCurrent(current === 0 ? length - 1 : current - 1);
//   };

//   if (!Array.isArray(items) || items.length <= 0) {
//     return null;
//   }

//   return (
//     <div className="relative max-w-4xl mx-auto p-4">
//       <span
//         className="absolute top-1/2 left-8 text-3xl text-white cursor-pointer select-none z-10"
//         onClick={prevSlide}
//       >  Prev
//         </span>
//       <span
//         className="absolute top-1/2 right-8 text-3xl text-white cursor-pointer select-none z-10"
//         onClick={nextSlide}
//       >  Next
//         </span>
//       {items.map((item, index) => (
//         <div
//           className={`transition ease-in-out duration-1000 transform ${
//             index === current ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
//           }`}
//           key={index}
//         >
//           {index === current && (
//             <div className="bg-white rounded-lg shadow-lg overflow-hidden">
//               <Image src={item.image} alt={item.alt} width={800} height={400} />
//               <div className="p-4">
//                 <h2 className="text-2xl font-bold">{item.title}</h2>
//                 <p className="text-gray-700">{item.description}</p>
//               </div>
//             </div>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Carousel;

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


