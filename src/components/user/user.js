import React, { Fragment, useContext } from 'react';
import './user.scss';
import { Store } from '../../store/storeContext';
import { preFetchImg } from '../../utils/preFetchImg';
import classNames from 'classnames';

const User = ({ id, name, phone, email, address, photo, company }) => {
	const { state, dispatch } = useContext(Store);
	const handleClick = () => {
		dispatch({
			type: 'SELECT_USER',
			payload: { id, photo, name, company, email, phone, address }
		});
	};
	const className = classNames(
		'list-group-item user-list-item list-group-item-action',
		{
			active: id === state.selectedUser.id
		}
	);
	return (
		<Fragment>
			<li className={className} onClick={handleClick}>
				<div>
					<div className="card-body">
						<img
							src={preFetchImg(photo)}
							alt="userImage"
							className="circle-image"
						/>
						<div className="col-10 text-left flex-column-center list-group-item__details">
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
