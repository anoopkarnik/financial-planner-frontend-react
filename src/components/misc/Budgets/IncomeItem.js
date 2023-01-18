import React,{useState,useContext} from 'react'
import { TiDelete } from 'react-icons/ti';
import { deleteIncome} from '../../api/BudgetAPI';
import AddTransactionForm from './AddTransactionForm';
import { UserContext } from '../../../context/UserContext';

const IncomeItem = (props) => {

  const {user, setUser} = useContext(UserContext);


  const onDelete = async() =>{
    await deleteIncome(props.backend_url,'Bearer '+user.accessToken,props.id)
    await props.refreshFunction(user.id,props.backend_url,'Bearer '+user.accessToken)
  } 


return (
  <li className='list-group-item d-flex justify-content-between align-items-center'>
   {props.name}
			<div>
				<span className='badge-primary badge-pill mr-3'>
          Rs {props.income}
				</span>
				<TiDelete size='1.5em' onClick={onDelete}></TiDelete>
			</div>
  </li>
  
  )
}

export default IncomeItem 