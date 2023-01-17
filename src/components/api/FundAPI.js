import axios from 'axios';

export const getFunds = async(userId,backend_url,bearerToken) =>{
    const res = await fetch(backend_url+'/api/funds?userId='+userId,{
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

export const getFundSummary = async(userId,backend_url,bearerToken) =>{
    const res = await fetch(backend_url+'/api/funds/summary?userId='+userId,{
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

export const createFund = async(userId,backend_url,bearerToken,name,amountAllocated,
    amountNeeded) =>{
  const res = await fetch(backend_url+'/api/funds', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization':bearerToken
    },
    body: JSON.stringify({userId,name,amountAllocated,amountNeeded}),
  })
  const data = await res.json()

  return data
}

export const deleteFunds = async(backend_url,bearerToken,id) =>{
await axios.delete(backend_url+'/api/funds?id='+id,{
  headers:{Authorization:bearerToken}
})
};

export const updateAmountNeeded = async(id,backend_url,bearerToken,amountNeeded) =>{
    await fetch(backend_url+'/api/funds/needed?id='+id+'&amountNeeded='+amountNeeded, {
      method: 'PATCH',
      headers:{
        'Authorization':bearerToken
      }
    })
};

export const updateAmountAllocated = async(id,backend_url,bearerToken,amountAllocated) =>{
    await fetch(backend_url+'/api/funds/allocated?id='+id+'&amountAllocated='+amountAllocated, {
      method: 'PATCH',
      headers: {
        'Authorization':bearerToken
      }
    })
};
