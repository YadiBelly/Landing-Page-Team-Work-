//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import { Home } from "./component/home.jsx";

function SimpleCounter(props) {
	return (
		<div className="vw-100 vh-100">
			<div className="w-100 h-25 bg-dark text-white">
				<div className="bg-light">
					<p>"hello world </p>
				</div>
				<div className="text-white"></div>
				<div className="text-white"></div>
				<div className="text-white"></div>
				<div className="text-white"></div>
				<div className="text-white"></div>
				<div className="text-white"></div>
			</div>
		</div>
	);
}

//render your react application
let time = 0;

const displaytime = () => {
	time = time + 1;
	let timestring = "00000" + time;
	console.log(time);
};
ReactDOM.render(
	<Home num1="" num2="" num3="" num4="" num5="" num6="" />,
	document.querySelector("#app")
);
setInterval(displaytimer, 1000);
//1) set interval generate numbers by every sec

//2) reload home component need to rerender every sec

//3) set interval will need to call of a function which takes care of first two steps

//4) pass numbers as parameters to the props of the home component
