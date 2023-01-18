import React, { useState,useContext } from 'react';
import { UserContext } from '../../../context/UserContext';

const AddTransactionForm = (props) => {

	const [name, setName] = useState('');
	const [cost, setCost] = useState('');
	const [expenseName, setExpenseName] = useState('');
	const [categoryName, setCategoryName] = useState('');
	const [subCategoryName, setSubCategoryName] = useState('');
	const [accountName, setAccountName] = useState('');
	const [subAccountName, setSubAccountName] = useState('');
	const {user, setUser} = useContext(UserContext);

	const onSubmit =() =>{
		console.log(user.id,'Bearer '+user.accessToken,name,cost,expenseName,accountName,
			categoryName,subCategoryName,subAccountName)
		props.createTransaction(user.id,props.backend_url,'Bearer '+user.accessToken,name,cost,expenseName,accountName,
			categoryName,subCategoryName,subAccountName);
	}

	const handleExpenseNameChange = (event) => {
        setExpenseName(event.target.value);
        console.log(event.target.value);
      };

	const handleCategoryNameChange = (event) => {
        setCategoryName(event.target.value);
        console.log(event.target.value);
      };
	
	const handleSubcategoryNameChange= (event) => {
        setSubCategoryName(event.target.value);
        console.log(event.target.value);
      };
	
	const handleAccountNameChange = (event) => {
        setAccountName(event.target.value)
        console.log(event.target.value);
      };
	
	const handleSubaccountNameChange = (event) => {
        setSubAccountName(event.target.value);
        console.log(event.target.value);
      };


	return (
		<form className='text-center' onSubmit={onSubmit}>
			<div className='row'>
				<div className='col-sm'>
					<input
						required='required'
						Name='text'
						className='form-control'
						id='name'
						placeholder='Name'
						value={name}
						onChange={(event) => setName(event.target.value)}
					></input>
				</div>
				<div className='col-sm'>
					<input
						required='required'
						Name='text'
						className='form-control'
						id='cost'
						placeholder='Cost'
						value={cost}
						onChange={(event) => setCost(event.target.value)}
					></input>
				</div>
				<div className='col-sm'>
				
                    <select required='required' onChange={handleExpenseNameChange} className='form-control'>
						<option value="" selected disabled hidden> Choose Expense Name</option>
                        {props.expenseOptions.map((expense_Name)=>(
                        <option value={expense_Name.name}>{expense_Name.name}</option>   
                        ))}
                    </select>
                </div>
			</div>
			<div className='row'>
				<div className='col-sm'>
				<label for='subaccountName'></label>
                    <select required='required' onChange={handleCategoryNameChange} className='form-control'>
						<option value="" selected disabled hidden> Choose Category Name</option>
                        {props.categoryOptions.map((category_Name)=>(
                        <option value={category_Name.name}>{category_Name.name}</option>   
                        ))}
                    </select>
                </div>
			 
				<div className='col-sm'>
				<label for='subaccountName'></label>
                    <select required='required' onChange={handleSubcategoryNameChange} className='form-control'>
						<option value="" selected disabled hidden> Choose SubCategory Name</option>
                        {props.subCategoryOptions.map((sub_category_Name)=>(
                        <option value={sub_category_Name.name}>{sub_category_Name.name}</option>   
                        ))}
                    </select>
                </div>
			</div>
			<div className='row'>
				<div className='col-sm'>
				<label for='subaccountName'></label>
                    <select required='required' onChange={handleAccountNameChange} className='form-control'>
						<option value="" selected disabled hidden> Choose Account Name</option>
                        {props.accountOptions.map((account_Name)=>(
                        <option value={account_Name.name}>{account_Name.name}</option>   
                        ))}
                    </select>
                </div>
				<div className='col-sm'> 
				<label for='subaccountName'></label>
                    <select required='required' onChange={handleSubaccountNameChange} className='form-control'>
						<option value="" selected disabled hidden> Choose Sub Account Name</option>
                        {props.subAccountOptions.map((sub_account_Name)=>(
                        <option value={sub_account_Name.name}>{sub_account_Name.name}</option>   
                        ))}
                    </select>
                </div>
			</div>
			<div className='row'>
				<div className='col-sm text-center'>
					<button  type='submit' className='btn btn-secondary mt-3'>
						Save
					</button >
				</div>
			</div>
		</form>
	);
};

export default AddTransactionForm;