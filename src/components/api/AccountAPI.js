import axios from 'axios';
export const getTotalSubAccounts = async(userId,backend_url,bearerToken) =>{
    const res = await fetch(backend_url+'/api/accounts/2?user='+userId,{
      method: 'GET',
      headers:{
        'Authorization':bearerToken
      }
    }
    )
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

export const getTotalAccountBalances = async(userId,backend_url,bearerToken) =>{
  const res = await fetch(backend_url+'/api/accounts/balances?userId='+userId,{
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
  return options
}


export const deleteAccount = async(backend_url,bearerToken,id) =>{
    await axios.delete(backend_url+'/api/accounts?id='+id,{
      headers:{Authorization:bearerToken}
    })
  }

export const createAccount = async(userId,backend_url,bearerToken,name,balance,accountName,
    liquidity,freeLiquidity) =>{
    const res = await fetch(backend_url+'/api/accounts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization':bearerToken
      },
      body: JSON.stringify({userId,name,balance,accountName,liquidity,
      freeLiquidity}),
    })
    const data = await res.json()
    return data
}

export const updateBalance = async(id,backend_url,bearerToken,balance) =>{
  await fetch(backend_url+'/api/accounts?id='+id+'&cost='+balance, {
    method: 'PATCH',
    headers:{
      'Authorization':bearerToken
    }
  })
}