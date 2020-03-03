import {
	UPDATE_SELECTED_USER,
	SAVE_USER,
	SELECT_USER,
	RESET_USER
} from './index';

export function reducer(state, action) {
	switch (action.type) {
		case UPDATE_SELECTED_USER:
			const updatedUser = {
				...state.selectedUser,
				[action.payload.key]: action.payload.value
			};
			return {
				...state,
				selectedUser: updatedUser
			};
		case SAVE_USER:
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
		case RESET_USER:
			return {
				...state,
				selectedUser: state.users.find(user => user.id === action.payload.id)
			};
		case SELECT_USER:
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
