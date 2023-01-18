import React, { useState,useContext} from 'react';
import { UserContext } from '../../../context/UserContext';

const AddIncomeForm = (props) => {

	const [name, setName] = useState('');
	const [income, setIncome] = useState('');
	const {user, setUser} = useContext(UserContext);

	const onSubmit =() =>{
		console.log(user.id,'Bearer '+user.accessToken,name,income)
		props.createIncome(user.id,props.backend_url,'Bearer '+user.accessToken,name,income);
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
					</button >
				</div>
			</div>
		</form>
	);
};

export default AddIncomeForm;