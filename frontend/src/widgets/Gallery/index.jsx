import React from 'react'
import { rows } from '../../utils/mockData'

const Gallery = () => {
  return (
    <div>
        {rows.map((item)=>(
            <div key={item.id}>{item.title}</div>
        ))}
    </div>
  )
}

export default Gallery