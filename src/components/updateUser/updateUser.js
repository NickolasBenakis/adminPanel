import React, { Fragment, useContext } from 'react';
import './updateUser.scss';
import { Store } from '../../store/storeContext';
import classNames from 'classnames';

const UpdateUser = () => {
	const { state, dispatch } = useContext(Store);

	const handleChange = e => {
		e.preventDefault();
		dispatch({
			type: 'UPDATE_SELECTED_USER',
			payload: {
				key: e.currentTarget.id,
				value: e.currentTarget.value
			}
		});
	};
	const handleSubmit = e => {
		e.preventDefault();
		dispatch({
			type: 'SAVE_USER',
			payload: state.selectedUser
		});
	};

	const hasDeepChanged = () => {
		const el = state.users.find(
			(el, index, self) => el.id === state.selectedUser.id
		);
		return JSON.stringify(el) === JSON.stringify(state.selectedUser);
	};

	const resetState = e => {
		e.preventDefault();
		dispatch({
			type: 'RESET_USER',
			payload: state.selectedUser
		});
	};

	const cancelBtnClass = classNames('btn btn-danger float-left', {
		'd-none': hasDeepChanged()
	});

	return (
		<Fragment>
			{state.selectedUser.id === '' ? (
				<span className="muted-right-wrapper">
					<h5 className="muted-right-container card-subtitle mb-2 text-muted ">
						select user to update
					</h5>
				</span>
			) : (
				<form
					className="right-container m-50-auto col-7 col-md-6"
					onSubmit={handleSubmit}>
					<div className="form-group row">
						<label htmlFor="name" className="col-sm-2 col-form-label no-p-side">
							Name
						</label>
						<input
							type="text"
							className="form-control"
							id="name"
							placeholder="Enter Name"
							value={state.selectedUser.name}
							onChange={handleChange}
						/>
					</div>
					<div className="form-group row">
						<label
							htmlFor="email"
							className="col-sm-2 col-form-label no-p-side">
							Email
						</label>
						<input
							type="email"
							className="form-control"
							id="email"
							placeholder="Enter Email"
							value={state.selectedUser.email}
							onChange={handleChange}
						/>
					</div>
					<div className="form-group row">
						<label
							htmlFor="phone"
							className="col-sm-2 col-form-label no-p-side">
							Phone
						</label>
						<input
							type="text"
							className="form-control"
							id="phone"
							placeholder="Enter Phone"
							value={state.selectedUser.phone}
							onChange={handleChange}
						/>
					</div>
					<div className="form-group row">
						<label
							htmlFor="address"
							className="col-sm-2 col-form-label no-p-side">
							Address
						</label>
						<input
							type="text"
							className="form-control"
							id="address"
							placeholder="Enter address"
							value={state.selectedUser.address}
							onChange={handleChange}
						/>
					</div>
					<div className="form-group row">
						<label
							htmlFor="company"
							className="col-sm-2 col-form-label no-p-side">
							Company
						</label>
						<input
							type="text"
							className="form-control"
							id="company"
							placeholder="Enter Company"
							value={state.selectedUser.company}
							onChange={handleChange}
						/>
					</div>
					<button
						type="submit"
						className="btn btn-primary float-right"
						disabled={hasDeepChanged()}>
						Save
					</button>
					<button
						type="button"
						className={cancelBtnClass}
						disabled={hasDeepChanged()}
						onClick={resetState}>
						Cancel
					</button>
				</form>
			)}
		</Fragment>
	);
};

export default UpdateUser;
