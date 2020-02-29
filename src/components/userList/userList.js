import React, { Fragment } from 'react';
import User from '../user/user';
const UserList = ({ users }) => {
	return (
		<Fragment>
			<ul className="list-group">
				{users.map((user, index, self) => (
					<User key={index} />
				))}
			</ul>
		</Fragment>
	);
};

export default UserList;
