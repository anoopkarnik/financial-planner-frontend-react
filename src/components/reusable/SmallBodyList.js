import React,{useState} from 'react'
import SmallBodyItem from './SmallBodyItem'

const SmallBodyList = (props) => {

  const [newName,setNewName] = useState('');
  const [key,setKey] = useState('Add '+props.name)


  const onCreate = async() =>{
    await props.createFunction(props.backend_url,newName)
    await props.refreshFunction(props.userId,props.backend_url)
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
          userId={props.userId} backend_url={props.backend_url}/>
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