import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App/App";
import reportWebVitals from "./reportWebVitals";

const Posts = [
	{
		id: "000001",
		title: "First post",
		text: "It is first post\nIt simple text.",
	},
	{
		id: "000002",
		title: "Two post",
		text: "It is post\nIt simple text.",
	},
	{
		id: "000003",
		title: "Three post",
		text: "It is post\nIt simple text.",
	},
	{
		id: "000004",
		title: "Four post",
		text: "It is post\nIt simple text.",
	},
];

global.Posts = Posts;

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
