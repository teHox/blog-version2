import { Link } from "react-router-dom";
import Rated from "./Rated";
import { CgArrangeBack } from "react-icons/cg";

const Sidebar = () => {
	return (
		<div className="sidebar">
			<div className="sidebar__title">
				<h1 className="sidebar__text">
					CHECK THE LAST NEWS ABOUT ME:
				</h1>
				<h5 className="sidebar__desc">
					ずっと前に進み続けてください
				</h5>
			</div>
			<Rated />
			<Link to="/" className="sidebar__back">
				<CgArrangeBack />
				<p>Go back to the main page</p>
			</Link>
		</div>
	);
};

export default Sidebar;
