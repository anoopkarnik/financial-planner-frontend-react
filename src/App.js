
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Layout from './components/layout/Layout';
import TransactionsPage from './components/pages/TransactionsPage';
import AccountsPage from './components/pages/AccountsPage';
import BudgetsPage from './components/pages/BudgetsPage'
import React,{useState} from 'react'
import AdminPage from './components/pages/AdminPage';
import FundsPage from './components/pages/FundsPage';

function App() {
	const backend_url = 'http://65.0.12.84:8082';
    const [userId] = useState(20);

  	return (
		<BrowserRouter>
				<Layout>
					<Routes>
						<Route path="/" element={<TransactionsPage backend_url={backend_url} userId={userId}/>}/>
						<Route path="/transactions" element={<TransactionsPage backend_url={backend_url} userId={userId}/>}/>
						<Route path="/accounts" element={<AccountsPage backend_url={backend_url} userId={userId}/>}/>
						<Route path="/budget" element={<BudgetsPage backend_url={backend_url} userId={userId}/>}/>
						<Route path="/portfolio" element={<FundsPage backend_url={backend_url} userId={userId}/>}/>
						<Route path="/admin" element={<AdminPage backend_url={backend_url} userId={userId}/>}/>
					</Routes>
				</Layout>
		</BrowserRouter>
   
  	);
}

export default App;