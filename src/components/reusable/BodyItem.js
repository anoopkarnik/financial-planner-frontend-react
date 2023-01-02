import React from 'react'

const BodyItem = ({record}) => {
  return (
    <li className='list-group-item d-flex justify-content-between align-items-center'>
			{record.name}
			<div>
				<span className='badge-primary badge-pill mr-3'>
					Rs {record.cost}
				</span>
			</div>
    </li>
  )
}

export default BodyItem