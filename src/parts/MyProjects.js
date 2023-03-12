import React from 'react';

import { Fade } from "react-awesome-reveal";

import Button from 'elements/Button';

export default function MyProjects(props) {
  const projects = props.data;

  return (
    <section className='container pt-5' ref={props.refPortfolio}>
      <Fade direction='up' fraction={0} triggerOnce>
        <div className='d-flex align-items-center justify-content-center justify-content-md-between'>
          <h4 className='section-title text-center align-self-center mb-0'>Portfolio</h4>
          {
            props.isLandingPage ? (
              <Button type='link' href='/projects' className='btn btn-secondary d-none d-md-flex align-items-center justify-content-center'>More Portfolio</Button>
            ) : ''
          }
        </div>
        <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 mt-5 px-3 px-md-0'>
          {projects.map((item, index) => (
            <div className='col project-item' key={`project-${index}`}>
              <Fade direction='up' delay={300 * index} fraction={0} triggerOnce>
                <div className='card mb-3'>
                  <img src={item.thumbnail} className="card-img-top" alt={item.title} />
                  <div className="card-body">
                    <h5 className='card-title'>
                      {item.title}
                    </h5>
                    <p className='card-text'>{item.tag.map((n) => n.toUpperCase()).join(' | ')}</p>
                    <Button type='link' className='btn btn-sm btn-primary' hasShadow href={`/project/${item.slug}`}>
                      View Detail
                    </Button>
                  </div>
                </div>
              </Fade>
            </div>
          ))}
        </div>
        {
          props.isLandingPage ? (
            <div className='d-flex align-items-center justify-content-center mt-3 d-md-none'>
              <Button className='btn btn-secondary d-flex align-items-center justify-content-center' type='link' href='/projects'>More Portfolio</Button>
            </div>
          ) : ''
        }
      </Fade>
    </section>
  );
};