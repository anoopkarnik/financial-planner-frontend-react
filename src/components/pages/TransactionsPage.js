import React,{useState,useEffect} from 'react'
import TopMultiSelect from '../reusable/TopMultiSelect'

import "react-datepicker/dist/react-datepicker.css";
import BodyList from '../reusable/BodyList';
import TopBoxData from '../reusable/TopBoxData';
import AddTransactionForm from '../misc/Transactions/AddTransactionForm';
import DateToString from '../utils/DateToString'
import DatePick from '../reusable/DatePick';

import { getTotalExpenses,getTotalAccounts,getTotalCategories,
getTotalSubCategories,getTotalSubAccounts,
 getTransactions, createTransaction,deleteTransaction} from '../api/TransactionAPI';

const TransactionsPage = (props) => {

  const totalExpenses = "Total Expenses";
  const startDateKey = "Start Date";
  const endDateKey = "End Date";
  const [showAddTransaction,setShowAddTransaction] = useState(false)
  const [accountTypes, setAccountTypes] = useState([]);
  const [expenseTypes, setExpenseTypes] = useState([]);
  const [categoryTypes, setCategoryTypes] = useState([]);
  const [subCategoryTypes, setSubCategoryTypes] = useState([]);
  const [subAccountTypes, setSubAccountTypes] = useState([]);
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
      refreshTransactionsPage(props.userId,props.backend_url);
    }, []);


  const refreshTransactionsPage = async(userId,backend_url) =>{
    const {expenses,expenseOptions} = await getTotalExpenses(backend_url);
    const {accounts,accountOptions} = await getTotalAccounts(userId,backend_url);
    const {categories,categoryOptions} = await getTotalCategories(backend_url);
    const {subCategories,subCategoryOptions} = await getTotalSubCategories(backend_url);
    const {subAccounts,subAccountOptions} = await getTotalSubAccounts(userId,backend_url);
    var date = new Date()
    var dateFrom = DateToString(new Date())
    var dateTo = DateToString(new Date(date.setMonth(date.getMonth()+1)))
    setExpenseTypes(expenses);
    setAccountTypes(accounts);
    setCategoryTypes(categories);
    setSubCategoryTypes(subCategories);
    setSubAccountTypes(subAccounts);
    setExpenseOptions(expenseOptions);
    setAccountOptions(accountOptions);    
    setCategoryOptions(categoryOptions);    
    setSubCategoryOptions(subCategoryOptions);    
    setSubAccountOptions(subAccountOptions);
    setDateFrom(dateFrom);
    setDateTo(dateTo);
    await refreshTransactions(userId,backend_url,expenses,accounts,
      categories,subCategories,dateFrom,dateTo)
  }

  const refreshTransactions = async(userId=props.userId,backend_url=props.backend_url,
    expenses=expenseTypes,accounts=accountTypes,categories=categoryTypes,
    subCategories=subCategoryTypes,dateFrom=dateFrom,dateTo=dateTo)=>{
      const {expense,transactions} = await getTransactions(userId,backend_url,expenses,accounts,
        categories,subCategories,dateFrom,dateTo)
        setExpenses(expense);
        setTransactions(transactions);
      };
      
  
  return (
    <div>
      <div className='row mt-3'>
				<div className='col-sm'>
					<TopBoxData name={totalExpenses} value={expenses}/>
				</div>
			</div>
      <h3 className='mt-3 text-center'>Transactions</h3>
      <div className='row mt-3'>
        <TopMultiSelect name="Expense Types" values={expenseOptions} refreshTransactions={refreshTransactions} 
        userId={props.userId} backend_url={props.backend_url} expenseTypes={expenseTypes} 
        accountTypes={accountTypes} categoryTypes={categoryTypes} 
        subCategoryTypes={subCategoryTypes} subAccountTypes={subAccountTypes} 
        dateFrom={dateFrom} dateTo={dateTo}/>
        <TopMultiSelect name="Account Types" values={accountOptions} refreshTransactions={refreshTransactions} 
        userId={props.userId} backend_url={props.backend_url} expenseTypes={expenseTypes} 
        accountTypes={accountTypes} categoryTypes={categoryTypes} 
        subCategoryTypes={subCategoryTypes} subAccountTypes={subAccountTypes} 
        dateFrom={dateFrom} dateTo={dateTo}/>
        <TopMultiSelect name="Category Types" values={categoryOptions} refreshTransactions={refreshTransactions} 
        userId={props.userId} backend_url={props.backend_url} expenseTypes={expenseTypes} 
        accountTypes={accountTypes} categoryTypes={categoryTypes} 
        subCategoryTypes={subCategoryTypes} subAccountTypes={subAccountTypes} 
        dateFrom={dateFrom} dateTo={dateTo}/>
      </div>
      <div className='row mt-3'>
      <TopMultiSelect name="Subcategory Types" values={subCategoryOptions} refreshTransactions={refreshTransactions} 
        userId={props.userId} backend_url={props.backend_url} expenseTypes={expenseTypes} 
        accountTypes={accountTypes} categoryTypes={categoryTypes} 
        subCategoryTypes={subCategoryTypes} subAccountTypes={ subAccountTypes} 
        dateFrom={dateFrom} dateTo={dateTo}/>
       <DatePick name={startDateKey} refreshTransactions={refreshTransactions} 
        userId={props.userId} backend_url={props.backend_url} expenseTypes={expenseTypes} 
        accountTypes={accountTypes} categoryTypes={categoryTypes} 
        subCategoryTypes={subCategoryTypes} subAccountTypes={ subAccountTypes} 
        dateFrom={dateFrom} dateTo={dateTo}/>
        <DatePick name={endDateKey} refreshTransactions={refreshTransactions} 
        userId={props.userId} backend_url={props.backend_url} expenseTypes={expenseTypes} 
        accountTypes={accountTypes} categoryTypes={categoryTypes} 
        subCategoryTypes={subCategoryTypes} subAccountTypes={ subAccountTypes} 
        dateFrom={dateFrom} dateTo={dateTo}/>
      </div>
      <div className='row mt-3'>
				<div className='col-sm'>
					<BodyList name="Transactions" records={transactions} deleteFunction={deleteTransaction} 
          refreshFunction={refreshTransactions} 
          userId={props.userId} backend_url={props.backend_url} expenseTypes={expenseTypes} 
          accountTypes={accountTypes} categoryTypes={categoryTypes} 
          subCategoryTypes={subCategoryTypes} subAccountTypes={subAccountTypes} 
          dateFrom={dateFrom} dateTo={dateTo}/>
				</div>
		  </div>
      <h3 onClick={()=>{setShowAddTransaction(!showAddTransaction)}} className='mt-3 text-center'><div className='btn btn-secondary btn-lg'>Add Transaction</div></h3>
      {showAddTransaction?<AddTransactionForm createTransaction={createTransaction} userId={props.userId} backend_url={props.backend_url} expenseOptions={expenseOptions} accountOptions={accountOptions} categoryOptions={categoryOptions} subCategoryOptions={subCategoryOptions} subAccountOptions={subAccountOptions}/>:null}
    </div>
  )
}

export default TransactionsPage