import React,{useState,useContext} from 'react'
import { TiDelete } from 'react-icons/ti';
import { UserContext } from '../../context/UserContext';

const SmallBodyItem = (props) => {

	const [isEditing,setIsEditing] = useState(false);
	const [name,setName] = useState(props.record.name);
	const {user,setUser} = useContext(UserContext);

	const onEdit = async() =>{
        if(isEditing){
            await props.editFunction(props.backend_url,'Bearer '+user.accessToken,props.record.id,name)
		    await props.refreshFunction(user.id,props.backend_url,'Bearer '+user.accessToken)
        }
        setIsEditing(!isEditing);
	}

	const onDelete = async() =>{
        await props.deleteFunction(props.backend_url,'Bearer '+user.accessToken,props.record.id)
		await props.refreshFunction(user.id,props.backend_url,'Bearer '+user.accessToken)
	}

    
  return (
    <li className='list-group-item d-flex justify-content-between align-items-center'>
			<div onDoubleClick={onEdit} >
					{isEditing?
						<input required='required' Name='text' 
							id='name' placeholder='name' value={name} 
							onChange={(event) => setName(event.target.value)}>
						</input>:
						<>{props.record.name}</>
					}
				<TiDelete size='1.5em' onClick={onDelete}></TiDelete>
			</div>
    </li>
  )
}

export default SmallBodyItem