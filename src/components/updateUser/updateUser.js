import React, { Fragment, useContext, useEffect, useState } from 'react';
import './updateUser.scss';
import { StoreContext } from '../../store/storeContext';
import { useObserver } from 'mobx-react';

const UpdateUser = () => {
	const store = useContext(StoreContext);

	useEffect(() => {
		console.log(window.location.search.substring(4));
	});
	const handleChange = e => {
		console.log(e.currentTarget.id, e.currentTarget.value);

		store.updateSelectedUser(e.currentTarget.id, e.currentTarget.value);
		React.forceUpdate();
	};

	return useObserver(() => (
		<Fragment>
			{store.selectedUser.id === '' ? (
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
							value={store.selectedUser.name}
							onChange={handleChange}
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
							defaultValue={store.selectedUser.email}
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
							defaultValue={store.selectedUser.phone}
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
							defaultValue={store.selectedUser.address}
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
							defaultValue={store.selectedUser.company}
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
	));
};

export default UpdateUser;
