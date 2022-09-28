import React from 'react';

import { Fade } from "react-awesome-reveal";
import parse from 'html-react-parser';

export default function ProjectDetailDesc({desc, stacks}) {
  return (
    <section className='container'>
      <Fade direction='up' fraction={1} triggerOnce>
        <div className="row">
          <div className="col-8">
            <h5 className='mb-4'>About the project</h5>
            <span className="text-muted">{parse(desc)}</span>
          </div>
          <div className="col-4">
            <h5 className='mb-4'>Stacks:</h5>
            {
              stacks.map((item, index) => {
                return (
                  <span key={`stack-${index}`} className='stack'>
                    {item}
                  </span>
                )
              })
            }
          </div>
        </div>
      </Fade>
    </section>
  )
}