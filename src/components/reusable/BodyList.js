import React from 'react'
import BodyItem from './BodyItem'

const BodyList = (props) => {

    
  return (
    <ul className='list-group'>
      <div>
      {props.records.map((record) => (
          <BodyItem name={props.name} record={record} deleteFunction={props.deleteFunction} 
          refreshFunction={props.refreshFunction} editFunction={props.editFunction}
          userId={props.userId} backend_url={props.backend_url} expenseTypes={props.expenseTypes} 
          accountTypes={props.accountTypes} categoryTypes={props.categoryTypes} 
          subCategoryTypes={props.subCategoryTypes} subAccountTypes={props.subAccountTypes} 
          dateFrom={props.dateFrom} dateTo={props.dateTo} 
          bearerToken={props.bearerToken}/>
      ))}</div>
      </ul>
  )
}

export default BodyList