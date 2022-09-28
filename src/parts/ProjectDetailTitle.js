import React from 'react'
import { Fade } from "react-awesome-reveal";

export default function ProjectDetailTitle({data}) {
  return (
    <div className="container mt-5 mb-4">
      <Fade direction='up' triggerOnce>
        <div className="row align-items-center">
          <div className="col text-center">
            <h1 className="h2">{data.title}</h1>
            <p className="text-muted">
              {
                data.categories.map((item) => item.toUpperCase()).join(' | ')
              }
            </p>
          </div>
        </div>
      </Fade>
    </div>
  )
}