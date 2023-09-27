import React from "react";
import {
	AiOutlineEye,
	AiOutlineHeart,
	AiOutlineComment,
} from "react-icons/ai";
import { Link } from "react-router-dom";

const Post = ({ item }) => {

	return (
		<div className="all-posts__item">
			<div className="all-posts__header">
				<h3 className="all-posts__name">{item.name}</h3>
				<p className="all-posts__date">{item.date}</p>
				<h2 className="all-posts__title">{item.title}</h2>
				<div className="all-posts__bottom">
					<div className="all-posts__tags">
						{item.tags.slice(0, 4).map((tag, index) => (
							<p key={index}>#{tag}</p>
						))}
					</div>
					<div className="all-posts__info">
						<div className="all-posts__view">
							{item.views}
							<AiOutlineEye />
						</div>
						<div className="all-posts__likes">
							{item.likes} <AiOutlineHeart />
						</div>
						<div className="all-posts__comments">
							{item.comments.length} <AiOutlineComment />
						</div>
					</div>
				</div>
			</div>
			<div className="all-posts__img">
				<img src={item.image} alt={item.image} />
				<Link
					to={`/post/${item.id}`}
					className="all-posts__link"
				>
					CHECK FULL ...
				</Link>
			</div>
		</div>
	);
};

export default Post;
