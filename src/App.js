import React, { Suspense } from 'react';
import './App.scss';
import AdminPanel from './components/adminPanel/adminPanel';
import { StoreProvider } from './store/storeContext';
function App() {
	return (
		<div className="App">
			<Suspense fallback={<div>Loading...</div>}>
				<StoreProvider>
					<AdminPanel />
				</StoreProvider>
			</Suspense>
		</div>
	);
}

export default App;
