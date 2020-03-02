import React, { Fragment } from 'react';
import UserList from '../userList/userList';
import UpdateUser from '../updateUser/updateUser';
import './adminPanel.scss';
const AdminPanel = () => {
	return (
		<Fragment>
			<div className="container-fluid admin-panel d-flex m-5-auto shadow-lg p-inherit">
				<UserList />
				<UpdateUser />
			</div>
		</Fragment>
	);
};

export default AdminPanel;
