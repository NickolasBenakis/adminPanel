import React, { Fragment } from 'react';
import UserList from '../userList/userList';
import UpdateUser from '../updateUser/updateUser';
import { USERS } from '../../api/users';
import './adminPanel.scss';
import { StoreProvider } from '../../store/storeContext';
const AdminPanel = () => {
	return (
		<Fragment>
			<StoreProvider>
				<div className="container-fluid admin-panel d-flex m-5-auto shadow-lg p-inherit">
					<UserList />
					<UpdateUser />
				</div>
			</StoreProvider>
		</Fragment>
	);
};

export default AdminPanel;
