import React, { Fragment } from 'react';
import './user.scss';

const User = ({ name, phone, email, address, imageUrl, company }) => {
	return (
		<Fragment>
			<li className="list-group-item user-list-item">
				<div className="card">
					<div className="card-body">
						<img src={imageUrl} alt="userImage" className="rounded-circle" />
						<h5 className="card-title">{name}</h5>
						<h6 className="card-subtitle mb-2 text-muted">{email}</h6>
					</div>
				</div>
			</li>
		</Fragment>
	);
};

export default User;
