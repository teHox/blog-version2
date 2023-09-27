import React from "react";
import Navbar from "../../components/navbar/Navbar";
import { adminInfo } from "./adminInfo";
import {useGetAllPostsQuery} from "../../store/api/api";
import AdminPost from "../../components/postAdmin/PostAdmin";

const Admin = () => {
	const { isLoading, data } = useGetAllPostsQuery();
	return (
		<div className="container">
			<div className="admin">
				<h1 className="admin__title">Hello, admin!</h1>
				<div className="admin__all-posts">
					{isLoading ? (
						<div>Loading...</div>
					) : data ? (
						data.map((item) => (
							<AdminPost key={item.id} item={item} />
						))
					) : (
						<div>Not found</div>
					)}
				</div>
			</div>
			<Navbar adminInfo={adminInfo} />
		</div>
	);
};

export default Admin;
