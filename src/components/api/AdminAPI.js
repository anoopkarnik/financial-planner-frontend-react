import axios from 'axios';

export const createAccount = async(backend_url,bearerToken,name) =>{
    const res = await fetch(backend_url+'/api/commons/accounts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization':bearerToken
      },
      body: JSON.stringify({name}),
    })
    const data = await res.json()
    return data
}
export const createExpense = async(backend_url,bearerToken,name) =>{
    const res = await fetch(backend_url+'/api/commons/expenses', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization':bearerToken
      },
      body: JSON.stringify({name}),
    })
    const data = await res.json()
    return data
}
export const createCategory= async(backend_url,bearerToken,name) =>{
    const res = await fetch(backend_url+'/api/commons/categories', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization':bearerToken
      },
      body: JSON.stringify({name}),
    })
    const data = await res.json()
    return data
}
export const createSubCategory = async(backend_url,bearerToken,name) =>{
    const res = await fetch(backend_url+'/api/commons/subCategories', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization':bearerToken
      },
      body: JSON.stringify({name}),
    })
    const data = await res.json()
    return data
}
export const deleteAccount1= async(backend_url,bearerToken,id) =>{
    await axios.delete(backend_url+'/api/commons/accounts?id='+id,{
      headers:{Authorization:bearerToken}
    })
}

export const deleteExpense = async(backend_url,bearerToken,id) =>{
    await axios.delete(backend_url+'/api/commons/expenses?id='+id,{
      headers:{Authorization:bearerToken}
    })
}

export const deleteCategory = async(backend_url,bearerToken,id) =>{
    await axios.delete(backend_url+'/api/commons/categories?id='+id,{
      headers:{Authorization:bearerToken}
    })
  }

export const deleteSubCategory = async(backend_url,bearerToken,id) =>{
    await axios.delete(backend_url+'/api/commons/subCategories?id='+id,{
      headers:{Authorization:bearerToken}
    })
}

export const editAccount = async(backend_url,bearerToken,id,name) =>{
    await axios.patch(backend_url+'/api/commons/accounts?id='+id+'&name='+name,{
      headers:{Authorization:bearerToken}
    })
}

export const editExpense = async(backend_url,bearerToken,id,name) =>{
    await axios.patch(backend_url+'/api/commons/expenses?id='+id+'&name='+name,{
      headers:{Authorization:bearerToken}
    })
}

export const editCategory = async(backend_url,bearerToken,id,name) =>{
    await axios.patch(backend_url+'/api/commons/categories?id='+id+'&name='+name,{
      headers:{Authorization:bearerToken}
    })
  }

export const editSubCategory = async(backend_url,bearerToken,id,name) =>{
    await axios.patch(backend_url+'/api/commons/subCategories?id='+id+'&name='+name,{
      headers:{Authorization:bearerToken}
    })
}