import React, { useState,useEffect } from 'react'
import TransactionsPage from '../pages/TransactionsPage';
import DateToString from '../utils/DateToString';

const TransactionsApi = () => {

    const backend_url = 'http://localhost:8082';
    const [userId,setUserId] = useState(20);
    const [totalAccountTypes, setTotalAccountTypes] = useState([]);
    const [totalExpenseTypes, setTotalExpenseTypes] = useState([]);
    const [totalCategoryTypes, setTotalCategoryTypes] = useState([]);
    const [totalSubCategoryTypes, setTotalSubCategoryTypes] = useState([]);
    const [totalSubAccountTypes, setTotalSubAccountTypes] = useState([]);
    const [accountOptions, setAccountOptions] = useState([]);
    const [expenseOptions, setExpenseOptions] = useState([]);
    const [categoryOptions, setCategoryOptions] = useState([]);
    const [subCategoryOptions, setSubCategoryOptions] = useState([]);
    const [subAccountOptions, setSubAccountOptions] = useState([]);
    const [dateFrom,setDateFrom] = useState('');
    const [dateTo,setDateTo] = useState('');
    const [transactions,setTransactions] = useState([]);
    const [expenses,setExpenses] = useState('');

    useEffect(() => {
        refreshTransactionsPage();
      }, []);


    const getTotalAccounts = async() =>{
        const res = await fetch(backend_url+'/commons/accounts')
        const data = await res.json()
        var names = new Array();
        var options = new Array();
        for(var j =0;j<data.length;j++){
          names.push(data[j]['name'])
          options.push(data[j])
        }
        setTotalAccountTypes(names);
        setAccountOptions(options);
        return names
    }

    const getTotalCategories = async() =>{
        const res = await fetch(backend_url+'/commons/categories')
        const data = await res.json()
        var names = new Array();
        var options = new Array();
        for(var j =0;j<data.length;j++){
          names.push(data[j]['name'])
          options.push(data[j])
        }
        setTotalCategoryTypes(names);
        setCategoryOptions(options);
        return names
    }

    const getTotalExpenses = async() =>{
        const res = await fetch(backend_url+'/commons/expenses')
        const data = await res.json()
        var names = new Array();
        var options = new Array();
        for(var j =0;j<data.length;j++){
          names.push(data[j]['name'])
          options.push(data[j])
        }
        setTotalExpenseTypes(names);
        setExpenseOptions(options);
        return names
    }

    const getTotalSubCategories = async() =>{
        const res = await fetch(backend_url+'/commons/subCategories')
        const data = await res.json()
        var names = new Array();
        var options = new Array();
        for(var j =0;j<data.length;j++){
          names.push(data[j]['name'])
          options.push(data[j])
        }
        setTotalSubCategoryTypes(names);
        setSubCategoryOptions(options);
        return names
    }

    const getTotalSubAccounts = async(userId) =>{
      const res = await fetch(backend_url+'/accounts/2?user='+userId)
      const data = await res.json()
      var names = new Array();
      var options = new Array();
      for(var j =0;j<data.length;j++){
        names.push(data[j]['name'])
        options.push(data[j])
      }
      setTotalSubAccountTypes(names);
      setSubAccountOptions(options);
      return names
  }

    const getTransactions = async(userId,expenseTypes,accountTypes,categoryTypes,subCategoryTypes,dateFrom,dateTo) =>{
        const res = await fetch(backend_url+'/transactions', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({userId,expenseTypes,accountTypes,categoryTypes,subCategoryTypes,dateFrom,dateTo}),
        })
        const data = await res.json()
        var expense = 0;
        for(var j =0;j<data.length;j++){
          expense+=data[j]["cost"]
        }
        setExpenses(expense);
        setTransactions(data);
        return data
    }

    const createTransaction = async(userId,name,cost,expenseName,accountName,
      categoryName,subCategoryName,subAccountName) =>{
      const res = await fetch(backend_url+'/transactions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({userId,name,cost,expenseName,accountName,
          categoryName,subCategoryName,subAccountName}),
      })
      const data = await res.json()
      // refreshTransactionsPage();
      return data
  }

    
    const refreshTransactionsPage = async() =>{
        const accounts = await getTotalAccounts();
        const categories = await getTotalCategories();
        const expenses = await getTotalExpenses();
        const subCategories = await getTotalSubCategories();
        var subAccounts = await getTotalSubAccounts(userId);
        var date = new Date()
        var dateFrom = DateToString(new Date())
        var dateTo = DateToString(new Date(date.setMonth(date.getMonth()+1)))
        setDateFrom(dateFrom);
        setDateTo(dateTo);
        const transactions = getTransactions(userId,expenses,accounts,
          categories,subCategories,dateFrom,dateTo)
        

    }


  return (
    <div>
        <TransactionsPage 
            userId={userId} 
            accountTypes={totalAccountTypes} 
            categoryTypes={totalCategoryTypes} 
            expenseTypes={totalExpenseTypes} 
            subCategoryTypes={totalSubCategoryTypes} 
            subAccountTypes={totalSubAccountTypes}
            accountOptions={accountOptions} 
            categoryOptions={categoryOptions} 
            expenseOptions={expenseOptions} 
            subCategoryOptions={subCategoryOptions} 
            subAccountOptions={subAccountOptions}
            dateFrom={dateFrom} 
            dateTo={dateTo} 
            transactions={transactions} 
            getTransactions={getTransactions} 
            expenses={expenses} 
            createTransaction={createTransaction}
        />
    </div>
  )
}

export default TransactionsApi