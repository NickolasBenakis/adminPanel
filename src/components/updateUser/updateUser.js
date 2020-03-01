import React, { Fragment } from 'react';
import './updateUser.scss';
const UpdateUser = () => {
	return (
		<Fragment>
			<form className="right-container m-50-auto">
				<div className="form-group row">
					<label htmlFor="name" className="col-sm-2 col-form-label no-p-side">
						Name
					</label>
					<input
						type="text"
						className="form-control"
						id="name"
						placeholder="Enter Name"
					/>
				</div>
				<div className="form-group row">
					<label htmlFor="email" className="col-sm-2 col-form-label no-p-side">
						Email
					</label>
					<input
						type="email"
						className="form-control"
						id="email"
						placeholder="Enter Email"
					/>
				</div>
				<div className="form-group row">
					<label htmlFor="phone" className="col-sm-2 col-form-label no-p-side">
						Phone
					</label>
					<input
						type="text"
						className="form-control"
						id="phone"
						placeholder="Enter Phone"
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
					/>
				</div>
				<button type="submit" className="btn btn-primary float-right">
					Save
				</button>
			</form>
		</Fragment>
	);
};

export default UpdateUser;
