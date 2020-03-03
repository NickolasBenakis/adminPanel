import React from 'react';
import './App.scss';
import AdminPanel from './components/adminPanel/adminPanel';
import { StoreProvider } from './store/storeContext';
import { BrowserRouter as Router, Route } from 'react-router-dom';
function App() {
	return (
		<div className="App">
			<Router>
				<Route path="/">
					<StoreProvider>
						<AdminPanel />
					</StoreProvider>
				</Route>
			</Router>
		</div>
	);
}

export default App;
