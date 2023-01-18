import React,{useState,useEffect,useContext} from 'react'
import "react-datepicker/dist/react-datepicker.css";
import { getTotalAccounts,getTotalExpenses,getTotalCategories,
getTotalSubCategories } from '../api/TransactionAPI';
import { createAccount,createExpense,createCategory,
createSubCategory,deleteAccount1,deleteCategory,
deleteExpense,deleteSubCategory,editAccount,
editCategory,editExpense,editSubCategory } from '../api/AdminAPI';
import SmallBodyList from '../reusable/SmallBodyList';
import { UserContext } from '../../context/UserContext';

const AdminPage = (props) => {

	
    const [expenseOptions, setExpenseOptions] = useState([]);
    const [accountOptions, setAccountOptions] = useState([]);
    const [categoryOptions, setCategoryOptions] = useState([]);
    const [subCategoryOptions, setSubCategoryOptions] = useState([]);
    const {user, setUser} = useContext(UserContext);

    useEffect(() => {
        refreshAdminPage(user.id,props.backend_url,'Bearer '+user.accessToken);
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
          deleteFunction={deleteExpense} editFunction={editExpense}
          backend_url={props.backend_url} />
				</div>
        <div className='col-sm'>
					<SmallBodyList name="Accounts" records={accountOptions} 
          createFunction={createAccount} 
          refreshFunction={refreshAdminPage} 
          deleteFunction={deleteAccount1} editFunction={editAccount} 
          backend_url={props.backend_url}/>
				</div>
        <div className='col-sm'>
					<SmallBodyList name="Categories" records={categoryOptions} 
          createFunction={createCategory}  
          refreshFunction={refreshAdminPage} 
          deleteFunction={deleteCategory} editFunction={editCategory}
          backend_url={props.backend_url}/>
				</div>
        <div className='col-sm'>
					<SmallBodyList name="SubCategories" records={subCategoryOptions} 
          createFunction={createSubCategory} 
          refreshFunction={refreshAdminPage} 
          deleteFunction={deleteSubCategory} editFunction={editSubCategory}
          backend_url={props.backend_url}/>
				</div>
		  </div>
    </div>
  )
}

export default AdminPage