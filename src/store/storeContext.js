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
	}
};

function reducer(state, action) {
	switch (action.type) {
		case 'SELECT_USER':
			return { ...state, selectedUser: action.payload };
		default:
			return state;
	}
}

export function StoreProvider(props) {
	const [state, dispatch] = React.useReducer(reducer, initialState);
	const value = { state, dispatch };
	return <Store.Provider value={value}>{props.children}</Store.Provider>;
}
