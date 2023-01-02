import React from 'react';
import {AiOutlineTransaction,AiFillShopping} from "react-icons/ai";
import {MdAccountBalance} from "react-icons/md";
import {FaBars, FaMoneyBill} from "react-icons/fa";
import { NavLink} from 'react-router-dom';
import { useState } from 'react';


const Sidebar = ({children}) => {
  const [isOpen,setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen)
  const menuItem=[
    {
      path:"/transactions",
      name:"Transactions",
      icon:<AiOutlineTransaction/>
    },
    {
      path:"/accounts",
      name:"Accounts",
      icon:<MdAccountBalance/>
    },
    {
      path:"/budget",
      name:"Budget",
      icon:<AiFillShopping/>
    },
    {
      path:"/portfolio",
      name:"Portfolio",
      icon:<FaMoneyBill/>
    }
  ]
  return (
    <div className='container'>
      <div style={{width:isOpen ?"300px":"50px"}} className="sidebar">
        <div className="top_section">
          <h1 style={{display:isOpen ? "block" : "none"}} className="logo">AKD</h1>
            <div style = {{marginLeft: isOpen ? "50px":"0px"}} className="bars">
              <FaBars onClick={toggle}/>
            </div>
        </div>
        {
          menuItem.map((item,index)=>(
            <NavLink to={item.path} key={index} className="link" 
            activeclassName="active">
              <div className="icon">{item.icon}</div>
              <div style={{display:isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
            </NavLink>
          ))
        }
      </div><div className='col-2'></div>
      <div className='col-12'>
      <main>{children}</main>
      </div>
     


    </div>
  )
}

export default Sidebar