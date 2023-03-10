import React, { useState,useContext } from 'react';
import { createFund } from '../../api/FundAPI';
import { UserContext } from '../../../context/UserContext';

const AddFundForm = (props) => {

	const [name, setName] = useState('');
	const [amountAllocated, setAmountAllocated] = useState('');
	const [amountNeeded, setAmountNeeded] = useState('');
	const {user, setUser} = useContext(UserContext);

	const onSubmit = async () =>{
		console.log(user.id,'Bearer '+user.accessToken,name,amountAllocated,amountNeeded)
		await createFund(user.id,props.backend_url,'Bearer '+user.accessToken,
		name,amountAllocated,amountNeeded);
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
						id='amountAllocated'
						placeholder='amountAllocated'
						value={amountAllocated}
						onChange={(event) => setAmountAllocated(event.target.value)}
					></input>
				</div>
				<div className='col-sm'>
					<input
						required='required'
						Name='text'
						className='form-control'
						id='amountNeeded'
						placeholder='amountNeeded'
						value={amountNeeded}
						onChange={(event) => setAmountNeeded(event.target.value)}
					></input>
				</div>
				<div className='row'></div>
					<div className='col-sm text-center'>
						<button type='submit' className='btn btn-secondary mt-3'>
							Save
						</button >
					</div>
				</div>
		</form>
	);
};

export default AddFundForm ;