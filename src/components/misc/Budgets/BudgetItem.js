import React,{useState} from 'react'
import { TiDelete } from 'react-icons/ti';
import { deleteBudget,updateCost } from '../../api/BudgetAPI';
import AddTransactionForm from './AddTransactionForm';

const BudgetItem = (props) => {

  const [isEditing,setIsEditing] = useState(false);
  const [cost,setCost] = useState(props.item.budgetAmount);
  const [showForm,setShowForm] = useState(false);

  const onEdit = async() =>{
		if(isEditing){
			await updateCost(props.item.id,props.backend_url,props.bearerToken,cost)
			await props.onShow()
      await props.refreshFunction(props.userId,props.backend_url,props.bearerToken)
		}
		setIsEditing(!isEditing);
	}

  const onDelete = async() =>{
    await deleteBudget(props.backend_url,props.item.id)
    await props.onShow()
    await props.refreshFunction(props.userId,props.backend_url)
  } 


return (
  <div>
    <li className='list-group-item d-flex justify-content-between align-items-center'>	
    {props.item.subCategoryName} ({props.item.categoryName})
    <div>
      <span onDoubleClick={onEdit} className='badge-primary badge-pill mr-3'>
        Rs {props.item.amountSpent} | 
        {isEditing?
        <input required='required' Name='text' id='cost' 
        placeholder='cost' value={cost} 
        onChange={(event) => setCost(event.target.value)}></input>
        :<> {props.item.budgetAmount} </>}
      </span>
      <TiDelete size='1.5em' onClick={onDelete}></TiDelete>
      <button onClick={()=> setShowForm(!showForm)} className='btn btn-secondary col-sm'>
					Add
			</button>
    </div>
  </li>
  {showForm?<AddTransactionForm  
    accountOptions={props.accountOptions} 
    subAccountOptions={props.subAccountOptions} 
    expenseName={props.item.expenseName} 
    categoryName={props.item.categoryName} 
    subCategoryName={props.item.subCategoryName} 
    userId={props.userId} 
    backend_url={props.backend_url}/>:null}
  </div>
  
  )
}

export default BudgetItem 