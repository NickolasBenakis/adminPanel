import React from 'react';

export const Store = React.createContext();

const initialState = {
	selectedUser: {
		id: '',
		photo: '',
		name: '',
		company: '',
		email: '',
		phone: '',
		address: ''
	},
	users: []
};

function reducer(state, action) {
	switch (action.type) {
		case 'FETCH_USERS':
			return { ...state, users: action.payload };
		case 'SELECT_USER':
			return { ...state, selectedUser: action.payload };
		case 'UPDATE_USER_DATA':
			initialState.users.forEach((el, index, self) => {
				if (el.id === action.payload.id) {
					el[action.payload.key] = action.payload.value;
				}
			});
			return { ...state };
		default:
			return state;
	}
}

export function StoreProvider(props) {
	const [state, dispatch] = React.useReducer(reducer, initialState);
	const value = { state, dispatch };
	return <Store.Provider value={value}>{props.children}</Store.Provider>;
}
