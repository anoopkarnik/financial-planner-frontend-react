import React,{useState,useContext} from 'react'
import { updatePlanPercentage } from '../api/BudgetAPI';
import { UserContext } from '../../context/UserContext';



const TopBoxPercentage = (props) => {

  const [isEditing,setIsEditing] = useState(false);
  const [planPercentage,setPlanPercentage] = useState(props.value2);
  const {user, setUser} = useContext(UserContext);

  const onEdit = async() =>{
		if(isEditing){
			await updatePlanPercentage(props.id,props.backend_url,'Bearer '+user.accessToken,planPercentage)
			await props.refreshFunction(user.id,props.backend_url,'Bearer '+user.accessToken)
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