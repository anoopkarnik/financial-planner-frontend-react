import React,{useState,useEffect,useContext} from 'react'
import { getFunds,getFundSummary } from '../api/FundAPI';
import TopBoxData from '../misc/Funds/TopBoxData';
import FundItem from '../misc/Funds/FundItem';
import AddFundForm from '../misc/Funds/AddFundForm';
import { UserContext } from '../../context/UserContext';

const FundsPage = (props) => {

	
    const [funds, setFunds] = useState([]);
    const [fundSummary, setFundSummary] = useState('');
    const [showAddFund, setShowAddFund] = useState(false);
    const {user, setUser} = useContext(UserContext);


    useEffect(() => {
        refreshBudgetsPage(user.id,props.backend_url,'Bearer '+user.accessToken);
      }, []);

const refreshBudgetsPage = async(userId,backend_url,bearerToken) =>{
  var fund_list = await getFunds(userId,backend_url,bearerToken);
  var fund_summary = await getFundSummary(userId,backend_url,bearerToken);
  setFunds(fund_list)
  setFundSummary(fund_summary)

}

  return (
    <div>
      <div className='row mt-3'>
				<div className='col-sm'>
          <TopBoxData name="Portfolio Amount (in Rs)" value={fundSummary.totalAmount}/>
				</div>
        <div className='col-sm'>
          <TopBoxData name="Amount Available to invest in funds (in Rs)" value={fundSummary.amountAvailable}/>
				</div>
        <div className='col-sm'>
          <TopBoxData name="Amount Allocated in funds (in Rs)" value={fundSummary.amountAllocated}/>
				</div>
      </div>
      <div className='row mt-3'>
				<div className='col-sm'>
          <TopBoxData name="Financial Independence Amount (in Rs)" value={fundSummary.financialIndependenceAmount}/>
				</div>
        <div className='col-sm'>
          <TopBoxData name="Financial Independence Percentage" value={fundSummary.financialIndependencePercentage}/>
				</div>
        <div className='col-sm'>
          <TopBoxData name="Time left for Financial Independence (in years)" value={fundSummary.timeLeft}/>
				</div>
      </div>
      <h3 className='mt-3 text-center'>Funds</h3>
      <div className='row mt-3'>
				<div className='col-sm'>
        {funds.map((fund)=>(
					<FundItem item={fund}
          refreshFunction={refreshBudgetsPage} 
          backend_url={props.backend_url}/>
        ))}
				</div>
		  </div>
      <h3 onClick={()=>{setShowAddFund(!showAddFund)}} className='mt-3 text-center'><div className='btn btn-secondary btn-lg'>Add Fund</div></h3>
      {showAddFund?<AddFundForm backend_url={props.backend_url}/>:null}
    </div>
  )
}

export default FundsPage