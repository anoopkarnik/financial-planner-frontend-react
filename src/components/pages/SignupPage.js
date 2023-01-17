import React,{useState,useEffect} from 'react'
import {useNavigate } from 'react-router-dom';
import { signup } from '../api/AuthenticationAPI';

const SignupPage = (props) => {

  const navigate = useNavigate();


	
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [role, setRole] = useState(['user'])

    const onSubmit = async()=>{
      await signup(props.backend_url,name,email,password,role)
      await props.refreshApp(name,password);

      navigate('/transactions');
    } 

  return (
    <div>
    <h3> Signup </h3>
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
						id='email'
						placeholder='email'
						value={email}
						onChange={(event) => setEmail(event.target.value)}
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
						Signup
					</div >
				</div>
			</div>
		</form>
    </div>
  )
}

export default SignupPage;