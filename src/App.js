
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Layout from './components/layout/Layout';
import TransactionsPage from './components/pages/TransactionsPage';
import AccountsPage from './components/pages/AccountsPage';
import BudgetsPage from './components/pages/BudgetsPage'
import React,{useEffect, useState} from 'react'
import AdminPage from './components/pages/AdminPage';
import FundsPage from './components/pages/FundsPage';
import SigninPage from './components/pages/SigninPage';
import { signin } from './components/api/AuthenticationAPI';
import SignupPage from './components/pages/SignupPage';

function App() {
	const backend_url = 'http://localhost:8082';
    const [userId,setUserId] = useState('');
	const [bearerToken,setBearerToken] = useState('');
	const [name, setName] = useState('');
	const [email,setEmail] = useState('');


	const refreshApp = async(name,password) =>{
		const data = await signin(backend_url,name,password);
		console.log(data.id);
		setUserId(data.id);
		setBearerToken('Bearer '+data.accessToken);
		setName(data.name);
		setEmail(data.email);
	}

  	return (
		<BrowserRouter>
				<Layout>
					<Routes>
						<Route path="/" element={<SigninPage refreshApp={refreshApp}/>}/>
						<Route path="/transactions" element={<TransactionsPage backend_url={backend_url} userId={userId} bearerToken={bearerToken}/>}/>
						<Route path="/accounts" element={<AccountsPage backend_url={backend_url} userId={userId} bearerToken={bearerToken}/>}/>
						<Route path="/budget" element={<BudgetsPage backend_url={backend_url} userId={userId} bearerToken={bearerToken}/>}/>
						<Route path="/portfolio" element={<FundsPage backend_url={backend_url} userId={userId} bearerToken={bearerToken}/>}/>
						<Route path="/admin" element={<AdminPage backend_url={backend_url} userId={userId} bearerToken={bearerToken}/>}/>
						<Route path="/signup" element={<SignupPage backend_url={backend_url} refreshApp={refreshApp} bearerToken={bearerToken}/>}/>
					</Routes>
				</Layout>
		</BrowserRouter>
   
  	);
}

export default App;