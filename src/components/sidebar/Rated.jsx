import { useGetAllPostsQuery } from "../../store/api/api";

const Rated = () => {
	const { isLoading, data } = useGetAllPostsQuery();

	return (
		<>
			{isLoading ? (
				<div>Loading...</div>
			) : (
				<div className="rated">
					<p className="rated__title">Rated</p>
					{data.slice(0, 4).map((user) => (
						<div className="user" key={user.id}>
							<img
								src={user.img}
								alt={user.img}
								className="user__img"
							/>
							<div className="user__desc">
								<h3 className="user__name">{user.name}</h3>
								<p className="user__date">{user.date}</p>
								<p className="user__text">{user.title}</p>
							</div>
						</div>
					))}
				</div>
			)}
		</>
	);
};

export default Rated;
