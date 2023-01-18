import React,{useState,useEffect,useContext} from 'react'
import "react-datepicker/dist/react-datepicker.css";
import TopBoxPercentage from '../reusable/TopBoxPercentage';
import { getBudgetPlans,createBudget,addIncome, getIncomes,deleteIncome } from '../api/BudgetAPI';
import BudgetList from '../misc/Budgets/BudgetList';
import AddBudgetForm from '../misc/Budgets/AddBudgetForm';
import { getTotalAccounts,getTotalCategories,getTotalExpenses,
  getTotalSubCategories,getTotalSubAccounts} from '../api/TransactionAPI';
import AddIncomeForm from '../misc/Budgets/AddIncomeForm';
import { UserContext } from '../../context/UserContext';
import IncomeItem from '../misc/Budgets/IncomeItem';

const AccountsPage = (props) => {

	
    const [budgetPlans, setBudgetPlans] = useState([]);
    const [accountOptions, setAccountOptions] = useState([]);
    const [expenseOptions, setExpenseOptions] = useState([]);
    const [categoryOptions, setCategoryOptions] = useState([]);
    const [subCategoryOptions, setSubCategoryOptions] = useState([]);
    const [subAccountOptions, setSubAccountOptions] = useState([]);
    const [showAddBudget, setShowAddBudget] = useState(false);
    const [showAddIncome, setShowAddIncome] = useState(false);
    const {user, setUser} = useContext(UserContext);
    const [incomes, setIncomes] = useState([])

    useEffect(() => {
        refreshBudgetsPage(user.id,props.backend_url,'Bearer '+user.accessToken);
      }, []);

const refreshBudgetsPage = async(userId,backend_url,bearerToken) =>{
  var budget_plans = await getBudgetPlans(userId,backend_url,bearerToken);
  var income = await getIncomes(userId,backend_url,bearerToken);
  const {expenses,expenseOptions} = await getTotalExpenses(backend_url,bearerToken);
  const {accounts,accountOptions} = await getTotalAccounts(backend_url,bearerToken);
  const {categories,categoryOptions} = await getTotalCategories(backend_url,bearerToken);
  const {subCategories,subCategoryOptions} = await getTotalSubCategories(backend_url,bearerToken);
  const {subAccounts,subAccountOptions} = await getTotalSubAccounts(userId,backend_url,bearerToken);
  setBudgetPlans(budget_plans);
  setExpenseOptions(expenseOptions);
  setAccountOptions(accountOptions);    
  setCategoryOptions(categoryOptions);    
  setSubCategoryOptions(subCategoryOptions);    
  setSubAccountOptions(subAccountOptions);
  setIncomes(income);
}

  return (
    <div>
      <div className='row mt-3'>
      <h3 className='mt-3 text-center'>Budget Percentages</h3>
			{budgetPlans.map((budgetPlan)=>(
				<div className='col-sm'>
					<TopBoxPercentage refreshFunction={refreshBudgetsPage} name={budgetPlan.expenseName} value1={budgetPlan.transactionPercentage} 
          id={budgetPlan.id} value2={budgetPlan.planPercentage} 
          backend_url={props.backend_url}/>
				</div>
			))}
      <h3 className='mt-3 text-center'>Monthly Income</h3>
      <div className='row mt-3'>
      <ul className='list-group'>
        {incomes.map((income)=>
          <div className='col-sm'>
            <IncomeItem id={income.id} name={income.name} 
            deleteFunction={deleteIncome} income={income.income}
            refreshFunction={refreshBudgetsPage} 
            backend_url={props.backend_url}/>
          </div>
        )}
      </ul>
				
		  </div>
      <h3 className='mt-3 text-center'>Budget</h3>
      <ul className='list-group'>
      {budgetPlans.map((budgetPlan)=>(
				<div className='row mt-3'>
					<BudgetList refreshFunction={refreshBudgetsPage} name={budgetPlan.expenseName} value1={budgetPlan.transactionTotal} 
          value2={budgetPlan.planTotal} value3={budgetPlan.allottedTotal} 
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
      <div onClick={()=>{setShowAddIncome(!showAddIncome)}} className='mt-3 col-sm btn btn-secondary btn-lg'>Add Monthly Income</div>
      <div className='col-sm'></div>
    </div>
    <div className='mt-3'></div>
      {showAddBudget?<AddBudgetForm createBudget={createBudget} backend_url={props.backend_url} expenseOptions={expenseOptions} accountOptions={accountOptions} categoryOptions={categoryOptions} subCategoryOptions={subCategoryOptions} subAccountOptions={subAccountOptions}/>:null}
      {showAddIncome?<AddIncomeForm createIncome={addIncome} backend_url={props.backend_url}/>:null}
    </div>
  )
}

export default AccountsPage