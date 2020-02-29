import React, { Fragment } from 'react';
import User from '../user/user';
const UserList = ({ users }) => {
	return (
		<Fragment>
			<ul className="list-group">
				{users.map((user, index, self) => (
					<User
						key={index}
						imageUrl={user.photo}
						name={user.name}
						company={user.company}
						email={user.email}
						phone={user.phone}
						address={user.address}
					/>
				))}
			</ul>
		</Fragment>
	);
};

export default UserList;
