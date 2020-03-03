import React from 'react';
import { USERS } from '../api/users';
import { reducer } from './storeReducer';
export const Store = React.createContext();

const initialState = {
	selectedUser: {
		id: '',
		imageUrl: '',
		name: '',
		company: '',
		email: '',
		phone: '',
		address: ''
	},
	users: USERS
};

export function StoreProvider({ children }) {
	const [state, dispatch] = React.useReducer(reducer, initialState);
	const value = React.useMemo(() => ({ state, dispatch }), [state, dispatch]);
	return <Store.Provider value={value}>{children}</Store.Provider>;
}
