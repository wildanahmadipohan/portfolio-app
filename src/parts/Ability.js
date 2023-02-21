import React, { useEffect, useState } from 'react';

import { Fade } from "react-awesome-reveal";
import { Carousel } from '@trendyol-js/react-carousel';
import ArrowCarousel from './ArrowCarousel';

const Ability = (props) => {
  const abilities = props.data;
  const {width} = useWindowSize();

  function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });

    useEffect(() => {
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
      // Add event listener
      window.addEventListener("resize", handleResize);
      // Call handler right away so state gets updated with initial window size
      handleResize();
      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
  }

  return width !== undefined ? (
    <section className='container pt-5' ref={props.refAbility}>
      <Fade direction='up' fraction={0} triggerOnce>
        <h4 className='section-title text-center text-md-start'>Ability</h4>
        {/* <Fade direction='up' delay={300 * index} fraction={0} triggerOnce> */}
        <div className='mt-5'>
          <Carousel show={(width < 768) ? (1.5) : (width < 992) ? (3.5) : (width >= 992) ? (5.5) : (6.5)} slide={2} transition={0.5} dynamic={true} infinite={true} swiping={true} rightArrow={<ArrowCarousel direction='right' />} leftArrow={<ArrowCarousel direction='left' />}>
            {abilities.map((item, index) => (
              <div className='col' key={`ability-${index}`}>
                  <div className='card ability-item p-3 d-flex justify-content-between align-items-center'>
                    <img src={`${process.env.REACT_APP_API_HOST}/${item.imageUrl}`} alt={item.name} />
                    <h6>{item.name}</h6>
                  </div>
              </div>
            ))}
          </Carousel>
        </div>
        {/* </Fade> */}
      </Fade>
    </section>
  )
  : '';
};

export default Ability;
