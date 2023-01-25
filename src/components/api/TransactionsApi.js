import React, { useState,useEffect } from 'react'
import TransactionsPage from '../pages/TransactionsPage';

const TransactionsApi = () => {

    const backend_url = 'http://localhost:8082';
    const [userId,setUserId] = useState(20);
    const [totalAccountTypes, setTotalAccountTypes] = useState([]);
    const [totalExpenseTypes, setTotalExpenseTypes] = useState([]);
    const [totalCategoryTypes, setTotalCategoryTypes] = useState([]);
    const [totalSubCategoryTypes, setTotalSubCategoryTypes] = useState([]);
    const [dateFrom,setDateFrom] = useState('');
    const [dateTo,setDateTo] = useState('');

    useEffect(() => {
        refreshTransactionsPage();
      }, []);


    const getTotalAccounts = async() =>{
        const res = await fetch(backend_url+'/commons/accounts')
        const data = await res.json()
        setTotalAccountTypes(data)
    }

    const getTotalCategories = async() =>{
        const res = await fetch(backend_url+'/commons/categories')
        const data = await res.json()
        setTotalCategoryTypes(data)
    }

    const getTotalExpenses = async() =>{
        const res = await fetch(backend_url+'/commons/expenses')
        const data = await res.json()
        setTotalExpenseTypes(data)
    }

    const getTotalSubCategories = async() =>{
        const res = await fetch(backend_url+'/commons/subCategories')
        const data = await res.json()
        setTotalSubCategoryTypes(data)
    }

    const getTransactions = async(userId,expenseTypes,accountTypes,categoryTypes,
      subCategoryTypes,subAccountTypes,dateFrom,dateTo) =>{
        const res = await fetch(backend_url+'/transactions', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({userId,expenseTypes,accountTypes,categoryTypes,subCategoryTypes,subAccountTypes,dateFrom,dateTo}),
        })
        const data = await res.json()
        return data
    }

    const refreshTransactionsPage = async() =>{
        await getTotalAccounts();
        await getTotalCategories();
        await getTotalExpenses();
        await getTotalSubCategories();
        var date = new Date();
        setDateFrom(new Date(date.getFullYear(),date.getMonth(),1));
        setDateTo(new Date(date.getFullYear(),date.getMonth()+1,0));
    }


  return (
    <div>
        <TransactionsPage 
            userId={userId} 
            accountTypes={totalAccountTypes} 
            categoryTypes={totalCategoryTypes} 
            expenseTypes={totalExpenseTypes} 
            subCategoryTypes={totalSubCategoryTypes} 
            dateFrom={dateFrom} 
            dateTo={dateTo} 
            getTransactions={getTransactions} 
        />
    </div>
  )
}

export default TransactionsApi