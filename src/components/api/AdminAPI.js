import axios from 'axios';

export const createAccount = async(backend_url,name) =>{
    const res = await fetch(backend_url+'/commons/accounts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({name}),
    })
    const data = await res.json()
    return data
}
export const createExpense = async(backend_url,name) =>{
    const res = await fetch(backend_url+'/commons/expenses', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({name}),
    })
    const data = await res.json()
    return data
}
export const createCategory= async(backend_url,name) =>{
    const res = await fetch(backend_url+'/commons/categories', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({name}),
    })
    const data = await res.json()
    return data
}
export const createSubCategory = async(backend_url,name) =>{
    const res = await fetch(backend_url+'/commons/subCategories', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({name}),
    })
    const data = await res.json()
    return data
}
export const deleteAccount1= async(backend_url,id) =>{
    await axios.delete(backend_url+'/commons/accounts?id='+id)
}

export const deleteExpense = async(backend_url,id) =>{
    await axios.delete(backend_url+'/commons/expenses?id='+id)
}

export const deleteCategory = async(backend_url,id) =>{
    await axios.delete(backend_url+'/commons/categories?id='+id)
  }

export const deleteSubCategory = async(backend_url,id) =>{
    await axios.delete(backend_url+'/commons/subCategories?id='+id)
}

export const editAccount = async(backend_url,id,name) =>{
    await axios.patch(backend_url+'/commons/accounts?id='+id+'&name='+name)
}

export const editExpense = async(backend_url,id,name) =>{
    await axios.patch(backend_url+'/commons/expenses?id='+id+'&name='+name)
}

export const editCategory = async(backend_url,id,name) =>{
    await axios.patch(backend_url+'/commons/categories?id='+id+'&name='+name)
  }

export const editSubCategory = async(backend_url,id,name) =>{
    await axios.patch(backend_url+'/commons/subCategories?id='+id+'&name='+name)
}