import React from "react";
import { useColorTheme } from "../../../hooks/useColorTheme";
import { Link } from "react-router-dom";

const Panel = () => {
	const { toggleColorTheme } = useColorTheme();
	const onChangeTheme = () => {
		toggleColorTheme();
	};

	return (
		<div className="panel">
			<div className="switch">
				<div
					className="switch__svg"
					onClick={onChangeTheme}
				>
					<svg
						width="20"
						height="20"
						viewBox="0 0 10 10"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M7.5 3.33334C7.50065 3.88193 7.32064 4.41546 6.98776 4.85151C6.65489 5.28756 6.18769 5.60186 5.65834 5.74584C5.45 5.80418 5.22917 5.83334 5 5.83334C4.77084 5.83334 4.55 5.80418 4.34167 5.74584C3.81232 5.60186 3.34511 5.28756 3.01224 4.85151C2.67937 4.41546 2.49935 3.88193 2.5 3.33334C2.5 1.95418 3.62084 0.833344 5 0.833344C6.37917 0.833344 7.5 1.95418 7.5 3.33334Z"
							stroke="#F16135"
							strokeWidth="0.5"
							strokeLinecap="round"
							strokeLinejoin="round"
							className="switch__path1"
						/>
						<path
							d="M9.16667 6.66668C9.16667 8.04585 8.04583 9.16668 6.66667 9.16668C6.05054 9.16807 5.45612 8.93922 5 8.52501C5.5125 8.07085 5.83333 7.40418 5.83333 6.66668C5.83333 6.34168 5.77083 6.02918 5.65833 5.74585C6.42083 5.53751 7.0375 4.97918 7.325 4.25418C8.38333 4.54168 9.16667 5.51668 9.16667 6.66668Z"
							stroke="#59D7FD"
							strokeWidth="0.5"
							strokeLinecap="round"
							strokeLinejoin="round"
							className="switch__path2"
						/>
					</svg>
				</div>
			</div>
			<Link to="/admin" className="panel__profile">
				<svg
					width="20"
					height="20"
					viewBox="0 0 10 10"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<g clipPath="url(#clip0_84_17)">
						<path
							d="M5.04998 5.32499C5.01678 5.32082 4.98319 5.32082 4.94998 5.32499C4.59663 5.3131 4.26173 5.16432 4.01605 4.91008C3.77036 4.65584 3.63312 4.31605 3.63332 3.96249C3.63332 3.20833 4.24165 2.59583 4.99998 2.59583C5.35808 2.59521 5.70209 2.73533 5.95783 2.98599C6.21357 3.23666 6.36056 3.57778 6.36712 3.93582C6.37368 4.29386 6.23928 4.64014 5.99289 4.9C5.7465 5.15987 5.40787 5.3125 5.04998 5.32499ZM7.80832 8.07499C7.0426 8.77877 6.04 9.16851 4.99998 9.16666C3.91665 9.16666 2.93332 8.75416 2.19165 8.07499C2.23332 7.68333 2.48332 7.29999 2.92915 6.99999C4.07082 6.24166 5.93748 6.24166 7.07082 6.99999C7.51665 7.29999 7.76665 7.68333 7.80832 8.07499Z"
							stroke="white"
							strokeWidth="0.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M4.99992 9.16668C7.30117 9.16668 9.16659 7.30126 9.16659 5.00001C9.16659 2.69876 7.30117 0.833344 4.99992 0.833344C2.69867 0.833344 0.833252 2.69876 0.833252 5.00001C0.833252 7.30126 2.69867 9.16668 4.99992 9.16668Z"
							stroke="white"
							strokeWidth="0.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</g>
					<defs>
						<clipPath id="clip0_84_17">
							<rect width="10" height="10" fill="white" />
						</clipPath>
					</defs>
				</svg>
			</Link>
			<Link to="/" className="panel__line"></Link>
		</div>
	);
};

export default Panel;
