import React,{useState} from 'react'
import { TiDelete } from 'react-icons/ti';
import { deleteFunds,updateAmountNeeded,
  updateAmountAllocated } from '../../api/FundAPI';

const FundItem = (props) => {

  const [isEditingAllocated,setIsEditingAllocated] = useState(false);
  const [isEditingNeeded,setIsEditingNeeded] = useState(false);
  const [amountAllocated,setAmountAllocated] = useState(props.item.amountAllocated);
  const [amountNeeded,setAmountNeeded] = useState(props.item.amountNeeded);

  const onEditAllocated = async() =>{
		if(isEditingAllocated){
			await updateAmountAllocated(props.item.id,props.backend_url,amountAllocated)
      await props.refreshFunction(props.userId,props.backend_url)
		}
		setIsEditingAllocated(!isEditingAllocated);
	}

  const onEditNeeded = async() =>{
		if(isEditingNeeded){
			await updateAmountNeeded(props.item.id,props.backend_url,amountNeeded)
      await props.refreshFunction(props.userId,props.backend_url)
		}
		setIsEditingNeeded(!isEditingNeeded);
	}

  const onDelete = async() =>{
    await deleteFunds(props.backend_url,props.item.id)
    await props.refreshFunction(props.userId,props.backend_url)
  } 


return (
    <li className='list-group-item d-flex justify-content-between align-items-center'>	
    {props.item.name}
    <div>
    <span onDoubleClick={onEditAllocated} className='badge-primary badge-pill mr-3'>
        {isEditingAllocated?
        <input required='required' Name='text' id='amountAllocated' 
        placeholder='amountAllocated' value={amountAllocated} 
        onChange={(event) => setAmountAllocated(event.target.value)}></input>
        :<> {props.item.amountAllocated} </>}
      </span>
    | 
      <span onDoubleClick={onEditNeeded} className='badge-primary badge-pill mr-3'>
        {isEditingNeeded?
        <input required='required' Name='text' id='amountNeeded' 
        placeholder='amountNeeded' value={amountNeeded} 
        onChange={(event) => setAmountNeeded(event.target.value)}></input>
        :<> {props.item.amountNeeded} </>}
      </span>
      <TiDelete size='1.5em' onClick={onDelete}></TiDelete>
    </div>
  </li>
  )
}

export default FundItem;