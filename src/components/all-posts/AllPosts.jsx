import React from "react";
import Post from "../post/Post";
import { useGetAllPostsQuery } from "../../store/api/api";

const AllPosts = () => {
	const { isLoading, data } = useGetAllPostsQuery();

	return (
		<div className="all-posts">
			{isLoading ? (
				<div>Loading...</div>
			) : data ? (
				data.map((item) => (
					<Post key={item.id} item={item} />
				))
			) : (
				<div>Not found</div>
			)}
		</div>
	);
};

export default AllPosts;
