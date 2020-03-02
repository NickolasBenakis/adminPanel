import React, { Fragment, useContext } from 'react';
import './updateUser.scss';
import { Store } from '../../store/storeContext';
const UpdateUser = () => {
	const { state, dispatch } = useContext(Store);

	const handleChange = e => {
		console.log(e);
	};
	return (
		<Fragment>
			{state.selectedUser.id === '' ? (
				<span></span>
			) : (
				<form className="right-container m-50-auto col-6">
					<div className="form-group row">
						<label htmlFor="name" className="col-sm-2 col-form-label no-p-side">
							Name
						</label>
						<input
							type="text"
							className="form-control"
							id="name"
							placeholder="Enter Name"
							defaultValue={state.selectedUser.name}
						/>
					</div>
					<div className="form-group row">
						<label
							htmlFor="email"
							className="col-sm-2 col-form-label no-p-side"
						>
							Email
						</label>
						<input
							type="email"
							className="form-control"
							id="email"
							placeholder="Enter Email"
							defaultValue={state.selectedUser.email}
						/>
					</div>
					<div className="form-group row">
						<label
							htmlFor="phone"
							className="col-sm-2 col-form-label no-p-side"
						>
							Phone
						</label>
						<input
							type="text"
							className="form-control"
							id="phone"
							placeholder="Enter Phone"
							defaultValue={state.selectedUser.phone}
						/>
					</div>
					<div className="form-group row">
						<label
							htmlFor="address"
							className="col-sm-2 col-form-label no-p-side"
						>
							Address
						</label>
						<input
							type="text"
							className="form-control"
							id="address"
							placeholder="Enter address"
							defaultValue={state.selectedUser.address}
						/>
					</div>
					<div className="form-group row">
						<label
							htmlFor="company"
							className="col-sm-2 col-form-label no-p-side"
						>
							Company
						</label>
						<input
							type="text"
							className="form-control"
							id="company"
							placeholder="Enter Company"
							defaultValue={state.selectedUser.company}
						/>
					</div>
					<button
						type="submit"
						className="btn btn-primary float-right"
						disabled={true}
					>
						Save
					</button>
				</form>
			)}
		</Fragment>
	);
};

export default UpdateUser;
