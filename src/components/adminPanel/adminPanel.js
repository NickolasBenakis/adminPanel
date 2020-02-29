import React, { Fragment } from 'react';
import UserList from '../adminPanel/adminPanel';
import UpdateUser from '../updateUser/updateUser';
import { users } from '../../api/users';
const adminPanel = () => {
	return (
		<Fragment>
			<div className="container">
				<UserList users={users} />
				<UpdateUser />
			</div>
		</Fragment>
	);
};

export default adminPanel;
