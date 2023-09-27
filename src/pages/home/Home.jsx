import React from "react";
import AllPosts from "../../components/all-posts/AllPosts";
import Tags from "../../components/tags/Tags";
import Sidebar from "../../components/sidebar/Sidebar";

const Home = () => {
	return (
		<div className="container">
			<Sidebar />
			<AllPosts />
			<Tags />
		</div>
	);
};

export default Home;
