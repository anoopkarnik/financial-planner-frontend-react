import axios from 'axios';
export const getTotalSubAccounts = async(userId,backend_url) =>{
    const res = await fetch(backend_url+'/accounts/2?user='+userId)
    if(res.status===200){
      var data = await res.json()
    }
    else{
      var data=[];
    }
    var arr = new Array();
    for(var j =0;j<data.length;j++){
      arr.push({id:data[j]['id'],name:data[j]['name'],cost:data[j]['balance']})
    }
    
    return arr
}

export const getTotalAccounts = async(userId,backend_url) =>{
  const res = await fetch(backend_url+'/commons/accounts?userId='+userId)
  const data = await res.json()
  var options = new Array();
  for(var j =0;j<data.length;j++){
    options.push(data[j])
  }
  return options
}

export const deleteAccount = async(backend_url,id) =>{
    await axios.delete(backend_url+'/accounts?id='+id)
  }

export const createAccount = async(userId,backend_url,name,balance,accountName,
    liquidity,freeLiquidity) =>{
    const res = await fetch(backend_url+'/accounts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({userId,name,balance,accountName,liquidity,
      freeLiquidity}),
    })
    const data = await res.json()
    return data
}

export const updateBalance = async(id,backend_url,balance) =>{
  await fetch(backend_url+'/accounts?id='+id+'&cost='+balance, {
    method: 'PATCH'
  })
}