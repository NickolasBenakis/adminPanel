import React from 'react';
import { USERS } from '../api/users';

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

function reducer(state, action) {
	switch (action.type) {
		case 'UPDATE_SELECTED_USER':
			const updatedUser = {
				...state.selectedUser,
				[action.payload.key]: action.payload.value
			};
			return {
				...state,
				selectedUser: updatedUser
			};
		case 'SAVE_USER':
			return {
				...state,
				users: state.users.map(user => {
					if (user.id === action.payload.id) {
						return action.payload;
					} else {
						return user;
					}
				})
			};
		case 'RESET_USER':
			return {
				...state,
				selectedUser: state.users.find(user => user.id === action.payload.id)
			};
		case 'SELECT_USER':
			if (
				JSON.stringify(action.payload) === JSON.stringify(state.selectedUser)
			) {
				return state;
			} else {
				return { ...state, selectedUser: action.payload };
			}
		default:
			return state;
	}
}

export function StoreProvider({ children }) {
	const [state, dispatch] = React.useReducer(reducer, initialState);
	const value = React.useMemo(() => ({ state, dispatch }), [state, dispatch]);
	console.log(value);
	return <Store.Provider value={value}>{children}</Store.Provider>;
}
