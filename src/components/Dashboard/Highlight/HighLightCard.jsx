import React from 'react'

const HighLightCard = ({children,title,value,unit}) => {
  return (
    <div className="highlight-card">
        <p className='title'>{title}</p>
        <div className='status'>
            <h2 className='number'>{value}</h2>
            <p className='unit'>{unit}</p>
        </div>
        <div className="footer">
           {children}
        </div>
    </div>
  )
}

export default HighLightCard