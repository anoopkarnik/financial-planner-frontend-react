import React,{useState,useEffect} from 'react'
import {useNavigate } from 'react-router-dom';

const SigninPage = (props) => {

  const navigate = useNavigate();


	
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = async()=>{
      await props.refreshApp(name,password);

      navigate('/transactions');
    }
    const onSignup = async()=>{
      navigate('/signup');
    } 

  return (
    <div>
    <h3> Login </h3>
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
      </div>
      <div className='row'>
				<div className='col-sm'>
					<input
						required='required'
						Name='text'
						className='form-control'
						id='password'
						placeholder='Password'
						value={password}
						onChange={(event) => setPassword(event.target.value)}
					></input>
				</div>
      </div>
			<div className='row'>
				<div className='col-sm text-center'>
					<div onClick={onSubmit} className='btn btn-secondary mt-3'>
						Login
					</div >
				</div>
        <div className='col-sm text-center'>
					<div onClick={onSignup} className='btn btn-secondary mt-3'>
						Signup
					</div >
				</div>
			</div>
		</form>
    </div>
  )
}

export default SigninPage