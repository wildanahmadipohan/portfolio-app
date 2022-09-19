import React from 'react';

import { Fade } from 'react-reveal';

import Button from 'elements/Button';

const MyProjects = (props) => {
  const projects = props.data;

  return (
    <section className='container pt-5' ref={props.refPortfolio}>
      <Fade bottom>
        <div className='d-flex align-items-center justify-content-center justify-content-md-between'>
          <h4 className='section-title text-center align-self-center mb-0'>Portfolio</h4>
          <Button type='link' href='/projects' className='btn btn-secondary btn-light px-4 d-none d-md-flex align-items-center'>More Portfolio</Button>
        </div>
        <div className='row row-cols-2 row-cols-md-2 row-cols-lg-4 mt-5'>
          {projects.map((item, index) => (
            <div className='col project-item' key={`project-${index}`}>
              <Fade bottom delay={300 * index}>
                <div className='card mb-3 p-2 p-md-4'>
                  <figure style={{ borderRadius: 15 }}>
                    <img src={item.thumbnail} alt={item.title} />
                  </figure>
                  <h5>{item.title}</h5>
                  <p>{item.categories.map((n) => n.toUpperCase()).join(' | ')}</p>
                </div>
              </Fade>
            </div>
          ))}
        </div>
        <div className='d-flex align-items-center justify-content-center mt-3 d-md-none'>
          <Button className='btn btn-secondary px-4 btn-light d-flex align-items-center' type='link' href='/projects'>More Portfolio</Button>
        </div>
      </Fade>
    </section>
  );
};

export default MyProjects;
