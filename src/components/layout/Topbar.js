import React from 'react'

import { useNavigate } from 'react-router-dom'
import {AiOutlineLogout} from "react-icons/ai";

const Topbar = () => {
  const navigate = useNavigate();

  const logout = async() =>{
    localStorage.clear();
    window.location.href = '/';
  }

  return (
    <div className='row'>
      <div className='col-sm'></div>
      <div className='col-sm'>
        <h1 className='mt-3 text-center'>Personal Finance Application</h1>
      </div>
      <div className='col-sm text-end'>
        <div><h2><AiOutlineLogout onClick={logout}/></h2></div>
      </div>
    </div>
  )
}

export default Topbar