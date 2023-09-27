import React, { useEffect, useState } from "react";
import Post from "../../components/post/Post";
import Tags from "../../components/tags/Tags";
import Sidebar from "../../components/sidebar/Sidebar";
import Comment from "../../components/comment/Comment";
import AddComment from "../../components/addComment/AddComment";
import { useUpdatePostMutation } from "../../store/api/api";

const FullPost = ({ data, active, setActive, id }) => {
	const [views, setViews] = useState(data.views);
	const [likes, setLikes] = useState(data.likes);
	const [postInfo, setPostInfo] = useState(data);
	const [UpdatePost] = useUpdatePostMutation();

	useEffect(() => {
		setViews(prev => prev + 1);
		setPostInfo({ views: views + 1});
		UpdatePost({ id, postInfo });
		/* eslint-disable */
	}, []);

	useEffect(() => {
		UpdatePost({ id, postInfo });
		/* eslint-disable */
	}, [postInfo]);

	const handleButton = (e) => {
		e.preventDefault();
		setLikes(likes + 1);
		setPostInfo({ likes: likes + 1});
	}

	return (
		<>
			<div className="full-post">
				<div className="container">
					<Sidebar />
					<div className="full-post__content">
						<Post item={data} likes={likes} />
						<div className="full-post__buttons">
							<div onClick={handleButton} className="full-post__btn">+ like</div>
							<div
								className="full-post__btn"
								onClick={() => setActive((prev) => !prev)}
							>
								+ comment
							</div>
						</div>
						{active ? (
							<AddComment data={data} id={id} />
						) : (
							""
						)}
						<div className="full-post__comments">
							{data.comments.toReversed().map((comment, index) => (
								<Comment
									key={index}
									comment={comment}
									post={data}
								/>
							))}
						</div>
					</div>
					<Tags />
				</div>
			</div>
		</>
	);
};

export default FullPost;
