import axios from 'axios';


export const getTotalExpenses = async(backend_url) =>{
    const res = await fetch(backend_url+'/commons/expenses')
    const data = await res.json()
    var names = new Array();
    var options = new Array();
    for(var j =0;j<data.length;j++){
      names.push(data[j]['name'])
      options.push(data[j])
    }  
    return {expenses:names,expenseOptions:options}
}
export const getTotalAccounts = async(userId,backend_url) =>{
    const res = await fetch(backend_url+'/commons/accounts?userId='+userId)
    const data = await res.json()
    var names = new Array();
    var options = new Array();
    for(var j =0;j<data.length;j++){
      names.push(data[j]['name'])
      options.push(data[j])
    }
    return {accounts:names,accountOptions:options}
}

export const getTotalCategories = async(backend_url) =>{
    const res = await fetch(backend_url+'/commons/categories')
    const data = await res.json()
    var names = new Array();
    var options = new Array();
    for(var j =0;j<data.length;j++){
      names.push(data[j]['name'])
      options.push(data[j])
    } 
    return {categories:names,categoryOptions:options}
}


export const getTotalSubCategories = async(backend_url) =>{
    const res = await fetch(backend_url+'/commons/subCategories')
    const data = await res.json()
    var names = new Array();
    var options = new Array();
    for(var j =0;j<data.length;j++){
      names.push(data[j]['name'])
      options.push(data[j])
    } 
    return {subCategories:names,subCategoryOptions:options}
}

export const getTotalSubAccounts = async(userId,backend_url) =>{
  const res = await fetch(backend_url+'/accounts/2?user='+userId)
  if(res.status===200){
    const data = await res.json()
    var names = new Array();
    var options = new Array();
    for(var j =0;j<data.length;j++){
      names.push(data[j]['name'])
      options.push(data[j])
    }
  }
  else{
      var names=[];
      var options=[];
    } 
  return {subAccounts:names,subAccountOptions:options}
}



export const getTransactions = async(userId,backend_url,expenseTypes,accountTypes,categoryTypes,subCategoryTypes,dateFrom,dateTo) =>{
    const res = await fetch(backend_url+'/transactions', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({userId,expenseTypes,accountTypes,categoryTypes,subCategoryTypes,dateFrom,dateTo}),
    })
    if(res.status===200){
      var data = await res.json()
      var expense = 0;
      for(var j =0;j<data.length;j++){
        expense+=data[j]["cost"]
      }
    }
    else{
      var expense = 0;
      var data=[];
    }
    return {expense:expense,transactions:data}
}

export const createTransaction = async(userId,backend_url,name,cost,expenseName,accountName,
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

export const deleteTransaction = async(backend_url,id) =>{
await axios.delete(backend_url+'/transactions?id='+id)
};
