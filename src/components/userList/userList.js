import React, { Fragment, useEffect } from 'react';
import User from '../user/user';
import './userList.scss';

const UserList = ({ users }) => {
	return (
		<Fragment>
			<ul className="list-group left-container col-5">
				{users.map((user, index) => {
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
