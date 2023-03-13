import React from 'react';

import { Fade } from "react-awesome-reveal";

import Button from 'elements/Button';

const Certificate = (props) => {
  const certificates = props.data;
  const base_url = process.env.REACT_APP_API_HOST;

  return (
    <section className='container pt-5' ref={props.refCertificate}>
      <Fade direction='up' fraction={0} triggerOnce>
        <div className='d-flex align-items-center justify-content-center justify-content-md-between'>
          <h4 className='section-title text-center text-md-start mb-0'>Certificate</h4>
          {
            props.isLandingPage ? (
              <Button className='btn btn-secondary px-4 d-none d-md-flex align-items-center justify-content-center' type='link' href='/wapsite/certificates'>
                More Certificate
              </Button>
            ) : ''
          }
        </div>
        <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 mt-5 px-3 px-md-0'>
          {certificates.map((item, index) => (
            <div className='col certificate-item' key={`certificate-${index}`}>
              <Fade direction='up' delay={200 * index} fraction={0} triggerOnce>
                <div className="card mb-3">
                  <img className='card-img-top' style={{cursor: 'pointer'}} src={`${base_url}/${item.imageUrl}`} alt={`certificate-${index}`} onClick={() => props.showModal(item)} />
                  <div className="card-body">
                    <h5 className='card-title'>
                      {item.name}
                    </h5>
                    <p className='card-text'>
                      {item.organization}
                      <br />
                      {item.date}
                    </p>
                    {
                      item.credentialUrl ? (
                        <Button type='link' className='btn btn-sm btn-primary' href={item.credentialUrl} hasShadow isExternal target='_blank'>Credential</Button>
                      ) : ''
                    }
                  </div>
                </div>
              </Fade>
            </div>
          ))}
        </div>
        {
          props.isLandingPage ? (
            <div className='d-flex align-items-center justify-content-center mt-3 d-md-none'>
              <Button className='btn btn-secondary px-4 d-flex align-items-center justify-content-center' type='link' href='/wapsite/certificates'>More Certificate</Button>
            </div>
          ) : ''
        }
      </Fade>
    </section>
  );
};

export default Certificate;
