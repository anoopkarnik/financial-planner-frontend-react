import React,{useState,useEffect} from 'react'
import TopMultiSelect from '../reusable/TopMultiSelect'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import BodyList from '../reusable/BodyList';
import { Button } from 'bootstrap';
import TopBoxData from '../reusable/TopBoxData';
import AddTransactionForm from '../misc/Transactions/AddTransactionForm';

const TransactionsPage = (props) => {

  const expenseKey = "Expense Types";
  const accountKey = "Account Types";
  const categoryKey = "Category Types";
  const subCategoryKey = "Subcategory Types";
  const totalExpenses = "Total Expenses";
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [showAddTransaction,setShowAddTransaction] = useState(false)
  
  return (
    <div>
      <div className='row mt-3'>
				<div className='col-sm'>
					<TopBoxData name={totalExpenses} value={props.expenses}/>
				</div>
			</div>
      <h3 className='mt-3 text-center'>Transactions</h3>
      <div className='row mt-3'>
        <TopMultiSelect name={expenseKey} values={props.expenseOptions}/>
        <TopMultiSelect name={accountKey} values={props.accountOptions}/>
        <TopMultiSelect name={categoryKey} values={props.categoryOptions}/>
      </div>
      <div className='row mt-3'>
        <TopMultiSelect name={subCategoryKey} values={props.subCategoryOptions}/>
        <div className='col-sm'> <label>Start Date</label><DatePicker selected={startDate} onChange={(date) => setStartDate(date)} /></div>
        <div className='col-sm'> <label>End Date</label><DatePicker selected={endDate} onChange={(date) => setEndDate(date)} /></div>
      </div>
      <div className='row mt-3'>
				<div className='col-sm'>
					<BodyList records={props.transactions}/>
				</div>
		  </div>
      <h3 onClick={()=>{setShowAddTransaction(!showAddTransaction)}} className='mt-3 text-center'><div className='btn btn-secondary btn-lg'>Add Transaction</div></h3>
      {showAddTransaction?<AddTransactionForm createTransaction={props.createTransaction} userId={props.userId} expenseOptions={props.expenseOptions} accountOptions={props.accountOptions} categoryOptions={props.categoryOptions} subCategoryOptions={props.subCategoryOptions} subAccountOptions={props.subAccountOptions}/>:null}
    </div>
  )
}

export default TransactionsPage