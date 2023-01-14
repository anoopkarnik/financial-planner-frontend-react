import React,{useState,useEffect} from 'react'
import "react-datepicker/dist/react-datepicker.css";
import { getTotalAccounts,getTotalExpenses,getTotalCategories,
getTotalSubCategories } from '../api/TransactionAPI';
import { createAccount,createExpense,createCategory,
createSubCategory,deleteAccount1,deleteCategory,
deleteExpense,deleteSubCategory,editAccount,
editCategory,editExpense,editSubCategory } from '../api/AdminAPI';
import SmallBodyList from '../reusable/SmallBodyList';


const AdminPage = (props) => {

	
    const [expenseOptions, setExpenseOptions] = useState([]);
    const [accountOptions, setAccountOptions] = useState([]);
    const [categoryOptions, setCategoryOptions] = useState([]);
    const [subCategoryOptions, setSubCategoryOptions] = useState([]);
    const [expense, setExpense] = useState('');
    const [account, setAccount] = useState('');
    const [category, setCategory] = useState('');
    const [subCategory, setSubCategory] = useState('');


    useEffect(() => {
        refreshAdminPage(props.userId,props.backend_url);
      }, []);

    const refreshAdminPage = async(userId,backend_url) =>{
      const {expenses,expenseOptions} = await getTotalExpenses(backend_url);
      const {accounts,accountOptions} = await getTotalAccounts(userId,backend_url);
      const {categories,categoryOptions} = await getTotalCategories(backend_url);
      const {subCategories,subCategoryOptions} = await getTotalSubCategories(backend_url);
      setExpenseOptions(expenseOptions);
      setAccountOptions(accountOptions);    
      setCategoryOptions(categoryOptions);    
      setSubCategoryOptions(subCategoryOptions);    
    }


  
  return (
    <div>

      <div className='row mt-3'>
				<div className='col-sm'>
					<SmallBodyList name="Expenses" records={expenseOptions} 
          createFunction={createExpense} 
          refreshFunction={refreshAdminPage} 
          deleteFunction={deleteExpense} editFunction={editExpense} userId={props.userId} 
          backend_url={props.backend_url}/>
				</div>
        <div className='col-sm'>
					<SmallBodyList name="Accounts" records={accountOptions} 
          createFunction={createAccount} 
          refreshFunction={refreshAdminPage} 
          deleteFunction={deleteAccount1} editFunction={editAccount} userId={props.userId} 
          backend_url={props.backend_url}/>
				</div>
        <div className='col-sm'>
					<SmallBodyList name="Categories" records={categoryOptions} 
          createFunction={createCategory}  
          refreshFunction={refreshAdminPage} 
          deleteFunction={deleteCategory} editFunction={editCategory} userId={props.userId} 
          backend_url={props.backend_url}/>
				</div>
        <div className='col-sm'>
					<SmallBodyList name="SubCategories" records={subCategoryOptions} 
          createFunction={createSubCategory} 
          refreshFunction={refreshAdminPage} 
          deleteFunction={deleteSubCategory} editFunction={editSubCategory} userId={props.userId} 
          backend_url={props.backend_url}/>
				</div>
		  </div>
    </div>
  )
}

export default AdminPage