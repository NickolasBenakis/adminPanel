import React, { Fragment, useContext, useEffect } from 'react';
import User from '../user/user';
import './userList.scss';
import { Store } from '../../store/storeContext';
import { USERS } from '../../api/users';

const UserList = () => {
	const { state, dispatch } = useContext(Store);

	useEffect(() => {
		dispatch({
			action: 'FETCH_USERS',
			payload: USERS
		});
	}, []);

	return (
		<Fragment>
			<ul className="list-group left-container col-5">
				{state.users.map((user, index) => {
					return (
						<User
							key={index}
							imageUrl={user.photo}
							name={user.name}
							company={user.company}
							email={user.email}
							phone={user.phone}
							address={user.address}
						/>
					);
				})}
			</ul>
		</Fragment>
	);
};

export default UserList;
