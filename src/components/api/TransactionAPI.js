import axios from 'axios';


export const getTotalExpenses = async(backend_url,bearerToken) =>{
    const res = await fetch(backend_url+'/api/commons/expenses',{
      method: 'GET',
      headers:{
        'Authorization':bearerToken
      }
    })
    const data = await res.json()
    var names = new Array();
    var options = new Array();
    for(var j =0;j<data.length;j++){
      names.push(data[j]['name'])
      options.push(data[j])
    }  
    return {expenses:names,expenseOptions:options}
}
export const getTotalAccounts = async(backend_url,bearerToken) =>{
    const res = await fetch(backend_url+'/api/commons/accounts',{
      method: 'GET',
      headers:{
        'Authorization':bearerToken
      }
    })
    const data = await res.json()
    var names = new Array();
    var options = new Array();
    for(var j =0;j<data.length;j++){
      names.push(data[j]['name'])
      options.push(data[j])
    }
    return {accounts:names,accountOptions:options}
}

export const getTotalCategories = async(backend_url,bearerToken) =>{
    const res = await fetch(backend_url+'/api/commons/categories',{
      method: 'GET',
      headers:{
        'Authorization':bearerToken
      }
    })
    const data = await res.json()
    var names = new Array();
    var options = new Array();
    for(var j =0;j<data.length;j++){
      names.push(data[j]['name'])
      options.push(data[j])
    } 
    return {categories:names,categoryOptions:options}
}


export const getTotalSubCategories = async(backend_url,bearerToken) =>{
    const res = await fetch(backend_url+'/api/commons/subCategories',{
      method: 'GET',
      headers:{
        'Authorization':bearerToken
      }
    })
    const data = await res.json()
    var names = new Array();
    var options = new Array();
    for(var j =0;j<data.length;j++){
      names.push(data[j]['name'])
      options.push(data[j])
    } 
    return {subCategories:names,subCategoryOptions:options}
}

export const getTotalSubAccounts = async(userId,backend_url,bearerToken) =>{
  const res = await fetch(backend_url+'/api/accounts/2?user='+userId,{
    method: 'GET',
    headers:{
      'Authorization':bearerToken
    }
  })
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



export const getTransactions = async(userId,backend_url,bearerToken,expenseTypes,accountTypes,categoryTypes,subCategoryTypes,dateFrom,dateTo) =>{
    const res = await fetch(backend_url+'/api/transactions', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization':bearerToken
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

export const createTransaction = async(userId,backend_url,bearerToken,name,cost,expenseName,accountName,
  categoryName,subCategoryName,subAccountName) =>{
  const res = await fetch(backend_url+'/api/transactions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization':bearerToken
    },
    body: JSON.stringify({userId,name,cost,expenseName,accountName,
      categoryName,subCategoryName,subAccountName}),
  })
  const data = await res.json()
  // refreshTransactionsPage();
  return data
}

export const deleteTransaction = async(backend_url,bearerToken,id) =>{
await axios.delete(backend_url+'/api/transactions?id='+id,{
  headers:{Authorization:bearerToken}
})
};
