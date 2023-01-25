
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

import SignupPage from './components/pages/SignupPage';
import { UserContext } from './context/UserContext';
import { ConfigContext } from './context/ConfigContext';

function App() {

	const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || "");
	const [config,setConfig] = useState(false)
	const backend_url = 'http://localhost:8082';

	const setUserInfo = (data) =>{
		localStorage.setItem("user", JSON.stringify(data));
		setUser(data);
	}
	console.log(user)

  	return (
		<BrowserRouter>
			<ConfigContext.Provider value={{config,setConfig}}>
				<UserContext.Provider value={{user,setUser: setUserInfo}}>
					<Layout>
						<Routes>
							<Route path="/" element={<SigninPage backend_url={backend_url}/>}/>
							<Route path="/transactions" element={<TransactionsPage backend_url={backend_url}/>}/>
							<Route path="/accounts" element={<AccountsPage backend_url={backend_url}/>}/>
							<Route path="/budget" element={<BudgetsPage backend_url={backend_url}/>}/>
							<Route path="/portfolio" element={<FundsPage backend_url={backend_url}/>}/>
							<Route path="/admin" element={<AdminPage backend_url={backend_url}/>}/>
							<Route path="/signup" element={<SignupPage backend_url={backend_url}/>}/>
						</Routes>
					</Layout>
				</UserContext.Provider>
			</ConfigContext.Provider>
		</BrowserRouter>
   
  	);
}

export default App;