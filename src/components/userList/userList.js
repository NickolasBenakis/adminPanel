import React, { Fragment, useContext } from 'react';
import User from '../user/user';
import './userList.scss';
import { StoreContext } from '../../store/storeContext';
import { useObserver } from 'mobx-react';
const UserList = () => {
	const store = useContext(StoreContext);

	return useObserver(() => (
		<Fragment>
			<ul className="list-group left-container col-5">
				{store.users.map((user, index) => {
					return (
						<User
							key={index}
							id={user.id}
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
	));
};

export default UserList;
