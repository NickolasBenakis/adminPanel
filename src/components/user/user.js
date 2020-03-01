import React, { Fragment, useContext } from 'react';
import './user.scss';
import { Store } from '../../store/storeContext';

const User = ({ name, phone, email, address, imageUrl, company }) => {
	const { state, dispatch } = useContext(Store);

	const handleCLick = e => {
		const allElements = document.querySelectorAll('.active');
		allElements.forEach(el => el.classList.remove('active'));
		if (!e.currentTarget.classList.contains('active')) {
			e.currentTarget.classList.add('active');
		} else {
			e.currentTarget.classList.remove('active');
		}
		dispatch({
			type: 'SELECT_USER',
			payload: { name, phone, email, address, imageUrl, company }
		});
	};
	return (
		<Fragment>
			<li
				className="list-group-item user-list-item list-group-item-action"
				onClick={handleCLick}
			>
				{console.log(state)}
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

export default React.memo(User);
