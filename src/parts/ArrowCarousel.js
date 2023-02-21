import React from 'react'

const ArrowCarousel = (props) => {
  const { direction } = props;
  
  return direction === 'right' ? (
    <button className={`btn d-none d-md-block p-0 arrow-carousel right`}>
      &gt;
    </button>
  ) :
  (
    <button className={`btn d-none d-md-block p-0 arrow-carousel left`}>
      &lt;
    </button>
  )
}

export default ArrowCarousel