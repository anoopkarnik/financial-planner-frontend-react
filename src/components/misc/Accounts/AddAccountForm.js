import React, { useState,useContext } from 'react';
import { UserContext } from '../../../context/UserContext';

const AddAccountForm = (props) => {

	const [name, setName] = useState('');
	const [balance, setBalance] = useState('');
	const [accountName, setAccountName] = useState('');
	const [liquidity, setLiquidity] = useState('');
	const [freeLiquidity, setFreeLiquidity] = useState('');

	const {user,setUser} = useContext(UserContext);

	const onSubmit =() =>{
		props.createAccount(user.id,props.backend_url,'Bearer '+user.accessToken,name,balance,
			accountName,liquidity,freeLiquidity);
		props.refreshFunction(user.id,props.backend_url,'Bearer '+user.accessToken)
	}

	
	const handleAccountNameChange = (event) => {
        setAccountName(event.target.value)
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
						id='balance'
						placeholder='Balance'
						value={balance}
						onChange={(event) => setBalance(event.target.value)}
					></input>
				</div>
				<div className='col-sm'>
                    <select required='required' onChange={handleAccountNameChange} className='form-control'>
						<option value="" selected disabled hidden> Choose Account Name</option>
                        {props.accountOptions.map((account_Name)=>(
                        <option value={account_Name.name}>{account_Name.name}</option>   
                        ))}
                    </select>
                </div>
			</div>
			<div className='row'>
				<div className='col-sm'>
				<label for='Liquidity'></label>
                    <select required='required' onChange={(event) => setLiquidity(event.target.value)} className='form-control'>
						<option value="" selected disabled hidden> Partial Liquidity </option>
                        <option value="true">true</option>   
						<option value="false">false</option>
                    </select>
                </div>
				<div className='col-sm'>
				<label for='Liquidity'></label>
                    <select required='required' onChange={(event) => setFreeLiquidity(event.target.value)} className='form-control'>
						<option value="" selected disabled hidden> Full Liquidity </option>
                        <option value="true">true</option>   
						<option value="false">false</option>
                    </select>
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

export default AddAccountForm;