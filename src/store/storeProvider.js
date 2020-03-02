import React from 'react';
import { StoreContext } from './storeContext';
import { useLocalStore } from 'mobx-react';
import { USERS } from '../api/users';

const StoreProvider = ({ children }) => {
	const store = useLocalStore(() => ({
		searchField: '',
		users: USERS,
		selectedUser: {},
		updateUser: () => {
			store.users = store.users.map((user, index, self) => {
				if (user.id === store.selectedUser.id) {
					user = store.selectedUser;
				}
			});
		}
	}));
	return (
		<StoreContext.Provider value={store}>{children}</StoreContext.Provider>
	);
};

export default StoreProvider;
