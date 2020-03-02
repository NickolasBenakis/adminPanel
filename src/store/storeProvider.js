import React from 'react';
import { StoreContext } from './storeContext';
import { useLocalStore } from 'mobx-react';
import { USERS } from '../api/users';
import * as mobx from 'mobx';

const StoreProvider = ({ children }) => {
	const store = useLocalStore(() => ({
		searchField: '',
		users: USERS,
		selectedUser: {},
		updateUsers: () => {
			let selectedUserIndex = store.users.indexOf(store.selectedUser.id);
			store.users[selectedUserIndex] = store.selectedUser;
		},
		updateSelectedUser: (key, value) => {
			store.selectedUser = { ...store.selectedUser, [key]: value };
		}
	}));
	return (
		<StoreContext.Provider value={store}>{children}</StoreContext.Provider>
	);
};

export default StoreProvider;
