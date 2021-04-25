import "./App.css";
import Post from "../Post/Post";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function PostTitle(props) {
	return (
		<Link to={`/${props.Post.id}`}>
			<h3>{props.Post.title}</h3>
		</Link>
	);
}

function PostsList(props) {
	return (
		<div>
			{props.Posts.map((post) => {
				return <PostTitle Post={post}></PostTitle>;
			})}
		</div>
	);
}

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/:postId">
					<Post />
				</Route>
				<Route path="/">
					<PostsList Posts={global.Posts} />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
