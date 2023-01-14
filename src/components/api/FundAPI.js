import axios from 'axios';

export const getFunds = async(userId,backend_url) =>{
    const res = await fetch(backend_url+'/funds?userId='+userId)
    if(res.status===200 | res.status===201){
      var data = await res.json()
    }
    else{
      var data=[];
    }    
    return data
}

export const getFundSummary = async(userId,backend_url) =>{
    const res = await fetch(backend_url+'/funds/summary?userId='+userId)
    if(res.status===200 | res.status===201){
      var data = await res.json()
    }
    else{
      var data=[];
    }    
    return data
}

export const createFund = async(userId,backend_url,name,amountAllocated,
    amountNeeded) =>{
  const res = await fetch(backend_url+'/funds', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({userId,name,amountAllocated,amountNeeded}),
  })
  const data = await res.json()

  return data
}

export const deleteFunds = async(backend_url,id) =>{
await axios.delete(backend_url+'/funds?id='+id)
};

export const updateAmountNeeded = async(id,backend_url,amountNeeded) =>{
    await fetch(backend_url+'/funds/needed?id='+id+'&amountNeeded='+amountNeeded, {
      method: 'PATCH'
    })
};

export const updateAmountAllocated = async(id,backend_url,amountAllocated) =>{
    await fetch(backend_url+'/funds/allocated?id='+id+'&amountAllocated='+amountAllocated, {
      method: 'PATCH'
    })
};
