import React from 'react';

import { Fade } from 'react-reveal';

const Ability = (props) => {
  const abilities = props.data;

  return (
    <section className='container pt-5' ref={props.refAbility}>
      <Fade bottom>
        <h4 className='section-title text-center text-md-start'>Ability</h4>
        <div className='row mt-5'>
          {abilities.map((item, index) => (
            <div className='col' key={`ability-${index}`}>
              <Fade bottom delay={300 * index}>
                <div className='card ability-item mb-3 p-3 d-flex justify-content-between align-items-center'>
                  <img src={item.icon} alt={item.name} />
                  <h6>{item.name}</h6>
                </div>
              </Fade>
            </div>
          ))}
        </div>
      </Fade>
    </section>
  );
};

export default Ability;
