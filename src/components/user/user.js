import React, { Fragment } from 'react';
import './user.scss';

const User = ({ name, phone, email, address, imageUrl, company, ref }) => {
	const handleCLick = e => {
		if (!e.currentTarget.classList.contains('active')) {
			e.currentTarget.classList.add('active');
		} else {
			e.currentTarget.classList.remove('active');
		}
	};
	return (
		<Fragment>
			<li
				className="list-group-item user-list-item list-group-item-action"
				onClick={handleCLick}
			>
				<div>
					<div className="card-body">
						<img src={imageUrl} alt="userImage" className="circle-image" />
						<div className="col-8 text-left flex-column-center list-group-item__details">
							<h5 className="card-title word-inline">{name}</h5>
							<h6 className="card-subtitle mb-2 text-muted word-inline">
								{email}
							</h6>
						</div>
					</div>
				</div>
			</li>
		</Fragment>
	);
};

export default User;
