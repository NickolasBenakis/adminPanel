import React, { Fragment } from 'react';
import './user.scss';

const User = () => {
	return (
		<Fragment>
			<li className="list-group-item">
				<div className="card">
					<div className="card-body">
						<img src="" alt="userImage" className="rounded-circle" />
						<h5 className="card-title">Card title</h5>
						<h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
					</div>
				</div>
			</li>
		</Fragment>
	);
};

export default User;
