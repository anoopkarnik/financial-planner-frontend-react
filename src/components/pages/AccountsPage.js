import React,{useState,useEffect,useContext} from 'react'
import "react-datepicker/dist/react-datepicker.css";
import BodyList from '../reusable/BodyList';
import TopBoxData from '../reusable/TopBoxData';
import AddAccountForm from '../misc/Accounts/AddAccountForm';
import { getTotalAccountBalances,getTotalSubAccounts,deleteAccount,
  updateBalance,createAccount } from '../api/AccountAPI';
import { UserContext } from '../../context/UserContext';

const AccountsPage = (props) => {

	
    const [subAccountOptions, setSubAccountOptions] = useState([]);
    const [accountOptions, setAccountOptions] = useState([]);
    const [showAddAccount,setShowAddAccount] = useState(false)
    const {user, setUser} = useContext(UserContext);

    useEffect(() => {
        refreshAccountsPage(user.id,props.backend_url,'Bearer '+user.accessToken);
      }, []);

const refreshAccountsPage = async(userId,backend_url,bearerToken) =>{
  var subAccounts = await getTotalSubAccounts(userId,backend_url,bearerToken);
  var accounts = await getTotalAccountBalances(userId,backend_url,bearerToken);
  setSubAccountOptions(subAccounts);
  setAccountOptions(accounts);
  if(showAddAccount){
    setShowAddAccount(false);
  }
}

  return (
    <div>
      <div className='row mt-3'>
			{accountOptions.map((account)=>(
				<div className='col-sm'>
					<TopBoxData name={account.name} value={account.balance}/>
				</div>
			))}
	  </div>
      <h3 className='mt-3 text-center'>Accounts</h3>
      <div className='row mt-3'>
				<div className='col-sm'>
					<BodyList name="Accounts" records={subAccountOptions} refreshFunction={refreshAccountsPage} 
          deleteFunction={deleteAccount} editFunction={updateBalance}
          backend_url={props.backend_url}/>
				</div>
		  </div>
      <h3 onClick={()=>{setShowAddAccount(!showAddAccount)}} className='mt-3 text-center'><div className='btn btn-secondary btn-lg'>Add Account</div></h3>
      {showAddAccount?
      <AddAccountForm createAccount={createAccount} 
      backend_url={props.backend_url} 
      accountOptions={accountOptions} 
      refreshFunction={refreshAccountsPage}/>:null}
      
    </div>
  )
}

export default AccountsPage