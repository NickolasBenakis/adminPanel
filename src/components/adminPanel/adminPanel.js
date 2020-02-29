import React, { Fragment } from 'react';
import UserList from '../userList/userList';
import UpdateUser from '../updateUser/updateUser';
import { USERS } from '../../api/users';
const AdminPanel = () => {
	return (
		<Fragment>
			<div className="container">
				<UserList users={USERS} />
				<UpdateUser />
			</div>
		</Fragment>
	);
};

export default AdminPanel;
