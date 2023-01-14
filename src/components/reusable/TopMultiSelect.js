import React from 'react'
import {Multiselect} from "multiselect-react-dropdown";
const expenseKey = "Expense Types";
const accountKey = "Account Types";
const categoryKey = "Category Types";
const subCategoryKey = "Subcategory Types";

const TopMultiSelect = (props) => {
    const onSelect = async(event) => {
        const selectedValues = []
        if(event.length>0){
            for(let i =0;i<event.length;i++){
                selectedValues.push(event[i].name)
            }
            if(props.name=="Expense Types"){
              props.refreshTransactions(props.userId,props.backend_url,selectedValues,props.accountTypes,
                props.categoryTypes,props.subCategoryTypes,
                props.dateFrom,props.dateTo)
            }
            else if(props.name=="Account Types"){
              props.refreshTransactions(props.userId,props.backend_url,props.expenseTypes,selectedValues,
                props.categoryTypes,props.subCategoryTypes,
                props.dateFrom,props.dateTo)
            }
            else if(props.name=="Category Types"){
              props.refreshTransactions(props.userId,props.backend_url,props.expenseTypes,props.accountTypes,
                selectedValues,props.subCategoryTypes,
                props.dateFrom,props.dateTo)
            }
            else if(props.name=="Subcategory Types"){
              props.refreshTransactions(props.userId,props.backend_url,props.expenseTypes,props.accountTypes,
                props.categoryTypes,selectedValues,
                props.dateFrom,props.dateTo)
            };
            
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