import React,{useState,useEffect} from 'react'
import "react-datepicker/dist/react-datepicker.css";
import BodyList from '../reusable/BodyList';
import TopBoxData from '../reusable/TopBoxData';

const AccountsPage = (props) => {

  
  return (
    <div>
      {/* <div className='row mt-3'>
				<div className='col-sm'>
					<TopBoxData name={totalExpenses} value={props.expenses}/>
				</div>
			</div> */}
      <h3 className='mt-3 text-center'>Accounts</h3>
      <div className='row mt-3'>
				<div className='col-sm'>
					<BodyList records={props.subAccountOptions}/>
				</div>
		  </div>
      
    </div>
  )
}

export default AccountsPage