import React,{useState} from 'react'
import { updatePlanPercentage } from '../api/BudgetAPI';



const TopBoxPercentage = (props) => {

  const [isEditing,setIsEditing] = useState(false);
  const [planPercentage,setPlanPercentage] = useState(props.value2);

  const onEdit = async() =>{
		if(isEditing){
			await updatePlanPercentage(props.id,props.backend_url,planPercentage)
			await props.refreshFunction(props.userId,props.backend_url)
		}
		setIsEditing(!isEditing);
	}


  return (
    <div className='alert alert-primary'>
        <span onDoubleClick={onEdit}>{props.name}: {props.value1} | 
        {isEditing?
        <input required='required' Name='text' id='planPercentage' 
        placeholder='planPercentage' value={planPercentage} 
        onChange={(event) => setPlanPercentage(event.target.value)}></input>
        :<> {props.value2} </>}
        </span>
        
    </div>
  )
}

export default TopBoxPercentage