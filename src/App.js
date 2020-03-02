import React, { Suspense } from 'react';
import './App.scss';
import AdminPanel from './components/adminPanel/adminPanel';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import StoreProvider from './store/storeProvider';

function App() {
	return (
		<div className="App">
			<Router>
				<Route path="/">
					<Suspense fallback={<div>Loading...</div>}>
						<StoreProvider>
							<AdminPanel />
						</StoreProvider>
					</Suspense>
				</Route>
			</Router>
		</div>
	);
}

export default App;
