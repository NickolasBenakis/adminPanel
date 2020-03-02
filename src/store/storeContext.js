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
			return { ...state, selectedUser: action.payload };
		case 'UPDATE_USER_DATA':
			state.users.forEach((el, index, self) => {
				if (el.id === action.payload.id) {
					el[action.payload.key] = action.payload.value;
				}
			});
			return { ...state };
		default:
			return state;
	}
}

export function StoreProvider({ children }) {
	const [state, dispatch] = React.useReducer(reducer, initialState);
	const value = { state, dispatch };
	return <Store.Provider value={value}>{children}</Store.Provider>;
}
