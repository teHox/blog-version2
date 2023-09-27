import React from "react";
import Panel from "../tags/panel/Panel";
import { Link } from "react-router-dom";

const Navbar = ({ adminInfo }) => {
	return (
		<div className="navbar">
			<Panel />
			<nav className="navbar__nav">
				{adminInfo.map((res, index) => (
					<Link key={index} to={res.to} className="navbar__item">
						{res.name}
						{res.svg}
					</Link>
				))}
			</nav>
		</div>
	);
};

export default Navbar;
