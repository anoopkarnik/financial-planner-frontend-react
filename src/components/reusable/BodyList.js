import React from 'react'
import BodyItem from './BodyItem'

const BodyList = ({records}) => {

    
  return (
    <ul className='list-group'>
      <div>
      {records.map((record) => (
          <BodyItem record={record}/>
      ))}</div>
      </ul>
  )
}

export default BodyList