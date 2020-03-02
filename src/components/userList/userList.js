import React, { Fragment, useContext } from 'react';
import User from '../user/user';
import './userList.scss';
import { Store } from '../../store/storeContext';

const UserList = () => {
	const { state } = useContext(Store);
	return (
		<Fragment>
			<ul className="list-group left-container col-3 col-md-5">
				{state.users.map((user, index) => {
					return (
						<User
							key={index}
							id={user.id}
							name={user.name}
							phone={user.phone}
							email={user.email}
							address={user.address}
							photo={user.photo}
							company={user.company}
						/>
					);
				})}
			</ul>
		</Fragment>
	);
};

export default React.memo(UserList);
