import React, { useState,useEffect } from 'react'
import AccountsPage from '../pages/AccountsPage';

const AccountsApi = () => {

    const backend_url = 'http://localhost:8082';
    const [userId,setUserId] = useState(20);
    const [subAccountOptions, setSubAccountOptions] = useState([]);

    useEffect(() => {
        refreshAccountsPage();
      }, []);


    const getTotalSubAccounts = async(userId) =>{
      const res = await fetch(backend_url+'/accounts/2?user='+userId)
      const data = await res.json()
      var arr = new Array();
      for(var j =0;j<data.length;j++){
        arr.push({name:data[j]['name'],cost:data[j]['balance']})
      }
      setSubAccountOptions(arr);
      return arr
  }

    const refreshAccountsPage = async() =>{
        var subAccounts = await getTotalSubAccounts(userId);
    }


  return (
    <div>
        <AccountsPage 
            userId={userId} 
            subAccountOptions={subAccountOptions}
        />
    </div>
  )
}

export default AccountsApi