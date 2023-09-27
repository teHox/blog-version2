import React from "react";

const Comment = ({ comment, post }) => {
	return (
		<div className="full-post__item">
			<img
				src={post.img}
				alt={post.img}
				className="full-post__img"
			/>
			<div className="full-post__desc">
				<h3 className="full-post__name">{post.name}</h3>
				<p className="full-post__date">{post.date}</p>
				<p className="full-post__text">{comment}</p>
			</div>
		</div>
	);
};

export default Comment;
