import React from 'react'
import {Multiselect} from "multiselect-react-dropdown";

const TopMultiSelect = (props) => {
    const onSelect = async(event) => {
        const selectedValues = []
        if(event.length>0){
            for(let i =0;i<event.length;i++){
                selectedValues.push(event[i].id)
                console.log(event[i].id)
            }
        }    
      };
  return (
    <div className='col-sm'>
    <label>{props.name}</label>
    <Multiselect options={props.values} onSelect={onSelect} onRemove={onSelect} displayValue="name" showCheckbox/>
</div>
  )
}

export default TopMultiSelect