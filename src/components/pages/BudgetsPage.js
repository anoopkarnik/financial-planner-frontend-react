import React,{useState,useEffect} from 'react'
import "react-datepicker/dist/react-datepicker.css";
import BodyList from '../reusable/BodyList';
import TopBoxPercentage from '../reusable/TopBoxPercentage';
import { getBudgetPlans,createBudget,addIncome } from '../api/BudgetAPI';
import DateToString from '../utils/DateToString'
import BudgetList from '../misc/Budgets/BudgetList';
import AddBudgetForm from '../misc/Budgets/AddBudgetForm';
import { getTotalAccounts,getTotalCategories,getTotalExpenses,
  getTotalSubCategories,getTotalSubAccounts,
   createTransaction} from '../api/TransactionAPI';
import AddIncomeForm from '../misc/Budgets/AddIncomeForm';

const AccountsPage = (props) => {

	
    const [budgetPlans, setBudgetPlans] = useState([]);
    const [monthlyBudgets, setMonthlyBudgets] = useState([]);
    const [accountOptions, setAccountOptions] = useState([]);
    const [expenseOptions, setExpenseOptions] = useState([]);
    const [categoryOptions, setCategoryOptions] = useState([]);
    const [subCategoryOptions, setSubCategoryOptions] = useState([]);
    const [subAccountOptions, setSubAccountOptions] = useState([]);
    const [showAddBudget, setShowAddBudget] = useState(false);
    const [showAddIncome, setShowAddIncome] = useState(false);

    useEffect(() => {
        refreshBudgetsPage(props.userId,props.backend_url);
      }, []);

const refreshBudgetsPage = async(userId,backend_url) =>{
  var budget_plans = await getBudgetPlans(userId,backend_url);
  const {expenses,expenseOptions} = await getTotalExpenses(backend_url);
  const {accounts,accountOptions} = await getTotalAccounts(userId,backend_url);
  const {categories,categoryOptions} = await getTotalCategories(backend_url);
  const {subCategories,subCategoryOptions} = await getTotalSubCategories(backend_url);
  const {subAccounts,subAccountOptions} = await getTotalSubAccounts(userId,backend_url);
  setBudgetPlans(budget_plans);
  setExpenseOptions(expenseOptions);
  setAccountOptions(accountOptions);    
  setCategoryOptions(categoryOptions);    
  setSubCategoryOptions(subCategoryOptions);    
  setSubAccountOptions(subAccountOptions);
}

  return (
    <div>
      <div className='row mt-3'>
      <h3 className='mt-3 text-center'>Budget Percentages</h3>
			{budgetPlans.map((budgetPlan)=>(
				<div className='col-sm'>
					<TopBoxPercentage refreshFunction={refreshBudgetsPage} name={budgetPlan.expenseName} value1={budgetPlan.transactionPercentage} 
          id={budgetPlan.id} value2={budgetPlan.planPercentage} 
          userId={props.userId} backend_url={props.backend_url}/>
				</div>
			))}
      <h3 className='mt-3 text-center'>Budget</h3>
      <ul className='list-group'>
      {budgetPlans.map((budgetPlan)=>(
				<div className='row mt-3'>
					<BudgetList refreshFunction={refreshBudgetsPage} name={budgetPlan.expenseName} value1={budgetPlan.transactionTotal} 
          value2={budgetPlan.planTotal} value3={budgetPlan.allottedTotal} userId={props.userId} 
          backend_url={props.backend_url} accountOptions={accountOptions} 
          subAccountOptions={subAccountOptions}/>
				</div>
			))}
      </ul>
	  </div>
    <div className='row'>
      <div className='col-sm'></div>
      <div onClick={()=>{setShowAddBudget(!showAddBudget)}} className='mt-3 col-sm btn btn-secondary btn-lg'>Add Budget</div>
      <div className='col-sm'></div>
      <div onClick={()=>{setShowAddIncome(!showAddIncome)}} className='mt-3 col-sm btn btn-secondary btn-lg'>Add Income</div>
      <div className='col-sm'></div>
    </div>
    <div className='mt-3'></div>
      {showAddBudget?<AddBudgetForm createBudget={createBudget} userId={props.userId} backend_url={props.backend_url} expenseOptions={expenseOptions} accountOptions={accountOptions} categoryOptions={categoryOptions} subCategoryOptions={subCategoryOptions} subAccountOptions={subAccountOptions}/>:null}
      {showAddIncome?<AddIncomeForm createIncome={addIncome} userId={props.userId} backend_url={props.backend_url}/>:null}
    </div>
  )
}

export default AccountsPage