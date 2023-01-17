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

    useEffect(() => {
        refreshAdminPage(props.userId,props.backend_url,props.bearerToken);
      }, []);

    const refreshAdminPage = async(userId,backend_url,bearerToken) =>{
      const {expenses,expenseOptions} = await getTotalExpenses(backend_url,bearerToken);
      const {accounts,accountOptions} = await getTotalAccounts(backend_url,bearerToken);
      const {categories,categoryOptions} = await getTotalCategories(backend_url,bearerToken);
      const {subCategories,subCategoryOptions} = await getTotalSubCategories(backend_url,bearerToken);
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
          backend_url={props.backend_url} 
          bearerToken={props.bearerToken}/>
				</div>
        <div className='col-sm'>
					<SmallBodyList name="Accounts" records={accountOptions} 
          createFunction={createAccount} 
          refreshFunction={refreshAdminPage} 
          deleteFunction={deleteAccount1} editFunction={editAccount} userId={props.userId} 
          backend_url={props.backend_url} 
          bearerToken={props.bearerToken}/>
				</div>
        <div className='col-sm'>
					<SmallBodyList name="Categories" records={categoryOptions} 
          createFunction={createCategory}  
          refreshFunction={refreshAdminPage} 
          deleteFunction={deleteCategory} editFunction={editCategory} userId={props.userId} 
          backend_url={props.backend_url} 
          bearerToken={props.bearerToken}/>
				</div>
        <div className='col-sm'>
					<SmallBodyList name="SubCategories" records={subCategoryOptions} 
          createFunction={createSubCategory} 
          refreshFunction={refreshAdminPage} 
          deleteFunction={deleteSubCategory} editFunction={editSubCategory} userId={props.userId} 
          backend_url={props.backend_url} 
          bearerToken={props.bearerToken}/>
				</div>
		  </div>
    </div>
  )
}

export default AdminPage