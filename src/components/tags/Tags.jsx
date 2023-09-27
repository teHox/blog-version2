import React from "react";
import { FiHash } from "react-icons/fi";
import Panel from "./panel/Panel";
import { useGetTagsQuery } from "../../store/api/tags.api";

const Tags = () => {
	const { isLoading, data } = useGetTagsQuery();

	return (
		<>
			{isLoading ? (
				<div>Loading...</div>
			) : (
				<div className="tags">
					<Panel />
					<div className="tags__wrapper">
						<p className="tags__title">Tags</p>
						<div className="tags__items">
							{data.map((item, index) => (
								<div className="tags__item" key={index}>
									<FiHash />
									<div className="tags__desc">
										<h3 className="tags__name">
											{item.name}
										</h3>
										<p className="tags__date">{item.date}</p>
										<p className="tags__text">
											{item.description}
										</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default Tags;
