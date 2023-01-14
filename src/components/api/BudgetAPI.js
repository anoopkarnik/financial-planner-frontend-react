import axios from 'axios';
export const getBudgetPlans = async(userId,backend_url) =>{
    const res = await fetch(backend_url+'/budget/planAmount?userId='+userId)
    if(res.status===200 | res.status===201){
      var data = await res.json()
    }
    else{
      var data=[];
    }    
    return data
}
export const getMonthlyBudget = async(userId,expenseType,backend_url) =>{
  const res = await fetch(backend_url+'/budget/monthly?userId='+userId+'&expenseType='+expenseType)
  if(res.status===200 | res.status===201){
    var data = await res.json()
  }
  else{
    var data=[];
  }    
  return data
}
export const createBudget = async(userId,backend_url,name,cost,expenseName,
  categoryName,subCategoryName) =>{
  const res = await fetch(backend_url+'/budget/monthly', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({userId,name,cost,expenseName,
      categoryName,subCategoryName}),
  })
  const data = await res.json()
  // refreshTransactionsPage();
  return data
}
export const deleteBudget = async(backend_url,id) =>{
  await axios.delete(backend_url+'/budget/monthly?id='+id)
}
export const updateCost = async(id,backend_url,cost) =>{
await fetch(backend_url+'/budget/monthly?id='+id+'&cost='+cost, {
  method: 'PATCH'
})
}
export const addIncome = async(userId,backend_url,name,income) =>{
  const res = await fetch(backend_url+'/transactions/income', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({userId,name,income}),
  })
  const data = await res.json()
  // refreshTransactionsPage();
  return data
}

export const updatePlanPercentage= async(id,backend_url,planPercentage) =>{
  await fetch(backend_url+'/budget/plan?id='+id+'&plan_percentage='+planPercentage, {
    method: 'PATCH'
  })
  }