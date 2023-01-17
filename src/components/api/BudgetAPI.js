import axios from 'axios';
export const getBudgetPlans = async(userId,backend_url,bearerToken) =>{
    const res = await fetch(backend_url+'/api/budget/planAmount?userId='+userId,{
      method: 'GET',
      headers:{
        'Authorization':bearerToken
      }
    })
    if(res.status===200 | res.status===201){
      var data = await res.json()
    }
    else{
      var data=[];
    }    
    return data
}
export const getMonthlyBudget = async(userId,expenseType,backend_url,bearerToken) =>{
  const res = await fetch(backend_url+'/api/budget/monthly?userId='+userId+'&expenseType='+expenseType,{
    method: 'GET',
    headers:{
      'Authorization':bearerToken
    }
  })
  if(res.status===200 | res.status===201){
    var data = await res.json()
  }
  else{
    var data=[];
  }    
  return data
}
export const createBudget = async(userId,backend_url,bearerToken,name,cost,expenseName,
  categoryName,subCategoryName) =>{
  const res = await fetch(backend_url+'/api/budget/monthly', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization':bearerToken
    },
    body: JSON.stringify({userId,name,cost,expenseName,
      categoryName,subCategoryName}),
  })
  const data = await res.json()
  // refreshTransactionsPage();
  return data
}
export const deleteBudget = async(backend_url,bearerToken,id) =>{
  await axios.delete(backend_url+'/api/budget/monthly?id='+id,{
    headers:{Authorization:bearerToken}
  })
}
export const updateCost = async(id,backend_url,bearerToken,cost) =>{
await fetch(backend_url+'/api/budget/monthly?id='+id+'&cost='+cost, {
  method: 'PATCH',
  headers:{
    'Authorization':bearerToken
  }
})
}
export const addIncome = async(userId,backend_url,bearerToken,name,income) =>{
  const res = await fetch(backend_url+'/api/transactions/income', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization':bearerToken
    },
    body: JSON.stringify({userId,name,income}),
  })
  const data = await res.json()
  // refreshTransactionsPage();
  return data
}
export const updatePlanPercentage= async(id,backend_url,bearerToken,planPercentage) =>{
  await fetch(backend_url+'/api/budget/plan?id='+id+'&plan_percentage='+planPercentage, {
    method: 'PATCH',
    headers:{
      'Authorization':bearerToken
    }
  })
  }