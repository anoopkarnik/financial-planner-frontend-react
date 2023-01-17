import React, { useState } from 'react';

const AddIncomeForm = (props) => {

	const [name, setName] = useState('');
	const [income, setIncome] = useState('');

	const onSubmit =() =>{
		console.log(props.userId,props.bearerToken,name,income)
		props.createIncome(props.userId,props.backend_url,props.bearerToken,name,income);
	}

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
						id='income'
						placeholder='Income'
						value={income}
						onChange={(event) => setIncome(event.target.value)}
					></input>
				</div>
			</div>
			<div className='row'>
				<div className='col-sm text-center'>
					<button type='submit' className='btn btn-secondary mt-3'>
						Save
					</button>
				</div>
			</div>
		</form>
	);
};

export default AddIncomeForm;