import React from 'react'
import { Fade } from "react-awesome-reveal";

export default function ProjectDetailImages({data}) {
  const base_url = process.env.REACT_APP_API_HOST;

  return (
    <section className="container project-detail__image">
      <div className="container-grid sm">
        {
          data.map((item, index) => {
            return (
              <div key={`project-image-${index}`} className={`item ${index > 0 ? 'column-6 column-md-4 row-1' : 'column-12 column-md-8 row-2'}`}>
                <Fade direction='up' delay={300 * index} triggerOnce>
                  <div className="card h-100">
                    <figure className="img-wrapper">
                      <img src={`${base_url}/${item.url}`} alt={item.id} className="img-cover" />
                    </figure>
                  </div>
                </Fade>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}