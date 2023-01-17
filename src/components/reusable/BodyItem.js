import React,{useState} from 'react'
import { TiDelete } from 'react-icons/ti';

const BodyItem = (props) => {

	const [isEditing,setIsEditing] = useState(false);
	const [balance,setBalance] = useState(props.record.cost);

	const onEdit = async() =>{
		if(props.name==="Accounts"){
			if(isEditing){
				await props.editFunction(props.record.id,props.backend_url,props.bearerToken,balance)
				await props.refreshFunction(props.userId,props.backend_url,props.bearerToken)
			}
			setIsEditing(!isEditing);
		}

	}

	const onDelete = async() =>{
		if(props.name==="Transactions"){
			await props.deleteFunction(props.backend_url,props.record.id)
			await props.refreshFunction(props.userId,props.backend_url,props.bearerToken,props.expenseTypes,
				props.accountTypes,	props.categoryTypes,props.subCategoryTypes,
				props.dateFrom,props.dateTo)
			}
		else if(props.name==="Accounts"){
			await props.deleteFunction(props.backend_url,props.bearerToken,props.record.id)
			await props.refreshFunction(props.userId,props.backend_url,props.bearerToken)
		}
	}
  return (
    <li className='list-group-item d-flex justify-content-between align-items-center'>
			
			{props.record.name}
			<div>
				<span onDoubleClick={onEdit} className='badge-primary badge-pill mr-3'>
					{isEditing?
						<input required='required' Name='text' 
							id='balance' placeholder='Balance' value={balance} 
							onChange={(event) => setBalance(event.target.value)}>
						</input>:
						<>Rs {props.record.cost}</>
					}
				</span>
				<TiDelete size='1.5em' onClick={onDelete}></TiDelete>
			</div>
    </li>
  )
}

export default BodyItem