
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Layout from './components/layout/Layout';
import TransactionsApi from './components/api/TransactionsApi';
import AccountsApi from './components/api/AccountsApi';

function App() {

  	return (
		<BrowserRouter>
				<Layout>
					<Routes>
						<Route path="/" element={<TransactionsApi/>}/>
						<Route path="/transactions" element={<TransactionsApi/>}/>
						<Route path="/accounts" element={<AccountsApi/>}/>
						<Route path="/budget" element={<div>Transactions</div>}/>
						<Route path="/portfolio" element={<div>Transactions</div>}/>
					</Routes>
				</Layout>
		</BrowserRouter>
   
  	);
}

export default App;