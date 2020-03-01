import React, { Fragment } from 'react';
import UserList from '../userList/userList';
import UpdateUser from '../updateUser/updateUser';
import { USERS } from '../../api/users';
import './adminPanel.scss';
const AdminPanel = () => {
	return (
		<Fragment>
			<div className="container-fluid admin-panel d-flex">
				<div className="col-6">
					<UserList users={USERS} />
				</div>
				<div className="col-6">
					<UpdateUser />
				</div>
			</div>
		</Fragment>
	);
};

export default AdminPanel;
