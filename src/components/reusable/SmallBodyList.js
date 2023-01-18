import React,{useState,useContext} from 'react'
import SmallBodyItem from './SmallBodyItem'
import { UserContext } from '../../context/UserContext';

const SmallBodyList = (props) => {

  const [newName,setNewName] = useState('');
  const [key,setKey] = useState('Add '+props.name)
  const {user, setUser} = useContext(UserContext);


  const onCreate = async() =>{
    await props.createFunction(props.backend_url,'Bearer '+user.accessToken,newName)
    await props.refreshFunction(user.id,props.backend_url,'Bearer '+user.accessToken)
    setKey('Add '+props.name);
}

    
  return (
    <ul className='list-group'>
      <h3>{props.name}</h3>
      <div>
      {props.records.map((record) => (
          <SmallBodyItem name={props.name} record={record} 
          createFunction={props.createFunction} 
          deleteFunction={props.deleteFunction} 
          refreshFunction={props.refreshFunction} 
          editFunction={props.editFunction}
          backend_url={props.backend_url}/>
      ))}</div>
      <div>
        <li className='list-group-item d-flex justify-content-between align-items-center'>
			    <div onDoubleClick={onCreate} >
						<input required='required' Name='text' 
							id={key} placeholder={key} value={newName} 
							onChange={(event) => setNewName(event.target.value)}>
						</input>
			    </div>
        </li>
      </div>
    </ul>
  )
}

export default SmallBodyList;