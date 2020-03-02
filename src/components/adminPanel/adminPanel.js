import React, { Fragment, useState } from 'react';
import UserList from '../userList/userList';
import UpdateUser from '../updateUser/updateUser';
import { USERS } from '../../api/users';
import './adminPanel.scss';
const AdminPanel = () => {
	const [users, setUsers] = useState(USERS);
	const [selectedUser, setSelectedUser] = useState({});
	return (
		<Fragment>
			<div className="container-fluid admin-panel d-flex m-5-auto shadow-lg p-inherit">
				<UserList users={users} />
				<UpdateUser selectedUser={selectedUser} />
			</div>
		</Fragment>
	);
};

export default AdminPanel;
