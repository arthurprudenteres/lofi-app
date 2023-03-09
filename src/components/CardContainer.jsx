import React from 'react'

function CardContainer({children}) {
  return (
    <div className="grid lg:grid-cols-3 grid-cols-2 lg:mt-20 mt-10 lg:gap-10 gap-5">
      {children}
    </div>
  )
}

export default CardContainer