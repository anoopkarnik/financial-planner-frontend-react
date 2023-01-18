import React,{useState,useContext} from 'react'
import {getMonthlyBudget} from '../../api/BudgetAPI';
import BudgetItem from './BudgetItem';
import { UserContext } from '../../../context/UserContext';

const BudgetList = (props) => {

    const [showItems,setShowItems] = useState(false)
    const [items,setItems] = useState([])
    const {user, setUser} = useContext(UserContext);

    const onShow = async() =>{
        const monthlyBudgets = await getMonthlyBudget(user.id,props.name,props.backend_url,'Bearer '+user.accessToken)
        setItems(monthlyBudgets);
    };

    const completeShow = async() =>{
      await  onShow();
      setShowItems(!showItems);
    }

  return (
    <div id="accordion">
        <div class="card">
            <li onClick={completeShow} className='card-header gray-button list-group-item d-flex justify-content-between align-items-center' id="headingOne">
                    {props.name}
		            <div>
			            <span className='badge-primary badge-pill mr-3'>
				            Rs {props.value1} | {props.value3} | {props.value2}
			            </span>
		            </div>
            </li>
            {showItems ===true?
    		<div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
      			<div class="card-body">
	  				<ul className='list-group'>
						{items.map((item)=>(
              <BudgetItem item={item}
              backend_url={props.backend_url}
              refreshFunction={props.refreshFunction} onShow={onShow} 
              accountOptions={props.accountOptions} 
              subAccountOptions={props.subAccountOptions}/>
            ))}
					</ul>
      			</div>
    		</div>:null}
        </div>
    </div>
  )
}

export default BudgetList